
jQuery('.ctns-body:not(.ctns-dynamic-mode) .ctns-re-load').click(function (e) {
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

