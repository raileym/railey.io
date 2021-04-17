
  CTNS.QUIZ_SET["e0f52b423060574823391adbb3bcd973"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1522 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1522';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1522', 2);
	
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

	jQuery(".slide_1522").each( function() {do_center(this)} );

    do_force('1522');
    
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
    factoryid: '1522',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This graph demonstrates a simple parabola and its axis of symmetry.     ",
    sponsor: "",
    figure: "",
    key: "tech-example-using-animation-and-voice",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div> ",
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
{
    slideNo: 1,
    factoryid: '1522',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This graph demonstrates a simple parabola and its axis of symmetry.     ",
    sponsor: "",
    figure: "",
    key: "tech-example-using-animation-and-voice-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div> ",
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
CTNS.NUMBERS.GID = 'quiz_1522';
CTNS.NUMBERS.equations['quiz_1522'] = [];
CTNS.NUMBERS.symbols['quiz_1522'] = CTNS.NUMBERS.symbols['quiz_1522'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1522_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1522_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1522'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1522_SlideNo_0',                ablock           = '#answerblock_1522_SlideNo_0',                acblock          = '#answercommentaryblock_1522_SlideNo_0',                                rightblock       = '#rightblock_1522_SlideNo_0',                wrongblock       = '#wrongblock_1522_SlideNo_0',                undecidedblock   = '#undecidedblock_1522_SlideNo_0',                gr3dblock        = 'graphic3dblock_1522_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_1522_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_1522_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_1522_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_1522_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_1522_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_1522_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_1522_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_1522_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_1522_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_1522_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_1522_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_1522_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_1522_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_1522_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_1522_SlideNo_0',                grblock          = 'graphicblock_1522_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1522_SlideNo_0',                grblock_A        = 'graphicblock_A_1522_SlideNo_0',                grblock_B        = 'graphicblock_B_1522_SlideNo_0',                grblock_C        = 'graphicblock_C_1522_SlideNo_0',                grblock_D        = 'graphicblock_D_1522_SlideNo_0',                grblock_E        = 'graphicblock_E_1522_SlideNo_0',                grblock_F        = 'graphicblock_F_1522_SlideNo_0',                                grblock_f        = (typeof tml_1522_SlideNo_0   !== 'undefined') ? tml_1522_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_1522_SlideNo_0 !== 'undefined') ? tml_Q_1522_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_1522_SlideNo_0 !== 'undefined') ? tml_A_1522_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_1522_SlideNo_0 !== 'undefined') ? tml_B_1522_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_1522_SlideNo_0 !== 'undefined') ? tml_C_1522_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_1522_SlideNo_0 !== 'undefined') ? tml_D_1522_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_1522_SlideNo_0 !== 'undefined') ? tml_E_1522_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_1522_SlideNo_0 !== 'undefined') ? tml_F_1522_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_1522',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1522_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_1522'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  symbols.hello = (function() {             return function(x) {                 return "hello.";             };         })();                  symbols.animate = null;                  symbols.sliderAnimate = (function(symbols, is_gt, is_pos, is_neg, audio) {             var incr = 0.5,                 voice = {};                                  voice.voice1 = true;                 voice.voice2 = true;                 voice.voice3 = true;                              return function () {                 var g = window[grblock],                     s = window[grblock].slidera._smin,                     e = window[grblock].slidera._smax,                     sdiff = e-s,                     newval = window[grblock].slidera.Value()+incr;                                      window[grblock].slidera.position = (newval-s)/sdiff;                                  if ( voice.voice1 && is_pos(incr) ) {                     voice.voice1 = false;                                          audio(' \\ Increasing values of the constant -- a -- cause \\ the parabola to compress and become more steep. \\ ', grblock);                                  }                  if ( voice.voice2 && is_neg(incr) ) {                     voice.voice2 = false;                                          audio(' \\ <phoneme alphabet="ibm" ph=".1di.0kri.0siG">decreasing</phoneme>  values of the constant -- a -- cause \\ the parabola to expand and become more broad. \\ ', grblock);                                  }                  if ( voice.voice3 && is_neg(newval) ) {                     voice.voice3 = false;                                          audio(' \\ Negative values of the constant -- a -- cause \\ the parabola to open downward. \\ ', grblock);                                  }                  if ( is_gt(window[grblock].slidera.position, 1.0) ) {                     incr = -0.5;                     window[grblock].slidera.position = (newval + incr - s)/sdiff;                 }                                  if ( is_lt(window[grblock].slidera.position, 0.0) ) {                     incr = 0.5;                     window[grblock].slidera.position = (newval + incr - s)/sdiff;                 }                                  window[grblock].panel.update();                 clearTimeout(symbols.animate);                 symbols.animate = setTimeout(symbols.sliderAnimate,1500);             };         })(symbols, is_gt, is_pos, is_neg, audio);          q.push(' <button id="button_graphicblock_1522_1" class="ctns-button button_graphicblock_1522_1">Animate</button> ');                  q.push( graphicblock( {"dim":"6", "gid":grblock}) );          /*tml_graphicblock_1522_1(NUMBERS);*/          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                      $("body").on("click", "button#button_graphicblock_1522_1", (function(symbols, audio) {             return function() {                 var g = window[grblock],                     b = $("button#button_graphicblock_1522_1");                  if (!symbols.animate) {                     $(b).html('Stop');                     symbols.sliderAnimate();                 } else {                      $(b).html('Animate');                     clearTimeout(symbols.animate);                     symbols.animate = null;                 }                              };         })(symbols, audio));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1522_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_1522_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1522'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1522_SlideNo_1',                ablock           = '#answerblock_1522_SlideNo_1',                acblock          = '#answercommentaryblock_1522_SlideNo_1',                                rightblock       = '#rightblock_1522_SlideNo_1',                wrongblock       = '#wrongblock_1522_SlideNo_1',                undecidedblock   = '#undecidedblock_1522_SlideNo_1',                gr3dblock        = 'graphic3dblock_1522_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_1522_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_1522_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_1522_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_1522_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_1522_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_1522_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_1522_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_1522_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_1522_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_1522_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_1522_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_1522_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_1522_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_1522_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_1522_SlideNo_1',                grblock          = 'graphicblock_1522_SlideNo_1',                grblock_Q        = 'graphicblock_Q_1522_SlideNo_1',                grblock_A        = 'graphicblock_A_1522_SlideNo_1',                grblock_B        = 'graphicblock_B_1522_SlideNo_1',                grblock_C        = 'graphicblock_C_1522_SlideNo_1',                grblock_D        = 'graphicblock_D_1522_SlideNo_1',                grblock_E        = 'graphicblock_E_1522_SlideNo_1',                grblock_F        = 'graphicblock_F_1522_SlideNo_1',                                grblock_f        = (typeof tml_1522_SlideNo_1   !== 'undefined') ? tml_1522_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_1522_SlideNo_1 !== 'undefined') ? tml_Q_1522_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_1522_SlideNo_1 !== 'undefined') ? tml_A_1522_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_1522_SlideNo_1 !== 'undefined') ? tml_B_1522_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_1522_SlideNo_1 !== 'undefined') ? tml_C_1522_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_1522_SlideNo_1 !== 'undefined') ? tml_D_1522_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_1522_SlideNo_1 !== 'undefined') ? tml_E_1522_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_1522_SlideNo_1 !== 'undefined') ? tml_F_1522_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_1522',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1522_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_1522'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  symbols.hello = (function() {             return function(x) {                 return "hello.";             };         })();                  symbols.animate = null;                  symbols.sliderAnimate = (function(symbols, is_gt, is_pos, is_neg, audio) {             var incr = 0.25,                 voice = {};                                  voice.voice1 = true;                                  var b = $("button#button_graphicblock_1522_1");                                       return function () {                 var g = window[grblock],                     s = window[grblock].slidera._smin,                     e = window[grblock].slidera._smax,                     sdiff = e-s,                     newval = window[grblock].slidera.Value()+incr;                                      window[grblock].slidera.position = (newval-s)/sdiff;                                  if ( voice.voice1 && is_pos(incr) ) {                     voice.voice1 = false;                                          audio(' \\ Increasing values of the constant -- a -- cause \\ the parabola to compress and become more steep. \\ ', grblock);                                  }                  if ( ! is_gt(window[grblock].slidera.position, 1.0) ) {                      window[grblock].panel.update();                     clearTimeout(symbols.animate);                     symbols.animate = setTimeout(symbols.sliderAnimate,1500);                  } else {                                      $(b).html('Animate');                     clearTimeout(symbols.animate);                     symbols.animate = null;                                  }                              };         })(symbols, is_gt, is_pos, is_neg, audio);          q.push(' <button id="button_graphicblock_1522_1" class="ctns-button button_graphicblock_1522_1">Animate</button> ');                  q.push( graphicblock( {"dim":"6", "gid":grblock}) );          tml_graphicblock_1522_1(NUMBERS);          $('#TMPL_QUESTIONID').html(tex({"symbols":symbols}, q.join(' ')));                      $("body").on("click", "button#button_graphicblock_1522_1", (function(symbols, audio) {             return function() {                 var g = window[grblock],                     b = $("button#button_graphicblock_1522_1");                  if (!symbols.animate) {                      $(b).html('Stop');                     symbols.sliderAnimate();                  } else {                      $(b).html('Animate');                     clearTimeout(symbols.animate);                     symbols.animate = null;                                      }                              };         })(symbols, audio));          [grblock].forEach(function(e) {             if (typeof window[e] !== "undefined" && typeof window[e].panel !== "undefined" ) {                 window[e].panel.update();             }         });                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_1522_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_1522_SlideNo_0
	What do these buy me? tag=, masterid=1522, slideno=SlideNo_0
	'scriptblock_1522_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_1522_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1522_SlideNo_0'] = NUMBERS.symbols['scriptblock_1522_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1522_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1522_SlideNo_0'];
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
		 
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:200px; width:400px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text92370 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-5,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'f(x)=' + PM_MATH.add_precision('a', 'Value', (window[PMGRAPHICID].slidera) ? window[PMGRAPHICID].slidera : null,2,'d2f') + ' x^2';
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
		  highlightCssClass:'window[PMGRAPHICID].text92370 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text92370 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 
        /* Create Slider: slidera
         */
        window[PMGRAPHICID].slidera = window[PMGRAPHICID].panel.create('slider',
            [
                [-7,4], 
                [3,4],
                [-5, 0.5, 5]
            ],
            {precision: 0,name: 'a',snapWidth: 0.5,strokeColor:'blue', fillColor: 'white', highline:{strokeColor:'blue'}, baseline:{strokeColor:'blue'} }); /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph87891 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].slidera) ? window[PMGRAPHICID].slidera.Value() : 0)*Math.pow(x,2);}, 
            -20,
            20], 
            {strokeColor:'blue',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_1522_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_1522_SlideNo_1
	What do these buy me? tag=, masterid=1522, slideno=SlideNo_1
	'scriptblock_1522_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_1522_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1522_SlideNo_1'] = NUMBERS.symbols['scriptblock_1522_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1522_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1522_SlideNo_1'];
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
		 
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:200px; width:400px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text66787 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-5,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'f(x)=' + PM_MATH.add_precision('a', 'Value', (window[PMGRAPHICID].slidera) ? window[PMGRAPHICID].slidera : null,2,'d2f') + ' x^2';
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
		  highlightCssClass:'window[PMGRAPHICID].text66787 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text66787 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 
        /* Create Slider: slidera
         */
        window[PMGRAPHICID].slidera = window[PMGRAPHICID].panel.create('slider',
            [
                [-7,4], 
                [3,4],
                [-5, 0.25, 5]
            ],
            {precision: 0,name: 'a',snapWidth: 0.25,strokeColor:'blue', fillColor: 'white', highline:{strokeColor:'blue'}, baseline:{strokeColor:'blue'} }); /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph7431 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].slidera) ? window[PMGRAPHICID].slidera.Value() : 0)*Math.pow(x,2);}, 
            -20,
            20], 
            {strokeColor:'blue',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };