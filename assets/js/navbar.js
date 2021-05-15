// Toggle look of citations

//jQuery(document).ready(function() {
//    var test = jQuery('.ctns-body.ctns-flashcard .ctns-front-image');
//    jQuery('.ctns-body.ctns-flashcard .ctns-front-image').addClass('ctns-selected');
//});

//jQuery('.ctns-body:not(.ctns-dynamic) .ctns-toggle-fontawesome .ctns-re-load').on('click', function() {
//    jQuery('.js-dynamic').click();
//});

jQuery('.js-citation').click(function (e) {
    e.preventDefault();
    jQuery('body').toggleClass('ctns-show-citation');
});

jQuery('.js-print').click(function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('.docs-sidebar').removeClass('ctns-hide');
        jQuery('.docs-toc').removeClass('ctns-hide');
        jQuery('body').removeClass('js-print');
        //jQuery('.ctns-front').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-image').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('.docs-sidebar').addClass('ctns-hide');
        jQuery('.docs-toc').addClass('ctns-hide');
        jQuery('body').addClass('js-print');
        //jQuery('.ctns-question').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-front').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-image').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-re-load.ctns-toggle-fontawesome').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-toggle-fontawesome').click();

    }
});

jQuery('.js-printX').click(function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('.docs-sidebar').removeClass('ctns-hide');
        jQuery('.docs-toc').removeClass('ctns-hide');
        jQuery('body').removeClass('js-print');
        //jQuery('.ctns-front').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-image').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('.docs-sidebar').addClass('ctns-hide');
        jQuery('.docs-toc').addClass('ctns-hide');
        jQuery('body').addClass('js-print');
        //jQuery('.ctns-question').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-front').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-image').addClass('ctns-hide-dynamic');
        //jQuery('.ctns-re-load.ctns-toggle-fontawesome').removeClass('ctns-hide-dynamic');
        //jQuery('.ctns-toggle-fontawesome').click();


        window.print();

    }
});

jQuery('.js-dynamic').click(function (e) {
    e.preventDefault();

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

