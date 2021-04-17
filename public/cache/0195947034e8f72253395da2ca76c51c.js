
  CTNS.QUIZ_SET["0195947034e8f72253395da2ca76c51c"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4561 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4561';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4561', 1);
	
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

	jQuery(".slide_4561").each( function() {do_center(this)} );

    do_force('4561');
    
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
    factoryid: '4561',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-11b",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
CTNS.NUMBERS.GID = 'quiz_4561';
CTNS.NUMBERS.equations['quiz_4561'] = [];
CTNS.NUMBERS.symbols['quiz_4561'] = CTNS.NUMBERS.symbols['quiz_4561'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4561_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4561_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4561'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4561_SlideNo_0',                ablock           = '#answerblock_4561_SlideNo_0',                acblock          = '#answercommentaryblock_4561_SlideNo_0',                                grblock          = 'graphicblock_4561_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4561_SlideNo_0',                grblock_A        = 'graphicblock_A_4561_SlideNo_0',                grblock_B        = 'graphicblock_B_4561_SlideNo_0',                grblock_C        = 'graphicblock_C_4561_SlideNo_0',                grblock_D        = 'graphicblock_D_4561_SlideNo_0',                grblock_E        = 'graphicblock_E_4561_SlideNo_0',                grblock_F        = 'graphicblock_F_4561_SlideNo_0',                                grblock_f        = (typeof tml_4561_SlideNo_0   !== 'undefined') ? tml_4561_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4561_SlideNo_0 !== 'undefined') ? tml_Q_4561_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4561_SlideNo_0 !== 'undefined') ? tml_A_4561_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4561_SlideNo_0 !== 'undefined') ? tml_B_4561_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4561_SlideNo_0 !== 'undefined') ? tml_C_4561_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4561_SlideNo_0 !== 'undefined') ? tml_D_4561_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4561_SlideNo_0 !== 'undefined') ? tml_E_4561_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4561_SlideNo_0 !== 'undefined') ? tml_F_4561_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4561',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4561_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4561'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4561_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4561_SlideNo_0
	What do these buy me? tag=, masterid=4561, slideno=SlideNo_0
	'scriptblock_4561_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_4561_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4561_SlideNo_0'] = NUMBERS.symbols['scriptblock_4561_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4561_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4561_SlideNo_0'];
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-5,-5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
/* Create INLINE pointC between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.333333)*(window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.333333)*(window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.666666)*(window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.666666)*(window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_58659 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_58659 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  
/* Create a CORNER / CORNER-RIGHT pointAC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointAC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create a CORNER / CORNER-RIGHT pointCD on points window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointCD = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create a CORNER / CORNER-RIGHT pointDB on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointDB = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_60648 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_60648 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_60648 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_60648, window[PMGRAPHICID].endArrow_60648], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_66657 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_66657 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_66657 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_66657, window[PMGRAPHICID].endArrow_66657], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_68863 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_68863 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_68863 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_68863, window[PMGRAPHICID].endArrow_68863], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_72218 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_72218 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_72218 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_72218, window[PMGRAPHICID].endArrow_72218], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_71040 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_71040 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_71040 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_71040, window[PMGRAPHICID].endArrow_71040], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_8215 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_8215 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_8215 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_8215, window[PMGRAPHICID].endArrow_8215], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_92532 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_92532   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_92532 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_88716 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_88716   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_88716 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_3625 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_3625   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_3625 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
/* Create INLINE pointAAC between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointAC
 */
window[PMGRAPHICID].pointAAC = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointCCD between two points, window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointCD
 */
