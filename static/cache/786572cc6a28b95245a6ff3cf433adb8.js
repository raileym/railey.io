
  CTNS.QUIZ_SET["786572cc6a28b95245a6ff3cf433adb8"] = function (FACTORY_ID) {

  CTNS.GRAPHICBLOCK_ID          = "graphicblock_"          + FACTORY_ID;
  CTNS.RIGHTBLOCK_ID            = "rightblock_"            + FACTORY_ID;
  CTNS.WRONGBLOCK_ID            = "wrongblock_"            + FACTORY_ID;
  CTNS.UNDECIDEDBLOCK_ID        = "undecidedblock_"        + FACTORY_ID;
  CTNS.ANSWERCOMMENTARYBLOCK_ID = "answercommentaryblock_" + FACTORY_ID;
  CTNS.ANSWERBLOCK_ID           = "answerblock_"           + FACTORY_ID;
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, factoryid, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, factoryid, 1);
	
    jQuery(slides).each(function(idx, ele) {
        jQuery(ele).addClass('slide-'+idx);
    });
    
    if ( questions_meta.shuffleSlides ) {
        var newSlides = jQuery(slides).shuffle();
    }
                
    if ( questions_meta.showDivide ) {
       
        jQuery(newSlides).removeClass('ctns-hide').after('<hr class="ctns-one-page"/>');

    } else {
    
        jQuery(newSlides).removeClass('ctns-hide');

    }

	do_katex();
	do_matex();

	jQuery(".slide_"+factoryid).each( function() {do_center(this)} );

    do_force(factoryid);
    
  })(CTNS, 
    FACTORY_ID,
    "", 
    CTNS.QUESTIONS_META[FACTORY_ID] = {
        count:         1,
        shuffleSlides: false,
        showDivide:    true,
    }, 
    CTNS.QUESTIONS[FACTORY_ID] = [
{
    slideNo: 0,
    id: FACTORY_ID,
    qid: "803",
    description: " This example illustrates 'how' the slope-intercept form changes with the graph of the line.     ",
    sponsor: "",
    figure: "",
    key: "test-linearQ15-9d-v8",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <div id='right' class='RIGHTBLOCK_IDblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <div id='wrong' class='WRONGBLOCK_IDblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <div id='undecided' class='UNDECIDEDBLOCK_IDblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:404px;width:404px;'><div style='width:400px;' class='meta GRAPHICBLOCK_ID graph hide'></div><div id='GRAPHICBLOCK_ID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:400px; height:400px; '></div><div id='GRAPHICBLOCK_IDpanel'></div><div class='meta GRAPHICBLOCK_ID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <div id='answer' class='ANSWERBLOCK_IDblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <div id='answercommentary' class='ANSWERCOMMENTARYBLOCK_IDblock'></div> ",

    height: "402",
    width: "402",
    
    style: "",
    slideStyle: "",
    frontStyle: "",
    backStyle: "",
    questionStyle: "",
    answerStyle: "",
    commentaryStyle: "",
    multipleChoiceStyle: "",

    css: "",
    labelCss: "",
    slideCss: "",
    frontCss: "",
    backCss: "",
    questionCss: "",
    answerCss: "",
    commentaryCss: "",
    multipleChoiceCss: "",
},
]);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = "PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:";
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_graphicblock_803 (GRAPHICBLOCK_ID, NUMBERS, GID) {
	
	var PMGRAPHICID   = GRAPHICBLOCK_ID, /*'graphicblock_803',*/
	    boardTitle    = PMGRAPHICID,
	    monitorTitle  = PMGRAPHICID+'monitor',
	    panelTitle    = PMGRAPHICID+'panel',
	    PM_MATH_ERROR = 'PM_MATH_ERROR',
	    title_line    = '',
	    html;

    NUMBERS.symbols['scriptblock_803'] = NUMBERS.symbols['scriptblock_803'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_803'];

	jQuery(document).ready(function() { 
	
		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore("#"+PMGRAPHICID);
		}
		
		jQuery('#'+boardTitle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = "black";
		JXG.Options.axis.strokeWidth = "2";
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = "black";
		JXG.Options.grid.strokeOpacity = "0.5";
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		  // Create my two primary points, A and B // 

/* Create a STANDARD pointP
 */
window[PMGRAPHICID].pointP = window[PMGRAPHICID].board.create('point', [-3,-4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery("button#buttonPMGRAPHICIDstart").click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointP.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointP
 */
jQuery("button#buttonPMGRAPHICIDstart").click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointP.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointQ
 */
window[PMGRAPHICID].pointQ = window[PMGRAPHICID].board.create('point', [ 2, 5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery("button#buttonPMGRAPHICIDstart").click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointQ.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointQ
 */
jQuery("button#buttonPMGRAPHICIDstart").click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointQ.moveTo([x,y],1000);

    });  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentPQ = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointP, window[PMGRAPHICID].pointQ] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].linePQ = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointP, window[PMGRAPHICID].pointQ] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  /*
 * Expected Calculation on ((P.x EQ Q.x) ? 99 : (P.y-Q.y)/(P.x-Q.x))
 */
/*
 * Calculate on M: ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0))/(((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)))
 */
window[PMGRAPHICID].pointM = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXM = function () {
		if ( window[PMGRAPHICID].getXM.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXM.value = 0;
				return( window[PMGRAPHICID].getXM.value );
			};
		window[PMGRAPHICID].getXM.value = ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0))/(((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)));
		return (window[PMGRAPHICID].getXM.value);
	}, window[PMGRAPHICID].getYM = function () {
		if ( window[PMGRAPHICID].getYM.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYM.value = window[PMGRAPHICID].getXM.value;
				return( window[PMGRAPHICID].getYM.value );
			};
		window[PMGRAPHICID].getYM.value = window[PMGRAPHICID].getXM.value;
		return (window[PMGRAPHICID].getYM.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((P.x EQ Q.x) ? 99 : P.y - M.x*P.x)
 */
/*
 * Calculate on B: ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : ((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) - ((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0)*((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0))
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXB = function () {
		if ( window[PMGRAPHICID].getXB.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXB.value = 0;
				return( window[PMGRAPHICID].getXB.value );
			};
		window[PMGRAPHICID].getXB.value = ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : ((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) - ((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0)*((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0));
		return (window[PMGRAPHICID].getXB.value);
	}, window[PMGRAPHICID].getYB = function () {
		if ( window[PMGRAPHICID].getYB.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYB.value = window[PMGRAPHICID].getXB.value;
				return( window[PMGRAPHICID].getYB.value );
			};
		window[PMGRAPHICID].getYB.value = window[PMGRAPHICID].getXB.value;
		return (window[PMGRAPHICID].getYB.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /*
 * Expected Calculation on (P.x EQ Q.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0));
		return (window[PMGRAPHICID].getXC1.value);
	}, window[PMGRAPHICID].getYC1 = function () {
		if ( window[PMGRAPHICID].getYC1.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC1.value = window[PMGRAPHICID].getXC1.value;
				return( window[PMGRAPHICID].getYC1.value );
			};
		window[PMGRAPHICID].getYC1.value = window[PMGRAPHICID].getXC1.value;
		return (window[PMGRAPHICID].getYC1.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((P.x NE Q.x) AND (P.y EQ Q.y))
 */
/*
 * Calculate on C2: ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)))
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)));
		return (window[PMGRAPHICID].getXC2.value);
	}, window[PMGRAPHICID].getYC2 = function () {
		if ( window[PMGRAPHICID].getYC2.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC2.value = window[PMGRAPHICID].getXC2.value;
				return( window[PMGRAPHICID].getYC2.value );
			};
		window[PMGRAPHICID].getYC2.value = window[PMGRAPHICID].getXC2.value;
		return (window[PMGRAPHICID].getYC2.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /*
 * Expected Calculation on ((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x GT 0))
 */
/*
 * Calculate on C3: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0));
		return (window[PMGRAPHICID].getXC3.value);
	}, window[PMGRAPHICID].getYC3 = function () {
		if ( window[PMGRAPHICID].getYC3.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC3.value = window[PMGRAPHICID].getXC3.value;
				return( window[PMGRAPHICID].getYC3.value );
			};
		window[PMGRAPHICID].getYC3.value = window[PMGRAPHICID].getXC3.value;
		return (window[PMGRAPHICID].getYC3.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x EQ 0))
 */
/*
 * Calculate on C4: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0))
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0));
		return (window[PMGRAPHICID].getXC4.value);
	}, window[PMGRAPHICID].getYC4 = function () {
		if ( window[PMGRAPHICID].getYC4.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC4.value = window[PMGRAPHICID].getXC4.value;
				return( window[PMGRAPHICID].getYC4.value );
			};
		window[PMGRAPHICID].getYC4.value = window[PMGRAPHICID].getXC4.value;
		return (window[PMGRAPHICID].getYC4.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x LT 0))
 */
/*
 * Calculate on C5: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0))
 */
window[PMGRAPHICID].pointC5 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC5 = function () {
		if ( window[PMGRAPHICID].getXC5.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC5.value = 0;
				return( window[PMGRAPHICID].getXC5.value );
			};
		window[PMGRAPHICID].getXC5.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0));
		return (window[PMGRAPHICID].getXC5.value);
	}, window[PMGRAPHICID].getYC5 = function () {
		if ( window[PMGRAPHICID].getYC5.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC5.value = window[PMGRAPHICID].getXC5.value;
				return( window[PMGRAPHICID].getYC5.value );
			};
		window[PMGRAPHICID].getYC5.value = window[PMGRAPHICID].getXC5.value;
		return (window[PMGRAPHICID].getYC5.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /*
 * Expected Calculation on ((M.x EQ 1) AND (B.x GT 0))
 */
/*
 * Calculate on C6: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0))
 */
window[PMGRAPHICID].pointC6 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC6 = function () {
		if ( window[PMGRAPHICID].getXC6.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC6.value = 0;
				return( window[PMGRAPHICID].getXC6.value );
			};
		window[PMGRAPHICID].getXC6.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0));
		return (window[PMGRAPHICID].getXC6.value);
	}, window[PMGRAPHICID].getYC6 = function () {
		if ( window[PMGRAPHICID].getYC6.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC6.value = window[PMGRAPHICID].getXC6.value;
				return( window[PMGRAPHICID].getYC6.value );
			};
		window[PMGRAPHICID].getYC6.value = window[PMGRAPHICID].getXC6.value;
		return (window[PMGRAPHICID].getYC6.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((M.x EQ 1) AND (B.x EQ 0))
 */
/*
 * Calculate on C7: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0))
 */
window[PMGRAPHICID].pointC7 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC7 = function () {
		if ( window[PMGRAPHICID].getXC7.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC7.value = 0;
				return( window[PMGRAPHICID].getXC7.value );
			};
		window[PMGRAPHICID].getXC7.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0));
		return (window[PMGRAPHICID].getXC7.value);
	}, window[PMGRAPHICID].getYC7 = function () {
		if ( window[PMGRAPHICID].getYC7.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC7.value = window[PMGRAPHICID].getXC7.value;
				return( window[PMGRAPHICID].getYC7.value );
			};
		window[PMGRAPHICID].getYC7.value = window[PMGRAPHICID].getXC7.value;
		return (window[PMGRAPHICID].getYC7.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((M.x EQ 1) AND (B.x LT 0))
 */
/*
 * Calculate on C8: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0))
 */
window[PMGRAPHICID].pointC8 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC8 = function () {
		if ( window[PMGRAPHICID].getXC8.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC8.value = 0;
				return( window[PMGRAPHICID].getXC8.value );
			};
		window[PMGRAPHICID].getXC8.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0));
		return (window[PMGRAPHICID].getXC8.value);
	}, window[PMGRAPHICID].getYC8 = function () {
		if ( window[PMGRAPHICID].getYC8.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC8.value = window[PMGRAPHICID].getXC8.value;
				return( window[PMGRAPHICID].getYC8.value );
			};
		window[PMGRAPHICID].getYC8.value = window[PMGRAPHICID].getXC8.value;
		return (window[PMGRAPHICID].getYC8.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});    
window[PMGRAPHICID].condition42042buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition42042buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition42042onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition42042buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition42042buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition42042buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition42042onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition42042buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition42042buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition42042buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition42042 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition42042onTrue();
	} else {
		window[PMGRAPHICID].condition42042onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition42042);
window[PMGRAPHICID].updateCondition42042; 
window[PMGRAPHICID].condition63509buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition63509buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition63509onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition63509buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition63509buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition63509buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition63509onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition63509buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition63509buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition63509buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition63509 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition63509onTrue();
	} else {
		window[PMGRAPHICID].condition63509onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition63509);
window[PMGRAPHICID].updateCondition63509;  
window[PMGRAPHICID].condition78644buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition78644buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition78644onTrue = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition78644buttonShow('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition78644buttonShow('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition78644buttonShow('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
window[PMGRAPHICID].condition78644onFalse = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition78644buttonHide('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition78644buttonHide('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition78644buttonHide('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition78644 = function () {
	var x = window[PMGRAPHICID].pointC3.X();
	if (window[PMGRAPHICID].pointC3.X()) {
		window[PMGRAPHICID].condition78644onTrue();
	} else {
		window[PMGRAPHICID].condition78644onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition78644);
window[PMGRAPHICID].updateCondition78644; 
window[PMGRAPHICID].condition75967buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition75967buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition75967onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition75967buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition75967buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition75967buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition75967onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition75967buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition75967buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition75967buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition75967 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition75967onTrue();
	} else {
		window[PMGRAPHICID].condition75967onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition75967);
window[PMGRAPHICID].updateCondition75967; 
window[PMGRAPHICID].condition24762buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition24762buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition24762onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition24762buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition24762buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition24762buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition24762onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition24762buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition24762buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition24762buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition24762 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition24762onTrue();
	} else {
		window[PMGRAPHICID].condition24762onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition24762);
window[PMGRAPHICID].updateCondition24762;  
window[PMGRAPHICID].condition74870buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition74870buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition74870onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition74870buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition74870buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition74870buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition74870onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition74870buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition74870buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition74870buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition74870 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition74870onTrue();
	} else {
		window[PMGRAPHICID].condition74870onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition74870);
window[PMGRAPHICID].updateCondition74870; 
window[PMGRAPHICID].condition18992buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition18992buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18992onTrue = function () {
	if (window[PMGRAPHICID].pointT7)    { window[PMGRAPHICID].condition18992buttonShow('window[PMGRAPHICID].pointT7',   window[PMGRAPHICID].pointT7); }
	if (window[PMGRAPHICID].textT7)     { window[PMGRAPHICID].condition18992buttonShow('window[PMGRAPHICID].textT7',    window[PMGRAPHICID].textT7); }
	if (window[PMGRAPHICID].segmentT7)  { window[PMGRAPHICID].condition18992buttonShow('window[PMGRAPHICID].segmentT7', window[PMGRAPHICID].segmentT7); }
};
window[PMGRAPHICID].condition18992onFalse = function () {
	if (window[PMGRAPHICID].pointT7)    { window[PMGRAPHICID].condition18992buttonHide('window[PMGRAPHICID].pointT7',   window[PMGRAPHICID].pointT7); }
	if (window[PMGRAPHICID].textT7)     { window[PMGRAPHICID].condition18992buttonHide('window[PMGRAPHICID].textT7',    window[PMGRAPHICID].textT7); }
	if (window[PMGRAPHICID].segmentT7)  { window[PMGRAPHICID].condition18992buttonHide('window[PMGRAPHICID].segmentT7', window[PMGRAPHICID].segmentT7); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18992 = function () {
	var x = window[PMGRAPHICID].pointC7.X();
	if (window[PMGRAPHICID].pointC7.X()) {
		window[PMGRAPHICID].condition18992onTrue();
	} else {
		window[PMGRAPHICID].condition18992onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18992);
window[PMGRAPHICID].updateCondition18992; 
window[PMGRAPHICID].condition22194buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition22194buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition22194onTrue = function () {
	if (window[PMGRAPHICID].pointT8)    { window[PMGRAPHICID].condition22194buttonShow('window[PMGRAPHICID].pointT8',   window[PMGRAPHICID].pointT8); }
	if (window[PMGRAPHICID].textT8)     { window[PMGRAPHICID].condition22194buttonShow('window[PMGRAPHICID].textT8',    window[PMGRAPHICID].textT8); }
	if (window[PMGRAPHICID].segmentT8)  { window[PMGRAPHICID].condition22194buttonShow('window[PMGRAPHICID].segmentT8', window[PMGRAPHICID].segmentT8); }
};
window[PMGRAPHICID].condition22194onFalse = function () {
	if (window[PMGRAPHICID].pointT8)    { window[PMGRAPHICID].condition22194buttonHide('window[PMGRAPHICID].pointT8',   window[PMGRAPHICID].pointT8); }
	if (window[PMGRAPHICID].textT8)     { window[PMGRAPHICID].condition22194buttonHide('window[PMGRAPHICID].textT8',    window[PMGRAPHICID].textT8); }
	if (window[PMGRAPHICID].segmentT8)  { window[PMGRAPHICID].condition22194buttonHide('window[PMGRAPHICID].segmentT8', window[PMGRAPHICID].segmentT8); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition22194 = function () {
	var x = window[PMGRAPHICID].pointC8.X();
	if (window[PMGRAPHICID].pointC8.X()) {
		window[PMGRAPHICID].condition22194onTrue();
	} else {
		window[PMGRAPHICID].condition22194onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition22194);
window[PMGRAPHICID].updateCondition22194;  
		/*	Create Panel
		 */
		jQuery('#'+panelTitle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:180px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Not a function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Constant Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].textT3 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_precision('M', 'X', (window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM : null,1,'d2f') + ' x + ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return "<div>"+value+"</div>"; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].textT3 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT3 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT4 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_precision('M', 'X', (window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM : null,1,'d2f') + ' x';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return "<div>"+value+"</div>"; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].textT4 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT4 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT5 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_precision('M', 'X', (window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM : null,1,'d2f') + ' x ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return "<div>"+value+"</div>"; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].textT5 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT5 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
  
window[PMGRAPHICID].textT6 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = x + ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return "<div>"+value+"</div>"; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].textT6 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT6 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT7 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = x ';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return "<div>"+value+"</div>"; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].textT7 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT7 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT8 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = x ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return "<span class=\'PMGRAPHICID "+PM_MATH_ERROR+"-text\'>"+value+"</span>";
				}
				return "<div>"+value+"</div>"; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].textT8 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT8 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
  /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. graphicblock_803
 
 *********************************************************************
 *********************************************************************
 */

/* Very tricky. I am choosing to express CTNS.NUMBERS
 * and CTNS.NUMBERS.GID here versus each time later in
 * every one of the citation.
 */
/*
No longer use this approach ...

CTNS.NUMBERS.graphicblock_803 = (function(numbers, gid) {
        return function() {
            tml_graphicblock_803(numbers, gid);
        }
    })(CTNS.NUMBERS, CTNS.NUMBERS.GID);
*/
tml_graphicblock_803(CTNS.GRAPHICBLOCK_ID, CTNS.NUMBERS, CTNS.NUMBERS.GID);
     };