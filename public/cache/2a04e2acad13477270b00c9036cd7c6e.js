
  CTNS.QUIZ_SET["2a04e2acad13477270b00c9036cd7c6e"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2833 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2833';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2833', 11);
	
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

	jQuery(".slide_2833").each( function() {do_center(this)} );

    do_force('2833');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         11,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-10",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
    slideNo: 2,
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-11",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
    slideNo: 3,
    factoryid: '2833',
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
{
    slideNo: 4,
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-12",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-12b",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:422px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "420",
    width: "420",
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
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-13",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-13b",
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
{
    slideNo: 8,
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-13c",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:402px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
{
    slideNo: 9,
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-14",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
    slideNo: 10,
    factoryid: '2833',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-15",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
CTNS.NUMBERS.GID = 'quiz_2833';
CTNS.NUMBERS.equations['quiz_2833'] = [];
CTNS.NUMBERS.symbols['quiz_2833'] = CTNS.NUMBERS.symbols['quiz_2833'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_0',                ablock           = '#answerblock_2833_SlideNo_0',                acblock          = '#answercommentaryblock_2833_SlideNo_0',                                grblock          = 'graphicblock_2833_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_0',                grblock_A        = 'graphicblock_A_2833_SlideNo_0',                grblock_B        = 'graphicblock_B_2833_SlideNo_0',                grblock_C        = 'graphicblock_C_2833_SlideNo_0',                grblock_D        = 'graphicblock_D_2833_SlideNo_0',                grblock_E        = 'graphicblock_E_2833_SlideNo_0',                grblock_F        = 'graphicblock_F_2833_SlideNo_0',                                grblock_f        = (typeof tml_2833_SlideNo_0   !== 'undefined') ? tml_2833_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_0 !== 'undefined') ? tml_Q_2833_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_0 !== 'undefined') ? tml_A_2833_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_0 !== 'undefined') ? tml_B_2833_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_0 !== 'undefined') ? tml_C_2833_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_0 !== 'undefined') ? tml_D_2833_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_0 !== 'undefined') ? tml_E_2833_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_0 !== 'undefined') ? tml_F_2833_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_1',                ablock           = '#answerblock_2833_SlideNo_1',                acblock          = '#answercommentaryblock_2833_SlideNo_1',                                grblock          = 'graphicblock_2833_SlideNo_1',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_1',                grblock_A        = 'graphicblock_A_2833_SlideNo_1',                grblock_B        = 'graphicblock_B_2833_SlideNo_1',                grblock_C        = 'graphicblock_C_2833_SlideNo_1',                grblock_D        = 'graphicblock_D_2833_SlideNo_1',                grblock_E        = 'graphicblock_E_2833_SlideNo_1',                grblock_F        = 'graphicblock_F_2833_SlideNo_1',                                grblock_f        = (typeof tml_2833_SlideNo_1   !== 'undefined') ? tml_2833_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_1 !== 'undefined') ? tml_Q_2833_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_1 !== 'undefined') ? tml_A_2833_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_1 !== 'undefined') ? tml_B_2833_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_1 !== 'undefined') ? tml_C_2833_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_1 !== 'undefined') ? tml_D_2833_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_1 !== 'undefined') ? tml_E_2833_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_1 !== 'undefined') ? tml_F_2833_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_2',                ablock           = '#answerblock_2833_SlideNo_2',                acblock          = '#answercommentaryblock_2833_SlideNo_2',                                grblock          = 'graphicblock_2833_SlideNo_2',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_2',                grblock_A        = 'graphicblock_A_2833_SlideNo_2',                grblock_B        = 'graphicblock_B_2833_SlideNo_2',                grblock_C        = 'graphicblock_C_2833_SlideNo_2',                grblock_D        = 'graphicblock_D_2833_SlideNo_2',                grblock_E        = 'graphicblock_E_2833_SlideNo_2',                grblock_F        = 'graphicblock_F_2833_SlideNo_2',                                grblock_f        = (typeof tml_2833_SlideNo_2   !== 'undefined') ? tml_2833_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_2 !== 'undefined') ? tml_Q_2833_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_2 !== 'undefined') ? tml_A_2833_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_2 !== 'undefined') ? tml_B_2833_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_2 !== 'undefined') ? tml_C_2833_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_2 !== 'undefined') ? tml_D_2833_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_2 !== 'undefined') ? tml_E_2833_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_2 !== 'undefined') ? tml_F_2833_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_3',                ablock           = '#answerblock_2833_SlideNo_3',                acblock          = '#answercommentaryblock_2833_SlideNo_3',                                grblock          = 'graphicblock_2833_SlideNo_3',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_3',                grblock_A        = 'graphicblock_A_2833_SlideNo_3',                grblock_B        = 'graphicblock_B_2833_SlideNo_3',                grblock_C        = 'graphicblock_C_2833_SlideNo_3',                grblock_D        = 'graphicblock_D_2833_SlideNo_3',                grblock_E        = 'graphicblock_E_2833_SlideNo_3',                grblock_F        = 'graphicblock_F_2833_SlideNo_3',                                grblock_f        = (typeof tml_2833_SlideNo_3   !== 'undefined') ? tml_2833_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_3 !== 'undefined') ? tml_Q_2833_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_3 !== 'undefined') ? tml_A_2833_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_3 !== 'undefined') ? tml_B_2833_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_3 !== 'undefined') ? tml_C_2833_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_3 !== 'undefined') ? tml_D_2833_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_3 !== 'undefined') ? tml_E_2833_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_3 !== 'undefined') ? tml_F_2833_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_4',                ablock           = '#answerblock_2833_SlideNo_4',                acblock          = '#answercommentaryblock_2833_SlideNo_4',                                grblock          = 'graphicblock_2833_SlideNo_4',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_4',                grblock_A        = 'graphicblock_A_2833_SlideNo_4',                grblock_B        = 'graphicblock_B_2833_SlideNo_4',                grblock_C        = 'graphicblock_C_2833_SlideNo_4',                grblock_D        = 'graphicblock_D_2833_SlideNo_4',                grblock_E        = 'graphicblock_E_2833_SlideNo_4',                grblock_F        = 'graphicblock_F_2833_SlideNo_4',                                grblock_f        = (typeof tml_2833_SlideNo_4   !== 'undefined') ? tml_2833_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_4 !== 'undefined') ? tml_Q_2833_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_4 !== 'undefined') ? tml_A_2833_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_4 !== 'undefined') ? tml_B_2833_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_4 !== 'undefined') ? tml_C_2833_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_4 !== 'undefined') ? tml_D_2833_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_4 !== 'undefined') ? tml_E_2833_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_4 !== 'undefined') ? tml_F_2833_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_5',                ablock           = '#answerblock_2833_SlideNo_5',                acblock          = '#answercommentaryblock_2833_SlideNo_5',                                grblock          = 'graphicblock_2833_SlideNo_5',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_5',                grblock_A        = 'graphicblock_A_2833_SlideNo_5',                grblock_B        = 'graphicblock_B_2833_SlideNo_5',                grblock_C        = 'graphicblock_C_2833_SlideNo_5',                grblock_D        = 'graphicblock_D_2833_SlideNo_5',                grblock_E        = 'graphicblock_E_2833_SlideNo_5',                grblock_F        = 'graphicblock_F_2833_SlideNo_5',                                grblock_f        = (typeof tml_2833_SlideNo_5   !== 'undefined') ? tml_2833_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_5 !== 'undefined') ? tml_Q_2833_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_5 !== 'undefined') ? tml_A_2833_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_5 !== 'undefined') ? tml_B_2833_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_5 !== 'undefined') ? tml_C_2833_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_5 !== 'undefined') ? tml_D_2833_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_5 !== 'undefined') ? tml_E_2833_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_5 !== 'undefined') ? tml_F_2833_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_6'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_6'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_6',                ablock           = '#answerblock_2833_SlideNo_6',                acblock          = '#answercommentaryblock_2833_SlideNo_6',                                grblock          = 'graphicblock_2833_SlideNo_6',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_6',                grblock_A        = 'graphicblock_A_2833_SlideNo_6',                grblock_B        = 'graphicblock_B_2833_SlideNo_6',                grblock_C        = 'graphicblock_C_2833_SlideNo_6',                grblock_D        = 'graphicblock_D_2833_SlideNo_6',                grblock_E        = 'graphicblock_E_2833_SlideNo_6',                grblock_F        = 'graphicblock_F_2833_SlideNo_6',                                grblock_f        = (typeof tml_2833_SlideNo_6   !== 'undefined') ? tml_2833_SlideNo_6   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_6 !== 'undefined') ? tml_Q_2833_SlideNo_6 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_6 !== 'undefined') ? tml_A_2833_SlideNo_6 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_6 !== 'undefined') ? tml_B_2833_SlideNo_6 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_6 !== 'undefined') ? tml_C_2833_SlideNo_6 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_6 !== 'undefined') ? tml_D_2833_SlideNo_6 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_6 !== 'undefined') ? tml_E_2833_SlideNo_6 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_6 !== 'undefined') ? tml_F_2833_SlideNo_6 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_6'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_7'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_7'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_7',                ablock           = '#answerblock_2833_SlideNo_7',                acblock          = '#answercommentaryblock_2833_SlideNo_7',                                grblock          = 'graphicblock_2833_SlideNo_7',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_7',                grblock_A        = 'graphicblock_A_2833_SlideNo_7',                grblock_B        = 'graphicblock_B_2833_SlideNo_7',                grblock_C        = 'graphicblock_C_2833_SlideNo_7',                grblock_D        = 'graphicblock_D_2833_SlideNo_7',                grblock_E        = 'graphicblock_E_2833_SlideNo_7',                grblock_F        = 'graphicblock_F_2833_SlideNo_7',                                grblock_f        = (typeof tml_2833_SlideNo_7   !== 'undefined') ? tml_2833_SlideNo_7   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_7 !== 'undefined') ? tml_Q_2833_SlideNo_7 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_7 !== 'undefined') ? tml_A_2833_SlideNo_7 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_7 !== 'undefined') ? tml_B_2833_SlideNo_7 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_7 !== 'undefined') ? tml_C_2833_SlideNo_7 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_7 !== 'undefined') ? tml_D_2833_SlideNo_7 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_7 !== 'undefined') ? tml_E_2833_SlideNo_7 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_7 !== 'undefined') ? tml_F_2833_SlideNo_7 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_7'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_8'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_8'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_8',                ablock           = '#answerblock_2833_SlideNo_8',                acblock          = '#answercommentaryblock_2833_SlideNo_8',                                grblock          = 'graphicblock_2833_SlideNo_8',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_8',                grblock_A        = 'graphicblock_A_2833_SlideNo_8',                grblock_B        = 'graphicblock_B_2833_SlideNo_8',                grblock_C        = 'graphicblock_C_2833_SlideNo_8',                grblock_D        = 'graphicblock_D_2833_SlideNo_8',                grblock_E        = 'graphicblock_E_2833_SlideNo_8',                grblock_F        = 'graphicblock_F_2833_SlideNo_8',                                grblock_f        = (typeof tml_2833_SlideNo_8   !== 'undefined') ? tml_2833_SlideNo_8   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_8 !== 'undefined') ? tml_Q_2833_SlideNo_8 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_8 !== 'undefined') ? tml_A_2833_SlideNo_8 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_8 !== 'undefined') ? tml_B_2833_SlideNo_8 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_8 !== 'undefined') ? tml_C_2833_SlideNo_8 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_8 !== 'undefined') ? tml_D_2833_SlideNo_8 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_8 !== 'undefined') ? tml_E_2833_SlideNo_8 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_8 !== 'undefined') ? tml_F_2833_SlideNo_8 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_8'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_9'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_9'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_9',                ablock           = '#answerblock_2833_SlideNo_9',                acblock          = '#answercommentaryblock_2833_SlideNo_9',                                grblock          = 'graphicblock_2833_SlideNo_9',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_9',                grblock_A        = 'graphicblock_A_2833_SlideNo_9',                grblock_B        = 'graphicblock_B_2833_SlideNo_9',                grblock_C        = 'graphicblock_C_2833_SlideNo_9',                grblock_D        = 'graphicblock_D_2833_SlideNo_9',                grblock_E        = 'graphicblock_E_2833_SlideNo_9',                grblock_F        = 'graphicblock_F_2833_SlideNo_9',                                grblock_f        = (typeof tml_2833_SlideNo_9   !== 'undefined') ? tml_2833_SlideNo_9   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_9 !== 'undefined') ? tml_Q_2833_SlideNo_9 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_9 !== 'undefined') ? tml_A_2833_SlideNo_9 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_9 !== 'undefined') ? tml_B_2833_SlideNo_9 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_9 !== 'undefined') ? tml_C_2833_SlideNo_9 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_9 !== 'undefined') ? tml_D_2833_SlideNo_9 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_9 !== 'undefined') ? tml_E_2833_SlideNo_9 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_9 !== 'undefined') ? tml_F_2833_SlideNo_9 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_9'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2833_SlideNo_10'] = CTNS.NUMBERS.symbols['new_scriptblock_2833_SlideNo_10'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2833'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2833_SlideNo_10',                ablock           = '#answerblock_2833_SlideNo_10',                acblock          = '#answercommentaryblock_2833_SlideNo_10',                                grblock          = 'graphicblock_2833_SlideNo_10',                grblock_Q        = 'graphicblock_Q_2833_SlideNo_10',                grblock_A        = 'graphicblock_A_2833_SlideNo_10',                grblock_B        = 'graphicblock_B_2833_SlideNo_10',                grblock_C        = 'graphicblock_C_2833_SlideNo_10',                grblock_D        = 'graphicblock_D_2833_SlideNo_10',                grblock_E        = 'graphicblock_E_2833_SlideNo_10',                grblock_F        = 'graphicblock_F_2833_SlideNo_10',                                grblock_f        = (typeof tml_2833_SlideNo_10   !== 'undefined') ? tml_2833_SlideNo_10   : null,                grblock_Q_f      = (typeof tml_Q_2833_SlideNo_10 !== 'undefined') ? tml_Q_2833_SlideNo_10 : null,                grblock_A_f      = (typeof tml_A_2833_SlideNo_10 !== 'undefined') ? tml_A_2833_SlideNo_10 : null,                grblock_B_f      = (typeof tml_B_2833_SlideNo_10 !== 'undefined') ? tml_B_2833_SlideNo_10 : null,                grblock_C_f      = (typeof tml_C_2833_SlideNo_10 !== 'undefined') ? tml_C_2833_SlideNo_10 : null,                grblock_D_f      = (typeof tml_D_2833_SlideNo_10 !== 'undefined') ? tml_D_2833_SlideNo_10 : null,                grblock_E_f      = (typeof tml_E_2833_SlideNo_10 !== 'undefined') ? tml_E_2833_SlideNo_10 : null,                grblock_F_f      = (typeof tml_F_2833_SlideNo_10 !== 'undefined') ? tml_F_2833_SlideNo_10 : null,                numbers          = NUMBERS,                gid              = 'quiz_2833',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2833_SlideNo_10'],                gsymbols         = NUMBERS.symbols['quiz_2833'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2833_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_0
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_0
	'scriptblock_2833_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_0'] = NUMBERS.symbols['scriptblock_2833_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_0'];
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
window[PMGRAPHICID].segment_37081 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_37081 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
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
window[PMGRAPHICID].startArrow_47350 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_47350 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_47350 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_47350, window[PMGRAPHICID].endArrow_47350], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_41366 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_41366 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_41366 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_41366, window[PMGRAPHICID].endArrow_41366], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_66743 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_66743 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_66743 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_66743, window[PMGRAPHICID].endArrow_66743], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_33864 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_33864 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_33864 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_33864, window[PMGRAPHICID].endArrow_33864], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_97672 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_97672 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_97672 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_97672, window[PMGRAPHICID].endArrow_97672], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_33610 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_33610 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_33610 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_33610, window[PMGRAPHICID].endArrow_33610], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_31357 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_31357   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_31357 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_94713 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_94713   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_94713 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_11864 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_11864   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_11864 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text10529 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text10529 ', 
	  cssClass:'window[PMGRAPHICID].text10529 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text48253 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text48253 ', 
	  cssClass:'window[PMGRAPHICID].text48253 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text5575 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text5575 ', 
	  cssClass:'window[PMGRAPHICID].text5575 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text97861 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text97861 ', 
	  cssClass:'window[PMGRAPHICID].text97861 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text94831 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text94831 ', 
	  cssClass:'window[PMGRAPHICID].text94831 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text59263 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text59263 ', 
	  cssClass:'window[PMGRAPHICID].text59263 ', 
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
function tml_2833_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_1
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_1
	'scriptblock_2833_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_1'] = NUMBERS.symbols['scriptblock_2833_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_1'];
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-4,-3], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
  
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.8);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointD on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
window[PMGRAPHICID].startArrow_51555 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_51555 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_51555 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_51555, window[PMGRAPHICID].endArrow_51555], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_4294 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_4294 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_4294 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_4294, window[PMGRAPHICID].endArrow_4294], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_91007 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_91007   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_91007 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
/* Create INLINE pointAD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointAD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointDE between two points, window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointD.X()+(0.5)*(window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointD.Y()+(0.5)*(window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  /*
 * Expected Calculation on (D.x-A.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
 * Expected Calculation on E.y-D.y
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE.Y() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE.Y() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0);
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
window[PMGRAPHICID].text40126 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointAD.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointAD.Y()+-0.4; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text40126 ', 
	  cssClass:'window[PMGRAPHICID].text40126 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text84570 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text84570 ', 
	  cssClass:'window[PMGRAPHICID].text84570 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text4967 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-2.5; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+2.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:white;font-weight:bold;border:2px solid black;border-radius:5px;;\'>Constant<br/>Rate Of Change</div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text4967 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text38249 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-2.5; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+2.5; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text38249 ', 
	  cssClass:'window[PMGRAPHICID].text38249 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  /*
 * Expected Calculation on ((A.x NE B.x) AND (A.y NE B.y))
 */
/*
 * Calculate on C4: ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)))
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)));
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
 * Expected Calculation on (A.y EQ B.y)
 */
/*
 * Calculate on C5: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0))
 */
window[PMGRAPHICID].pointC5 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC5 = function () {
		if ( window[PMGRAPHICID].getXC5.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC5.value = 0;
				return( window[PMGRAPHICID].getXC5.value );
			};
		window[PMGRAPHICID].getXC5.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0));
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
 * Expected Calculation on (A.x EQ B.x)
 */
/*
 * Calculate on C6: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0))
 */
window[PMGRAPHICID].pointC6 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC6 = function () {
		if ( window[PMGRAPHICID].getXC6.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC6.value = 0;
				return( window[PMGRAPHICID].getXC6.value );
			};
		window[PMGRAPHICID].getXC6.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /* Create Text */
window[PMGRAPHICID].textT4 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Linear Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT4 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT5 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Constant Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT5 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT6 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Not a function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT6 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].condition26138buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition26138buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition26138onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition26138buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition26138buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition26138buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition26138onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition26138buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition26138buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition26138buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition26138 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition26138onTrue();
	} else {
		window[PMGRAPHICID].condition26138onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition26138);
window[PMGRAPHICID].updateCondition26138; 
window[PMGRAPHICID].condition3177buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition3177buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition3177onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition3177buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition3177buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition3177buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition3177onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition3177buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition3177buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition3177buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition3177 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition3177onTrue();
	} else {
		window[PMGRAPHICID].condition3177onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition3177);
