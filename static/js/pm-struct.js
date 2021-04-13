/* pm-struct.js version 1.0.1 */

/* pm-struct.js version 1.0.8 */

/*
 * (c) 2012 Professor Malcolm's LLC. All rights reserved.
 */
/*jslint browser: true*/
/*global $, jQuery*/

jQuery.noConflict();

var gTitleFontSize;
var gContentFontSize;
var gScope = {};
var gAutoNum = {};
gAutoNum.tab = 1;

function pm_struct_onHighlightClose() {
	jQuery(this).parent().removeClass("pm-struct-highlight-open").find("div.pm-struct-highlight-content").addClass("pm-struct-highlight-hide");
	jQuery(this).unbind("click").bind("click", pm_struct_onHighlightOpen);
	jQuery(this).html("&#9660;");
}

function pm_struct_onHighlightOpen() {
	jQuery(this).parent().addClass("pm-struct-highlight-open").find("div.pm-struct-highlight-content").removeClass("pm-struct-highlight-hide");
	jQuery(this).unbind("click").bind("click", pm_struct_onHighlightClose);
	jQuery(this).html("&#9650;");
}

jQuery(document).ready(function (){

	//jQuery("<img class='mathstudygroup' src='http://images.mathstudygroup.com/MATHSTUDYGROUP_TOOLBAR_BLACK.png' />").prependTo("div.head-left");
	
	jQuery("div.pm-struct-highlight.pm-struct-highlight-active .pm-struct-highlight-exit").bind("click",pm_struct_onHighlightOpen);
	
	// Playing a reverse game here.  To start all elements have default elementset 
	// set. If they have an elementset (aside from 'pm-struct-default-element-set', then they
	// will have the default value removed.  Later, I will group those elements
	// that retain the pm-struct-default-element-set value.
	//
	jQuery("div.pm-struct-element-set div.pm-struct-element").removeClass("pm-struct-default-element-set");

	// On a per-post basis, grab everyone has still retained the pm-struct-default-element-set
	// marker.  
	//
	jQuery(".post_box").each(function (index, ele) {
		
		var errorSet = jQuery(ele).find(".pm-error");
		if (errorSet.length != 0) {
			//errorSet.clone().prependTo(childElement);
			var headline_area = jQuery(ele).find(".headline_area");
			jQuery("<div class='pm-error-title'>ERRORS FOUND ...</div>").insertAfter(headline_area);
		}

		// Grab each marked pm-struct-default-element-set
		//
		var pmDefaultElementSet = jQuery(ele).find("div.pm-struct-element.pm-struct-default-element-set");
		if (pmDefaultElementSet.length != 0) {
			
			// Here, I am grouping the default ElementSet elements at the top of 
			// the post.
			var myLocalKey=Math.floor(Math.random()*1000000);
			var pmElementSet = jQuery("<div class='pm-struct-element-set pm-struct-default-element-set'></div>").insertBefore(pmDefaultElementSet[0]);

			var pmScriptSet = jQuery(pmDefaultElementSet).find("div.activescript script");
			pmScriptSet.remove();
			//mr wait var desClone = pmDefaultElementSet.clone();
			//mr wait desClone.appendTo(pmElementSet);
			//mr wait pmDefaultElementSet.appendTo(pmElementSet);
			pmDefaultElementSet.detach();
			pmDefaultElementSet.appendTo(pmElementSet);
		}

	});
	
	// On a per post-basis, I am applying an additional mark in the form of a title
	//
	jQuery(".post_box .pm-struct-element-set").each(function (index, ele) {
		jQuery(ele).find(".pm-struct-element-content[title='Tab']").each(function (index2,ele2) {
			jQuery(ele2).attr("title", "Tab "+(index2+1));
		});

		jQuery("<hr class='pm-struct-tabset'/>").insertAfter(ele);
	});
	
	
	
	
	jQuery("div.pm-struct-element-set").each(function (index){
		var myLocalKey=Math.floor(Math.random()*1000000);
		var myButtonList = "ul"+myLocalKey;
		if (jQuery(this).hasClass("pm-struct-default-element-set")) {
			jQuery("<ul id=\""+myButtonList+"\" class=\"buttonlist pm-struct-default-element-set\"></ul>").insertBefore(this);
		} else {
			jQuery("<ul id=\""+myButtonList+"\" class=\"buttonlist\"></ul>").insertBefore(this);
		}
		var mycatch = jQuery(this).find("div.pm-struct-element");
		jQuery(this).find("div.pm-struct-element").each(function (childIndex, childElement){
			
			var myTitle = jQuery(childElement).find("div.pm-struct-element-content").attr("title");
			var myButtonId = "button"+childIndex+myLocalKey;
			
			jQuery("<h2>"+myTitle+"</h2>").prependTo(childElement);
			jQuery("<hr class='pm-struct-element-hr' />").prependTo(childElement);
			
			// Here, qualify the type of error.  Limit to Tab errors.
			//
			var errorSet = jQuery(this).find(".pm-error[error='tab']");
			if (errorSet.length != 0) {
				errorSet.clone().prependTo(childElement);
				errorSet.remove();
			}

			jQuery(childElement).removeClass("pm-struct-default-element-set");
			if (jQuery(childElement).hasClass("pm-struct-open")) {
				jQuery(childElement).find("div.pm-struct-element-content").parent().addClass("div"+myLocalKey).attr('button',myButtonId).addClass("show");
			} else {
				jQuery(childElement).find("div.pm-struct-element-content").parent().addClass("div"+myLocalKey).attr('button',myButtonId).addClass("pm-struct-element-hide");
			}
			jQuery(childElement).find("div.pm-struct-element-content").parent().attr('id', "div"+childIndex+myLocalKey);

			// Now, do not qualify the types of errors
			//
			errorSet = jQuery(this).find(".pm-error");
			var myButton = jQuery("<li><button buttonlist="+myButtonList+" class='pm-struct-button' id=\""+myButtonId+"\">"+myTitle+"</button></li>").appendTo("ul#"+"ul"+myLocalKey).find("button");
			if (errorSet.length != 0) {
				myButton.addClass("pm-error");
			}
				//jQuery("ul#"+"ul"+myLocalKey).append("<li><button buttonlist="+myButtonList+" class='button pm-error' id=\""+"button"+childIndex+myLocalKey+"\">"+myTitle+"</button></li>");
			//} else {
			//	jQuery("ul#"+"ul"+myLocalKey).append("<li><button buttonlist="+myButtonList+" class='button' id=\""+"button"+childIndex+myLocalKey+"\">"+myTitle+"</button></li>");
			//}
			if (jQuery(childElement).hasClass("pm-struct-open")) {
				myButton.addClass("pm-struct-selected");
			}

			jQuery("button#"+"button"+childIndex+myLocalKey).attr('group',     "div"+myLocalKey);
			jQuery("button#"+"button"+childIndex+myLocalKey).attr('individual', "div"+childIndex+myLocalKey);
			jQuery("button#"+"button"+childIndex+myLocalKey).click(function (){
				var group = jQuery(this).attr('group');
				var individual = jQuery(this).attr('individual');
				var buttonList = jQuery(this).attr('buttonlist');

				jQuery("#"+buttonList+" .pm-struct-button").removeClass("pm-selected");
				jQuery(this).addClass("pm-selected");
				if ( jQuery("div#"+individual).hasClass("show") ) {
					return false;
				}
				
				jQuery("div."+group).removeClass("show").addClass("pm-struct-element-hide");
				jQuery("div#"+individual).removeClass("pm-struct-element-hide").addClass("show");

				return false;
			});

		});// End of Element adjustment routine
		
		
	});// End of ElementSet adjustment routine

});

// WAIT ON THIS ... it may not be necessary ...
//
// MathJax.Hub.Register.StartupHook("End",function () {
//     jQuery(document).ready(function(){
// //         var test = jQuery(".pm-struct-highlight .MathJax_Display");
// //         test.css("text-align", "left");
// 
//         jQuery(".pm-struct-mathjax-center").siblings(".MathJax_Display").css("text-align", "center");
//         jQuery(".pm-struct-mathjax-indent").siblings(".MathJax_Display").css("text-align", "left").css("padding-left", "5em");
//     });
// });

jQuery("body").on("click", ".toggle-highlight", function ()
{
    if ( !jQuery(this).hasClass("selected") )
    {
        jQuery(this).addClass("selected");
        jQuery(this).parent().addClass("highlight-white").append("<hr class='pm-black' />");
    }
    else
    {
        jQuery(this).removeClass("selected");
        jQuery(this).parent().removeClass("highlight-white").find("hr.pm-black").remove();
    }
});

jQuery(document).ready(function(){
    jQuery("scan.figure-ref").each(function() {
        var id = jQuery(this).html();
        var count = jQuery("#"+id).attr("figure_count");
        jQuery(this).html(count);
    });
});

