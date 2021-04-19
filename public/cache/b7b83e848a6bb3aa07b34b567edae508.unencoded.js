
  CTNS.QUIZ_SET["b7b83e848a6bb3aa07b34b567edae508"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4570 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4570';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4570', 6);
	
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

	jQuery(".slide_4570").each( function() {do_center(this)} );

    do_force('4570');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         6,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '4570',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "quadQ6-1a",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 1,
    factoryid: '4570',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: " Graph the two points as given.     ",
    key: "quadQ6-1b",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div><br><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 2,
    factoryid: '4570',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: " Add the axis of symmetry at <div class='tex' data-expr='x = h'></div> from the vertex <div class='tex' data-expr='(h,k)'></div>.     ",
    key: "quadQ6-1c",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div><br><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 3,
    factoryid: '4570',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: " Add the symmetric point.     ",
    key: "quadQ6-1d",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div><br><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 4,
    factoryid: '4570',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: " Connect the points to form a graph.     ",
    key: "quadQ6-1e",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div><br><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 5,
    factoryid: '4570',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "quadQ6-2",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div><br><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_Q_MASTERID graph hide'></div><div id='graphicblock_Q_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_Q_MASTERIDpanel'></div><div class='meta graphicblock_Q_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div><br><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_A_MASTERID graph hide'></div><div id='graphicblock_A_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_A_MASTERIDpanel'></div><div class='meta graphicblock_A_MASTERID panel hide'></div></div>     ",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
]);
/* This values are set only once for any particular
 * quiz container.
 */