window[PMGRAPHICID].updateCondition3177; 
window[PMGRAPHICID].condition9792buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition9792buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition9792onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition9792buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition9792buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition9792buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition9792onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition9792buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition9792buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition9792buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition9792 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition9792onTrue();
	} else {
		window[PMGRAPHICID].condition9792onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition9792);
window[PMGRAPHICID].updateCondition9792;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2833_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_2
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_2
	'scriptblock_2833_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_2'] = NUMBERS.symbols['scriptblock_2833_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_2'];
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
			boundingbox: [-8,8,8,-1] ,
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-6,-6], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,6], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_93795 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_93795 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
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
window[PMGRAPHICID].startArrow_49981 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_49981 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_49981 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_49981, window[PMGRAPHICID].endArrow_49981], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_77107 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_77107 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_77107 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_77107, window[PMGRAPHICID].endArrow_77107], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_74725 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_74725 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_74725 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_74725, window[PMGRAPHICID].endArrow_74725], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_33438 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_33438 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_33438 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_33438, window[PMGRAPHICID].endArrow_33438], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_49786 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_49786 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_49786 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_49786, window[PMGRAPHICID].endArrow_49786], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_47760 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_47760 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_47760 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_47760, window[PMGRAPHICID].endArrow_47760], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_23367 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_23367   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_23367 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_22975 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_22975   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_22975 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_76748 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_76748   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_76748 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text94652 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointAAC.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointAAC.Y()+0.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text94652 ', 
	  cssClass:'window[PMGRAPHICID].text94652 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text2400 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCCD.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointCCD.Y()+0.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text2400 ', 
	  cssClass:'window[PMGRAPHICID].text2400 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text70464 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDB.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointDDB.Y()+0.2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text70464 ', 
	  cssClass:'window[PMGRAPHICID].text70464 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text89562 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointACC.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointACC.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C4', 'X', (window[PMGRAPHICID].pointC4) ? window[PMGRAPHICID].pointC4 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text89562 ', 
	  cssClass:'window[PMGRAPHICID].text89562 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text13434 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCDD.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointCDD.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C5', 'X', (window[PMGRAPHICID].pointC5) ? window[PMGRAPHICID].pointC5 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text13434 ', 
	  cssClass:'window[PMGRAPHICID].text13434 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text85414 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDBB.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDBB.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C6', 'X', (window[PMGRAPHICID].pointC6) ? window[PMGRAPHICID].pointC6 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text85414 ', 
	  cssClass:'window[PMGRAPHICID].text85414 ', 
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
function tml_2833_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_3
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_3
	'scriptblock_2833_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_3'] = NUMBERS.symbols['scriptblock_2833_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_3'];
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
window[PMGRAPHICID].segment_63725 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_63725 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
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
window[PMGRAPHICID].startArrow_47274 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_47274 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_47274 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_47274, window[PMGRAPHICID].endArrow_47274], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_23693 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_23693 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_23693 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_23693, window[PMGRAPHICID].endArrow_23693], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_54723 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_54723 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_54723 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_54723, window[PMGRAPHICID].endArrow_54723], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_3614 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_3614 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_3614 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_3614, window[PMGRAPHICID].endArrow_3614], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_69609 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_69609 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_69609 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_69609, window[PMGRAPHICID].endArrow_69609], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_27479 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_27479 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_27479 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_27479, window[PMGRAPHICID].endArrow_27479], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_41032 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_41032   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_41032 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_95941 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_95941   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_95941 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_11552 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_11552   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_11552 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text16975 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text16975 ', 
	  cssClass:'window[PMGRAPHICID].text16975 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text27100 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text27100 ', 
	  cssClass:'window[PMGRAPHICID].text27100 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text91290 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text91290 ', 
	  cssClass:'window[PMGRAPHICID].text91290 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text115 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text115 ', 
	  cssClass:'window[PMGRAPHICID].text115 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text61851 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text61851 ', 
	  cssClass:'window[PMGRAPHICID].text61851 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text63014 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text63014 ', 
	  cssClass:'window[PMGRAPHICID].text63014 ', 
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
function tml_2833_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_4
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_4
	'scriptblock_2833_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_4';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_4'] = NUMBERS.symbols['scriptblock_2833_SlideNo_4'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_4'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_4'];
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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [5,5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
  
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointC.setGliderPosition(0.2);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointD.setGliderPosition(0.8);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointcCD on points window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointcCD = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_45367 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_45367 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointcCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.X()-0.3 : window[PMGRAPHICID].pointcCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointcCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointcCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.Y()-0.3 : window[PMGRAPHICID].pointcCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_45367 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_45367, window[PMGRAPHICID].endArrow_45367], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_18961 = window[PMGRAPHICID].pointcCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_18961 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointcCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointcCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_18961 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_18961, window[PMGRAPHICID].endArrow_18961], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_97609 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_97609   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_97609 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on (cCD.x-C.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.X() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.X() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0));
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
 * Expected Calculation on D.y-cCD.y
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)-((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.Y() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)-((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.Y() : 0);
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
/* Create INLINE pointCcCD between two points, window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointcCD
 */
window[PMGRAPHICID].pointCcCD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointC.X()+(0.5)*(window[PMGRAPHICID].pointcCD.X()-window[PMGRAPHICID].pointC.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointC.Y()+(0.5)*(window[PMGRAPHICID].pointcCD.Y()-window[PMGRAPHICID].pointC.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
window[PMGRAPHICID].text43993 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCcCD.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointCcCD.Y()+-0.4; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text43993 ', 
	  cssClass:'window[PMGRAPHICID].text43993 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
/* Create INLINE pointcCDD between two points, window[PMGRAPHICID].pointcCD and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointcCDD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointcCD.X()+(0.5)*(window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointcCD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointcCD.Y()+(0.5)*(window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointcCD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
window[PMGRAPHICID].text66047 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointcCDD.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointcCDD.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text66047 ', 
	  cssClass:'window[PMGRAPHICID].text66047 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  

/* Create a STANDARD pointT
 */
window[PMGRAPHICID].pointT = window[PMGRAPHICID].board.create('point', [-5,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointT.moveTo([x,y],1000);

    }); /* Create Text */
window[PMGRAPHICID].text87237 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointT.X()+-2.5; }, 
		function() { return window[PMGRAPHICID].pointT.Y()+2.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:white;font-weight:bold;border:2px solid black;border-radius:5px;;\'>Constant<br/>Rate Of Change</div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text87237 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text10932 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointT.X()+-2.5; }, 
		function() { return window[PMGRAPHICID].pointT.Y()+2.0; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text10932 ', 
	  cssClass:'window[PMGRAPHICID].text10932 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  /*
 * Expected Calculation on ((A.x NE B.x) AND (A.y NE B.y))
 */
/*
 * Calculate on C4: ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)))
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)));
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
 * Expected Calculation on (A.y EQ B.y)
 */
/*
 * Calculate on C5: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0))
 */
window[PMGRAPHICID].pointC5 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC5 = function () {
		if ( window[PMGRAPHICID].getXC5.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC5.value = 0;
				return( window[PMGRAPHICID].getXC5.value );
			};
		window[PMGRAPHICID].getXC5.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0));
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
 * Expected Calculation on (A.x EQ B.x)
 */
/*
 * Calculate on C6: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0))
 */
window[PMGRAPHICID].pointC6 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC6 = function () {
		if ( window[PMGRAPHICID].getXC6.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC6.value = 0;
				return( window[PMGRAPHICID].getXC6.value );
			};
		window[PMGRAPHICID].getXC6.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /* Create Text */
window[PMGRAPHICID].textT4 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Linear Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT4 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT5 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Constant Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT5 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT6 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Not a function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT6 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].condition67282buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition67282buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition67282onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition67282buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition67282buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition67282buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition67282onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition67282buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition67282buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition67282buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition67282 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition67282onTrue();
	} else {
		window[PMGRAPHICID].condition67282onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition67282);
window[PMGRAPHICID].updateCondition67282; 
window[PMGRAPHICID].condition30074buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition30074buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition30074onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition30074buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition30074buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition30074buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition30074onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition30074buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition30074buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition30074buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition30074 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition30074onTrue();
	} else {
		window[PMGRAPHICID].condition30074onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition30074);
window[PMGRAPHICID].updateCondition30074; 
window[PMGRAPHICID].condition11544buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition11544buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition11544onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition11544buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition11544buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition11544buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition11544onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition11544buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition11544buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition11544buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition11544 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition11544onTrue();
	} else {
		window[PMGRAPHICID].condition11544onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition11544);
window[PMGRAPHICID].updateCondition11544;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2833_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_5
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_5
	'scriptblock_2833_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_5';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_5'] = NUMBERS.symbols['scriptblock_2833_SlideNo_5'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_5'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_5'];
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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [-2,-3], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
  
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointC.setGliderPosition(1.5);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointD.setGliderPosition(2.5);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointcCD on points window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointcCD = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_30698 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_30698 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointcCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.X()-0.3 : window[PMGRAPHICID].pointcCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointcCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointcCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.Y()-0.3 : window[PMGRAPHICID].pointcCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_30698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_30698, window[PMGRAPHICID].endArrow_30698], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_63423 = window[PMGRAPHICID].pointcCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_63423 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointcCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointcCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_63423 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_63423, window[PMGRAPHICID].endArrow_63423], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_84509 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_84509   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_84509 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on (cCD.x-C.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.X() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.X() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0));
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
 * Expected Calculation on D.y-cCD.y
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)-((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.Y() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)-((window[PMGRAPHICID].pointcCD) ? window[PMGRAPHICID].pointcCD.Y() : 0);
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
/* Create INLINE pointCcCD between two points, window[PMGRAPHICID].pointC and window[PMGRAPHICID].pointcCD
 */
window[PMGRAPHICID].pointCcCD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointC.X()+(0.5)*(window[PMGRAPHICID].pointcCD.X()-window[PMGRAPHICID].pointC.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointC.Y()+(0.5)*(window[PMGRAPHICID].pointcCD.Y()-window[PMGRAPHICID].pointC.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
window[PMGRAPHICID].text29010 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointCcCD.X()+0; }, 
		function() { return window[PMGRAPHICID].pointCcCD.Y()+-0.6; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text29010 ', 
	  cssClass:'window[PMGRAPHICID].text29010 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
/* Create INLINE pointcCDD between two points, window[PMGRAPHICID].pointcCD and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointcCDD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointcCD.X()+(0.5)*(window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointcCD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointcCD.Y()+(0.5)*(window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointcCD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
window[PMGRAPHICID].text82370 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointcCDD.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointcCDD.Y()+0; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text82370 ', 
	  cssClass:'window[PMGRAPHICID].text82370 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:170px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false});  /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,10 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'Constant Rate Of Change';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
		  highlightCssClass:'window[PMGRAPHICID].textT2 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
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
function tml_2833_SlideNo_6 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_6
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_6
	'scriptblock_2833_SlideNo_6'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_6';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_6'] = NUMBERS.symbols['scriptblock_2833_SlideNo_6'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_6'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_6'];
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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,7], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [-7,7], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointD.setGliderPosition(0.25);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.75);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointDE on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_98849 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_98849 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_98849 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_98849, window[PMGRAPHICID].endArrow_98849], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_14063 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_14063 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_14063 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_14063, window[PMGRAPHICID].endArrow_14063], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_50637 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_50637   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_50637 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text10909 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Run = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text10909 ', 
	  cssClass:'window[PMGRAPHICID].text10909 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text46118 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Rise = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text46118 ', 
	  cssClass:'window[PMGRAPHICID].text46118 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text58940 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+0; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+-1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:white;font-weight:bold;border:2px solid black;border-radius:5px;;\'>Slope</div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text58940 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text84153 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+0; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+-1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\frac{Rise}{Run} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text84153 ', 
	  cssClass:'window[PMGRAPHICID].text84153 ', 
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
function tml_2833_SlideNo_7 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_7
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_7
	'scriptblock_2833_SlideNo_7'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_7';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_7'] = NUMBERS.symbols['scriptblock_2833_SlideNo_7'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_7'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_7'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 6.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [6.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,2], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [-5,3], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointD.setGliderPosition(0.25);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.75);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointDE on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_89016 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_89016 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_89016 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_89016, window[PMGRAPHICID].endArrow_89016], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_61878 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_61878 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_61878 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_61878, window[PMGRAPHICID].endArrow_61878], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_25183 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_25183   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_25183 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text47024 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+0; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Run = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text47024 ', 
	  cssClass:'window[PMGRAPHICID].text47024 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text80089 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+0.75; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Rise = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text80089 ', 
	  cssClass:'window[PMGRAPHICID].text80089 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text4109 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-0.75; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:white;font-weight:bold;height:80px;width:120px;border:2px solid black;border-radius:5px;;\'>Slope<br/></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text4109 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text69022 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+1.75; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+0.25; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\frac{Rise}{Run} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text69022 ', 
	  cssClass:'window[PMGRAPHICID].text69022 ', 
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
function tml_2833_SlideNo_8 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_8
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_8
	'scriptblock_2833_SlideNo_8'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_8';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_8'] = NUMBERS.symbols['scriptblock_2833_SlideNo_8'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_8'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_8'];
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 6.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [6.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [-3,-2], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
  
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointD.setGliderPosition(2);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(3);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointDE on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_75640 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_75640 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_75640 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_75640, window[PMGRAPHICID].endArrow_75640], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_51875 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_51875 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_51875 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_51875, window[PMGRAPHICID].endArrow_51875], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_85724 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_85724   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_85724 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text11218 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+1; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Run = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text11218 ', 
	  cssClass:'window[PMGRAPHICID].text11218 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text55750 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+1.25; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = 'Rise = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text55750 ', 
	  cssClass:'window[PMGRAPHICID].text55750 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:170px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false});  /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,10 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'Constant Rate Of Change';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'Slope';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 
window[PMGRAPHICID].textT3 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,4 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\frac{Rise}{Run} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
		  highlightCssClass:'window[PMGRAPHICID].textT3 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT3 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
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
function tml_2833_SlideNo_9 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_9
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_9
	'scriptblock_2833_SlideNo_9'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_9';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_9'] = NUMBERS.symbols['scriptblock_2833_SlideNo_9'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_9'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_9'];
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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,7], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [-7,7], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointD.setGliderPosition(0.25);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/ 
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.75);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointDE on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_19153 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_19153 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_19153 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_19153, window[PMGRAPHICID].endArrow_19153], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_22343 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_22343 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_22343 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_22343, window[PMGRAPHICID].endArrow_22343], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_11997 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_11997   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_11997 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text6234 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta x = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text6234 ', 
	  cssClass:'window[PMGRAPHICID].text6234 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text37450 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text37450 ', 
	  cssClass:'window[PMGRAPHICID].text37450 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text90725 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+0; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+-1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:white;font-weight:bold;border:2px solid black;border-radius:5px;;\'>Slope</div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text90725 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text82799 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+0; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+-1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text82799 ', 
	  cssClass:'window[PMGRAPHICID].text82799 ', 
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
function tml_2833_SlideNo_10 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2833_SlideNo_10
	What do these buy me? tag=, masterid=2833, slideno=SlideNo_10
	'scriptblock_2833_SlideNo_10'
	*/
	
	PMGRAPHICID   = 'graphicblock_2833_SlideNo_10';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2833_SlideNo_10'] = NUMBERS.symbols['scriptblock_2833_SlideNo_10'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2833_SlideNo_10'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2833_SlideNo_10'];
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-5,-3], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [2,7], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [-4.25,-4.5], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointD.setGliderPosition(0.25);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/

/* Show coordinates for pointD
 */
window[PMGRAPHICID].textD = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointD.X();
		if ('' != '-2.5') {
			return (x+parseFloat('-2.5'));
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
		var y = window[PMGRAPHICID].pointD.Y();
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
		var x = window[PMGRAPHICID].pointD.X();
		var y = window[PMGRAPHICID].pointD.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.75);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/

/* Show coordinates for pointE
 */
window[PMGRAPHICID].textE = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointE.X();
		if ('' != '1.0') {
			return (x+parseFloat('1.0'));
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
		var y = window[PMGRAPHICID].pointE.Y();
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
		var x = window[PMGRAPHICID].pointE.X();
		var y = window[PMGRAPHICID].pointE.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
/* Create a CORNER / CORNER-RIGHT pointDE on points window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  
window[PMGRAPHICID].startArrow_37518 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_37518 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_37518 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_37518, window[PMGRAPHICID].endArrow_37518], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_46585 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_46585 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_46585 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_46585, window[PMGRAPHICID].endArrow_46585], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_57408 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_57408   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_57408 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text1134 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+-1.5; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-0.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta x = ' + PM_MATH.add_paren('DE', 'X', (window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE : null,1,null) + ' - ' + PM_MATH.add_paren('D', 'X', (window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text1134 ', 
	  cssClass:'window[PMGRAPHICID].text1134 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text23709 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDDE.X()+-0.25; }, 
		function() { return window[PMGRAPHICID].pointDDE.Y()+-1.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '= ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text23709 ', 
	  cssClass:'window[PMGRAPHICID].text23709 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text32174 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('E', 'Y', (window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE : null,1,null) + ' - ' + PM_MATH.add_paren('DE', 'Y', (window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text32174 ', 
	  cssClass:'window[PMGRAPHICID].text32174 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text74168 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDEE.X()+1.75; }, 
		function() { return window[PMGRAPHICID].pointDEE.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '= ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text74168 ', 
	  cssClass:'window[PMGRAPHICID].text74168 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text34472 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+0; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\textrm {Slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('E', 'Y', (window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE : null,1,null) + ' - ' + PM_MATH.add_paren('DE', 'Y', (window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE : null,1,null) + '}{' + PM_MATH.add_paren('DE', 'X', (window[PMGRAPHICID].pointDE) ? window[PMGRAPHICID].pointDE : null,1,null) + ' - ' + PM_MATH.add_paren('D', 'X', (window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD : null,1,null) + '} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text34472 ', 
	  cssClass:'window[PMGRAPHICID].text34472 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
} };