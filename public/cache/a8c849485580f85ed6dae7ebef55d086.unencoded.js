
  CTNS.QUIZ_SET["a8c849485580f85ed6dae7ebef55d086"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2264 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2264';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2264', 1);
	
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

	jQuery(".slide_2264").each( function() {do_center(this)} );

    do_force('2264');
    
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
    factoryid: '2264',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axCommuteRealS1",
    label: "Ctns\Question",
    callHome: "PLACEHOLDER CALLHOME",
    callHomeCss: "callhome",
    callHomeStyle: "font-weight:bold",
    multipleChoice: {a: "True", b: "False" },
    back: " <strong>Addition and multiplication are commutative</strong> for the set of real numbers <div class='tex' data-expr='\\mathbb{R}'></div> such that <br/><br/><div class='tex' data-expr='x+y = y+x'></div> &nbsp; and &nbsp; <div class='tex' data-expr='x \\cdot y = y \\cdot x'></div><br/><br/>for <div class='tex' data-expr='x, y \\in \\mathbb{R}.'></div>     ",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "<div id='speech_F_MASTERID_SLIDENO' class='ctns-speech ctns-hide'>/audio/e87bf30e62c4c4299a2f9343a082831a.mp3</div>",
    backSpeak: "<div id='speech_B_MASTERID_SLIDENO' class='ctns-speech ctns-hide'>/audio/950abcbb9715cd95bb187fc2675198bb.mp3</div>",
    frontSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone-alt'></i>",
    backSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone-alt'></i>",
    front: " Field Axioms - Commutativity<br/><br/>Real Numbers <div class='tex' data-expr='\\mathbb{R}'></div>     ",
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
    backStyle: "font-size:80%;width:70%;",
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
CTNS.NUMBERS.GID = 'quiz_2264';
CTNS.NUMBERS.equations['quiz_2264'] = [];
CTNS.NUMBERS.symbols['quiz_2264'] = CTNS.NUMBERS.symbols['quiz_2264'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2264_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2264_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2264'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2264_SlideNo_0',                ablock           = '#answerblock_2264_SlideNo_0',                acblock          = '#answercommentaryblock_2264_SlideNo_0',                                rightblock       = '#rightblock_2264_SlideNo_0',                wrongblock       = '#wrongblock_2264_SlideNo_0',                undecidedblock   = '#undecidedblock_2264_SlideNo_0',                speech_F         = ($('#speech_F_2264_SlideNo_0').length == 0) ? null : $('#speech_F_2264_SlideNo_0').html(),                speech_B         = ($('#speech_B_2264_SlideNo_0').length == 0) ? null : $('#speech_B_2264_SlideNo_0').html(),                speech_1         = ($('#speech_1_2264_SlideNo_0').length == 0) ? null : $('#speech_1_2264_SlideNo_0').html(),                speech_2         = ($('#speech_2_2264_SlideNo_0').length == 0) ? null : $('#speech_2_2264_SlideNo_0').html(),                speech_3         = ($('#speech_3_2264_SlideNo_0').length == 0) ? null : $('#speech_3_2264_SlideNo_0').html(),                speech_4         = ($('#speech_4_2264_SlideNo_0').length == 0) ? null : $('#speech_4_2264_SlideNo_0').html(),                speech_5         = ($('#speech_5_2264_SlideNo_0').length == 0) ? null : $('#speech_5_2264_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_2264_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_2264_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_2264_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_2264_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_2264_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_2264_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_2264_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_2264_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_2264_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_2264_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_2264_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_2264_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_2264_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_2264_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_2264_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_2264_SlideNo_0',                grblock          = 'graphicblock_2264_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2264_SlideNo_0',                grblock_A        = 'graphicblock_A_2264_SlideNo_0',                grblock_B        = 'graphicblock_B_2264_SlideNo_0',                grblock_C        = 'graphicblock_C_2264_SlideNo_0',                grblock_D        = 'graphicblock_D_2264_SlideNo_0',                grblock_E        = 'graphicblock_E_2264_SlideNo_0',                grblock_F        = 'graphicblock_F_2264_SlideNo_0',                                grblock_f        = (typeof tml_2264_SlideNo_0   !== 'undefined') ? tml_2264_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2264_SlideNo_0 !== 'undefined') ? tml_Q_2264_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2264_SlideNo_0 !== 'undefined') ? tml_A_2264_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2264_SlideNo_0 !== 'undefined') ? tml_B_2264_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2264_SlideNo_0 !== 'undefined') ? tml_C_2264_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2264_SlideNo_0 !== 'undefined') ? tml_D_2264_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2264_SlideNo_0 !== 'undefined') ? tml_E_2264_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2264_SlideNo_0 !== 'undefined') ? tml_F_2264_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2264',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2264_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2264'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};