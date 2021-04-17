
  CTNS.QUIZ_SET["ec5d295b923940a1bc6f7d22ca0a2621"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4478 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4478';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4478', 1);
	
    jQuery(slides).each(function(idx, ele) {
        jQuery(ele).addClass('slide-'+idx);
    });
    
    /*
    if ( questions_meta.shuffleSlides ) {
        var newSlides = jQuery(slides).shuffle();
    }
    */
    
    /* This process could be a bug ... check out shuffle later
     */
    var newSlides = slides;
                
    if ( questions_meta.showDivide ) {
       
        jQuery(newSlides).removeClass('ctns-hide').after('<hr class="ctns-one-page"/>');

    } else {
    
        jQuery(newSlides).removeClass('ctns-hide');

    }

	do_katex();
	do_matex();

	jQuery(".slide_4478").each( function() {do_center(this)} );

    do_force('4478');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         1,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '4478',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' the slope-intercept form changes with the graph of the line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ15-9d",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "350",
    width: "350",
    graph_height: "345",
    graph_width: "345",
    
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
/* This values are set only once for any particular
 * quiz container.
 */
CTNS.NUMBERS.GID = 'quiz_4478';
CTNS.NUMBERS.equations['quiz_4478'] = [];
CTNS.NUMBERS.symbols['quiz_4478'] = CTNS.NUMBERS.symbols['quiz_4478'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4478_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4478_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4478'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4478_SlideNo_0',                ablock           = '#answerblock_4478_SlideNo_0',                acblock          = '#answercommentaryblock_4478_SlideNo_0',                                grblock          = 'graphicblock_4478_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4478_SlideNo_0',                grblock_A        = 'graphicblock_A_4478_SlideNo_0',                grblock_B        = 'graphicblock_B_4478_SlideNo_0',                grblock_C        = 'graphicblock_C_4478_SlideNo_0',                grblock_D        = 'graphicblock_D_4478_SlideNo_0',                grblock_E        = 'graphicblock_E_4478_SlideNo_0',                grblock_F        = 'graphicblock_F_4478_SlideNo_0',                                grblock_f        = (typeof tml_4478_SlideNo_0   !== 'undefined') ? tml_4478_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4478_SlideNo_0 !== 'undefined') ? tml_Q_4478_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4478_SlideNo_0 !== 'undefined') ? tml_A_4478_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4478_SlideNo_0 !== 'undefined') ? tml_B_4478_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4478_SlideNo_0 !== 'undefined') ? tml_C_4478_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4478_SlideNo_0 !== 'undefined') ? tml_D_4478_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4478_SlideNo_0 !== 'undefined') ? tml_E_4478_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4478_SlideNo_0 !== 'undefined') ? tml_F_4478_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4478',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4478_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4478'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4478_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_4478_SlideNo_0
	What do these buy me? tag=, masterid=4478, slideno=SlideNo_0
	'scriptblock_4478_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_4478_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4478_SlideNo_0'] = NUMBERS.symbols['scriptblock_4478_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4478_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4478_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
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

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointP.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointP
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointP.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointQ
 */
window[PMGRAPHICID].pointQ = window[PMGRAPHICID].board.create('point', [ 2, 5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointQ.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointQ
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
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
window[PMGRAPHICID].condition99542buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition99542buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition99542onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition99542buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition99542buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition99542buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition99542onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition99542buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition99542buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition99542buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition99542 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition99542onTrue();
	} else {
		window[PMGRAPHICID].condition99542onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition99542);
window[PMGRAPHICID].updateCondition99542; 
window[PMGRAPHICID].condition10344buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition10344buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition10344onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition10344buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition10344buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition10344buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition10344onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition10344buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition10344buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition10344buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition10344 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition10344onTrue();
	} else {
		window[PMGRAPHICID].condition10344onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition10344);
window[PMGRAPHICID].updateCondition10344;  
window[PMGRAPHICID].condition83245buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition83245buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition83245onTrue = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition83245buttonShow('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition83245buttonShow('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition83245buttonShow('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
window[PMGRAPHICID].condition83245onFalse = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition83245buttonHide('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition83245buttonHide('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition83245buttonHide('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition83245 = function () {
	var x = window[PMGRAPHICID].pointC3.X();
	if (window[PMGRAPHICID].pointC3.X()) {
		window[PMGRAPHICID].condition83245onTrue();
	} else {
		window[PMGRAPHICID].condition83245onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition83245);
window[PMGRAPHICID].updateCondition83245; 
window[PMGRAPHICID].condition81922buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition81922buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition81922onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition81922buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition81922buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition81922buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition81922onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition81922buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition81922buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition81922buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition81922 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition81922onTrue();
	} else {
		window[PMGRAPHICID].condition81922onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition81922);
window[PMGRAPHICID].updateCondition81922; 
window[PMGRAPHICID].condition47427buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition47427buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition47427onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition47427buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition47427buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition47427buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition47427onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition47427buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition47427buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition47427buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition47427 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition47427onTrue();
	} else {
		window[PMGRAPHICID].condition47427onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition47427);
window[PMGRAPHICID].updateCondition47427;  
window[PMGRAPHICID].condition12214buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition12214buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition12214onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition12214buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition12214buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition12214buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition12214onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition12214buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition12214buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition12214buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition12214 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition12214onTrue();
	} else {
		window[PMGRAPHICID].condition12214onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition12214);
window[PMGRAPHICID].updateCondition12214; 
window[PMGRAPHICID].condition82859buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition82859buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition82859onTrue = function () {
	if (window[PMGRAPHICID].pointT7)    { window[PMGRAPHICID].condition82859buttonShow('window[PMGRAPHICID].pointT7',   window[PMGRAPHICID].pointT7); }
	if (window[PMGRAPHICID].textT7)     { window[PMGRAPHICID].condition82859buttonShow('window[PMGRAPHICID].textT7',    window[PMGRAPHICID].textT7); }
	if (window[PMGRAPHICID].segmentT7)  { window[PMGRAPHICID].condition82859buttonShow('window[PMGRAPHICID].segmentT7', window[PMGRAPHICID].segmentT7); }
};
window[PMGRAPHICID].condition82859onFalse = function () {
	if (window[PMGRAPHICID].pointT7)    { window[PMGRAPHICID].condition82859buttonHide('window[PMGRAPHICID].pointT7',   window[PMGRAPHICID].pointT7); }
	if (window[PMGRAPHICID].textT7)     { window[PMGRAPHICID].condition82859buttonHide('window[PMGRAPHICID].textT7',    window[PMGRAPHICID].textT7); }
	if (window[PMGRAPHICID].segmentT7)  { window[PMGRAPHICID].condition82859buttonHide('window[PMGRAPHICID].segmentT7', window[PMGRAPHICID].segmentT7); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition82859 = function () {
	var x = window[PMGRAPHICID].pointC7.X();
	if (window[PMGRAPHICID].pointC7.X()) {
		window[PMGRAPHICID].condition82859onTrue();
	} else {
		window[PMGRAPHICID].condition82859onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition82859);
window[PMGRAPHICID].updateCondition82859; 
window[PMGRAPHICID].condition15855buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition15855buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition15855onTrue = function () {
	if (window[PMGRAPHICID].pointT8)    { window[PMGRAPHICID].condition15855buttonShow('window[PMGRAPHICID].pointT8',   window[PMGRAPHICID].pointT8); }
	if (window[PMGRAPHICID].textT8)     { window[PMGRAPHICID].condition15855buttonShow('window[PMGRAPHICID].textT8',    window[PMGRAPHICID].textT8); }
	if (window[PMGRAPHICID].segmentT8)  { window[PMGRAPHICID].condition15855buttonShow('window[PMGRAPHICID].segmentT8', window[PMGRAPHICID].segmentT8); }
};
window[PMGRAPHICID].condition15855onFalse = function () {
	if (window[PMGRAPHICID].pointT8)    { window[PMGRAPHICID].condition15855buttonHide('window[PMGRAPHICID].pointT8',   window[PMGRAPHICID].pointT8); }
	if (window[PMGRAPHICID].textT8)     { window[PMGRAPHICID].condition15855buttonHide('window[PMGRAPHICID].textT8',    window[PMGRAPHICID].textT8); }
	if (window[PMGRAPHICID].segmentT8)  { window[PMGRAPHICID].condition15855buttonHide('window[PMGRAPHICID].segmentT8', window[PMGRAPHICID].segmentT8); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition15855 = function () {
	var x = window[PMGRAPHICID].pointC8.X();
	if (window[PMGRAPHICID].pointC8.X()) {
		window[PMGRAPHICID].condition15855onTrue();
	} else {
		window[PMGRAPHICID].condition15855onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition15855);
window[PMGRAPHICID].updateCondition15855;  
		/*	Create Panel
		 */
		jQuery(panelHandle)
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
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
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
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
}     };