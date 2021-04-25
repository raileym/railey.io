// Toggle look of citations

jQuery('.js-citation').click(function (e) {
    e.preventDefault();
    jQuery('body').toggleClass('ctns-show-citation');
});

jQuery(document).ready(function() {

    var h2 = jQuery('article h2');
    //var level1 = jQuery('article div.level1');

    jQuery('#TableOfContents').remove();

    //var toc = jQuery('<nav id="TableOfContents" class="nav flex-column"></nav>').wrap('<ul></ul>').appendTo('.docs-toc');
    //var toc = jQuery('<ul class="malcolm"></ul>').wrap('<nav id="TableOfContents" class="nav flex-column"></nav>').appendTo('.docs-toc');
    // I could not get this to work to save my life. I KNOW I should be
    // able to combine these two lines into ONE LINE.
    var doc = jQuery('.docs-toc').append('<nav id="TableOfContents" class="nav flex-column"><ul></ul></nav>');
    var toc = jQuery(doc).find('nav ul');
    
    jQuery(h2).each(function(idx,ele) {
        var id = jQuery(ele).attr('id');
        var text = jQuery(ele).text();

        jQuery('<li class="nav-item"><a href="#'+id+'">'+text+'</a></li>').appendTo(toc);	
    });

});

jQuery('.js-dynamic').click(function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('.ctns-question').addClass('ctns-hide-dynamic');
        jQuery('.ctns-image').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-sponsor').addClass('ctns-hide-dynamic');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('.ctns-question').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-image').addClass('ctns-hide-dynamic');
        jQuery('.ctns-re-load.ctns-toggle-fontawesome').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-toggle-fontawesome').click();
        //jQuery('.ctns-sponsor').removeClass('ctns-hide-dynamic');

    }
});