CTNS.NUMBERS.GID = 'quiz_4570';
CTNS.NUMBERS.equations['quiz_4570'] = [];
CTNS.NUMBERS.symbols['quiz_4570'] = CTNS.NUMBERS.symbols['quiz_4570'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4570_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4570_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4570'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4570_SlideNo_0',                ablock           = '#answerblock_4570_SlideNo_0',                acblock          = '#answercommentaryblock_4570_SlideNo_0',                                rightblock       = '#rightblock_4570_SlideNo_0',                wrongblock       = '#wrongblock_4570_SlideNo_0',                undecidedblock   = '#undecidedblock_4570_SlideNo_0',                speech_F         = ($('#speech_F_4570_SlideNo_0').length == 0) ? null : $('#speech_F_4570_SlideNo_0').html(),                speech_B         = ($('#speech_B_4570_SlideNo_0').length == 0) ? null : $('#speech_B_4570_SlideNo_0').html(),                speech_1         = ($('#speech_1_4570_SlideNo_0').length == 0) ? null : $('#speech_1_4570_SlideNo_0').html(),                speech_2         = ($('#speech_2_4570_SlideNo_0').length == 0) ? null : $('#speech_2_4570_SlideNo_0').html(),                speech_3         = ($('#speech_3_4570_SlideNo_0').length == 0) ? null : $('#speech_3_4570_SlideNo_0').html(),                speech_4         = ($('#speech_4_4570_SlideNo_0').length == 0) ? null : $('#speech_4_4570_SlideNo_0').html(),                speech_5         = ($('#speech_5_4570_SlideNo_0').length == 0) ? null : $('#speech_5_4570_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_4570_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_4570_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_4570_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_4570_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_4570_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_4570_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_4570_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_4570_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_4570_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_4570_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_4570_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_4570_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_4570_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_4570_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_4570_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_4570_SlideNo_0',                grblock          = 'graphicblock_4570_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4570_SlideNo_0',                grblock_A        = 'graphicblock_A_4570_SlideNo_0',                grblock_B        = 'graphicblock_B_4570_SlideNo_0',                grblock_C        = 'graphicblock_C_4570_SlideNo_0',                grblock_D        = 'graphicblock_D_4570_SlideNo_0',                grblock_E        = 'graphicblock_E_4570_SlideNo_0',                grblock_F        = 'graphicblock_F_4570_SlideNo_0',                                grblock_f        = (typeof tml_4570_SlideNo_0   !== 'undefined') ? tml_4570_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4570_SlideNo_0 !== 'undefined') ? tml_Q_4570_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4570_SlideNo_0 !== 'undefined') ? tml_A_4570_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4570_SlideNo_0 !== 'undefined') ? tml_B_4570_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4570_SlideNo_0 !== 'undefined') ? tml_C_4570_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4570_SlideNo_0 !== 'undefined') ? tml_D_4570_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4570_SlideNo_0 !== 'undefined') ? tml_E_4570_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4570_SlideNo_0 !== 'undefined') ? tml_F_4570_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4570',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4570_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4570'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             do {         /* Start Here, Malcolm */         gsymbols.a = [-3, -2, -1, 1, 2, 3].ctns_rand();         gsymbols.b = gsymbols.a*2*[-1, -2, 1, 2].ctns_rand();         gsymbols.c = [-2, -1, 0, 1, 2].ctns_rand();          gsymbols.h = gsymbols.b / (-2 * gsymbols.a),         gsymbols.k = gsymbols.a * Math.pow(gsymbols.h, 2) + gsymbols.b * gsymbols.h + gsymbols.c;     } while (is_lt(gsymbols.h,-5) || is_lt(gsymbols.k,-3) || is_gt(gsymbols.h,5) || is_gt(gsymbols.k,3) );                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4570_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_4570_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4570'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4570_SlideNo_1',                ablock           = '#answerblock_4570_SlideNo_1',                acblock          = '#answercommentaryblock_4570_SlideNo_1',                                rightblock       = '#rightblock_4570_SlideNo_1',                wrongblock       = '#wrongblock_4570_SlideNo_1',                undecidedblock   = '#undecidedblock_4570_SlideNo_1',                speech_F         = ($('#speech_F_4570_SlideNo_1').length == 0) ? null : $('#speech_F_4570_SlideNo_1').html(),                speech_B         = ($('#speech_B_4570_SlideNo_1').length == 0) ? null : $('#speech_B_4570_SlideNo_1').html(),                speech_1         = ($('#speech_1_4570_SlideNo_1').length == 0) ? null : $('#speech_1_4570_SlideNo_1').html(),                speech_2         = ($('#speech_2_4570_SlideNo_1').length == 0) ? null : $('#speech_2_4570_SlideNo_1').html(),                speech_3         = ($('#speech_3_4570_SlideNo_1').length == 0) ? null : $('#speech_3_4570_SlideNo_1').html(),                speech_4         = ($('#speech_4_4570_SlideNo_1').length == 0) ? null : $('#speech_4_4570_SlideNo_1').html(),                speech_5         = ($('#speech_5_4570_SlideNo_1').length == 0) ? null : $('#speech_5_4570_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_4570_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_4570_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_4570_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_4570_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_4570_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_4570_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_4570_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_4570_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_4570_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_4570_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_4570_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_4570_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_4570_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_4570_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_4570_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_4570_SlideNo_1',                grblock          = 'graphicblock_4570_SlideNo_1',                grblock_Q        = 'graphicblock_Q_4570_SlideNo_1',                grblock_A        = 'graphicblock_A_4570_SlideNo_1',                grblock_B        = 'graphicblock_B_4570_SlideNo_1',                grblock_C        = 'graphicblock_C_4570_SlideNo_1',                grblock_D        = 'graphicblock_D_4570_SlideNo_1',                grblock_E        = 'graphicblock_E_4570_SlideNo_1',                grblock_F        = 'graphicblock_F_4570_SlideNo_1',                                grblock_f        = (typeof tml_4570_SlideNo_1   !== 'undefined') ? tml_4570_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_4570_SlideNo_1 !== 'undefined') ? tml_Q_4570_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_4570_SlideNo_1 !== 'undefined') ? tml_A_4570_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_4570_SlideNo_1 !== 'undefined') ? tml_B_4570_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_4570_SlideNo_1 !== 'undefined') ? tml_C_4570_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_4570_SlideNo_1 !== 'undefined') ? tml_D_4570_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_4570_SlideNo_1 !== 'undefined') ? tml_E_4570_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_4570_SlideNo_1 !== 'undefined') ? tml_F_4570_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_4570',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4570_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_4570'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             q.push(' For example, suppose you are asked to graph a quadratic function given its  vertex $$(${h},${k})$$ and $$y$$-intercept at $$y=${c}.$$ Start by graphing the two points given. ');      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));          if (typeof window['graphicblock_4570'] !== 'undefined' && typeof window['graphicblock_4570'].board !== 'undefined' ) {         window['graphicblock_4570'].board.update();     }                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4570_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_4570_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4570'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4570_SlideNo_2',                ablock           = '#answerblock_4570_SlideNo_2',                acblock          = '#answercommentaryblock_4570_SlideNo_2',                                rightblock       = '#rightblock_4570_SlideNo_2',                wrongblock       = '#wrongblock_4570_SlideNo_2',                undecidedblock   = '#undecidedblock_4570_SlideNo_2',                speech_F         = ($('#speech_F_4570_SlideNo_2').length == 0) ? null : $('#speech_F_4570_SlideNo_2').html(),                speech_B         = ($('#speech_B_4570_SlideNo_2').length == 0) ? null : $('#speech_B_4570_SlideNo_2').html(),                speech_1         = ($('#speech_1_4570_SlideNo_2').length == 0) ? null : $('#speech_1_4570_SlideNo_2').html(),                speech_2         = ($('#speech_2_4570_SlideNo_2').length == 0) ? null : $('#speech_2_4570_SlideNo_2').html(),                speech_3         = ($('#speech_3_4570_SlideNo_2').length == 0) ? null : $('#speech_3_4570_SlideNo_2').html(),                speech_4         = ($('#speech_4_4570_SlideNo_2').length == 0) ? null : $('#speech_4_4570_SlideNo_2').html(),                speech_5         = ($('#speech_5_4570_SlideNo_2').length == 0) ? null : $('#speech_5_4570_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_4570_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_4570_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_4570_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_4570_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_4570_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_4570_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_4570_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_4570_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_4570_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_4570_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_4570_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_4570_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_4570_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_4570_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_4570_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_4570_SlideNo_2',                grblock          = 'graphicblock_4570_SlideNo_2',                grblock_Q        = 'graphicblock_Q_4570_SlideNo_2',                grblock_A        = 'graphicblock_A_4570_SlideNo_2',                grblock_B        = 'graphicblock_B_4570_SlideNo_2',                grblock_C        = 'graphicblock_C_4570_SlideNo_2',                grblock_D        = 'graphicblock_D_4570_SlideNo_2',                grblock_E        = 'graphicblock_E_4570_SlideNo_2',                grblock_F        = 'graphicblock_F_4570_SlideNo_2',                                grblock_f        = (typeof tml_4570_SlideNo_2   !== 'undefined') ? tml_4570_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_4570_SlideNo_2 !== 'undefined') ? tml_Q_4570_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_4570_SlideNo_2 !== 'undefined') ? tml_A_4570_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_4570_SlideNo_2 !== 'undefined') ? tml_B_4570_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_4570_SlideNo_2 !== 'undefined') ? tml_C_4570_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_4570_SlideNo_2 !== 'undefined') ? tml_D_4570_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_4570_SlideNo_2 !== 'undefined') ? tml_E_4570_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_4570_SlideNo_2 !== 'undefined') ? tml_F_4570_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_4570',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4570_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_4570'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             q.push(' Now, draw the axis of symmetry at $$x=${h}$$, as given by the $$x$$-coordinate of the vertex $$(${h},${k}).$$ ');      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));          if (typeof window['graphicblock_4570'] !== 'undefined' && typeof window['graphicblock_4570'].board !== 'undefined' ) {         window['graphicblock_4570'].board.update();     }                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4570_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_4570_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4570'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4570_SlideNo_3',                ablock           = '#answerblock_4570_SlideNo_3',                acblock          = '#answercommentaryblock_4570_SlideNo_3',                                rightblock       = '#rightblock_4570_SlideNo_3',                wrongblock       = '#wrongblock_4570_SlideNo_3',                undecidedblock   = '#undecidedblock_4570_SlideNo_3',                speech_F         = ($('#speech_F_4570_SlideNo_3').length == 0) ? null : $('#speech_F_4570_SlideNo_3').html(),                speech_B         = ($('#speech_B_4570_SlideNo_3').length == 0) ? null : $('#speech_B_4570_SlideNo_3').html(),                speech_1         = ($('#speech_1_4570_SlideNo_3').length == 0) ? null : $('#speech_1_4570_SlideNo_3').html(),                speech_2         = ($('#speech_2_4570_SlideNo_3').length == 0) ? null : $('#speech_2_4570_SlideNo_3').html(),                speech_3         = ($('#speech_3_4570_SlideNo_3').length == 0) ? null : $('#speech_3_4570_SlideNo_3').html(),                speech_4         = ($('#speech_4_4570_SlideNo_3').length == 0) ? null : $('#speech_4_4570_SlideNo_3').html(),                speech_5         = ($('#speech_5_4570_SlideNo_3').length == 0) ? null : $('#speech_5_4570_SlideNo_3').html(),                gr3dblock        = 'graphic3dblock_4570_SlideNo_3',                gr3dblock_A      = 'graphic3dblock_A_4570_SlideNo_3',                gr3dblock_B      = 'graphic3dblock_B_4570_SlideNo_3',                gr3dblock_C      = 'graphic3dblock_C_4570_SlideNo_3',                gr3dblock_D      = 'graphic3dblock_D_4570_SlideNo_3',                gr3dblock_E      = 'graphic3dblock_E_4570_SlideNo_3',                gr3dblock_F      = 'graphic3dblock_F_4570_SlideNo_3',                gr3dblock_1      = 'graphic3dblock_1_4570_SlideNo_3',                gr3dblock_2      = 'graphic3dblock_2_4570_SlideNo_3',                gr3dblock_3      = 'graphic3dblock_3_4570_SlideNo_3',                gr3dblock_4      = 'graphic3dblock_4_4570_SlideNo_3',                gr3dblock_5      = 'graphic3dblock_5_4570_SlideNo_3',                gr3dblock_6      = 'graphic3dblock_6_4570_SlideNo_3',                gr3dblock_7      = 'graphic3dblock_7_4570_SlideNo_3',                gr3dblock_8      = 'graphic3dblock_8_4570_SlideNo_3',                gr3dblock_9      = 'graphic3dblock_9_4570_SlideNo_3',                grblock          = 'graphicblock_4570_SlideNo_3',                grblock_Q        = 'graphicblock_Q_4570_SlideNo_3',                grblock_A        = 'graphicblock_A_4570_SlideNo_3',                grblock_B        = 'graphicblock_B_4570_SlideNo_3',                grblock_C        = 'graphicblock_C_4570_SlideNo_3',                grblock_D        = 'graphicblock_D_4570_SlideNo_3',                grblock_E        = 'graphicblock_E_4570_SlideNo_3',                grblock_F        = 'graphicblock_F_4570_SlideNo_3',                                grblock_f        = (typeof tml_4570_SlideNo_3   !== 'undefined') ? tml_4570_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_4570_SlideNo_3 !== 'undefined') ? tml_Q_4570_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_4570_SlideNo_3 !== 'undefined') ? tml_A_4570_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_4570_SlideNo_3 !== 'undefined') ? tml_B_4570_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_4570_SlideNo_3 !== 'undefined') ? tml_C_4570_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_4570_SlideNo_3 !== 'undefined') ? tml_D_4570_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_4570_SlideNo_3 !== 'undefined') ? tml_E_4570_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_4570_SlideNo_3 !== 'undefined') ? tml_F_4570_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_4570',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4570_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_4570'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             q.push(' Next, draw the <strong>symmetric point</strong> as a reflection of the $$y$$-intercept across the axis of symmetry. ');      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));          if (typeof window['graphicblock_4570'] !== 'undefined' && typeof window['graphicblock_4570'].board !== 'undefined' ) {         window['graphicblock_4570'].board.update();     }                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4570_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_4570_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4570'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4570_SlideNo_4',                ablock           = '#answerblock_4570_SlideNo_4',                acblock          = '#answercommentaryblock_4570_SlideNo_4',                                rightblock       = '#rightblock_4570_SlideNo_4',                wrongblock       = '#wrongblock_4570_SlideNo_4',                undecidedblock   = '#undecidedblock_4570_SlideNo_4',                speech_F         = ($('#speech_F_4570_SlideNo_4').length == 0) ? null : $('#speech_F_4570_SlideNo_4').html(),                speech_B         = ($('#speech_B_4570_SlideNo_4').length == 0) ? null : $('#speech_B_4570_SlideNo_4').html(),                speech_1         = ($('#speech_1_4570_SlideNo_4').length == 0) ? null : $('#speech_1_4570_SlideNo_4').html(),                speech_2         = ($('#speech_2_4570_SlideNo_4').length == 0) ? null : $('#speech_2_4570_SlideNo_4').html(),                speech_3         = ($('#speech_3_4570_SlideNo_4').length == 0) ? null : $('#speech_3_4570_SlideNo_4').html(),                speech_4         = ($('#speech_4_4570_SlideNo_4').length == 0) ? null : $('#speech_4_4570_SlideNo_4').html(),                speech_5         = ($('#speech_5_4570_SlideNo_4').length == 0) ? null : $('#speech_5_4570_SlideNo_4').html(),                gr3dblock        = 'graphic3dblock_4570_SlideNo_4',                gr3dblock_A      = 'graphic3dblock_A_4570_SlideNo_4',                gr3dblock_B      = 'graphic3dblock_B_4570_SlideNo_4',                gr3dblock_C      = 'graphic3dblock_C_4570_SlideNo_4',                gr3dblock_D      = 'graphic3dblock_D_4570_SlideNo_4',                gr3dblock_E      = 'graphic3dblock_E_4570_SlideNo_4',                gr3dblock_F      = 'graphic3dblock_F_4570_SlideNo_4',                gr3dblock_1      = 'graphic3dblock_1_4570_SlideNo_4',                gr3dblock_2      = 'graphic3dblock_2_4570_SlideNo_4',                gr3dblock_3      = 'graphic3dblock_3_4570_SlideNo_4',                gr3dblock_4      = 'graphic3dblock_4_4570_SlideNo_4',                gr3dblock_5      = 'graphic3dblock_5_4570_SlideNo_4',                gr3dblock_6      = 'graphic3dblock_6_4570_SlideNo_4',                gr3dblock_7      = 'graphic3dblock_7_4570_SlideNo_4',                gr3dblock_8      = 'graphic3dblock_8_4570_SlideNo_4',                gr3dblock_9      = 'graphic3dblock_9_4570_SlideNo_4',                grblock          = 'graphicblock_4570_SlideNo_4',                grblock_Q        = 'graphicblock_Q_4570_SlideNo_4',                grblock_A        = 'graphicblock_A_4570_SlideNo_4',                grblock_B        = 'graphicblock_B_4570_SlideNo_4',                grblock_C        = 'graphicblock_C_4570_SlideNo_4',                grblock_D        = 'graphicblock_D_4570_SlideNo_4',                grblock_E        = 'graphicblock_E_4570_SlideNo_4',                grblock_F        = 'graphicblock_F_4570_SlideNo_4',                                grblock_f        = (typeof tml_4570_SlideNo_4   !== 'undefined') ? tml_4570_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_4570_SlideNo_4 !== 'undefined') ? tml_Q_4570_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_4570_SlideNo_4 !== 'undefined') ? tml_A_4570_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_4570_SlideNo_4 !== 'undefined') ? tml_B_4570_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_4570_SlideNo_4 !== 'undefined') ? tml_C_4570_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_4570_SlideNo_4 !== 'undefined') ? tml_D_4570_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_4570_SlideNo_4 !== 'undefined') ? tml_E_4570_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_4570_SlideNo_4 !== 'undefined') ? tml_F_4570_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_4570',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4570_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_4570'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             q.push(' And finally, connect the points for a good graph of the quadratic function. ');      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));                      [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4570_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_4570_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4570'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4570_SlideNo_5',                ablock           = '#answerblock_4570_SlideNo_5',                acblock          = '#answercommentaryblock_4570_SlideNo_5',                                rightblock       = '#rightblock_4570_SlideNo_5',                wrongblock       = '#wrongblock_4570_SlideNo_5',                undecidedblock   = '#undecidedblock_4570_SlideNo_5',                speech_F         = ($('#speech_F_4570_SlideNo_5').length == 0) ? null : $('#speech_F_4570_SlideNo_5').html(),                speech_B         = ($('#speech_B_4570_SlideNo_5').length == 0) ? null : $('#speech_B_4570_SlideNo_5').html(),                speech_1         = ($('#speech_1_4570_SlideNo_5').length == 0) ? null : $('#speech_1_4570_SlideNo_5').html(),                speech_2         = ($('#speech_2_4570_SlideNo_5').length == 0) ? null : $('#speech_2_4570_SlideNo_5').html(),                speech_3         = ($('#speech_3_4570_SlideNo_5').length == 0) ? null : $('#speech_3_4570_SlideNo_5').html(),                speech_4         = ($('#speech_4_4570_SlideNo_5').length == 0) ? null : $('#speech_4_4570_SlideNo_5').html(),                speech_5         = ($('#speech_5_4570_SlideNo_5').length == 0) ? null : $('#speech_5_4570_SlideNo_5').html(),                gr3dblock        = 'graphic3dblock_4570_SlideNo_5',                gr3dblock_A      = 'graphic3dblock_A_4570_SlideNo_5',                gr3dblock_B      = 'graphic3dblock_B_4570_SlideNo_5',                gr3dblock_C      = 'graphic3dblock_C_4570_SlideNo_5',                gr3dblock_D      = 'graphic3dblock_D_4570_SlideNo_5',                gr3dblock_E      = 'graphic3dblock_E_4570_SlideNo_5',                gr3dblock_F      = 'graphic3dblock_F_4570_SlideNo_5',                gr3dblock_1      = 'graphic3dblock_1_4570_SlideNo_5',                gr3dblock_2      = 'graphic3dblock_2_4570_SlideNo_5',                gr3dblock_3      = 'graphic3dblock_3_4570_SlideNo_5',                gr3dblock_4      = 'graphic3dblock_4_4570_SlideNo_5',                gr3dblock_5      = 'graphic3dblock_5_4570_SlideNo_5',                gr3dblock_6      = 'graphic3dblock_6_4570_SlideNo_5',                gr3dblock_7      = 'graphic3dblock_7_4570_SlideNo_5',                gr3dblock_8      = 'graphic3dblock_8_4570_SlideNo_5',                gr3dblock_9      = 'graphic3dblock_9_4570_SlideNo_5',                grblock          = 'graphicblock_4570_SlideNo_5',                grblock_Q        = 'graphicblock_Q_4570_SlideNo_5',                grblock_A        = 'graphicblock_A_4570_SlideNo_5',                grblock_B        = 'graphicblock_B_4570_SlideNo_5',                grblock_C        = 'graphicblock_C_4570_SlideNo_5',                grblock_D        = 'graphicblock_D_4570_SlideNo_5',                grblock_E        = 'graphicblock_E_4570_SlideNo_5',                grblock_F        = 'graphicblock_F_4570_SlideNo_5',                                grblock_f        = (typeof tml_4570_SlideNo_5   !== 'undefined') ? tml_4570_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_4570_SlideNo_5 !== 'undefined') ? tml_Q_4570_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_4570_SlideNo_5 !== 'undefined') ? tml_A_4570_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_4570_SlideNo_5 !== 'undefined') ? tml_B_4570_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_4570_SlideNo_5 !== 'undefined') ? tml_C_4570_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_4570_SlideNo_5 !== 'undefined') ? tml_D_4570_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_4570_SlideNo_5 !== 'undefined') ? tml_E_4570_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_4570_SlideNo_5 !== 'undefined') ? tml_F_4570_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_4570',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4570_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_4570'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             do {         symbols.a = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = symbols.a*2*[-1, -2, 1, 2].ctns_rand();         symbols.c = [-2, -1, 0, 1, 2].ctns_rand();          symbols.h = symbols.b / (-2 * symbols.a),         symbols.k = symbols.a * Math.pow(symbols.h, 2) + symbols.b * symbols.h + symbols.c;     } while (is_lt(symbols.h,-5) || is_lt(symbols.k,-3) || is_gt(symbols.h,5) || is_gt(symbols.k,3) );      q.push(' Sketch the graph of a quadratic function with the vertex at point $$(${h},${k})$$ and $$y$$-intercept at $$y = ${c}.$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');      a.push(' Sketch the graph of a quadratic function with the vertex at point $$(${h},${k})$$ and $$y$$-intercept at $$y = ${c}.$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));     $(ablock).html(tex({'symbols':symbols}, a.join(' ')));                      [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4570_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4570_SlideNo_1
	What do these buy me? tag=, masterid=4570, slideno=SlideNo_1
	'scriptblock_4570_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_4570_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4570_SlideNo_1'] = NUMBERS.symbols['scriptblock_4570_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4570_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4570_SlideNo_1'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointvertex
 */
window[PMGRAPHICID].pointvertex = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  gt.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointvertex
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointy
 */
window[PMGRAPHICID].pointy = window[PMGRAPHICID].board.create('point', [ function() { return   0;   }, function() { return  gt.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointy
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	  	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4570_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4570_SlideNo_2
	What do these buy me? tag=, masterid=4570, slideno=SlideNo_2
	'scriptblock_4570_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_4570_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4570_SlideNo_2'] = NUMBERS.symbols['scriptblock_4570_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4570_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4570_SlideNo_2'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointvertex
 */
window[PMGRAPHICID].pointvertex = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  gt.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointvertex
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointy
 */
window[PMGRAPHICID].pointy = window[PMGRAPHICID].board.create('point', [ function() { return   0;   }, function() { return  gt.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointy
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointtop
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbottom
 */
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbottom
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_96756 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_96756 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	  	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4570_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4570_SlideNo_3
	What do these buy me? tag=, masterid=4570, slideno=SlideNo_3
	'scriptblock_4570_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_4570_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4570_SlideNo_3'] = NUMBERS.symbols['scriptblock_4570_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4570_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4570_SlideNo_3'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointvertex
 */
window[PMGRAPHICID].pointvertex = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  gt.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointvertex
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointy
 */
window[PMGRAPHICID].pointy = window[PMGRAPHICID].board.create('point', [ function() { return   0;   }, function() { return  gt.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointy
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointsym
 */
window[PMGRAPHICID].pointsym = window[PMGRAPHICID].board.create('point', [ function() { return 2*gt.h;}, function() { return  gt.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointsym.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointsym
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointsym.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointtop
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbottom
 */
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbottom
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_22700 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_22700 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	  	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4570_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4570_SlideNo_4
	What do these buy me? tag=, masterid=4570, slideno=SlideNo_4
	'scriptblock_4570_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_4570_SlideNo_4';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4570_SlideNo_4'] = NUMBERS.symbols['scriptblock_4570_SlideNo_4'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4570_SlideNo_4'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4570_SlideNo_4'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointvertex
 */
window[PMGRAPHICID].pointvertex = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  gt.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointvertex
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return   gt.a;}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return   gt.b;}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return   gt.c;}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointc
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointy
 */
window[PMGRAPHICID].pointy = window[PMGRAPHICID].board.create('point', [ function() { return   0;   }, function() { return  gt.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointy
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointsym
 */
window[PMGRAPHICID].pointsym = window[PMGRAPHICID].board.create('point', [ function() { return 2*gt.h;}, function() { return  gt.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointsym.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointsym
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointsym.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointtop
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbottom
 */
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return   gt.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbottom
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_68494 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_68494 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph85178 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0)*Math.pow(x, 2)+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)*x + ((window[PMGRAPHICID].pointc) ? window[PMGRAPHICID].pointc.X() : 0);}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	  	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_4570_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_4570_SlideNo_5
	What do these buy me? tag=Q_, masterid=4570, slideno=SlideNo_5
	'scriptblock_4570_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_4570_SlideNo_5';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4570_SlideNo_5'] = NUMBERS.symbols['scriptblock_4570_SlideNo_5'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4570_SlideNo_5'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4570_SlideNo_5'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	  	   
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_4570_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_4570_SlideNo_5
	What do these buy me? tag=A_, masterid=4570, slideno=SlideNo_5
	'scriptblock_4570_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_4570_SlideNo_5';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4570_SlideNo_5'] = NUMBERS.symbols['scriptblock_4570_SlideNo_5'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4570_SlideNo_5'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4570_SlideNo_5'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointvertex
 */
window[PMGRAPHICID].pointvertex = window[PMGRAPHICID].board.create('point', [ function() { return   st.h;}, function() { return  st.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointvertex
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointvertex.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return   st.a;}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return   st.b;}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return   st.c;}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointc
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointy
 */
window[PMGRAPHICID].pointy = window[PMGRAPHICID].board.create('point', [ function() { return   0;   }, function() { return  st.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointy
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointy.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointsym
 */
window[PMGRAPHICID].pointsym = window[PMGRAPHICID].board.create('point', [ function() { return 2*st.h;}, function() { return  st.c;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointsym.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointsym
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointsym.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return   st.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointtop
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbottom
 */
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return   st.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbottom
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_50404 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_50404 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph75852 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0)*Math.pow(x, 2)+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)*x + ((window[PMGRAPHICID].pointc) ? window[PMGRAPHICID].pointc.X() : 0);}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	  	      };