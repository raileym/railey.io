
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

//MathJax.Hub.Queue(function () {

TMSG = window.TMSG || {};

TMSG.update_slides = function() {

    var hide_slide = function(slide) {
        jQuery(slide).addClass('hide');
    };
    
    var show_slide = function(slide) {
        jQuery(slide).removeClass('hide');
    };
    
    var update = function(old_slide, new_slide, new_slide_p) {

        return function() {

            var innerHeight,
                height,
                paddingTop;

            hide_slide(old_slide);
            show_slide(new_slide);
            
            if ( !jQuery(new_slide).hasClass('set') ) {

                jQuery(new_slide).addClass('set');
                //jQuery(new_slide_p)
                //    .css('margin-top', '0px')
                //    .css('margin-bottom', '0px')
                //    .css('padding-top', '0px')
                //    .css('padding-bottom', '0px');
                innerHeight = jQuery(new_slide_p).innerHeight();
                paddingTop = parseFloat( jQuery(new_slide_p).css('padding-top') );
                height = 320/2 - innerHeight/2 + paddingTop;
                jQuery(new_slide_p).css('padding-top', height.toString() + 'px');
                height = 320;
                jQuery(new_slide).css('height', height.toString() + 'px');

            }
                
        }

    };
    
    jQuery('.slide-front').each(function(idx, ele) {

        var id      = jQuery(ele).attr('id'),
        
            front   = jQuery(ele),
            back    = jQuery('#'+id+'.slide-back'),
            
            front_p = jQuery(front).find('p'),
            back_p  = jQuery(back).find('p');

        updateFront = update(front, back, back_p);
        updateBack  = update(back, front, front_p);
        
        jQuery(front).click(updateFront);
        jQuery(back).click(updateBack);
        
        updateFront();
        updateBack();

    });
    
//     jQuery('.slide').each(function(idx, ele) {
// 
//         var front_p = jQuery(ele).find('.front p'),
//             back_p  = jQuery(ele).find('.back p'),
// 
//             front   = jQuery(ele).find('.front'),
//             back    = jQuery(ele).find('.back');
// 
//         updateFront = update(front, back, back_p);
//         updateBack  = update(back, front, front_p);
//         
//         jQuery(front).click(updateFront);
//         jQuery(back).click(updateBack);
//         
//         updateBack();
// 
//     });
    
};

jQuery(document).ready((function(TMSG) {

    return function() {
        TMSG.update_slides();
    };

})(TMSG));


jQuery('.navbar .js-study').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('nav-link-selected')) {

        jQuery(this).removeClass('nav-link-selected');
        jQuery('body').removeClass('nav-study-mode');

    } else {

        jQuery(this).addClass('nav-link-selected');
        jQuery('body').addClass('nav-study-mode');

    }
});

jQuery('.ctns-toggle-container .color-groupXXX-d').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-d');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-d');

    }
});

jQuery('.ctns-toggle-container .color-groupXXX-c').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-c');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-c');

    }
});

jQuery('.ctns-toggle-container .color-groupXXX-b').click(function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass('ctns-selected')) {

        jQuery(this).removeClass('ctns-selected');
        jQuery('body').removeClass('color-mode-b');

    } else {

        jQuery(this).addClass('ctns-selected');
        jQuery('body').addClass('color-mode-b');

    }
});

jQuery('.ctns-toggle-container .color-groupXXX-aXXX').click(function(e) {
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

