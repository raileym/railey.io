
  CTNS.QUIZ_SET["7213589eeefc912f821d77865bdae7d2"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4830 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4830';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4830', 4);
	
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

	jQuery(".slide_4830").each( function() {do_center(this)} );

    do_force('4830');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         4,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '4830',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This graph demonstrates a simple random line, as in 'The graph of a linear function is a straight line.' Values for m and b vary.     ",
    sponsor: "",
    figure: "",
    key: "linearQ11-1",
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
{
    slideNo: 1,
    factoryid: '4830',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This graph demonstrates a simple random line, as in 'The graph of a linear function is a straight line.' Values for m and b vary -- m is positive.     ",
    sponsor: "",
    figure: "",
    key: "linearQ11-2",
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
{
    slideNo: 2,
    factoryid: '4830',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This graph demonstrates a simple random line, as in 'The graph of a linear function is a straight line.' Values for m and b vary -- m is negative.     ",
    sponsor: "",
    figure: "",
    key: "linearQ11-3",
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
{
    slideNo: 3,
    factoryid: '4830',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This graph demonstrates a random horizontal line, as in 'The graph of a constant function is a horizontal line.' Values for m and b vary -- m is zero.     ",
    sponsor: "",
    figure: "",
    key: "linearQ11-4",
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
CTNS.NUMBERS.GID = 'quiz_4830';
CTNS.NUMBERS.equations['quiz_4830'] = [];
CTNS.NUMBERS.symbols['quiz_4830'] = CTNS.NUMBERS.symbols['quiz_4830'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4830_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4830_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4830'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4830_SlideNo_0',                ablock           = '#answerblock_4830_SlideNo_0',                acblock          = '#answercommentaryblock_4830_SlideNo_0',                                rightblock       = '#rightblock_4830_SlideNo_0',                wrongblock       = '#wrongblock_4830_SlideNo_0',                undecidedblock   = '#undecidedblock_4830_SlideNo_0',                speech_F         = ($('#speech_F_4830_SlideNo_0').length == 0) ? null : $('#speech_F_4830_SlideNo_0').html(),                speech_B         = ($('#speech_B_4830_SlideNo_0').length == 0) ? null : $('#speech_B_4830_SlideNo_0').html(),                speech_1         = ($('#speech_1_4830_SlideNo_0').length == 0) ? null : $('#speech_1_4830_SlideNo_0').html(),                speech_2         = ($('#speech_2_4830_SlideNo_0').length == 0) ? null : $('#speech_2_4830_SlideNo_0').html(),                speech_3         = ($('#speech_3_4830_SlideNo_0').length == 0) ? null : $('#speech_3_4830_SlideNo_0').html(),                speech_4         = ($('#speech_4_4830_SlideNo_0').length == 0) ? null : $('#speech_4_4830_SlideNo_0').html(),                speech_5         = ($('#speech_5_4830_SlideNo_0').length == 0) ? null : $('#speech_5_4830_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_4830_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_4830_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_4830_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_4830_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_4830_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_4830_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_4830_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_4830_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_4830_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_4830_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_4830_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_4830_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_4830_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_4830_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_4830_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_4830_SlideNo_0',                grblock          = 'graphicblock_4830_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4830_SlideNo_0',                grblock_A        = 'graphicblock_A_4830_SlideNo_0',                grblock_B        = 'graphicblock_B_4830_SlideNo_0',                grblock_C        = 'graphicblock_C_4830_SlideNo_0',                grblock_D        = 'graphicblock_D_4830_SlideNo_0',                grblock_E        = 'graphicblock_E_4830_SlideNo_0',                grblock_F        = 'graphicblock_F_4830_SlideNo_0',                                grblock_f        = (typeof tml_4830_SlideNo_0   !== 'undefined') ? tml_4830_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4830_SlideNo_0 !== 'undefined') ? tml_Q_4830_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4830_SlideNo_0 !== 'undefined') ? tml_A_4830_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4830_SlideNo_0 !== 'undefined') ? tml_B_4830_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4830_SlideNo_0 !== 'undefined') ? tml_C_4830_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4830_SlideNo_0 !== 'undefined') ? tml_D_4830_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4830_SlideNo_0 !== 'undefined') ? tml_E_4830_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4830_SlideNo_0 !== 'undefined') ? tml_F_4830_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4830',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4830_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4830'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [-1, -2, -3, 1, 2, 3].ctns_rand();         symbols.b = [-1, -2, -3, 1, 2, 3].ctns_rand();                             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4830_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_4830_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4830'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4830_SlideNo_1',                ablock           = '#answerblock_4830_SlideNo_1',                acblock          = '#answercommentaryblock_4830_SlideNo_1',                                rightblock       = '#rightblock_4830_SlideNo_1',                wrongblock       = '#wrongblock_4830_SlideNo_1',                undecidedblock   = '#undecidedblock_4830_SlideNo_1',                speech_F         = ($('#speech_F_4830_SlideNo_1').length == 0) ? null : $('#speech_F_4830_SlideNo_1').html(),                speech_B         = ($('#speech_B_4830_SlideNo_1').length == 0) ? null : $('#speech_B_4830_SlideNo_1').html(),                speech_1         = ($('#speech_1_4830_SlideNo_1').length == 0) ? null : $('#speech_1_4830_SlideNo_1').html(),                speech_2         = ($('#speech_2_4830_SlideNo_1').length == 0) ? null : $('#speech_2_4830_SlideNo_1').html(),                speech_3         = ($('#speech_3_4830_SlideNo_1').length == 0) ? null : $('#speech_3_4830_SlideNo_1').html(),                speech_4         = ($('#speech_4_4830_SlideNo_1').length == 0) ? null : $('#speech_4_4830_SlideNo_1').html(),                speech_5         = ($('#speech_5_4830_SlideNo_1').length == 0) ? null : $('#speech_5_4830_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_4830_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_4830_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_4830_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_4830_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_4830_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_4830_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_4830_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_4830_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_4830_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_4830_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_4830_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_4830_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_4830_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_4830_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_4830_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_4830_SlideNo_1',                grblock          = 'graphicblock_4830_SlideNo_1',                grblock_Q        = 'graphicblock_Q_4830_SlideNo_1',                grblock_A        = 'graphicblock_A_4830_SlideNo_1',                grblock_B        = 'graphicblock_B_4830_SlideNo_1',                grblock_C        = 'graphicblock_C_4830_SlideNo_1',                grblock_D        = 'graphicblock_D_4830_SlideNo_1',                grblock_E        = 'graphicblock_E_4830_SlideNo_1',                grblock_F        = 'graphicblock_F_4830_SlideNo_1',                                grblock_f        = (typeof tml_4830_SlideNo_1   !== 'undefined') ? tml_4830_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_4830_SlideNo_1 !== 'undefined') ? tml_Q_4830_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_4830_SlideNo_1 !== 'undefined') ? tml_A_4830_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_4830_SlideNo_1 !== 'undefined') ? tml_B_4830_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_4830_SlideNo_1 !== 'undefined') ? tml_C_4830_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_4830_SlideNo_1 !== 'undefined') ? tml_D_4830_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_4830_SlideNo_1 !== 'undefined') ? tml_E_4830_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_4830_SlideNo_1 !== 'undefined') ? tml_F_4830_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_4830',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4830_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_4830'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [0.25, 0.5, 0.75, 0.25, 0.5, 0.75, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 3.5].ctns_rand();         symbols.b = [-1, -2, -3, 1, 2, 3].ctns_rand();                             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4830_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_4830_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4830'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4830_SlideNo_2',                ablock           = '#answerblock_4830_SlideNo_2',                acblock          = '#answercommentaryblock_4830_SlideNo_2',                                rightblock       = '#rightblock_4830_SlideNo_2',                wrongblock       = '#wrongblock_4830_SlideNo_2',                undecidedblock   = '#undecidedblock_4830_SlideNo_2',                speech_F         = ($('#speech_F_4830_SlideNo_2').length == 0) ? null : $('#speech_F_4830_SlideNo_2').html(),                speech_B         = ($('#speech_B_4830_SlideNo_2').length == 0) ? null : $('#speech_B_4830_SlideNo_2').html(),                speech_1         = ($('#speech_1_4830_SlideNo_2').length == 0) ? null : $('#speech_1_4830_SlideNo_2').html(),                speech_2         = ($('#speech_2_4830_SlideNo_2').length == 0) ? null : $('#speech_2_4830_SlideNo_2').html(),                speech_3         = ($('#speech_3_4830_SlideNo_2').length == 0) ? null : $('#speech_3_4830_SlideNo_2').html(),                speech_4         = ($('#speech_4_4830_SlideNo_2').length == 0) ? null : $('#speech_4_4830_SlideNo_2').html(),                speech_5         = ($('#speech_5_4830_SlideNo_2').length == 0) ? null : $('#speech_5_4830_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_4830_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_4830_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_4830_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_4830_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_4830_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_4830_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_4830_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_4830_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_4830_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_4830_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_4830_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_4830_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_4830_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_4830_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_4830_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_4830_SlideNo_2',                grblock          = 'graphicblock_4830_SlideNo_2',                grblock_Q        = 'graphicblock_Q_4830_SlideNo_2',                grblock_A        = 'graphicblock_A_4830_SlideNo_2',                grblock_B        = 'graphicblock_B_4830_SlideNo_2',                grblock_C        = 'graphicblock_C_4830_SlideNo_2',                grblock_D        = 'graphicblock_D_4830_SlideNo_2',                grblock_E        = 'graphicblock_E_4830_SlideNo_2',                grblock_F        = 'graphicblock_F_4830_SlideNo_2',                                grblock_f        = (typeof tml_4830_SlideNo_2   !== 'undefined') ? tml_4830_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_4830_SlideNo_2 !== 'undefined') ? tml_Q_4830_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_4830_SlideNo_2 !== 'undefined') ? tml_A_4830_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_4830_SlideNo_2 !== 'undefined') ? tml_B_4830_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_4830_SlideNo_2 !== 'undefined') ? tml_C_4830_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_4830_SlideNo_2 !== 'undefined') ? tml_D_4830_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_4830_SlideNo_2 !== 'undefined') ? tml_E_4830_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_4830_SlideNo_2 !== 'undefined') ? tml_F_4830_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_4830',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4830_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_4830'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [-0.25, -0.5, -0.75, -0.25, -0.5, -0.75, -0.25, -0.5, -0.75, -1, -1.5, -2, -2.5, -3, -3.5].ctns_rand();         symbols.b = [-1, -2, -3, 1, 2, 3].ctns_rand();                             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4830_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_4830_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4830'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4830_SlideNo_3',                ablock           = '#answerblock_4830_SlideNo_3',                acblock          = '#answercommentaryblock_4830_SlideNo_3',                                rightblock       = '#rightblock_4830_SlideNo_3',                wrongblock       = '#wrongblock_4830_SlideNo_3',                undecidedblock   = '#undecidedblock_4830_SlideNo_3',                speech_F         = ($('#speech_F_4830_SlideNo_3').length == 0) ? null : $('#speech_F_4830_SlideNo_3').html(),                speech_B         = ($('#speech_B_4830_SlideNo_3').length == 0) ? null : $('#speech_B_4830_SlideNo_3').html(),                speech_1         = ($('#speech_1_4830_SlideNo_3').length == 0) ? null : $('#speech_1_4830_SlideNo_3').html(),                speech_2         = ($('#speech_2_4830_SlideNo_3').length == 0) ? null : $('#speech_2_4830_SlideNo_3').html(),                speech_3         = ($('#speech_3_4830_SlideNo_3').length == 0) ? null : $('#speech_3_4830_SlideNo_3').html(),                speech_4         = ($('#speech_4_4830_SlideNo_3').length == 0) ? null : $('#speech_4_4830_SlideNo_3').html(),                speech_5         = ($('#speech_5_4830_SlideNo_3').length == 0) ? null : $('#speech_5_4830_SlideNo_3').html(),                gr3dblock        = 'graphic3dblock_4830_SlideNo_3',                gr3dblock_A      = 'graphic3dblock_A_4830_SlideNo_3',                gr3dblock_B      = 'graphic3dblock_B_4830_SlideNo_3',                gr3dblock_C      = 'graphic3dblock_C_4830_SlideNo_3',                gr3dblock_D      = 'graphic3dblock_D_4830_SlideNo_3',                gr3dblock_E      = 'graphic3dblock_E_4830_SlideNo_3',                gr3dblock_F      = 'graphic3dblock_F_4830_SlideNo_3',                gr3dblock_1      = 'graphic3dblock_1_4830_SlideNo_3',                gr3dblock_2      = 'graphic3dblock_2_4830_SlideNo_3',                gr3dblock_3      = 'graphic3dblock_3_4830_SlideNo_3',                gr3dblock_4      = 'graphic3dblock_4_4830_SlideNo_3',                gr3dblock_5      = 'graphic3dblock_5_4830_SlideNo_3',                gr3dblock_6      = 'graphic3dblock_6_4830_SlideNo_3',                gr3dblock_7      = 'graphic3dblock_7_4830_SlideNo_3',                gr3dblock_8      = 'graphic3dblock_8_4830_SlideNo_3',                gr3dblock_9      = 'graphic3dblock_9_4830_SlideNo_3',                grblock          = 'graphicblock_4830_SlideNo_3',                grblock_Q        = 'graphicblock_Q_4830_SlideNo_3',                grblock_A        = 'graphicblock_A_4830_SlideNo_3',                grblock_B        = 'graphicblock_B_4830_SlideNo_3',                grblock_C        = 'graphicblock_C_4830_SlideNo_3',                grblock_D        = 'graphicblock_D_4830_SlideNo_3',                grblock_E        = 'graphicblock_E_4830_SlideNo_3',                grblock_F        = 'graphicblock_F_4830_SlideNo_3',                                grblock_f        = (typeof tml_4830_SlideNo_3   !== 'undefined') ? tml_4830_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_4830_SlideNo_3 !== 'undefined') ? tml_Q_4830_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_4830_SlideNo_3 !== 'undefined') ? tml_A_4830_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_4830_SlideNo_3 !== 'undefined') ? tml_B_4830_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_4830_SlideNo_3 !== 'undefined') ? tml_C_4830_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_4830_SlideNo_3 !== 'undefined') ? tml_D_4830_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_4830_SlideNo_3 !== 'undefined') ? tml_E_4830_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_4830_SlideNo_3 !== 'undefined') ? tml_F_4830_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_4830',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4830_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_4830'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 0;         symbols.b = [-1, -2, -3, 1, 2, 3].ctns_rand();                             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4830_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4830_SlideNo_0
	What do these buy me? tag=, masterid=4830, slideno=SlideNo_0
	'scriptblock_4830_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_4830_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4830_SlideNo_0'] = NUMBERS.symbols['scriptblock_4830_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4830_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4830_SlideNo_0'];
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
			boundingbox: [-5,5,5,-5] ,
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
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph89143 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0);}, 
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
function tml_4830_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4830_SlideNo_1
	What do these buy me? tag=, masterid=4830, slideno=SlideNo_1
	'scriptblock_4830_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_4830_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4830_SlideNo_1'] = NUMBERS.symbols['scriptblock_4830_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4830_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4830_SlideNo_1'];
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
			boundingbox: [-5,5,5,-5] ,
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
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph53789 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0);}, 
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
function tml_4830_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4830_SlideNo_2
	What do these buy me? tag=, masterid=4830, slideno=SlideNo_2
	'scriptblock_4830_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_4830_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4830_SlideNo_2'] = NUMBERS.symbols['scriptblock_4830_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4830_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4830_SlideNo_2'];
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
			boundingbox: [-5,5,5,-5] ,
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
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph45245 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0);}, 
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
function tml_4830_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4830_SlideNo_3
	What do these buy me? tag=, masterid=4830, slideno=SlideNo_3
	'scriptblock_4830_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_4830_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4830_SlideNo_3'] = NUMBERS.symbols['scriptblock_4830_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4830_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4830_SlideNo_3'];
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
			boundingbox: [-5,5,5,-5] ,
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
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph42246 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0);}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };