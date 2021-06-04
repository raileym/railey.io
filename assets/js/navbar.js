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

CTNS.dynamic_mode = (function(INIT) {

//     var body     = jQuery('.ctns-body'),
//         question = jQuery('.ctns-question'),
//         front    = jQuery('.ctns-front'),
//         image    = jQuery('.ctns-image'),
//         re_load  = jQuery('.ctns-re-load');/*.ctns-toggle-fontawesome'),*/
//         /*toggle   = jQuery('.ctns-body');*/
    
    return function(direction='on') {

    var body,
        question,
        front,
        image,
        re_load;
        
        //if (INIT == null) {
        //    body     = jQuery('.ctns-body');
        //    question = jQuery('.ctns-question');
        //    front    = jQuery('.ctns-front');
        //    image    = jQuery('.ctns-image');
        //    re_load  = jQuery('.ctns-re-load');/*.ctns-toggle-fontawesome'),*/
        //    INIT = 1;
        //}
    
        if (direction == 'on') {

            body     = jQuery('.ctns-body');
            question = jQuery('.ctns-question');
            front    = jQuery('.ctns-front');
            image    = jQuery('.ctns-image');
            re_load  = jQuery('.ctns-re-load');/*.ctns-toggle-fontawesome'),*/

            // ON
            jQuery(body).addClass('ctns-dynamic-mode');
            jQuery(question).removeClass('ctns-hide-dynamic');
            jQuery(front).removeClass('ctns-hide-dynamic');
            jQuery(image).addClass('ctns-hide-dynamic');
            jQuery(re_load).addClass('ctns-hide-dynamic');
            jQuery(re_load).click();
//             jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');
//             jQuery('.ctns-toggle-fontawesome').click();

        } else {

            // OFF
            body     = jQuery('.ctns-body');
            question = jQuery('.ctns-question');
            front    = jQuery('.ctns-front');
            image    = jQuery('.ctns-image');
            re_load  = jQuery('.ctns-re-load');/*.ctns-toggle-fontawesome'),*/

            jQuery(body).removeClass('ctns-dynamic-mode');
            jQuery(question).addClass('ctns-hide-dynamic');
            jQuery(front).addClass('ctns-hide-dynamic');
            jQuery(image).removeClass('ctns-hide-dynamic');
            jQuery(re_load).removeClass('ctns-hide-dynamic');

        }
    };
})(INIT=null);

jQuery('li.nav-item-selectable .js-dynamic').click((function(CTNS) {

    return function (e) {
        e.preventDefault();

        if (jQuery(this).hasClass('nav-link-selected')) {

            jQuery(this).removeClass('nav-link-selected');
            CTNS.dynamic_mode('off');
            //jQuery('.ctns-body').toggleClass('ctns-dynamic-mode');
            //jQuery('.ctns-question').addClass('ctns-hide-dynamic');
            //jQuery('.ctns-front').addClass('ctns-hide-dynamic');
            //jQuery('.ctns-image').removeClass('ctns-hide-dynamic');
            //jQuery('.ctns-re-load.ctns-toggle-fontawesome').addClass('ctns-hide-dynamic');

        } else {

            jQuery(this).addClass('nav-link-selected');
            CTNS.dynamic_mode('on');
            //jQuery('.ctns-body').toggleClass('ctns-dynamic-mode');
            //jQuery('.ctns-question').removeClass('ctns-hide-dynamic');
            //jQuery('.ctns-front').removeClass('ctns-hide-dynamic');
            //jQuery('.ctns-image').addClass('ctns-hide-dynamic');
            //jQuery('.ctns-re-load.ctns-toggle-fontawesome').removeClass('ctns-hide-dynamic');
            //jQuery('.ctns-toggle-fontawesome').click();

        }
    };
})(CTNS));

