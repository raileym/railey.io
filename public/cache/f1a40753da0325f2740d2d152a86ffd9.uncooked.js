
  CTNS.QUIZ_SET["f1a40753da0325f2740d2d152a86ffd9"] = function () {
  
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
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 8);
	
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
         count:         8,
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
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-2",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-3",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
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
{
    slideNo: 4,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-5",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideNo: 5,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-6",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideNo: 6,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ15-7",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
    slideNo: 7,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-8",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:402px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "400",
    width: "400",
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

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_1',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_1',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_1',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_1',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_1',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_1',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_1').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_1').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_1').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_1').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_1').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_1').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_1',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_1',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_1',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_1',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_1',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_1',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_1',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_1',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_1',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_1   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_2',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_2',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_2',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_2',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_2',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_2',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_2').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_2').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_2').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_2').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_2').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_2').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_2',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_2',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_2',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_2',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_2',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_2',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_2',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_2',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_2',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_2   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_3',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_3',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_3',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_3',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_3',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_3',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_3').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_3').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_3').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_3').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_3').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_3').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_3').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_3',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_3',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_3',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_3',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_3',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_3',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_3',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_3',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_3',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_3',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_3',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_3',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_3',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_3',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_3',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_3',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_3',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_3',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_3',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_3',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_3',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_3',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_3',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_3',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_3   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_4',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_4',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_4',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_4',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_4',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_4',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_4').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_4').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_4').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_4').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_4').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_4').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_4').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_4',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_4',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_4',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_4',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_4',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_4',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_4',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_4',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_4',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_4',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_4',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_4',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_4',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_4',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_4',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_4',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_4',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_4',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_4',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_4',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_4',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_4',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_4',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_4',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_4   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_5',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_5',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_5',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_5',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_5',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_5',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_5').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_5').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_5').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_5').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_5').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_5').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_5').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_5',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_5',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_5',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_5',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_5',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_5',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_5',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_5',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_5',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_5',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_5',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_5',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_5',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_5',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_5',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_5',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_5',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_5',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_5',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_5',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_5',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_5',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_5',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_5',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_5   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_6'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_6',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_6',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_6',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_6',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_6',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_6',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_6').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_6').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_6').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_6').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_6').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_6').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_6').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_6',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_6',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_6',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_6',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_6',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_6',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_6',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_6',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_6',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_6',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_6',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_6',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_6',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_6',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_6',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_6',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_6',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_6',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_6',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_6',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_6',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_6',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_6',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_6',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_6   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_6   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_6 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_6 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_6 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_6 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_6 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_6 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_6 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_7'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_7',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_7',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_7',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_7',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_7',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_7',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_7').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_7').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_7').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_7').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_7').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_7').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_7').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_7',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_7',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_7',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_7',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_7',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_7',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_7',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_7',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_7',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_7',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_7',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_7',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_7',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_7',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_7',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_7',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_7',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_7',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_7',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_7',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_7',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_7',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_7',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_7',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_7   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_7   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_7 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_7 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_7 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_7 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_7 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_7 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_7 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
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
			boundingbox: [-10,10,10,-10] ,
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-8,-8], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [5,6], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.666666)*(window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.666666)*(window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_33452 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_33452 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  
/* Create a CORNER / CORNER-RIGHT pointAC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointAC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create a CORNER / CORNER-RIGHT pointCD on points window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointCD = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create a CORNER / CORNER-RIGHT pointDB on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointDB = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_49767 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_49767 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_49767 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_49767, window[PMGRAPHICID].endArrow_49767], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_82809 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_82809 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_82809 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_82809, window[PMGRAPHICID].endArrow_82809], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_84079 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_84079 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_84079 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_84079, window[PMGRAPHICID].endArrow_84079], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_73366 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_73366 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_73366 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_73366, window[PMGRAPHICID].endArrow_73366], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_5918 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_5918 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_5918 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_5918, window[PMGRAPHICID].endArrow_5918], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_13887 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_13887 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_13887 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_13887, window[PMGRAPHICID].endArrow_13887], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_8736 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_8736   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_8736 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_19042 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_19042   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_19042 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_23597 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_23597   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_23597 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text38504 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointAAC.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointAAC.Y()+0.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\tiny \\Delta x = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text38504 ', 
	  cssClass:'window[PMGRAPHICID].text38504 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text51978 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCCD.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointCCD.Y()+0.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\tiny \\Delta x = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text51978 ', 
	  cssClass:'window[PMGRAPHICID].text51978 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text31118 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDB.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointDDB.Y()+0.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\tiny \\Delta x = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text31118 ', 
	  cssClass:'window[PMGRAPHICID].text31118 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text5208 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointACC.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointACC.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\tiny{\\Delta y = ' + PM_MATH.add_paren('C4', 'X', (window[PMGRAPHICID].pointC4) ? window[PMGRAPHICID].pointC4 : null,1,null) + '}';
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
	  highlightCssClass:'window[PMGRAPHICID].text5208 ', 
	  cssClass:'window[PMGRAPHICID].text5208 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text76119 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCDD.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointCDD.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\tiny \\Delta y = ' + PM_MATH.add_paren('C5', 'X', (window[PMGRAPHICID].pointC5) ? window[PMGRAPHICID].pointC5 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text76119 ', 
	  cssClass:'window[PMGRAPHICID].text76119 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text33707 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDBB.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDBB.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\tiny \\Delta y = ' + PM_MATH.add_paren('C6', 'X', (window[PMGRAPHICID].pointC6) ? window[PMGRAPHICID].pointC6 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text33707 ', 
	  cssClass:'window[PMGRAPHICID].text33707 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
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
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:280px; ; height:280px; ;');
		
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

/* Create a STANDARD pointC
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [3,4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
/* Create INLINE pointB between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a CORNER / CORNER-RIGHT pointAB on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointAB = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create a CORNER / CORNER-RIGHT pointBC on points window[PMGRAPHICID].pointB and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointBC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointB.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_23076 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_23076 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  
window[PMGRAPHICID].startArrow_23645 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_23645 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAB.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAB.X()-0.3 : window[PMGRAPHICID].pointAB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAB.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAB.Y()-0.3 : window[PMGRAPHICID].pointAB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_23645 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_23645, window[PMGRAPHICID].endArrow_23645], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_49564 = window[PMGRAPHICID].pointB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_49564 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointBC.X()-window[PMGRAPHICID].pointB.X(); if (check == 0) return window[PMGRAPHICID].pointBC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointBC.X()-0.3 : window[PMGRAPHICID].pointBC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointBC.Y()-window[PMGRAPHICID].pointB.Y(); if (check == 0) return window[PMGRAPHICID].pointBC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointBC.Y()-0.3 : window[PMGRAPHICID].pointBC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_49564 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_49564, window[PMGRAPHICID].endArrow_49564], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_90208 = window[PMGRAPHICID].pointAB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_90208 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointAB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointAB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_90208 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_90208, window[PMGRAPHICID].endArrow_90208], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_96326 = window[PMGRAPHICID].pointBC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_96326 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointBC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointBC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_96326 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_96326, window[PMGRAPHICID].endArrow_96326], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_96312 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_96312   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_96312 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_70499 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointB.Y();} ], {visible:false});window[PMGRAPHICID].poly_70499   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointB, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_70499 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
/* Create INLINE pointAAB between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointAB
 */
window[PMGRAPHICID].pointAAB = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointAB.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointAB.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointBBC between two points, window[PMGRAPHICID].pointB and window[PMGRAPHICID].pointBC
 */
window[PMGRAPHICID].pointBBC = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointB.X()+(0.5)*(window[PMGRAPHICID].pointBC.X()-window[PMGRAPHICID].pointB.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointB.Y()+(0.5)*(window[PMGRAPHICID].pointBC.Y()-window[PMGRAPHICID].pointB.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create INLINE pointABB between two points, window[PMGRAPHICID].pointAB and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointABB = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointAB.X()+(0.5)*(window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointAB.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointAB.Y()+(0.5)*(window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointAB.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointBCC between two points, window[PMGRAPHICID].pointBC and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointBCC = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointBC.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointBC.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointBC.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointBC.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  /*
 * Expected Calculation on AB.x-A.x
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointAB) ? window[PMGRAPHICID].pointAB.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointAB) ? window[PMGRAPHICID].pointAB.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on BC.x-B.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointBC) ? window[PMGRAPHICID].pointBC.X() : 0)-((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointBC) ? window[PMGRAPHICID].pointBC.X() : 0)-((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0);
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
 * Expected Calculation on B.y-AB.y
 */
/*
 * Calculate on C3: ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointAB) ? window[PMGRAPHICID].pointAB.Y() : 0)
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointAB) ? window[PMGRAPHICID].pointAB.Y() : 0);
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
 * Expected Calculation on C.y-BC.y
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)-((window[PMGRAPHICID].pointBC) ? window[PMGRAPHICID].pointBC.Y() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)-((window[PMGRAPHICID].pointBC) ? window[PMGRAPHICID].pointBC.Y() : 0);
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
window[PMGRAPHICID].text43984 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointAAB.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointAAB.Y()+0.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\Delta x = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text43984 ', 
	  cssClass:'window[PMGRAPHICID].text43984 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text41965 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointBBC.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointBBC.Y()+0.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\Delta x = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text41965 ', 
	  cssClass:'window[PMGRAPHICID].text41965 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text33691 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointABB.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointABB.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\Delta y = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text33691 ', 
	  cssClass:'window[PMGRAPHICID].text33691 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text33726 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointBCC.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointBCC.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\Delta y = ' + PM_MATH.add_paren('C4', 'X', (window[PMGRAPHICID].pointC4) ? window[PMGRAPHICID].pointC4 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text33726 ', 
	  cssClass:'window[PMGRAPHICID].text33726 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
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
window[PMGRAPHICID].startArrow_65237 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_65237 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_65237 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_65237, window[PMGRAPHICID].endArrow_65237], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_47709 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_47709 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_47709 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_47709, window[PMGRAPHICID].endArrow_47709], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_67893 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_67893   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_67893 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text14793 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Run = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text14793 ', 
	  cssClass:'window[PMGRAPHICID].text14793 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text45327 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Rise  = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text45327 ', 
	  cssClass:'window[PMGRAPHICID].text45327 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text46960 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+1.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\frac{Rise}{Run} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text46960 ', 
	  cssClass:'window[PMGRAPHICID].text46960 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_GENERIC_MARKER_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_3
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_3
	'scriptblock_GENERIC_MARKER_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'];
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
window[PMGRAPHICID].startArrow_83201 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_83201 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_83201 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_83201, window[PMGRAPHICID].endArrow_83201], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_64705 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_64705 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_64705 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_64705, window[PMGRAPHICID].endArrow_64705], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_21543 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_21543   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_21543 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text4435 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text4435 ', 
	  cssClass:'window[PMGRAPHICID].text4435 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text32975 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text32975 ', 
	  cssClass:'window[PMGRAPHICID].text32975 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text86117 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text86117 ', 
	  cssClass:'window[PMGRAPHICID].text86117 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}          
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_GENERIC_MARKER_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_4
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_4
	'scriptblock_GENERIC_MARKER_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_4';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'];
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
			boundingbox: [-10,10,10,-10] ,
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-5,-4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
		if ('' != '-3.0') {
			return (x+parseFloat('-3.0'));
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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '-3.0') {
			return (x+parseFloat('-3.0'));
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
  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_GENERIC_MARKER_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_5
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_5
	'scriptblock_GENERIC_MARKER_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_5';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'];
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
			boundingbox: [-10,10,10,-10] ,
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
function tml_GENERIC_MARKER_SlideNo_6 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_6
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_6
	'scriptblock_GENERIC_MARKER_SlideNo_6'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_6';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'];
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
		 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-5,-4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
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
		var y = window[PMGRAPHICID].pointB.Y();
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
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_GENERIC_MARKER_SlideNo_7 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_7
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_7
	'scriptblock_GENERIC_MARKER_SlideNo_7'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_7';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'];
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
		 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-5,-4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
} };