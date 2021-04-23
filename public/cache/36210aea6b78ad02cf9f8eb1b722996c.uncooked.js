
  CTNS.QUIZ_SET["36210aea6b78ad02cf9f8eb1b722996c"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: GENERIC_MARKER */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_GENERIC_MARKER';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 3);
	
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

	jQuery(".slide_GENERIC_MARKER").each( function() {do_center(this)} );

    do_force('GENERIC_MARKER');
    
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Uses TWO sliders. This example demonstrates a linear function using sliders for values m and b. The  resulting equation is reflected and updated.     ",
    sponsor: "",
    figure: "",
    key: "linearQ12-1",
    label: "Ctns\Question",
    callHome: "PLACEHOLDER CALLHOME",
    callHomeCss: "callhome",
    callHomeStyle: "font-weight:bold",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example demonstrates a linear function using a slider for the value b. The  resulting equation is reflected and updated.     ",
    sponsor: "",
    figure: "",
    key: "linearQ12-2",
    label: "Ctns\Question",
    callHome: "PLACEHOLDER CALLHOME",
    callHomeCss: "callhome",
    callHomeStyle: "font-weight:bold",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example demonstrates a linear function using a slider for the value m. The  resulting equation is reflected and updated.     ",
    sponsor: "",
    figure: "",
    key: "linearQ12-3",
    label: "Ctns\Question",
    callHome: "PLACEHOLDER CALLHOME",
    callHomeCss: "callhome",
    callHomeStyle: "font-weight:bold",
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
CTNS.NUMBERS.GID = 'quiz_GENERIC_MARKER';
CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'] = [];
CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] = CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 2;         symbols.b = 2;          var q = [];              symbols.m_ = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b_ = [-3, -2, -1, 1, 2, 3].ctns_rand();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_1',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_1',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_1',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_1',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_1',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_1',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_1').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_1').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_1').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_1').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_1').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_1').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_1',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_1',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_1',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_1',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_1',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_1',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_1',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_1',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_1',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_1   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 2;         symbols.b = 2;          symbols.m = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = [-3, -2, -1, 1, 2, 3].ctns_rand();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_2',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_2',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_2',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_2',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_2',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_2',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_2').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_2').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_2').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_2').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_2').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_2').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_2',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_2',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_2',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_2',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_2',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_2',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_2',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_2',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_2',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_2   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 2;         symbols.b = 2;          symbols.m_ = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b_ = [-3, -2, -1, 1, 2, 3].ctns_rand();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
			.attr('class', ' jxgbox pm-no-border jxgbox-panel')
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
window[PMGRAPHICID].text74801 = window[PMGRAPHICID].panel.create('text', 
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
		  highlightCssClass:'window[PMGRAPHICID].text74801 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text74801 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph25418 = window[PMGRAPHICID].board.create('functiongraph', 
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
function tml_GENERIC_MARKER_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_1
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_1
	'scriptblock_GENERIC_MARKER_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
			.attr('class', ' jxgbox pm-no-border jxgbox-panel')
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
window[PMGRAPHICID].text50730 = window[PMGRAPHICID].panel.create('text', 
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
		  highlightCssClass:'window[PMGRAPHICID].text50730 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text50730 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph47573 = window[PMGRAPHICID].board.create('functiongraph', 
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
function tml_GENERIC_MARKER_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_2
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_2
	'scriptblock_GENERIC_MARKER_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
			.attr('class', ' jxgbox pm-no-border jxgbox-panel')
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
window[PMGRAPHICID].text30196 = window[PMGRAPHICID].panel.create('text', 
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
		  highlightCssClass:'window[PMGRAPHICID].text30196 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text30196 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph85024 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].sliderm) ? window[PMGRAPHICID].sliderm.Value() : 0)*x+st.b;}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };