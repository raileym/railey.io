
/*
var ctns_trophy = jQuery('<div class="ctns-trophy"></div>').insertAfter('nav.navbar');

[
    '<i class="fas fa-medal"></i>'
    '<i class="fas fa-trophy"></i>'
    '<i class="fas fa-award"></i>'
    '<i class="fas fa-fish"></i>'
    '<i class="fas fa-water"></i>'
    '<i class="fas fa-paw"></i>'
    '<i class="fas fa-hippo"></i>'
    '<i class="fas fa-dragon"></i>'
    '<i class="fas fa-cat"></i>'
    '<i class="fas fa-dog"></i>'
    '<i class="fas fa-crow"></i>'
    '<i class="fas fa-star"></i>'
    '<i class="far fa-star"></i>'
    '<i class="fas fa-cog"></i>'
    '<i class="fas fa-dove"></i>'

].forEach(function(ele,idx) { jQuery(ctns_trophy).append(ele); });
*/

jQuery('.ctns-toggle-container .color-group-d').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-d');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-d');

    }
});

jQuery('.ctns-toggle-container .color-group-c').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-c');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-c');

    }
});

jQuery('.ctns-toggle-container .color-group-b').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-b');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-b');

    }
});

jQuery('.ctns-toggle-container .color-group-a').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-a');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-a');

    }
});

jQuery('.XXXctns-body:not(.ctns-dynamic-mode) .ctns-re-load').click(function (e) {
    e.preventDefault();

    var js_dynamic = jQuery('a.js-dynamic');

    if ( !jQuery(js_dynamic).hasClass('ctns-selected') ) {
        jQuery('a.js-dynamic').click();
    }

    return;

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('.ctns-body').removeClass('ctns-dynamic-mode');
        jQuery('.ctns-question').addClass('ctns-hide-dynamic');
        jQuery('.ctns-front').addClass('ctns-hide-dynamic');
        jQuery('.ctns-image').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-sponsor').addClass('ctns-hide-dynamic');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('.ctns-body').addClass('ctns-dynamic-mode');
        jQuery('.ctns-question').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-front').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-image').addClass('ctns-hide-dynamic');
        jQuery('.ctns-re-load.ctns-toggle-fontawesome').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-toggle-fontawesome').click();
        //jQuery('.ctns-sponsor').removeClass('ctns-hide-dynamic');

    }
});

