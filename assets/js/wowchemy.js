/*************************************************
 *  Wowchemy
 *  https://github.com/wowchemy/wowchemy-hugo-modules
 *
 *  Core JS functions and initialization.
 **************************************************/

import {
  canChangeTheme,
  changeThemeModeClick,
  getThemeMode,
  initThemeVariation,
  renderThemeVariation
} from './wowchemy-theming';


/* ---------------------------------------------------------------------------
 * Responsive scrolling for URL hashes.
 * --------------------------------------------------------------------------- */

// Dynamically get responsive navigation bar height for offsetting Scrollspy.
function getNavBarHeight() {
  let $navbar = jQuery('#navbar-main');
  let navbar_offset = $navbar.outerHeight();
  console.debug('Navbar height: ' + navbar_offset);
  return navbar_offset;
}

/**
 * Responsive hash scrolling.
 * Check for a URL hash as an anchor.
 * If it exists on current page, scroll to it responsively.
 * If `target` argument omitted (e.g. after event), assume it's the window's hash.
 */
function scrollToAnchor(target, duration=600) {
  // If `target` is undefined or HashChangeEvent object, set it to window's hash.
  // Decode the hash as browsers can encode non-ASCII characters (e.g. Chinese symbols).
  target = (typeof target === 'undefined' || typeof target === 'object') ? decodeURIComponent(window.location.hash) : target;

  // If target element exists, scroll to it taking into account fixed navigation bar offset.
  if (jQuery(target).length) {
    // Escape special chars from IDs, such as colons found in Markdown footnote links.
    target = '#' + $.escapeSelector(target.substring(1));  // Previously, `target = target.replace(/:/g, '\\:');`

    let elementOffset = Math.ceil(jQuery(target).offset().top - getNavBarHeight());  // Round up to highlight right ID!
    jQuery('body').addClass('scrolling');
    jQuery('html, body').animate({
      scrollTop: elementOffset
    }, duration, function () {
      jQuery('body').removeClass('scrolling');
    });
  } else {
    console.debug('Cannot scroll to target `#' + target + '`. ID not found!');
  }
}

// Make Scrollspy responsive.
function fixScrollspy() {
  let $body = jQuery('body');
  let data = $body.data('bs.scrollspy');
  if (data) {
    data._config.offset = getNavBarHeight();
    $body.data('bs.scrollspy', data);
    $body.scrollspy('refresh');
  }
}

function removeQueryParamsFromUrl() {
  if (window.history.replaceState) {
    let urlWithoutSearchParams = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
    window.history.replaceState({path: urlWithoutSearchParams}, '', urlWithoutSearchParams);
  }
}

// Check for hash change event and fix responsive offset for hash links (e.g. Markdown footnotes).
window.addEventListener("hashchange", scrollToAnchor);

/* ---------------------------------------------------------------------------
 * Add smooth scrolling to all links inside the main navbar.
 * --------------------------------------------------------------------------- */

jQuery('#navbar-main li.nav-item a.nav-link, .js-scroll').on('click', function (event) {
  // Store requested URL hash.
  let hash = this.hash;

  // If we are on a widget page and the navbar link is to a section on the same page.
  if (this.pathname === window.location.pathname && hash && jQuery(hash).length && (jQuery(".js-widget-page").length > 0)) {
    // Prevent default click behavior.
    event.preventDefault();

    // Use jQuery's animate() method for smooth page scrolling.
    // The numerical parameter specifies the time (ms) taken to scroll to the specified hash.
    let elementOffset = Math.ceil(jQuery(hash).offset().top - getNavBarHeight());  // Round up to highlight right ID!

    // Uncomment to debug.
    // let scrollTop = jQuery(window).scrollTop();
    // let scrollDelta = (elementOffset - scrollTop);
    // console.debug('Scroll Delta: ' + scrollDelta);

    jQuery('html, body').animate({
      scrollTop: elementOffset
    }, 800);
  }
});

/* ---------------------------------------------------------------------------
 * Hide mobile collapsable menu on clicking a link.
 * --------------------------------------------------------------------------- */

