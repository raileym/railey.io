
  CTNS.QUIZ_SET["b0b228e8cc1933d01f5d265bc5f487cc"] = function () {
  
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
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 10);
	
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
         count:         10,
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
    key: "linearQ2-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_Q_MASTERID graph hide'></div><div id='graphicblock_Q_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_Q_MASTERIDpanel'></div><div class='meta graphicblock_Q_MASTERID panel hide'></div></div><br><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_A_MASTERID graph hide'></div><div id='graphicblock_A_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_A_MASTERIDpanel'></div><div class='meta graphicblock_A_MASTERID panel hide'></div></div><br><!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div>     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto",
    answerStyle: "width:70%;margin-left:auto;margin-right:auto",
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
    description: " Given the proper graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form? Demonstrates using both Q and A, although A is not used.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
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
{
    slideNo: 2,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example illustrates 'how' to find the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-3",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
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
{
    slideNo: 3,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
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
    slideNo: 4,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
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
{
    slideNo: 5,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form? Demonstrates using both Q and A, although A is not used.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-5",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_Q_MASTERID graph hide'></div><div id='graphicblock_Q_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_Q_MASTERIDpanel'></div><div class='meta graphicblock_Q_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_A_MASTERID graph hide'></div><div id='graphicblock_A_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_A_MASTERIDpanel'></div><div class='meta graphicblock_A_MASTERID panel hide'></div></div><br/>TMPL_SHOWANSWERBLOCK     ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
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
{
    slideNo: 6,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-6",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
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
{
    slideNo: 7,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-7",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
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
{
    slideNo: 8,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-8",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
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
{
    slideNo: 9,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-9",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_GENERIC_MARKER';
CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'] = [];
CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] = CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();                  symbols.q_m = colorized.ctns_format(['transparent', symbols.m]);         symbols.q_b = colorized.ctns_format(['transparent', symbols.b]);          symbols.a_m = colorized.ctns_format(['blue', symbols.m]);         symbols.a_b = colorized.ctns_format(['blue', symbols.b]);                  symbols.EQ = 'y = %s x + %s'.ctns_format([symbols.m, symbols.b]).ctns_equation();          symbols.q_EQ = colorized.ctns_format(['transparent', symbols.EQ]);         symbols.a_EQ = colorized.ctns_format(['blue', symbols.EQ]);          /* Build the QUESTION */         q.push(' Slope-Intercept Form  $$y = \\boxed{ ${q_m} } \\cdot x + \\boxed{ ${q_b} }$$<br><br> $$ \\boxed{ ${q_EQ} } $$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_1',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_1',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_1',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_1',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_1',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_1',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_1').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_1').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_1').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_1').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_1').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_1').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_1',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_1',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_1',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_1',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_1',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_1',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_1',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_1',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_1',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_1   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );          symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          q.push(' Consider a line with slope-intercept form $| ${EQ} |$ that connects the two points $$a$$ and $$b$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br/><br/> The <strong>slope of this line</strong> equals the ratio $$\\frac{\\Delta y}{\\Delta x}$$,<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br/><br/> where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br/>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$ ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_2',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_2',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_2',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_2',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_2',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_2',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_2').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_2').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_2').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_2').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_2').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_2').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_2',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_2',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_2',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_2',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_2',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_2',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_2',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_2',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_2',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_2   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_3',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_3',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_3',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_3',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_3',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_3',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_3').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_3').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_3').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_3').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_3').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_3').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_3').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_3',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_3',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_3',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_3',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_3',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_3',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_3',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_3',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_3',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_3',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_3',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_3',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_3',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_3',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_3',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_3',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_3',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_3',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_3',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_3',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_3',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_3',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_3',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_3',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_3   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_4',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_4',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_4',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_4',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_4',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_4',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_4').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_4').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_4').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_4').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_4').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_4').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_4').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_4',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_4',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_4',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_4',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_4',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_4',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_4',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_4',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_4',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_4',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_4',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_4',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_4',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_4',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_4',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_4',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_4',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_4',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_4',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_4',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_4',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_4',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_4',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_4',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_4   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_5',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_5',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_5',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_5',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_5',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_5',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_5').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_5').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_5').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_5').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_5').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_5').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_5').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_5',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_5',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_5',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_5',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_5',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_5',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_5',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_5',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_5',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_5',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_5',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_5',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_5',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_5',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_5',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_5',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_5',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_5',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_5',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_5',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_5',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_5',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_5',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_5',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_5   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );          symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          q.push(' Consider a line with slope-intercept form $| ${EQ} |$ that connects the two points $$a$$ and $$b$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br/><br/> The <strong>slope of this line</strong> equals the ratio $$\\frac{\\Delta y}{\\Delta x}$$,<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br/><br/> where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br/>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$ ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ')));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_6'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_6',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_6',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_6',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_6',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_6',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_6',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_6').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_6').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_6').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_6').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_6').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_6').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_6').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_6',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_6',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_6',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_6',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_6',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_6',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_6',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_6',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_6',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_6',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_6',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_6',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_6',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_6',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_6',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_6',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_6',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_6',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_6',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_6',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_6',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_6',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_6',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_6',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_6   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_6   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_6 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_6 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_6 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_6 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_6 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_6 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_6 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );          symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          q.push(' Consider a line with slope-intercept form $| ${EQ} |$ that connects the two points $$p$$ and $$q$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br/><br/> The <strong>slope of this line</strong> equals the ratio $$\\frac{\\Delta y}{\\Delta x}$$,<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br/><br/> where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br/>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$ ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_7'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_7',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_7',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_7',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_7',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_7',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_7',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_7').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_7').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_7').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_7').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_7').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_7').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_7').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_7',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_7',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_7',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_7',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_7',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_7',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_7',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_7',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_7',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_7',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_7',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_7',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_7',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_7',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_7',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_7',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_7',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_7',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_7',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_7',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_7',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_7',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_7',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_7',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_7   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_7   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_7 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_7 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_7 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_7 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_7 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_7 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_7 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = 0;             symbols.y1 = [0, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4, 5].ctns_rand();             symbols.y2 = [-4, -3, -2, -1].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_pos(symbols.x1) || is_neg(symbols.x2) );          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.p_x1 = addparen( symbols.x1 );         symbols.p_y1 = addparen( symbols.y1 );          q.push(' Consider a line with slope-intercept form<br/><br/> $$y = ${m_}x+\\color{blue}{${b}}$$<br/><br/> that connects the two points $$p$$ and $$q$$, <br/><br/> $$ (${x1}, \\color{blue}{${y1}}) $$ and $$ (${x2}, ${y2}),$$ <br/><br/> where the <strong>$$y$$-intercept</strong> is $$\\color{blue} b = ${b}$$, and the <strong>slope</strong> is $$m = ${m_}, $$<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$. ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_8'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_8'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_8',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_8',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_8',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_8',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_8',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_8',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_8').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_8').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_8').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_8').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_8').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_8').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_8').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_8').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_8',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_8',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_8',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_8',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_8',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_8',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_8',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_8',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_8',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_8',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_8',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_8',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_8',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_8',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_8',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_8',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_8',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_8',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_8',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_8',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_8',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_8',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_8',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_8',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_8   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_8   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_8 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_8 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_8 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_8 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_8 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_8 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_8 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_8 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_8'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1            ].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4                ].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 );          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y - %s = %s ( x - %s )'.ctns_format([symbols.y1, symbols.m_, symbols.x1]).ctns_equation();          q.push(' Consider a line with point-slope form $| ${EQ} |$ that connects the two points $$p$$ and $$q$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}),$$ <br/><br/> where the <strong>slope</strong> is $$m = ${m_}, $$<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$. ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_9'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_9'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_9',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_9',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_9',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_9',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_9',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_9',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_9').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_9').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_9').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_9').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_9').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_9').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_9').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_9').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_9',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_9',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_9',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_9',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_9',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_9',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_9',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_9',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_9',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_9',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_9',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_9',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_9',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_9',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_9',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_9',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_9',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_9',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_9',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_9',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_9',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_9',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_9',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_9',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_9   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_9   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_9 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_9 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_9 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_9 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_9 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_9 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_9 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_9 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_9'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.a = 2;         symbols.b = 2;          symbols.a_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b_ = [1, 2, 3, 4, -1, -2, -3, -4].ctns_rand();          symbols.a = {};         symbols.b = {};         symbols.c = {};         symbols.d = {};          if ( is_pos(symbols.a_) && is_pos(symbols.b_) ) {             symbols.a.x = -0.5;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ + 0.5;             symbols.b.y = 0.75;             symbols.c.x = 2;             symbols.c.y = 4.5;             symbols.d.x = -2;             symbols.d.y = -4;         } else if ( is_pos(symbols.a_) && is_neg(symbols.b_) ) {             symbols.a.x = 0.25;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ - 0.75;             symbols.b.y = 0.75;             symbols.c.x = -2;             symbols.c.y = 4.5;             symbols.d.x = 2;             symbols.d.y = -4;         } else if ( is_neg(symbols.a_) && is_pos(symbols.b_) ) {             symbols.a.x = 0.25;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ - 0.75;             symbols.b.y = 0.75;             symbols.c.x = -3;             symbols.c.y = 1.5;             symbols.d.x = 3;             symbols.d.y = -4;         } else {             symbols.a.x = -0.5;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ + 0.5;             symbols.b.y = 0.75;             symbols.c.x = 1;             symbols.c.y = 1.5;             symbols.d.x = -3;             symbols.d.y = -4;         }          q.push(tex({'symbols':symbols},' Consider a line in <strong>intercept-intercept form</strong><br/><br/> $$\\frac{x}{${b_}} + \\frac{y}{${a_}} = 1$$ <br/><br/>that connects the two points $$a$$ and $$b$$, <br/><br/> $$(0, ${a_})$$ and $$(${b_}, 0),$$ <br/><br/> '));          q.push(tex({'symbols':symbols},' where the <strong>$$y$$-intercept</strong> is $$ ${a_} $$, and the <strong>$$x$$-intercept</strong> is $$ ${b_} $$. '));          $(qblock).html(q.join(' '));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0';
	
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return    0; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return    0;}, function() { return st.b; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
        window[PMGRAPHICID].graph83684 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.Y() : 0);}, 
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
function tml_A_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_0';
	
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return 0; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return    0;}, function() { return st.b; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
        window[PMGRAPHICID].graph1997 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.Y() : 0);}, 
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
		 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.x1; }, function() { return st.y1; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2; }, function() { return st.y2; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointr
 */
window[PMGRAPHICID].pointr = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointr
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_17113 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_17113 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_80732 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_80732 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_80732 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_80732, window[PMGRAPHICID].endArrow_80732], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); /* Create Text */
window[PMGRAPHICID].text42958 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text42958 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text38290 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text38290 center', 
	  cssClass:'window[PMGRAPHICID].text38290 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text66546 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize b = ' + PM_MATH.add_paren('b', 'Y', (window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text66546 center', 
	  cssClass:'window[PMGRAPHICID].text66546 center', 
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
		if ('' != '0.5') {
			return (y+parseFloat('0.5'));
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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ 2, 5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
  
/* Create a CORNER / CORNER-RIGHT pointC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create INLINE pointE between two points, window[PMGRAPHICID].pointB and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointB.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointB.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointB.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointB.Y());
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
window[PMGRAPHICID].segmentBC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointB, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineBC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointB, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPoint_81440 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_81440   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_81440 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on B.y-C.y
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0);
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
 * Expected Calculation on (B.y-C.y)/(C.x-A.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
window[PMGRAPHICID].text52756 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointE.Y()+1.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = ' \\scriptsize \\begin{array}{rcl} \\Delta y & = & y_2 - y_1 \\\\ & = & ' + PM_MATH.add_paren('B', 'Y', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,null) + ' - ' + PM_MATH.add_paren('C', 'Y', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,null) + ' \\\\ & = & ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + ' \\\\ \\end{array} ';
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
	  highlightCssClass:'window[PMGRAPHICID].text52756 ', 
	  cssClass:'window[PMGRAPHICID].text52756 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text57072 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = ' \\scriptsize \\begin{array}{rcl} \\Delta x & = & x_2 - x_1 \\\\ & = & ' + PM_MATH.add_paren('C', 'X', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,null) + ' - ' + PM_MATH.add_paren('A', 'X', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,null) + ' \\\\ & = & ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + ' \\\\ \\end{array} ';
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
	  highlightCssClass:'window[PMGRAPHICID].text57072 ', 
	  cssClass:'window[PMGRAPHICID].text57072 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text10748 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointA.X()+-3; }, 
		function() { return window[PMGRAPHICID].pointA.Y()+2.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize (x_1,y_1)';
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
	  highlightCssClass:'window[PMGRAPHICID].text10748 ', 
	  cssClass:'window[PMGRAPHICID].text10748 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text6722 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointB.X()+-3.25; }, 
		function() { return window[PMGRAPHICID].pointB.Y()+2.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize (x_2,y_2)';
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
	  highlightCssClass:'window[PMGRAPHICID].text6722 ', 
	  cssClass:'window[PMGRAPHICID].text6722 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:180px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text39750 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + ' x + ' + PM_MATH.add_paren('C4', 'X', (window[PMGRAPHICID].pointC4) ? window[PMGRAPHICID].pointC4 : null,1,null) + '';
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
		  highlightCssClass:'window[PMGRAPHICID].text39750 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text39750 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].text21818 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '  slope \\; (m) = \\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '}{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + ' ';
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
		  highlightCssClass:'window[PMGRAPHICID].text21818 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text21818 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
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
  window[PMGRAPHICID].CPoint_92608 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_92608   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointG, window[PMGRAPHICID].CPoint_92608 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
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
window[PMGRAPHICID].text15487 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text15487 ', 
	  cssClass:'window[PMGRAPHICID].text15487 ', 
	  cssStyle:'background-color:rgba(255,0,0,1);' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text27709 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text27709 ', 
	  cssClass:'window[PMGRAPHICID].text27709 ', 
	  cssStyle:'background-color:rgba(255,0,0,1);' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text36792 = window[PMGRAPHICID].panel.create('text', 
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
		  highlightCssClass:'window[PMGRAPHICID].text36792 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text36792 pm-math-text-center', 
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
  window[PMGRAPHICID].CPoint_69700 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_69700   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointG, window[PMGRAPHICID].CPoint_69700 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
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
window[PMGRAPHICID].text33754 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text33754 ', 
	  cssClass:'window[PMGRAPHICID].text33754 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text38963 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text38963 ', 
	  cssClass:'window[PMGRAPHICID].text38963 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text30273 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text30273 ', 
	  cssClass:'window[PMGRAPHICID].text30273 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false});  
window[PMGRAPHICID].text765 = window[PMGRAPHICID].panel.create('text', 
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
		  highlightCssClass:'window[PMGRAPHICID].text765 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text765 pm-math-text-center', 
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
function tml_Q_GENERIC_MARKER_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_5
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_5
	'scriptblock_GENERIC_MARKER_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_5';
	
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
		 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.x1; }, function() { return st.y1; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2; }, function() { return st.y2; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointr
 */
window[PMGRAPHICID].pointr = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointr
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_2551 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_2551 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_4557 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_4557 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_4557 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_4557, window[PMGRAPHICID].endArrow_4557], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+2.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 ', 
	  cssClass:'window[PMGRAPHICID].textT1 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+1.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize b = ' + PM_MATH.add_paren('b', 'Y', (window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].textT2 center', 
	  cssClass:'window[PMGRAPHICID].textT2 center', 
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
function tml_A_GENERIC_MARKER_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_5
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_5
	'scriptblock_GENERIC_MARKER_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_5';
	
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
		 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.x1; }, function() { return st.y1; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2; }, function() { return st.y2; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointr
 */
window[PMGRAPHICID].pointr = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointr
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_4953 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_4953 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'red',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_78210 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_78210 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_78210 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_78210, window[PMGRAPHICID].endArrow_78210], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); /* Create Text */
window[PMGRAPHICID].text1245 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text1245 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text42307 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text42307 center', 
	  cssClass:'window[PMGRAPHICID].text42307 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text35656 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize b = ' + PM_MATH.add_paren('b', 'Y', (window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text35656 center', 
	  cssClass:'window[PMGRAPHICID].text35656 center', 
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
		 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.x1; }, function() { return st.y1; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2; }, function() { return st.y2; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointr
 */
window[PMGRAPHICID].pointr = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointr
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_39894 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_39894 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 /* Create Text */
window[PMGRAPHICID].text78079 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text78079 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].startArrow_7311 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_7311 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_7311 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_7311, window[PMGRAPHICID].endArrow_7311], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].text26940 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text26940 center', 
	  cssClass:'window[PMGRAPHICID].text26940 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text75168 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize b = ' + PM_MATH.add_paren('b', 'Y', (window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text75168 center', 
	  cssClass:'window[PMGRAPHICID].text75168 center', 
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
		 

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.b;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2}, function() { return st.y2} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointr
 */
window[PMGRAPHICID].pointr = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointr
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_83626 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_83626 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_65430 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_65430 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointp.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointp.X(); return (check > 0 ) ? window[PMGRAPHICID].pointp.X()-0.3 : window[PMGRAPHICID].pointp.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointp.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointp.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointp.Y()-0.3 : window[PMGRAPHICID].pointp.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_65430 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_65430, window[PMGRAPHICID].endArrow_65430], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); /* Create Text */
window[PMGRAPHICID].text39784 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text39784 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text82139 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text82139 center', 
	  cssClass:'window[PMGRAPHICID].text82139 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text37711 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize b = ' + PM_MATH.add_paren('p', 'Y', (window[PMGRAPHICID].pointp) ? window[PMGRAPHICID].pointp : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text37711 center', 
	  cssClass:'window[PMGRAPHICID].text37711 center', 
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
function tml_GENERIC_MARKER_SlideNo_8 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_8
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_8
	'scriptblock_GENERIC_MARKER_SlideNo_8'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_8';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_8'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_8'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_8'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_8'];
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
		 

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.x1; }, function() { return st.y1; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2; }, function() { return st.y2; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_78247 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_78247 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
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
function tml_GENERIC_MARKER_SlideNo_9 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_9
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_9
	'scriptblock_GENERIC_MARKER_SlideNo_9'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_9';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_9'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_9'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_9'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_9'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:345px; ; height:345px; ;');
		
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
		 

/* Create a STANDARD pointa_
 */
window[PMGRAPHICID].pointa_ = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.a_;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointb_
 */
window[PMGRAPHICID].pointb_ = window[PMGRAPHICID].board.create('point', [ function() { return st.b_;}, function() { return 0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.a.x;}, function() { return st.a.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show label for pointa
 */
window[PMGRAPHICID].texta = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointa.X();
		if ('' != '0') {
			return (x+parseFloat('0'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointa.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointa.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'a';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.b.x;}, function() { return st.b.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show label for pointb
 */
window[PMGRAPHICID].textb = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointb.X();
		if ('' != '0') {
			return (x+parseFloat('0'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointb.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointb.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'b';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return st.c.x; }, function() { return st.c.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointd
 */
window[PMGRAPHICID].pointd = window[PMGRAPHICID].board.create('point', [ function() { return st.d.x; }, function() { return st.d.y; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointd.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointd
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointd.moveTo([x,y],1000);

    });  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_24999 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_24999 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_70842 = window[PMGRAPHICID].pointc;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_70842 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointa_.X()-window[PMGRAPHICID].pointc.X(); if (check == 0) return window[PMGRAPHICID].pointa_.X(); return (check > 0 ) ? window[PMGRAPHICID].pointa_.X()-0.3 : window[PMGRAPHICID].pointa_.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointa_.Y()-window[PMGRAPHICID].pointc.Y(); if (check == 0) return window[PMGRAPHICID].pointa_.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointa_.Y()-0.3 : window[PMGRAPHICID].pointa_.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_70842 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_70842, window[PMGRAPHICID].endArrow_70842], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_26810 = window[PMGRAPHICID].pointd;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_26810 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb_.X()-window[PMGRAPHICID].pointd.X(); if (check == 0) return window[PMGRAPHICID].pointb_.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb_.X()-0.3 : window[PMGRAPHICID].pointb_.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb_.Y()-window[PMGRAPHICID].pointd.Y(); if (check == 0) return window[PMGRAPHICID].pointb_.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb_.Y()-0.3 : window[PMGRAPHICID].pointb_.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_26810 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_26810, window[PMGRAPHICID].endArrow_26810], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  /* Create Text */
window[PMGRAPHICID].text35961 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointc.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointc.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text35961 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text32108 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointd.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointd.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text32108 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
  
window[PMGRAPHICID].text41111 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointc.X()+1; }, 
		function() { return window[PMGRAPHICID].pointc.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text41111 center', 
	  cssClass:'window[PMGRAPHICID].text41111 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text48377 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointc.X()+1; }, 
		function() { return window[PMGRAPHICID].pointc.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y = ' + PM_MATH.add_paren('a_', 'Y', (window[PMGRAPHICID].pointa_) ? window[PMGRAPHICID].pointa_ : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text48377 center', 
	  cssClass:'window[PMGRAPHICID].text48377 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text56306 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointd.X()+1; }, 
		function() { return window[PMGRAPHICID].pointd.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize x-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text56306 center', 
	  cssClass:'window[PMGRAPHICID].text56306 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text82470 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointd.X()+1; }, 
		function() { return window[PMGRAPHICID].pointd.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize x = ' + PM_MATH.add_paren('b_', 'X', (window[PMGRAPHICID].pointb_) ? window[PMGRAPHICID].pointb_ : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text82470 center', 
	  cssClass:'window[PMGRAPHICID].text82470 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };