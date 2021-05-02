// Toggle look of citations

jQuery('.js-citation').click(function (e) {
    e.preventDefault();
    jQuery('body').toggleClass('ctns-show-citation');
});

jQuery('.js-dynamic').click(function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('.ctns-question').addClass('ctns-hide-dynamic');
        jQuery('.ctns-front').addClass('ctns-hide-dynamic');
        jQuery('.ctns-image').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-sponsor').addClass('ctns-hide-dynamic');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('.ctns-question').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-front').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-image').addClass('ctns-hide-dynamic');
        jQuery('.ctns-re-load.ctns-toggle-fontawesome').removeClass('ctns-hide-dynamic');
        jQuery('.ctns-toggle-fontawesome').click();
        //jQuery('.ctns-sponsor').removeClass('ctns-hide-dynamic');

    }
});