jQuery(document).on('click', '.navbar-collapse.show', function (e) {
  //get the <a> element that was clicked, even if the <span> element that is inside the <a> element is e.target
  let targetElement = jQuery(e.target).is('a') ? jQuery(e.target) : jQuery(e.target).parent();

  if (targetElement.is('a') && targetElement.attr('class') != 'dropdown-toggle') {
    jQuery(this).collapse('hide');
  }
});

/* ---------------------------------------------------------------------------
 * Filter publications.
 * --------------------------------------------------------------------------- */

// Active publication filters.
let pubFilters = {};

// Search term.
let searchRegex;

// Filter values (concatenated).
let filterValues;

// Publication container.
let $grid_pubs = jQuery('#container-publications');

// Initialise Isotope publication layout if required.
if ($grid_pubs.length) {
  $grid_pubs.isotope({
    itemSelector: '.isotope-item',
    percentPosition: true,
    masonry: {
      // Use Bootstrap compatible grid layout.
      columnWidth: '.grid-sizer'
    },
    filter: function () {
      let $this = jQuery(this);
      let searchResults = searchRegex ? $this.text().match(searchRegex) : true;
      let filterResults = filterValues ? $this.is(filterValues) : true;
      return searchResults && filterResults;
    }
  });

  // Filter by search term.
  let $quickSearch = jQuery('.filter-search').keyup(debounce(function () {
    searchRegex = new RegExp($quickSearch.val(), 'gi');
    $grid_pubs.isotope();
  }));

  jQuery('.pub-filters').on('change', function () {
    let $this = jQuery(this);

    // Get group key.
    let filterGroup = $this[0].getAttribute('data-filter-group');

    // Set filter for group.
    pubFilters[filterGroup] = this.value;

    // Combine filters.
    filterValues = concatValues(pubFilters);

    // Activate filters.
    $grid_pubs.isotope();

    // If filtering by publication type, update the URL hash to enable direct linking to results.
    if (filterGroup === "pubtype") {
      // Set hash URL to current filter.
      let url = jQuery(this).val();
      if (url.substr(0, 9) === '.pubtype-') {
        window.location.hash = url.substr(9);
      } else {
        window.location.hash = '';
      }
    }
  });
}

// Debounce input to prevent spamming filter requests.
function debounce(fn, threshold) {
  let timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout(timeout);
    let args = arguments;
    let _this = this;

    function delayed() {
      fn.apply(_this, args);
    }

    timeout = setTimeout(delayed, threshold);
  };
}

// Flatten object by concatenating values.
function concatValues(obj) {
  let value = '';
  for (let prop in obj) {
    value += obj[prop];
  }
  return value;
}

// Filter publications according to hash in URL.
function filter_publications() {
  // Check for Isotope publication layout.
  if (!$grid_pubs.length)
    return

  let urlHash = window.location.hash.replace('#', '');
  let filterValue = '*';

  // Check if hash is numeric.
  if (urlHash != '' && !isNaN(urlHash)) {
    filterValue = '.pubtype-' + urlHash;
  }

  // Set filter.
  let filterGroup = 'pubtype';
  pubFilters[filterGroup] = filterValue;
  filterValues = concatValues(pubFilters);

  // Activate filters.
  $grid_pubs.isotope();

  // Set selected option.
  jQuery('.pubtype-select').val(filterValue);
}

/* ---------------------------------------------------------------------------
* Google Maps or OpenStreetMap via Leaflet.
* --------------------------------------------------------------------------- */

function initMap() {
  if (jQuery('#map').length) {
    let map_provider = jQuery('#map-provider').val();
    let lat = jQuery('#map-lat').val();
    let lng = jQuery('#map-lng').val();
    let zoom = parseInt(jQuery('#map-zoom').val());
    let address = jQuery('#map-dir').val();
    let api_key = jQuery('#map-api-key').val();

    if (map_provider == 1) {
      let map = new GMaps({
        div: '#map',
        lat: lat,
        lng: lng,
        zoom: zoom,
        zoomControl: true,
        zoomControlOpt: {
          style: 'SMALL',
          position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        scrollwheel: true,
        draggable: true
      });

      map.addMarker({
        lat: lat,
        lng: lng,
        click: function (e) {
          let url = 'https://www.google.com/maps/place/' + encodeURIComponent(address) + '/@' + lat + ',' + lng + '/';
          window.open(url, '_blank')
        },
        title: address
      })
    } else {
      let map = new L.map('map').setView([lat, lng], zoom);
      if (map_provider == 3 && api_key.length) {
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          tileSize: 512,
          maxZoom: 18,
          zoomOffset: -1,
          id: 'mapbox/streets-v11',
          accessToken: api_key
        }).addTo(map);
      } else {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
      }
      let marker = L.marker([lat, lng]).addTo(map);
      let url = lat + ',' + lng + '#map=' + zoom + '/' + lat + '/' + lng + '&layers=N';
      marker.bindPopup(address + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' + url + '">Routing via OpenStreetMap</a></p>');
    }
  }
}

/* ---------------------------------------------------------------------------
 * GitHub API.
 * --------------------------------------------------------------------------- */

function printLatestRelease(selector, repo) {
  $.getJSON('https://api.github.com/repos/' + repo + '/tags').done(function (json) {
    let release = json[0];
    jQuery(selector).append(' ' + release.name);
  }).fail(function (jqxhr, textStatus, error) {
    let err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
  });
}

/* ---------------------------------------------------------------------------
* Toggle search dialog.
* --------------------------------------------------------------------------- */

function toggleSearchDialog() {
  if (jQuery('body').hasClass('searching')) {
    // Clear search query and hide search modal.
    jQuery('[id=search-query]').blur();
    jQuery('body').removeClass('searching compensate-for-scrollbar');

    // Remove search query params from URL as user has finished searching.
    removeQueryParamsFromUrl();

    // Prevent fixed positioned elements (e.g. navbar) moving due to scrollbars.
    jQuery('#fancybox-style-noscroll').remove();
  } else {
    // Prevent fixed positioned elements (e.g. navbar) moving due to scrollbars.
    if (!jQuery('#fancybox-style-noscroll').length && document.body.scrollHeight > window.innerHeight) {
      jQuery('head').append(
        '<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:' +
        (window.innerWidth - document.documentElement.clientWidth) +
        'px;}</style>'
      );
      jQuery('body').addClass('compensate-for-scrollbar');
    }

    // Show search modal.
    jQuery('body').addClass('searching');
    jQuery('.search-results').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 200);
    jQuery('#search-query').focus();
  }
}

/* ---------------------------------------------------------------------------
* Normalize Bootstrap Carousel Slide Heights.
* --------------------------------------------------------------------------- */

function normalizeCarouselSlideHeights() {
  jQuery('.carousel').each(function () {
    // Get carousel slides.
    let items = jQuery('.carousel-item', this);
    // Reset all slide heights.
    items.css('min-height', 0);
    // Normalize all slide heights.
    let maxHeight = Math.max.apply(null, items.map(function () {
      return jQuery(this).outerHeight()
    }).get());
    items.css('min-height', maxHeight + 'px');
  })
}

/* ---------------------------------------------------------------------------
* Fix Hugo's Goldmark output and Mermaid code blocks.
* --------------------------------------------------------------------------- */

/**
 * Fix Hugo's Goldmark output.
 */
function fixHugoOutput() {
  // Fix Goldmark table of contents.
  // - Must be performed prior to initializing ScrollSpy.
  jQuery('#TableOfContents').addClass('nav flex-column');
  jQuery('#TableOfContents li').addClass('nav-item');
  jQuery('#TableOfContents li a').addClass('nav-link');

  // Fix Goldmark task lists (remove bullet points).
  jQuery("input[type='checkbox'][disabled]").parents('ul').addClass('task-list');
}

/**
 * Fix Mermaid.js clash with Highlight.js.
 * Refactor Mermaid code blocks as divs to prevent Highlight parsing them and enable Mermaid to parse them.
 */
function fixMermaid() {
  let mermaids = [];
  [].push.apply(mermaids, document.getElementsByClassName('language-mermaid'));
  for (let i = 0; i < mermaids.length; i++) {
    jQuery(mermaids[i]).unwrap('pre');  // Remove <pre> wrapper.
    jQuery(mermaids[i]).replaceWith(function () {
      // Convert <code> block to <div> and add `mermaid` class so that Mermaid will parse it.
      return jQuery("<div />").append(jQuery(this).contents()).addClass('mermaid');
    });
  }
}

// Get an element's siblings.
function getSiblings (elem) {
  // Filter out itself.
  return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
    return sibling !== elem;
  });
}

/* ---------------------------------------------------------------------------
 * On document ready.
 * --------------------------------------------------------------------------- */

jQuery(document).ready(function () {

  fixHugoOutput();
  fixMermaid();

  // Initialise code highlighting if enabled for this page.
  // Note: this block should be processed after the Mermaid code-->div conversion.
  if (code_highlighting) {
    hljs.initHighlighting();
  }

  // Initialize theme variation.
  initThemeVariation();

  // Change theme mode.
  jQuery('.js-set-theme-light').click(function (e) {
    e.preventDefault();
    changeThemeModeClick(2);
  });
  jQuery('.js-set-theme-dark').click(function (e) {
    e.preventDefault();
    changeThemeModeClick(0);
  });
  jQuery('.js-set-theme-auto').click(function (e) {
    e.preventDefault();
    changeThemeModeClick(1);
  });

  // Live update of day/night mode on system preferences update (no refresh required).
  // Note: since we listen only for *dark* events, we won't detect other scheme changes such as light to no-preference.
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener("change", (e) => {
    if (!canChangeTheme()) {
      // Changing theme variation is not allowed by admin.
      return;
    }
    const darkModeOn = e.matches;
    console.log(`OS dark mode preference changed to ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
    let currentThemeVariation = getThemeMode();
    let isDarkTheme;
    if (currentThemeVariation === 2) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // The visitor prefers dark themes.
        isDarkTheme = true;
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        // The visitor prefers light themes.
        isDarkTheme = false;
      } else {
        // The visitor does not have a day or night preference, so use the theme's default setting.
        isDarkTheme = window.wc.isSiteThemeDark;
      }
      renderThemeVariation(isDarkTheme);
    }
  });

});

/* ---------------------------------------------------------------------------
 * On window loaded.
 * --------------------------------------------------------------------------- */

jQuery(window).on('load', function () {
  // Init Isotope Layout Engine for instances of the Portfolio widget.
  let isotopeInstances = document.querySelectorAll('.projects-container');
  let isotopeInstancesCount = isotopeInstances.length;
  let isotopeCounter = 0;
  isotopeInstances.forEach(function (isotopeInstance, index) {
    console.debug(`Loading Isotope instance ${index}`);

    // Isotope instance
    let iso;

    // Get the layout for this Isotope instance
    let isoSection = isotopeInstance.closest('section');
    let layout = '';
    if (isoSection.querySelector('.isotope').classList.contains('js-layout-row')) {
      layout = 'fitRows';
    } else {
      layout = 'masonry';
    }

    // Get default filter (if any) for this instance
    let defaultFilter = isoSection.querySelector('.default-project-filter');
    let filterText = '*';
    if (defaultFilter !== null) {
      filterText = defaultFilter.textContent;
    }
    console.debug(`Default Isotope filter: ${filterText}`);

    // Init Isotope instance once its images have loaded.
    imagesLoaded(isotopeInstance, function () {
      iso = new Isotope(isotopeInstance, {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        masonry: {
          gutter: 20
        },
        filter: filterText
      });

      // Filter Isotope items when a toolbar filter button is clicked.
      let isoFilterButtons = isoSection.querySelectorAll('.project-filters a');
      isoFilterButtons.forEach(button => button.addEventListener('click', (e) => {
        e.preventDefault();
        let selector = button.getAttribute('data-filter');

        // Apply filter
        console.debug(`Updating Isotope filter to ${selector}`);
        iso.arrange({filter: selector});

        // Update active toolbar filter button
        button.classList.remove('active');
        button.classList.add('active');
        let buttonSiblings = getSiblings(button);
        buttonSiblings.forEach(buttonSibling => {
          buttonSibling.classList.remove('active');
          buttonSibling.classList.remove('all');
        });
      }));

      // Check if all Isotope instances have loaded.
      incrementIsotopeCounter();
    });
  });

  // Hook to perform actions once all Isotope instances have loaded.
  function incrementIsotopeCounter() {
    isotopeCounter++;
    if ( isotopeCounter === isotopeInstancesCount ) {
      console.debug(`All Portfolio Isotope instances loaded.`);
      // Once all Isotope instances and their images have loaded, scroll to hash (if set).
      // Prevents scrolling to the wrong location due to the dynamic height of Isotope instances.
      // Each Isotope instance height is affected by applying filters and loading images.
      // Without this logic, the scroll location can appear correct, but actually a few pixels out and hence Scrollspy
      // can highlight the wrong nav link.
      if (window.location.hash) {
        scrollToAnchor(decodeURIComponent(window.location.hash), 0);
      }
    }
  }

  // Enable publication filter for publication index page.
  if (jQuery('.pub-filters-select')) {
    filter_publications();
    // Useful for changing hash manually (e.g. in development):
    // window.addEventListener('hashchange', filter_publications, false);
  }

  // Load citation modal on 'Cite' click.
  jQuery('.js-cite-modal').click(function (e) {
    e.preventDefault();
    let filename = jQuery(this).attr('data-filename');
    let modal = jQuery('#modal');
    modal.find('.modal-body code').load(filename, function (response, status, xhr) {
      if (status == 'error') {
        let msg = "Error: ";
        jQuery('#modal-error').html(msg + xhr.status + " " + xhr.statusText);
      } else {
        jQuery('.js-download-cite').attr('href', filename);
      }
    });
    modal.modal('show');
  });

  // Copy citation text on 'Copy' click.
  jQuery('.js-copy-cite').click(function (e) {
    e.preventDefault();
    // Get selection.
    let range = document.createRange();
    let code_node = document.querySelector('#modal .modal-body');
    range.selectNode(code_node);
    window.getSelection().addRange(range);
    try {
      // Execute the copy command.
      document.execCommand('copy');
    } catch (e) {
      console.log('Error: citation copy failed.');
    }
    // Remove selection.
    window.getSelection().removeRange(range);
  });

  // Initialise Google Maps if necessary.
  initMap();

  // Print latest version of GitHub projects.
  let githubReleaseSelector = '.js-github-release';
  if (jQuery(githubReleaseSelector).length > 0)
    printLatestRelease(githubReleaseSelector, jQuery(githubReleaseSelector).data('repo'));

  // On search icon click toggle search dialog.
  jQuery('.js-search').click(function (e) {
    e.preventDefault();
    toggleSearchDialog();
  });
  jQuery(document).on('keydown', function (e) {
    if (e.which == 27) {
      // `Esc` key pressed.
      if (jQuery('body').hasClass('searching')) {
        toggleSearchDialog();
      }
    } else if (e.which == 191 && e.shiftKey == false && !jQuery('input,textarea').is(':focus')) {
      // `/` key pressed outside of text input.
      e.preventDefault();
      toggleSearchDialog();
    }
  });

  // Init. author notes (tooltips).
  jQuery('[data-toggle="tooltip"]').tooltip();

  // Re-initialize Scrollspy with dynamic navbar height offset.
  fixScrollspy();
});

// Normalize Bootstrap carousel slide heights.
jQuery(window).on('load resize orientationchange', normalizeCarouselSlideHeights);

// Automatic main menu dropdowns on mouse over.
jQuery('body').on('mouseenter mouseleave', '.dropdown', function (e) {
  var dropdown = jQuery(e.target).closest('.dropdown');
  var menu = jQuery('.dropdown-menu', dropdown);
  dropdown.addClass('show');
  menu.addClass('show');
  setTimeout(function () {
    dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
    menu[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
  }, 300);
});

// Call `fixScrollspy` when window is resized.
let resizeTimer;
jQuery(window).resize(function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(fixScrollspy, 200);
});
