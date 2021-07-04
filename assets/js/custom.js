
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

TMSG = window.TMSG || {};

TMSG.update_slides = function() {

    jQuery('.slide').each(function(idx, ele) {

        var front_p = jQuery(ele).find('.front p'),
            back_p  = jQuery(ele).find('.back p'),

            front   = jQuery(ele).find('.front'),
            back    = jQuery(ele).find('.back');

        height = 320/2 - jQuery(back_p).innerHeight()/2;
        jQuery(back_p).css('padding-top', height.toString() + 'px');
        //alert(height);

        height = 320/2 - jQuery(front_p).innerHeight()/2;
        jQuery(front_p).css('padding-top', height.toString() + 'px');
        //alert(height);
    
        height = 320-4;
        jQuery(back).css('height', height.toString() + 'px');

        height = 320-4;
        jQuery(front_p).css('height', height.toString() + 'px');
    
        jQuery(front).click((function(front, back) {

            return function(e) {

                var back_p  = jQuery(back).find('p'),
                    front_p = jQuery(front).find('p'),
                    height;

                if ( jQuery(this).hasClass('front') ) {

                    jQuery(front).addClass('hide');
                    jQuery(back).removeClass('hide');
                    
                    if ( !jQuery(back).hasClass('set') ) {

                        jQuery(back).addClass('set');
                        height = 320/2 - jQuery(back_p).innerHeight()/2;
                        jQuery(back_p).css('padding-top', height.toString() + 'px');
                        alert(height);

                    }
                    
                } else {

                    jQuery(front).removeClass('hide');
                    jQuery(back).addClass('hide');

                    if ( !jQuery(back).hasClass('set') ) {

                        jQuery(front).addClass('set');
                        height = 320/2 - jQuery(front_p).innerHeight()/2;
                        jQuery(front_p).css('padding-top', height.toString() + 'px');
                        alert(height);

                    }

                }

            }

        })(front, back));
    
        jQuery(back).click((function(front, back) {

            return function(e) {

                if ( jQuery(this).hasClass('front') ) {

                    jQuery(front).addClass('hide');
                    jQuery(back).removeClass('hide');

                } else {

                    jQuery(front).removeClass('hide');
                    jQuery(back).addClass('hide');

                }

            }

        })(front, back));
    
    });
    
};

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