window[PMGRAPHICID].pointCCD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointC.X()+(0.5)*(window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointC.Y()+(0.5)*(window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointDDB between two points, window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointDB
 */
window[PMGRAPHICID].pointDDB = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointD.X()+(0.5)*(window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointD.Y()+(0.5)*(window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create INLINE pointACC between two points, window[PMGRAPHICID].pointAC and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointACC = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointAC.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointAC.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointCDD between two points, window[PMGRAPHICID].pointCD and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointCDD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointCD.X()+(0.5)*(window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointCD.Y()+(0.5)*(window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointDBB between two points, window[PMGRAPHICID].pointDB and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointDBB = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointDB.X()+(0.5)*(window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointDB.Y()+(0.5)*(window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  /*
 * Expected Calculation on AC.x-A.x
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointAC) ? window[PMGRAPHICID].pointAC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointAC) ? window[PMGRAPHICID].pointAC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on CD.x-C.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointCD) ? window[PMGRAPHICID].pointCD.X() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointCD) ? window[PMGRAPHICID].pointCD.X() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0);
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
 * Expected Calculation on DB.x-D.x
 */
/*
 * Calculate on C3: ((window[PMGRAPHICID].pointDB) ? window[PMGRAPHICID].pointDB.X() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0)
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = ((window[PMGRAPHICID].pointDB) ? window[PMGRAPHICID].pointDB.X() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /*
 * Expected Calculation on C.y-AC.y
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)-((window[PMGRAPHICID].pointAC) ? window[PMGRAPHICID].pointAC.Y() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)-((window[PMGRAPHICID].pointAC) ? window[PMGRAPHICID].pointAC.Y() : 0);
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
 * Expected Calculation on D.y-CD.y
 */
/*
 * Calculate on C5: ((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)-((window[PMGRAPHICID].pointCD) ? window[PMGRAPHICID].pointCD.Y() : 0)
 */
window[PMGRAPHICID].pointC5 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC5 = function () {
		if ( window[PMGRAPHICID].getXC5.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC5.value = 0;
				return( window[PMGRAPHICID].getXC5.value );
			};
		window[PMGRAPHICID].getXC5.value = ((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)-((window[PMGRAPHICID].pointCD) ? window[PMGRAPHICID].pointCD.Y() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on B.y-DB.y
 */
/*
 * Calculate on C6: ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointDB) ? window[PMGRAPHICID].pointDB.Y() : 0)
 */
window[PMGRAPHICID].pointC6 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC6 = function () {
		if ( window[PMGRAPHICID].getXC6.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC6.value = 0;
				return( window[PMGRAPHICID].getXC6.value );
			};
		window[PMGRAPHICID].getXC6.value = ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointDB) ? window[PMGRAPHICID].pointDB.Y() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text18018 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointAAC.X()+0; }, 
		function() { return window[PMGRAPHICID].pointAAC.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\small ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text18018 ', 
	  cssClass:'window[PMGRAPHICID].text18018 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text51945 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCCD.X()+0; }, 
		function() { return window[PMGRAPHICID].pointCCD.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\small ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text51945 ', 
	  cssClass:'window[PMGRAPHICID].text51945 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text79288 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDB.X()+0; }, 
		function() { return window[PMGRAPHICID].pointDDB.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\small ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text79288 ', 
	  cssClass:'window[PMGRAPHICID].text79288 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text62045 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointACC.X()+0.75; }, 
		function() { return window[PMGRAPHICID].pointACC.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\small ' + PM_MATH.add_paren('C4', 'X', (window[PMGRAPHICID].pointC4) ? window[PMGRAPHICID].pointC4 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text62045 ', 
	  cssClass:'window[PMGRAPHICID].text62045 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text60255 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCDD.X()+0.75; }, 
		function() { return window[PMGRAPHICID].pointCDD.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\small ' + PM_MATH.add_paren('C5', 'X', (window[PMGRAPHICID].pointC5) ? window[PMGRAPHICID].pointC5 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text60255 ', 
	  cssClass:'window[PMGRAPHICID].text60255 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text54399 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDBB.X()+0.75; }, 
		function() { return window[PMGRAPHICID].pointDBB.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\small ' + PM_MATH.add_paren('C6', 'X', (window[PMGRAPHICID].pointC6) ? window[PMGRAPHICID].pointC6 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text54399 ', 
	  cssClass:'window[PMGRAPHICID].text54399 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
} };