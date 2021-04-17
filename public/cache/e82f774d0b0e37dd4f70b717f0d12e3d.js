
  CTNS.QUIZ_SET["e82f774d0b0e37dd4f70b717f0d12e3d"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2932 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2932';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2932', 1);
	
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

	jQuery(".slide_2932").each( function() {do_center(this)} );

    do_force('2932');
    
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
    factoryid: '2932',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-4",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
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
CTNS.NUMBERS.GID = 'quiz_2932';
CTNS.NUMBERS.equations['quiz_2932'] = [];
CTNS.NUMBERS.symbols['quiz_2932'] = CTNS.NUMBERS.symbols['quiz_2932'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2932_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2932_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2932'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2932_SlideNo_0',                ablock           = '#answerblock_2932_SlideNo_0',                acblock          = '#answercommentaryblock_2932_SlideNo_0',                                grblock          = 'graphicblock_2932_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2932_SlideNo_0',                grblock_A        = 'graphicblock_A_2932_SlideNo_0',                grblock_B        = 'graphicblock_B_2932_SlideNo_0',                grblock_C        = 'graphicblock_C_2932_SlideNo_0',                grblock_D        = 'graphicblock_D_2932_SlideNo_0',                grblock_E        = 'graphicblock_E_2932_SlideNo_0',                grblock_F        = 'graphicblock_F_2932_SlideNo_0',                                grblock_f        = (typeof tml_2932_SlideNo_0   !== 'undefined') ? tml_2932_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2932_SlideNo_0 !== 'undefined') ? tml_Q_2932_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2932_SlideNo_0 !== 'undefined') ? tml_A_2932_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2932_SlideNo_0 !== 'undefined') ? tml_B_2932_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2932_SlideNo_0 !== 'undefined') ? tml_C_2932_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2932_SlideNo_0 !== 'undefined') ? tml_D_2932_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2932_SlideNo_0 !== 'undefined') ? tml_E_2932_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2932_SlideNo_0 !== 'undefined') ? tml_F_2932_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2932',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2932_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2932'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2932_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2932_SlideNo_0
	What do these buy me? tag=, masterid=2932, slideno=SlideNo_0
	'scriptblock_2932_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2932_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2932_SlideNo_0'] = NUMBERS.symbols['scriptblock_2932_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2932_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2932_SlideNo_0'];
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
		 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-5,-4], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointC
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [-5,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointC.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointC
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointC.moveTo([x,y],1000);

    });  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAB = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAB = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointD.setGliderPosition(0.1);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.8);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointDE on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_14654 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_14654 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_14654 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_14654, window[PMGRAPHICID].endArrow_14654], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_3745 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_3745 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_3745 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_3745, window[PMGRAPHICID].endArrow_3745], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_20416 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_20416   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_20416 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
/* Create INLINE pointDDE between two points, window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointDE
 */
window[PMGRAPHICID].pointDDE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointD.X()+(0.5)*(window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointD.Y()+(0.5)*(window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointDEE between two points, window[PMGRAPHICID].pointDE and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDEE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointDE.X()+(0.5)*(window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointDE.Y()+(0.5)*(window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  /*
 * Expected Calculation on DE.x-D.x
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE.X() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE.X() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0);
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
 * Expected Calculation on E.y-DE.y
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE.Y() : 0)-((window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE.Y() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE.Y() : 0)-((window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE.Y() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on C2.x/C1.x
 */
/*
 * Calculate on C3: ((window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2.X() : 0)/((window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1.X() : 0)
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = ((window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2.X() : 0)/((window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text10223 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta x = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text10223 ', 
	  cssClass:'window[PMGRAPHICID].text10223 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text48616 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y  = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text48616 ', 
	  cssClass:'window[PMGRAPHICID].text48616 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text98585 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+1.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text98585 ', 
	  cssClass:'window[PMGRAPHICID].text98585 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}         };