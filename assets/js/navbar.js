// Toggle look of citations

//jQuery(document).ready(function() {
//    var test = jQuery('.ctns-body.ctns-flashcard .ctns-front-image');
//    jQuery('.ctns-body.ctns-flashcard .ctns-front-image').addClass('nav-link-selected');
//});

//jQuery('.ctns-body:not(.ctns-dynamic) .ctns-toggle-fontawesome .ctns-re-load').on('click', function() {
//    jQuery('.js-dynamic').click();
//});

jQuery('li.nav-item-selectable .js-slide').click((function() {

    var nav_item_list = jQuery('.navbar-nav li'),
        slide_item    = jQuery('.navbar-nav .js-slide').parent(),
        theme_item    = jQuery('.navbar-nav .theme-dropdown'),
        body          = jQuery('body');
    
    return function (e) {
        e.preventDefault();
        if (jQuery(this).hasClass('nav-link-selected')) {

            jQuery(nav_item_list).addClass('nav-item-selectable');
            jQuery(this).removeClass('nav-link-selected');
            jQuery(body).removeClass('ctns-slide-mode');
            //CTNS.dynamic_mode('off');
            //jQuery(this).removeClass('nav-link-selected');

        } else {

            jQuery(nav_item_list).removeClass('nav-item-selectable');
            jQuery(this).addClass('nav-link-selected');
            jQuery(slide_item).addClass('nav-item-selectable');
            jQuery(theme_item).addClass('nav-item-selectable');
            jQuery(body).addClass('ctns-slide-mode');
            //CTNS.dynamic_mode('on');

        }
    };
    
})());

jQuery('li.nav-item-selectable .js-quiz').click((function (CTNS) {

    var nav_item_list = jQuery('.navbar-nav li'),
        quiz_item     = jQuery('.navbar-nav .js-quiz').parent(),
        theme_item    = jQuery('.navbar-nav .theme-dropdown'),
        body          = jQuery('body');

    return function(e) {

        var echo = 'this';
        e.preventDefault();
        if (jQuery(this).hasClass('nav-link-selected')) {

            jQuery(nav_item_list).addClass('nav-item-selectable');
            jQuery(this).removeClass('nav-link-selected');
            CTNS.dynamic_mode('off');
            jQuery(body).removeClass('ctns-quiz-mode');

        } else {

            jQuery(nav_item_list).removeClass('nav-item-selectable');
            jQuery(this).addClass('nav-link-selected');
            jQuery(quiz_item).addClass('nav-item-selectable');
            jQuery(theme_item).addClass('nav-item-selectable');
            CTNS.dynamic_mode('on');
            jQuery(body).addClass('ctns-quiz-mode');

        }

    };
    
})(CTNS));

jQuery('li.nav-item-selectable .js-citation').click(function (e) {
    e.preventDefault();
    if (jQuery(this).hasClass('nav-link-selected')) {

        jQuery('body').toggleClass('ctns-show-citation');
        jQuery(this).removeClass('nav-link-selected');

    } else {

        jQuery('body').toggleClass('ctns-show-citation');
        jQuery(this).addClass('nav-link-selected');

    }
});

jQuery('li.nav-item-selectable .js-print').click(function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass('nav-link-selected')) {

        jQuery(this).removeClass('nav-link-selected');
        jQuery('.docs-sidebar').removeClass('ctns-hide');
        jQuery('.docs-toc').removeClass('ctns-hide');
        jQuery('body').removeClass('js-print');
        jQuery('.ctns-body.group-qac .ctns-answer-commentary').addClass('ctns-hide');

    } else {

        jQuery(this).addClass('nav-link-selected');
        jQuery('.docs-sidebar').addClass('ctns-hide');
        jQuery('.docs-toc').addClass('ctns-hide');
        jQuery('body').addClass('js-print');
        jQuery('.ctns-body.group-qac .ctns-answer-commentary').removeClass('ctns-hide');

    }
});

jQuery('li.nav-item-selectable .js-scholar').click(function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass('nav-link-selected')) {

        jQuery(this).removeClass('nav-link-selected');
        jQuery('body').removeClass('js-scholar');
        //jQuery('.docs-sidebar').removeClass('ctns-hide');
        //jQuery('.docs-toc').removeClass('ctns-hide');
        //jQuery('body').removeClass('js-print');
        //jQuery('.ctns-body.group-qac .ctns-answer-commentary').addClass('ctns-hide');

    } else {

        jQuery(this).addClass('nav-link-selected');
        jQuery('body').addClass('js-scholar');
        //jQuery('.docs-sidebar').addClass('ctns-hide');
        //jQuery('.docs-toc').addClass('ctns-hide');
        //jQuery('body').addClass('js-print');
        //jQuery('.ctns-body.group-qac .ctns-answer-commentary').removeClass('ctns-hide');

    }
});

jQuery('li.nav-item-selectable .js-tools').click((function(CTNS) {

    return function (e) {
        e.preventDefault();

        if (jQuery(this).hasClass('nav-link-selected')) {

            jQuery(this).removeClass('nav-link-selected');
            jQuery('body').removeClass('nav-tools-mode');

        } else {

            jQuery(this).addClass('nav-link-selected');
            jQuery('body').addClass('nav-tools-mode');

        }
    };
})(CTNS));

