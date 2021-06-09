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

