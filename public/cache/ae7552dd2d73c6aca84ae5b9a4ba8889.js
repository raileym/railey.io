
  CTNS.QUIZ_SET["ae7552dd2d73c6aca84ae5b9a4ba8889"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2479 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2479';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2479', 2);
	
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

	jQuery(".slide_2479").each( function() {do_center(this)} );

    do_force('2479');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         2,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2479',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' to find the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-4",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:400px; height:400px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
    graph_height: "400",
    graph_width: "400",
    
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
{
    slideNo: 1,
    factoryid: '2479',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' to find the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-4b",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:402px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "400",
    width: "400",
    graph_height: "300",
    graph_width: "300",
    
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
CTNS.NUMBERS.GID = 'quiz_2479';
CTNS.NUMBERS.equations['quiz_2479'] = [];
CTNS.NUMBERS.symbols['quiz_2479'] = CTNS.NUMBERS.symbols['quiz_2479'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2479_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2479_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2479'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2479_SlideNo_0',                ablock           = '#answerblock_2479_SlideNo_0',                acblock          = '#answercommentaryblock_2479_SlideNo_0',                                grblock          = 'graphicblock_2479_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2479_SlideNo_0',                grblock_A        = 'graphicblock_A_2479_SlideNo_0',                grblock_B        = 'graphicblock_B_2479_SlideNo_0',                grblock_C        = 'graphicblock_C_2479_SlideNo_0',                grblock_D        = 'graphicblock_D_2479_SlideNo_0',                                grblock_f        = (typeof tml_2479_SlideNo_0   !== 'undefined') ? tml_2479_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2479_SlideNo_0 !== 'undefined') ? tml_Q_2479_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2479_SlideNo_0 !== 'undefined') ? tml_A_2479_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2479_SlideNo_0 !== 'undefined') ? tml_B_2479_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2479_SlideNo_0 !== 'undefined') ? tml_C_2479_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2479_SlideNo_0 !== 'undefined') ? tml_D_2479_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2479',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2479_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2479'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2479_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_2479_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2479'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2479_SlideNo_1',                ablock           = '#answerblock_2479_SlideNo_1',                acblock          = '#answercommentaryblock_2479_SlideNo_1',                                grblock          = 'graphicblock_2479_SlideNo_1',                grblock_Q        = 'graphicblock_Q_2479_SlideNo_1',                grblock_A        = 'graphicblock_A_2479_SlideNo_1',                grblock_B        = 'graphicblock_B_2479_SlideNo_1',                grblock_C        = 'graphicblock_C_2479_SlideNo_1',                grblock_D        = 'graphicblock_D_2479_SlideNo_1',                                grblock_f        = (typeof tml_2479_SlideNo_1   !== 'undefined') ? tml_2479_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_2479_SlideNo_1 !== 'undefined') ? tml_Q_2479_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_2479_SlideNo_1 !== 'undefined') ? tml_A_2479_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_2479_SlideNo_1 !== 'undefined') ? tml_B_2479_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_2479_SlideNo_1 !== 'undefined') ? tml_C_2479_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_2479_SlideNo_1 !== 'undefined') ? tml_D_2479_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_2479',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2479_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_2479'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2479_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2479_SlideNo_0
	What do these buy me? tag=, masterid=2479, slideno=SlideNo_0
	'scriptblock_2479_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2479_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2479_SlideNo_0'] = NUMBERS.symbols['scriptblock_2479_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2479_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2479_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:400px; ; height:400px; ;');
		
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
			boundingbox: [-8,8,8,-8] ,
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

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-3,-4], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointA
 */
window[PMGRAPHICID].textA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		if ('' != '-2.0') {
			return (x+parseFloat('-2.0'));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointA.Y();
		if ('' != '1.0') {
			return (y+parseFloat('1.0'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		var y = window[PMGRAPHICID].pointA.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ 3, 4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '0.5') {
			return (x+parseFloat('0.5'));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointB.Y();
		if ('' != '-0.5') {
			return (y+parseFloat('-0.5'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		var y = window[PMGRAPHICID].pointB.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
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
 
window[PMGRAPHICID].pointG = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointG.setGliderPosition(0.5);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/

/* Show coordinates for pointG
 */
window[PMGRAPHICID].textG = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointG.X();
		if ('' != '-2.0') {
			return (x+parseFloat('-2.0'));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointG.Y();
		if ('' != '1.0') {
			return (y+parseFloat('1.0'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointG.X();
		var y = window[PMGRAPHICID].pointG.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
/* Create a CORNER / CORNER-RIGHT pointC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointG
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create INLINE pointE between two points, window[PMGRAPHICID].pointG and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointG.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointG.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointG.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointG.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segmentGC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineGC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPoint_49151 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_49151   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointG, window[PMGRAPHICID].CPoint_49151 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on G.y-C.y
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0);
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
 * Expected Calculation on C.x-A.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on (G.y-C.y)/(C.x-A.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
 * Expected Calculation on A.x-A.y/C3.x
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text91036 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointE.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text91036 ', 
	  cssClass:'window[PMGRAPHICID].text91036 ', 
	  cssStyle:'background-color:rgba(255,0,0,1);' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text72184 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta x = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text72184 ', 
	  cssClass:'window[PMGRAPHICID].text72184 ', 
	  cssStyle:'background-color:rgba(255,0,0,1);' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text11234 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('G', 'Y', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + '-' + PM_MATH.add_paren('C', 'Y', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '}{' + PM_MATH.add_paren('C', 'X', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '-' + PM_MATH.add_paren('A', 'X', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,'d2f') + '} = \\frac{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}=' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
		  anchorY:'top',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].text11234 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text11234 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'20' , 
		  strokeColor:'black' });
 /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2479_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2479_SlideNo_1
	What do these buy me? tag=, masterid=2479, slideno=SlideNo_1
	'scriptblock_2479_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_2479_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2479_SlideNo_1'] = NUMBERS.symbols['scriptblock_2479_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2479_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2479_SlideNo_1'];
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

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-4,-4], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointA
 */
window[PMGRAPHICID].textA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		if ('' != '-2.0') {
			return (x+parseFloat('-2.0'));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointA.Y();
		if ('' != '1.0') {
			return (y+parseFloat('1.0'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		var y = window[PMGRAPHICID].pointA.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [4, 4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '0.5') {
			return (x+parseFloat('0.5'));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointB.Y();
		if ('' != '-0.5') {
			return (y+parseFloat('-0.5'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		var y = window[PMGRAPHICID].pointB.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
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
 
window[PMGRAPHICID].pointG = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointG.setGliderPosition(0.5);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointG
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create INLINE pointE between two points, window[PMGRAPHICID].pointG and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointG.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointG.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointG.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointG.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segmentGC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineGC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPoint_35317 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_35317   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointG, window[PMGRAPHICID].CPoint_35317 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on G.y-C.y
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0);
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
 * Expected Calculation on C.x-A.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on (G.y-C.y)/(C.x-A.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
 * Expected Calculation on A.x-A.y/C3.x
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text12800 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointE.X()+0.7; }, 
		function() { return window[PMGRAPHICID].pointE.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text12800 ', 
	  cssClass:'window[PMGRAPHICID].text12800 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text54273 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+0; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.6; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text54273 ', 
	  cssClass:'window[PMGRAPHICID].text54273 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text70043 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointG.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointG.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '(' + PM_MATH.add_precision('G', 'X', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + ', ' + PM_MATH.add_precision('G', 'Y', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].text70043 ', 
	  cssClass:'window[PMGRAPHICID].text70043 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false});  
window[PMGRAPHICID].text56746 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('G', 'Y', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + '-' + PM_MATH.add_paren('C', 'Y', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '}{' + PM_MATH.add_paren('C', 'X', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '-' + PM_MATH.add_paren('A', 'X', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,'d2f') + '} = \\frac{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}=' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
		  anchorY:'top',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].text56746 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text56746 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'20' , 
		  strokeColor:'black' });
  /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };