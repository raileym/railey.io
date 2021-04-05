
  CTNS.QUIZ_SET["36210aea6b78ad02cf9f8eb1b722996c"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1454 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1454';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1454', 3);
	
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

	jQuery(".slide_1454").each( function() {do_center(this)} );

    do_force('1454');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         3,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '1454',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Uses TWO sliders. This example demonstrates a linear function using sliders for values m and b. The  resulting equation is reflected and updated.     ",
    sponsor: "",
    figure: "",
    key: "linearQ12-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
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
{
    slideNo: 1,
    factoryid: '1454',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example demonstrates a linear function using a slider for the value b. The  resulting equation is reflected and updated.     ",
    sponsor: "",
    figure: "",
    key: "linearQ12-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
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
{
    slideNo: 2,
    factoryid: '1454',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example demonstrates a linear function using a slider for the value m. The  resulting equation is reflected and updated.     ",
    sponsor: "",
    figure: "",
    key: "linearQ12-3",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
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
CTNS.NUMBERS.GID = 'quiz_1454';
CTNS.NUMBERS.equations['quiz_1454'] = [];
CTNS.NUMBERS.symbols['quiz_1454'] = CTNS.NUMBERS.symbols['quiz_1454'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1454_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1454_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1454'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1454_SlideNo_0',                ablock           = '#answerblock_1454_SlideNo_0',                acblock          = '#answercommentaryblock_1454_SlideNo_0',                                grblock          = 'graphicblock_1454_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1454_SlideNo_0',                grblock_A        = 'graphicblock_A_1454_SlideNo_0',                grblock_B        = 'graphicblock_B_1454_SlideNo_0',                grblock_C        = 'graphicblock_C_1454_SlideNo_0',                grblock_D        = 'graphicblock_D_1454_SlideNo_0',                                grblock_f        = (typeof tml_1454_SlideNo_0   !== 'undefined') ? tml_1454_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_1454_SlideNo_0 !== 'undefined') ? tml_Q_1454_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_1454_SlideNo_0 !== 'undefined') ? tml_A_1454_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_1454_SlideNo_0 !== 'undefined') ? tml_B_1454_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_1454_SlideNo_0 !== 'undefined') ? tml_C_1454_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_1454_SlideNo_0 !== 'undefined') ? tml_D_1454_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_1454',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1454_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_1454'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 2;         symbols.b = 2;          var q = [];              symbols.m_ = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b_ = [-3, -2, -1, 1, 2, 3].ctns_rand();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1454_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_1454_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1454'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1454_SlideNo_1',                ablock           = '#answerblock_1454_SlideNo_1',                acblock          = '#answercommentaryblock_1454_SlideNo_1',                                grblock          = 'graphicblock_1454_SlideNo_1',                grblock_Q        = 'graphicblock_Q_1454_SlideNo_1',                grblock_A        = 'graphicblock_A_1454_SlideNo_1',                grblock_B        = 'graphicblock_B_1454_SlideNo_1',                grblock_C        = 'graphicblock_C_1454_SlideNo_1',                grblock_D        = 'graphicblock_D_1454_SlideNo_1',                                grblock_f        = (typeof tml_1454_SlideNo_1   !== 'undefined') ? tml_1454_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_1454_SlideNo_1 !== 'undefined') ? tml_Q_1454_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_1454_SlideNo_1 !== 'undefined') ? tml_A_1454_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_1454_SlideNo_1 !== 'undefined') ? tml_B_1454_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_1454_SlideNo_1 !== 'undefined') ? tml_C_1454_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_1454_SlideNo_1 !== 'undefined') ? tml_D_1454_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_1454',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1454_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_1454'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 2;         symbols.b = 2;          symbols.m = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = [-3, -2, -1, 1, 2, 3].ctns_rand();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1454_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_1454_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1454'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1454_SlideNo_2',                ablock           = '#answerblock_1454_SlideNo_2',                acblock          = '#answercommentaryblock_1454_SlideNo_2',                                grblock          = 'graphicblock_1454_SlideNo_2',                grblock_Q        = 'graphicblock_Q_1454_SlideNo_2',                grblock_A        = 'graphicblock_A_1454_SlideNo_2',                grblock_B        = 'graphicblock_B_1454_SlideNo_2',                grblock_C        = 'graphicblock_C_1454_SlideNo_2',                grblock_D        = 'graphicblock_D_1454_SlideNo_2',                                grblock_f        = (typeof tml_1454_SlideNo_2   !== 'undefined') ? tml_1454_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_1454_SlideNo_2 !== 'undefined') ? tml_Q_1454_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_1454_SlideNo_2 !== 'undefined') ? tml_A_1454_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_1454_SlideNo_2 !== 'undefined') ? tml_B_1454_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_1454_SlideNo_2 !== 'undefined') ? tml_C_1454_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_1454_SlideNo_2 !== 'undefined') ? tml_D_1454_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_1454',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1454_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_1454'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 2;         symbols.b = 2;          symbols.m_ = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b_ = [-3, -2, -1, 1, 2, 3].ctns_rand();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_1454_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_1454_SlideNo_0
	What do these buy me? tag=, masterid=1454, slideno=SlideNo_0
	'scriptblock_1454_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_1454_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1454_SlideNo_0'] = NUMBERS.symbols['scriptblock_1454_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1454_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1454_SlideNo_0'];
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
			boundingbox: [-10,10,10,-10] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 7.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [7.5, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,8,10,-1], showNavigation:false, showCopyright:false}); 
        /* Create Slider: sliderb
         */
        window[PMGRAPHICID].sliderb = window[PMGRAPHICID].panel.create('slider',
            [
                [-8,0], 
                [5,0],
                [-5, st.b, 5]
            ],
            {precision: 2,name: 'b',snapWidth: 1,strokeColor:'blue', fillColor: 'white', highline:{strokeColor:'blue'}, baseline:{strokeColor:'blue'} }); 
        /* Create Slider: sliderm
         */
        window[PMGRAPHICID].sliderm = window[PMGRAPHICID].panel.create('slider',
            [
                [-8,2], 
                [5,2],
                [-5, st.m, 5]
            ],
            {precision: 2,name: 'm',snapWidth: 1,strokeColor:'green', fillColor: 'white', highline:{strokeColor:'green'}, baseline:{strokeColor:'green'} }); 
window[PMGRAPHICID].text54117 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-4,7 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'f(x)=' + PM_MATH.add_paren('m', 'Value', (window[PMGRAPHICID].sliderm) ? window[PMGRAPHICID].sliderm : null,1,null) + ' x + ' + PM_MATH.add_paren('b', 'Value', (window[PMGRAPHICID].sliderb) ? window[PMGRAPHICID].sliderb : null,1,null) + '';
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
		  highlightCssClass:'window[PMGRAPHICID].text54117 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text54117 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph43318 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].sliderm) ? window[PMGRAPHICID].sliderm.Value() : 0)*x+((window[PMGRAPHICID].sliderb) ? window[PMGRAPHICID].sliderb.Value() : 0);}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_1454_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_1454_SlideNo_1
	What do these buy me? tag=, masterid=1454, slideno=SlideNo_1
	'scriptblock_1454_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_1454_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1454_SlideNo_1'] = NUMBERS.symbols['scriptblock_1454_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1454_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1454_SlideNo_1'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 7.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [7.5, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointm
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    }); 
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:400px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,8,10,-1], showNavigation:false, showCopyright:false}); 
        /* Create Slider: sliderb
         */
        window[PMGRAPHICID].sliderb = window[PMGRAPHICID].panel.create('slider',
            [
                [-8,2], 
                [5,2],
                [-5, st.b, 5]
            ],
            {precision: 2,name: 'b',snapWidth: 1,strokeColor:'blue', fillColor: 'white', highline:{strokeColor:'blue'}, baseline:{strokeColor:'blue'} }); 
window[PMGRAPHICID].text4711 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-4,7 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'f(x)=' + PM_MATH.add_paren('m', 'X', (window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm : null,1,null) + ' x + ' + PM_MATH.add_paren('b', 'Value', (window[PMGRAPHICID].sliderb) ? window[PMGRAPHICID].sliderb : null,1,null) + '';
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
		  highlightCssClass:'window[PMGRAPHICID].text4711 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text4711 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph82599 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return st.m*x+((window[PMGRAPHICID].sliderb) ? window[PMGRAPHICID].sliderb.Value() : 0);}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_1454_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_1454_SlideNo_2
	What do these buy me? tag=, masterid=1454, slideno=SlideNo_2
	'scriptblock_1454_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_1454_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1454_SlideNo_2'] = NUMBERS.symbols['scriptblock_1454_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1454_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1454_SlideNo_2'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 7.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [7.5, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.b;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    }); 
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:400px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,8,10,-1], showNavigation:false, showCopyright:false}); 
        /* Create Slider: sliderm
         */
        window[PMGRAPHICID].sliderm = window[PMGRAPHICID].panel.create('slider',
            [
                [-8,2], 
                [5,2],
                [-5, st.m, 5]
            ],
            {precision: 2,name: 'm',snapWidth: 1,strokeColor:'blue', fillColor: 'white', highline:{strokeColor:'blue'}, baseline:{strokeColor:'blue'} }); 
window[PMGRAPHICID].text24610 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-4,7 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'f(x)=' + PM_MATH.add_paren('m', 'Value', (window[PMGRAPHICID].sliderm) ? window[PMGRAPHICID].sliderm : null,1,null) + ' x + ' + PM_MATH.add_paren('b', 'X', (window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb : null,1,null) + '';
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
		  highlightCssClass:'window[PMGRAPHICID].text24610 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text24610 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph41417 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].sliderm) ? window[PMGRAPHICID].sliderm.Value() : 0)*x+st.b;}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };