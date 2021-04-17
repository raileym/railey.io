
  CTNS.QUIZ_SET["bfe67dcfe89a18e8d905f0897de1dbd0"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2346 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2346';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2346', 22);
	
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

	jQuery(".slide_2346").each( function() {do_center(this)} );

    do_force('2346');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         22,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
    factoryid: '2346',
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
{
    slideNo: 11,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    slideNo: 12,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    slideNo: 13,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    slideNo: 14,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    slideNo: 15,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    slideNo: 16,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
    slideNo: 17,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
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
{
    slideNo: 18,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-9",
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
    slideNo: 19,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-9b",
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
    slideNo: 20,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-9c",
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
    slideNo: 21,
    factoryid: '2346',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' the slope-intercept form changes with the graph of the line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ15-9d",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_2346';
CTNS.NUMBERS.equations['quiz_2346'] = [];
CTNS.NUMBERS.symbols['quiz_2346'] = CTNS.NUMBERS.symbols['quiz_2346'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_0',                ablock           = '#answerblock_2346_SlideNo_0',                acblock          = '#answercommentaryblock_2346_SlideNo_0',                                grblock          = 'graphicblock_2346_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_0',                grblock_A        = 'graphicblock_A_2346_SlideNo_0',                grblock_B        = 'graphicblock_B_2346_SlideNo_0',                grblock_C        = 'graphicblock_C_2346_SlideNo_0',                grblock_D        = 'graphicblock_D_2346_SlideNo_0',                grblock_E        = 'graphicblock_E_2346_SlideNo_0',                grblock_F        = 'graphicblock_F_2346_SlideNo_0',                                grblock_f        = (typeof tml_2346_SlideNo_0   !== 'undefined') ? tml_2346_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_0 !== 'undefined') ? tml_Q_2346_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_0 !== 'undefined') ? tml_A_2346_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_0 !== 'undefined') ? tml_B_2346_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_0 !== 'undefined') ? tml_C_2346_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_0 !== 'undefined') ? tml_D_2346_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_0 !== 'undefined') ? tml_E_2346_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_0 !== 'undefined') ? tml_F_2346_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_1',                ablock           = '#answerblock_2346_SlideNo_1',                acblock          = '#answercommentaryblock_2346_SlideNo_1',                                grblock          = 'graphicblock_2346_SlideNo_1',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_1',                grblock_A        = 'graphicblock_A_2346_SlideNo_1',                grblock_B        = 'graphicblock_B_2346_SlideNo_1',                grblock_C        = 'graphicblock_C_2346_SlideNo_1',                grblock_D        = 'graphicblock_D_2346_SlideNo_1',                grblock_E        = 'graphicblock_E_2346_SlideNo_1',                grblock_F        = 'graphicblock_F_2346_SlideNo_1',                                grblock_f        = (typeof tml_2346_SlideNo_1   !== 'undefined') ? tml_2346_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_1 !== 'undefined') ? tml_Q_2346_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_1 !== 'undefined') ? tml_A_2346_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_1 !== 'undefined') ? tml_B_2346_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_1 !== 'undefined') ? tml_C_2346_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_1 !== 'undefined') ? tml_D_2346_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_1 !== 'undefined') ? tml_E_2346_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_1 !== 'undefined') ? tml_F_2346_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_2',                ablock           = '#answerblock_2346_SlideNo_2',                acblock          = '#answercommentaryblock_2346_SlideNo_2',                                grblock          = 'graphicblock_2346_SlideNo_2',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_2',                grblock_A        = 'graphicblock_A_2346_SlideNo_2',                grblock_B        = 'graphicblock_B_2346_SlideNo_2',                grblock_C        = 'graphicblock_C_2346_SlideNo_2',                grblock_D        = 'graphicblock_D_2346_SlideNo_2',                grblock_E        = 'graphicblock_E_2346_SlideNo_2',                grblock_F        = 'graphicblock_F_2346_SlideNo_2',                                grblock_f        = (typeof tml_2346_SlideNo_2   !== 'undefined') ? tml_2346_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_2 !== 'undefined') ? tml_Q_2346_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_2 !== 'undefined') ? tml_A_2346_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_2 !== 'undefined') ? tml_B_2346_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_2 !== 'undefined') ? tml_C_2346_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_2 !== 'undefined') ? tml_D_2346_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_2 !== 'undefined') ? tml_E_2346_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_2 !== 'undefined') ? tml_F_2346_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_3',                ablock           = '#answerblock_2346_SlideNo_3',                acblock          = '#answercommentaryblock_2346_SlideNo_3',                                grblock          = 'graphicblock_2346_SlideNo_3',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_3',                grblock_A        = 'graphicblock_A_2346_SlideNo_3',                grblock_B        = 'graphicblock_B_2346_SlideNo_3',                grblock_C        = 'graphicblock_C_2346_SlideNo_3',                grblock_D        = 'graphicblock_D_2346_SlideNo_3',                grblock_E        = 'graphicblock_E_2346_SlideNo_3',                grblock_F        = 'graphicblock_F_2346_SlideNo_3',                                grblock_f        = (typeof tml_2346_SlideNo_3   !== 'undefined') ? tml_2346_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_3 !== 'undefined') ? tml_Q_2346_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_3 !== 'undefined') ? tml_A_2346_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_3 !== 'undefined') ? tml_B_2346_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_3 !== 'undefined') ? tml_C_2346_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_3 !== 'undefined') ? tml_D_2346_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_3 !== 'undefined') ? tml_E_2346_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_3 !== 'undefined') ? tml_F_2346_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_4',                ablock           = '#answerblock_2346_SlideNo_4',                acblock          = '#answercommentaryblock_2346_SlideNo_4',                                grblock          = 'graphicblock_2346_SlideNo_4',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_4',                grblock_A        = 'graphicblock_A_2346_SlideNo_4',                grblock_B        = 'graphicblock_B_2346_SlideNo_4',                grblock_C        = 'graphicblock_C_2346_SlideNo_4',                grblock_D        = 'graphicblock_D_2346_SlideNo_4',                grblock_E        = 'graphicblock_E_2346_SlideNo_4',                grblock_F        = 'graphicblock_F_2346_SlideNo_4',                                grblock_f        = (typeof tml_2346_SlideNo_4   !== 'undefined') ? tml_2346_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_4 !== 'undefined') ? tml_Q_2346_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_4 !== 'undefined') ? tml_A_2346_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_4 !== 'undefined') ? tml_B_2346_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_4 !== 'undefined') ? tml_C_2346_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_4 !== 'undefined') ? tml_D_2346_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_4 !== 'undefined') ? tml_E_2346_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_4 !== 'undefined') ? tml_F_2346_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_5',                ablock           = '#answerblock_2346_SlideNo_5',                acblock          = '#answercommentaryblock_2346_SlideNo_5',                                grblock          = 'graphicblock_2346_SlideNo_5',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_5',                grblock_A        = 'graphicblock_A_2346_SlideNo_5',                grblock_B        = 'graphicblock_B_2346_SlideNo_5',                grblock_C        = 'graphicblock_C_2346_SlideNo_5',                grblock_D        = 'graphicblock_D_2346_SlideNo_5',                grblock_E        = 'graphicblock_E_2346_SlideNo_5',                grblock_F        = 'graphicblock_F_2346_SlideNo_5',                                grblock_f        = (typeof tml_2346_SlideNo_5   !== 'undefined') ? tml_2346_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_5 !== 'undefined') ? tml_Q_2346_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_5 !== 'undefined') ? tml_A_2346_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_5 !== 'undefined') ? tml_B_2346_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_5 !== 'undefined') ? tml_C_2346_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_5 !== 'undefined') ? tml_D_2346_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_5 !== 'undefined') ? tml_E_2346_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_5 !== 'undefined') ? tml_F_2346_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_6'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_6'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_6',                ablock           = '#answerblock_2346_SlideNo_6',                acblock          = '#answercommentaryblock_2346_SlideNo_6',                                grblock          = 'graphicblock_2346_SlideNo_6',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_6',                grblock_A        = 'graphicblock_A_2346_SlideNo_6',                grblock_B        = 'graphicblock_B_2346_SlideNo_6',                grblock_C        = 'graphicblock_C_2346_SlideNo_6',                grblock_D        = 'graphicblock_D_2346_SlideNo_6',                grblock_E        = 'graphicblock_E_2346_SlideNo_6',                grblock_F        = 'graphicblock_F_2346_SlideNo_6',                                grblock_f        = (typeof tml_2346_SlideNo_6   !== 'undefined') ? tml_2346_SlideNo_6   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_6 !== 'undefined') ? tml_Q_2346_SlideNo_6 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_6 !== 'undefined') ? tml_A_2346_SlideNo_6 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_6 !== 'undefined') ? tml_B_2346_SlideNo_6 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_6 !== 'undefined') ? tml_C_2346_SlideNo_6 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_6 !== 'undefined') ? tml_D_2346_SlideNo_6 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_6 !== 'undefined') ? tml_E_2346_SlideNo_6 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_6 !== 'undefined') ? tml_F_2346_SlideNo_6 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_6'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_7'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_7'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_7',                ablock           = '#answerblock_2346_SlideNo_7',                acblock          = '#answercommentaryblock_2346_SlideNo_7',                                grblock          = 'graphicblock_2346_SlideNo_7',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_7',                grblock_A        = 'graphicblock_A_2346_SlideNo_7',                grblock_B        = 'graphicblock_B_2346_SlideNo_7',                grblock_C        = 'graphicblock_C_2346_SlideNo_7',                grblock_D        = 'graphicblock_D_2346_SlideNo_7',                grblock_E        = 'graphicblock_E_2346_SlideNo_7',                grblock_F        = 'graphicblock_F_2346_SlideNo_7',                                grblock_f        = (typeof tml_2346_SlideNo_7   !== 'undefined') ? tml_2346_SlideNo_7   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_7 !== 'undefined') ? tml_Q_2346_SlideNo_7 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_7 !== 'undefined') ? tml_A_2346_SlideNo_7 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_7 !== 'undefined') ? tml_B_2346_SlideNo_7 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_7 !== 'undefined') ? tml_C_2346_SlideNo_7 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_7 !== 'undefined') ? tml_D_2346_SlideNo_7 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_7 !== 'undefined') ? tml_E_2346_SlideNo_7 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_7 !== 'undefined') ? tml_F_2346_SlideNo_7 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_7'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_8'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_8'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_8',                ablock           = '#answerblock_2346_SlideNo_8',                acblock          = '#answercommentaryblock_2346_SlideNo_8',                                grblock          = 'graphicblock_2346_SlideNo_8',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_8',                grblock_A        = 'graphicblock_A_2346_SlideNo_8',                grblock_B        = 'graphicblock_B_2346_SlideNo_8',                grblock_C        = 'graphicblock_C_2346_SlideNo_8',                grblock_D        = 'graphicblock_D_2346_SlideNo_8',                grblock_E        = 'graphicblock_E_2346_SlideNo_8',                grblock_F        = 'graphicblock_F_2346_SlideNo_8',                                grblock_f        = (typeof tml_2346_SlideNo_8   !== 'undefined') ? tml_2346_SlideNo_8   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_8 !== 'undefined') ? tml_Q_2346_SlideNo_8 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_8 !== 'undefined') ? tml_A_2346_SlideNo_8 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_8 !== 'undefined') ? tml_B_2346_SlideNo_8 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_8 !== 'undefined') ? tml_C_2346_SlideNo_8 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_8 !== 'undefined') ? tml_D_2346_SlideNo_8 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_8 !== 'undefined') ? tml_E_2346_SlideNo_8 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_8 !== 'undefined') ? tml_F_2346_SlideNo_8 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_8'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_9'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_9'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_9',                ablock           = '#answerblock_2346_SlideNo_9',                acblock          = '#answercommentaryblock_2346_SlideNo_9',                                grblock          = 'graphicblock_2346_SlideNo_9',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_9',                grblock_A        = 'graphicblock_A_2346_SlideNo_9',                grblock_B        = 'graphicblock_B_2346_SlideNo_9',                grblock_C        = 'graphicblock_C_2346_SlideNo_9',                grblock_D        = 'graphicblock_D_2346_SlideNo_9',                grblock_E        = 'graphicblock_E_2346_SlideNo_9',                grblock_F        = 'graphicblock_F_2346_SlideNo_9',                                grblock_f        = (typeof tml_2346_SlideNo_9   !== 'undefined') ? tml_2346_SlideNo_9   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_9 !== 'undefined') ? tml_Q_2346_SlideNo_9 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_9 !== 'undefined') ? tml_A_2346_SlideNo_9 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_9 !== 'undefined') ? tml_B_2346_SlideNo_9 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_9 !== 'undefined') ? tml_C_2346_SlideNo_9 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_9 !== 'undefined') ? tml_D_2346_SlideNo_9 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_9 !== 'undefined') ? tml_E_2346_SlideNo_9 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_9 !== 'undefined') ? tml_F_2346_SlideNo_9 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_9'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_10'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_10'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_10',                ablock           = '#answerblock_2346_SlideNo_10',                acblock          = '#answercommentaryblock_2346_SlideNo_10',                                grblock          = 'graphicblock_2346_SlideNo_10',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_10',                grblock_A        = 'graphicblock_A_2346_SlideNo_10',                grblock_B        = 'graphicblock_B_2346_SlideNo_10',                grblock_C        = 'graphicblock_C_2346_SlideNo_10',                grblock_D        = 'graphicblock_D_2346_SlideNo_10',                grblock_E        = 'graphicblock_E_2346_SlideNo_10',                grblock_F        = 'graphicblock_F_2346_SlideNo_10',                                grblock_f        = (typeof tml_2346_SlideNo_10   !== 'undefined') ? tml_2346_SlideNo_10   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_10 !== 'undefined') ? tml_Q_2346_SlideNo_10 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_10 !== 'undefined') ? tml_A_2346_SlideNo_10 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_10 !== 'undefined') ? tml_B_2346_SlideNo_10 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_10 !== 'undefined') ? tml_C_2346_SlideNo_10 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_10 !== 'undefined') ? tml_D_2346_SlideNo_10 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_10 !== 'undefined') ? tml_E_2346_SlideNo_10 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_10 !== 'undefined') ? tml_F_2346_SlideNo_10 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_10'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_11'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_11'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_11',                ablock           = '#answerblock_2346_SlideNo_11',                acblock          = '#answercommentaryblock_2346_SlideNo_11',                                grblock          = 'graphicblock_2346_SlideNo_11',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_11',                grblock_A        = 'graphicblock_A_2346_SlideNo_11',                grblock_B        = 'graphicblock_B_2346_SlideNo_11',                grblock_C        = 'graphicblock_C_2346_SlideNo_11',                grblock_D        = 'graphicblock_D_2346_SlideNo_11',                grblock_E        = 'graphicblock_E_2346_SlideNo_11',                grblock_F        = 'graphicblock_F_2346_SlideNo_11',                                grblock_f        = (typeof tml_2346_SlideNo_11   !== 'undefined') ? tml_2346_SlideNo_11   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_11 !== 'undefined') ? tml_Q_2346_SlideNo_11 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_11 !== 'undefined') ? tml_A_2346_SlideNo_11 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_11 !== 'undefined') ? tml_B_2346_SlideNo_11 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_11 !== 'undefined') ? tml_C_2346_SlideNo_11 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_11 !== 'undefined') ? tml_D_2346_SlideNo_11 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_11 !== 'undefined') ? tml_E_2346_SlideNo_11 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_11 !== 'undefined') ? tml_F_2346_SlideNo_11 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_11'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_12'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_12'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_12',                ablock           = '#answerblock_2346_SlideNo_12',                acblock          = '#answercommentaryblock_2346_SlideNo_12',                                grblock          = 'graphicblock_2346_SlideNo_12',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_12',                grblock_A        = 'graphicblock_A_2346_SlideNo_12',                grblock_B        = 'graphicblock_B_2346_SlideNo_12',                grblock_C        = 'graphicblock_C_2346_SlideNo_12',                grblock_D        = 'graphicblock_D_2346_SlideNo_12',                grblock_E        = 'graphicblock_E_2346_SlideNo_12',                grblock_F        = 'graphicblock_F_2346_SlideNo_12',                                grblock_f        = (typeof tml_2346_SlideNo_12   !== 'undefined') ? tml_2346_SlideNo_12   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_12 !== 'undefined') ? tml_Q_2346_SlideNo_12 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_12 !== 'undefined') ? tml_A_2346_SlideNo_12 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_12 !== 'undefined') ? tml_B_2346_SlideNo_12 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_12 !== 'undefined') ? tml_C_2346_SlideNo_12 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_12 !== 'undefined') ? tml_D_2346_SlideNo_12 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_12 !== 'undefined') ? tml_E_2346_SlideNo_12 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_12 !== 'undefined') ? tml_F_2346_SlideNo_12 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_12'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_13'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_13'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_13',                ablock           = '#answerblock_2346_SlideNo_13',                acblock          = '#answercommentaryblock_2346_SlideNo_13',                                grblock          = 'graphicblock_2346_SlideNo_13',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_13',                grblock_A        = 'graphicblock_A_2346_SlideNo_13',                grblock_B        = 'graphicblock_B_2346_SlideNo_13',                grblock_C        = 'graphicblock_C_2346_SlideNo_13',                grblock_D        = 'graphicblock_D_2346_SlideNo_13',                grblock_E        = 'graphicblock_E_2346_SlideNo_13',                grblock_F        = 'graphicblock_F_2346_SlideNo_13',                                grblock_f        = (typeof tml_2346_SlideNo_13   !== 'undefined') ? tml_2346_SlideNo_13   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_13 !== 'undefined') ? tml_Q_2346_SlideNo_13 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_13 !== 'undefined') ? tml_A_2346_SlideNo_13 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_13 !== 'undefined') ? tml_B_2346_SlideNo_13 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_13 !== 'undefined') ? tml_C_2346_SlideNo_13 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_13 !== 'undefined') ? tml_D_2346_SlideNo_13 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_13 !== 'undefined') ? tml_E_2346_SlideNo_13 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_13 !== 'undefined') ? tml_F_2346_SlideNo_13 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_13'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_14'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_14'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_14',                ablock           = '#answerblock_2346_SlideNo_14',                acblock          = '#answercommentaryblock_2346_SlideNo_14',                                grblock          = 'graphicblock_2346_SlideNo_14',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_14',                grblock_A        = 'graphicblock_A_2346_SlideNo_14',                grblock_B        = 'graphicblock_B_2346_SlideNo_14',                grblock_C        = 'graphicblock_C_2346_SlideNo_14',                grblock_D        = 'graphicblock_D_2346_SlideNo_14',                grblock_E        = 'graphicblock_E_2346_SlideNo_14',                grblock_F        = 'graphicblock_F_2346_SlideNo_14',                                grblock_f        = (typeof tml_2346_SlideNo_14   !== 'undefined') ? tml_2346_SlideNo_14   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_14 !== 'undefined') ? tml_Q_2346_SlideNo_14 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_14 !== 'undefined') ? tml_A_2346_SlideNo_14 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_14 !== 'undefined') ? tml_B_2346_SlideNo_14 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_14 !== 'undefined') ? tml_C_2346_SlideNo_14 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_14 !== 'undefined') ? tml_D_2346_SlideNo_14 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_14 !== 'undefined') ? tml_E_2346_SlideNo_14 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_14 !== 'undefined') ? tml_F_2346_SlideNo_14 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_14'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_15'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_15'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_15',                ablock           = '#answerblock_2346_SlideNo_15',                acblock          = '#answercommentaryblock_2346_SlideNo_15',                                grblock          = 'graphicblock_2346_SlideNo_15',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_15',                grblock_A        = 'graphicblock_A_2346_SlideNo_15',                grblock_B        = 'graphicblock_B_2346_SlideNo_15',                grblock_C        = 'graphicblock_C_2346_SlideNo_15',                grblock_D        = 'graphicblock_D_2346_SlideNo_15',                grblock_E        = 'graphicblock_E_2346_SlideNo_15',                grblock_F        = 'graphicblock_F_2346_SlideNo_15',                                grblock_f        = (typeof tml_2346_SlideNo_15   !== 'undefined') ? tml_2346_SlideNo_15   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_15 !== 'undefined') ? tml_Q_2346_SlideNo_15 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_15 !== 'undefined') ? tml_A_2346_SlideNo_15 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_15 !== 'undefined') ? tml_B_2346_SlideNo_15 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_15 !== 'undefined') ? tml_C_2346_SlideNo_15 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_15 !== 'undefined') ? tml_D_2346_SlideNo_15 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_15 !== 'undefined') ? tml_E_2346_SlideNo_15 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_15 !== 'undefined') ? tml_F_2346_SlideNo_15 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_15'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_16'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_16'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_16',                ablock           = '#answerblock_2346_SlideNo_16',                acblock          = '#answercommentaryblock_2346_SlideNo_16',                                grblock          = 'graphicblock_2346_SlideNo_16',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_16',                grblock_A        = 'graphicblock_A_2346_SlideNo_16',                grblock_B        = 'graphicblock_B_2346_SlideNo_16',                grblock_C        = 'graphicblock_C_2346_SlideNo_16',                grblock_D        = 'graphicblock_D_2346_SlideNo_16',                grblock_E        = 'graphicblock_E_2346_SlideNo_16',                grblock_F        = 'graphicblock_F_2346_SlideNo_16',                                grblock_f        = (typeof tml_2346_SlideNo_16   !== 'undefined') ? tml_2346_SlideNo_16   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_16 !== 'undefined') ? tml_Q_2346_SlideNo_16 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_16 !== 'undefined') ? tml_A_2346_SlideNo_16 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_16 !== 'undefined') ? tml_B_2346_SlideNo_16 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_16 !== 'undefined') ? tml_C_2346_SlideNo_16 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_16 !== 'undefined') ? tml_D_2346_SlideNo_16 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_16 !== 'undefined') ? tml_E_2346_SlideNo_16 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_16 !== 'undefined') ? tml_F_2346_SlideNo_16 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_16'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_17'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_17'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_17',                ablock           = '#answerblock_2346_SlideNo_17',                acblock          = '#answercommentaryblock_2346_SlideNo_17',                                grblock          = 'graphicblock_2346_SlideNo_17',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_17',                grblock_A        = 'graphicblock_A_2346_SlideNo_17',                grblock_B        = 'graphicblock_B_2346_SlideNo_17',                grblock_C        = 'graphicblock_C_2346_SlideNo_17',                grblock_D        = 'graphicblock_D_2346_SlideNo_17',                grblock_E        = 'graphicblock_E_2346_SlideNo_17',                grblock_F        = 'graphicblock_F_2346_SlideNo_17',                                grblock_f        = (typeof tml_2346_SlideNo_17   !== 'undefined') ? tml_2346_SlideNo_17   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_17 !== 'undefined') ? tml_Q_2346_SlideNo_17 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_17 !== 'undefined') ? tml_A_2346_SlideNo_17 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_17 !== 'undefined') ? tml_B_2346_SlideNo_17 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_17 !== 'undefined') ? tml_C_2346_SlideNo_17 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_17 !== 'undefined') ? tml_D_2346_SlideNo_17 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_17 !== 'undefined') ? tml_E_2346_SlideNo_17 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_17 !== 'undefined') ? tml_F_2346_SlideNo_17 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_17'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_18'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_18'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_18',                ablock           = '#answerblock_2346_SlideNo_18',                acblock          = '#answercommentaryblock_2346_SlideNo_18',                                grblock          = 'graphicblock_2346_SlideNo_18',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_18',                grblock_A        = 'graphicblock_A_2346_SlideNo_18',                grblock_B        = 'graphicblock_B_2346_SlideNo_18',                grblock_C        = 'graphicblock_C_2346_SlideNo_18',                grblock_D        = 'graphicblock_D_2346_SlideNo_18',                grblock_E        = 'graphicblock_E_2346_SlideNo_18',                grblock_F        = 'graphicblock_F_2346_SlideNo_18',                                grblock_f        = (typeof tml_2346_SlideNo_18   !== 'undefined') ? tml_2346_SlideNo_18   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_18 !== 'undefined') ? tml_Q_2346_SlideNo_18 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_18 !== 'undefined') ? tml_A_2346_SlideNo_18 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_18 !== 'undefined') ? tml_B_2346_SlideNo_18 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_18 !== 'undefined') ? tml_C_2346_SlideNo_18 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_18 !== 'undefined') ? tml_D_2346_SlideNo_18 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_18 !== 'undefined') ? tml_E_2346_SlideNo_18 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_18 !== 'undefined') ? tml_F_2346_SlideNo_18 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_18'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_19'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_19'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_19',                ablock           = '#answerblock_2346_SlideNo_19',                acblock          = '#answercommentaryblock_2346_SlideNo_19',                                grblock          = 'graphicblock_2346_SlideNo_19',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_19',                grblock_A        = 'graphicblock_A_2346_SlideNo_19',                grblock_B        = 'graphicblock_B_2346_SlideNo_19',                grblock_C        = 'graphicblock_C_2346_SlideNo_19',                grblock_D        = 'graphicblock_D_2346_SlideNo_19',                grblock_E        = 'graphicblock_E_2346_SlideNo_19',                grblock_F        = 'graphicblock_F_2346_SlideNo_19',                                grblock_f        = (typeof tml_2346_SlideNo_19   !== 'undefined') ? tml_2346_SlideNo_19   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_19 !== 'undefined') ? tml_Q_2346_SlideNo_19 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_19 !== 'undefined') ? tml_A_2346_SlideNo_19 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_19 !== 'undefined') ? tml_B_2346_SlideNo_19 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_19 !== 'undefined') ? tml_C_2346_SlideNo_19 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_19 !== 'undefined') ? tml_D_2346_SlideNo_19 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_19 !== 'undefined') ? tml_E_2346_SlideNo_19 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_19 !== 'undefined') ? tml_F_2346_SlideNo_19 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_19'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_20'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_20'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_20',                ablock           = '#answerblock_2346_SlideNo_20',                acblock          = '#answercommentaryblock_2346_SlideNo_20',                                grblock          = 'graphicblock_2346_SlideNo_20',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_20',                grblock_A        = 'graphicblock_A_2346_SlideNo_20',                grblock_B        = 'graphicblock_B_2346_SlideNo_20',                grblock_C        = 'graphicblock_C_2346_SlideNo_20',                grblock_D        = 'graphicblock_D_2346_SlideNo_20',                grblock_E        = 'graphicblock_E_2346_SlideNo_20',                grblock_F        = 'graphicblock_F_2346_SlideNo_20',                                grblock_f        = (typeof tml_2346_SlideNo_20   !== 'undefined') ? tml_2346_SlideNo_20   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_20 !== 'undefined') ? tml_Q_2346_SlideNo_20 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_20 !== 'undefined') ? tml_A_2346_SlideNo_20 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_20 !== 'undefined') ? tml_B_2346_SlideNo_20 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_20 !== 'undefined') ? tml_C_2346_SlideNo_20 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_20 !== 'undefined') ? tml_D_2346_SlideNo_20 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_20 !== 'undefined') ? tml_E_2346_SlideNo_20 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_20 !== 'undefined') ? tml_F_2346_SlideNo_20 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_20'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2346_SlideNo_21'] = CTNS.NUMBERS.symbols['new_scriptblock_2346_SlideNo_21'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2346'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2346_SlideNo_21',                ablock           = '#answerblock_2346_SlideNo_21',                acblock          = '#answercommentaryblock_2346_SlideNo_21',                                grblock          = 'graphicblock_2346_SlideNo_21',                grblock_Q        = 'graphicblock_Q_2346_SlideNo_21',                grblock_A        = 'graphicblock_A_2346_SlideNo_21',                grblock_B        = 'graphicblock_B_2346_SlideNo_21',                grblock_C        = 'graphicblock_C_2346_SlideNo_21',                grblock_D        = 'graphicblock_D_2346_SlideNo_21',                grblock_E        = 'graphicblock_E_2346_SlideNo_21',                grblock_F        = 'graphicblock_F_2346_SlideNo_21',                                grblock_f        = (typeof tml_2346_SlideNo_21   !== 'undefined') ? tml_2346_SlideNo_21   : null,                grblock_Q_f      = (typeof tml_Q_2346_SlideNo_21 !== 'undefined') ? tml_Q_2346_SlideNo_21 : null,                grblock_A_f      = (typeof tml_A_2346_SlideNo_21 !== 'undefined') ? tml_A_2346_SlideNo_21 : null,                grblock_B_f      = (typeof tml_B_2346_SlideNo_21 !== 'undefined') ? tml_B_2346_SlideNo_21 : null,                grblock_C_f      = (typeof tml_C_2346_SlideNo_21 !== 'undefined') ? tml_C_2346_SlideNo_21 : null,                grblock_D_f      = (typeof tml_D_2346_SlideNo_21 !== 'undefined') ? tml_D_2346_SlideNo_21 : null,                grblock_E_f      = (typeof tml_E_2346_SlideNo_21 !== 'undefined') ? tml_E_2346_SlideNo_21 : null,                grblock_F_f      = (typeof tml_F_2346_SlideNo_21 !== 'undefined') ? tml_F_2346_SlideNo_21 : null,                numbers          = NUMBERS,                gid              = 'quiz_2346',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2346_SlideNo_21'],                gsymbols         = NUMBERS.symbols['quiz_2346'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_0
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_0
	'scriptblock_2346_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_0'] = NUMBERS.symbols['scriptblock_2346_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_0'];
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
window[PMGRAPHICID].segment_63046 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_63046 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
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
window[PMGRAPHICID].startArrow_76490 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_76490 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_76490 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_76490, window[PMGRAPHICID].endArrow_76490], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_62800 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_62800 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_62800 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_62800, window[PMGRAPHICID].endArrow_62800], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_64573 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_64573 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_64573 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_64573, window[PMGRAPHICID].endArrow_64573], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_85154 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_85154 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_85154 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_85154, window[PMGRAPHICID].endArrow_85154], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_95542 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_95542 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_95542 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_95542, window[PMGRAPHICID].endArrow_95542], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_29334 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_29334 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_29334 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_29334, window[PMGRAPHICID].endArrow_29334], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_30438 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_30438   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_30438 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_78082 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_78082   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_78082 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_18774 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_18774   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_18774 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text58669 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text58669 ', 
	  cssClass:'window[PMGRAPHICID].text58669 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text88860 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text88860 ', 
	  cssClass:'window[PMGRAPHICID].text88860 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text63894 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text63894 ', 
	  cssClass:'window[PMGRAPHICID].text63894 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text99497 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text99497 ', 
	  cssClass:'window[PMGRAPHICID].text99497 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text50654 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text50654 ', 
	  cssClass:'window[PMGRAPHICID].text50654 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text96645 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text96645 ', 
	  cssClass:'window[PMGRAPHICID].text96645 ', 
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
function tml_2346_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_1
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_1
	'scriptblock_2346_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_1'] = NUMBERS.symbols['scriptblock_2346_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_1'];
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
window[PMGRAPHICID].startArrow_50658 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_50658 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_50658 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_50658, window[PMGRAPHICID].endArrow_50658], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_58527 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_58527 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_58527 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_58527, window[PMGRAPHICID].endArrow_58527], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_13165 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_13165   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_13165 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text59400 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text59400 ', 
	  cssClass:'window[PMGRAPHICID].text59400 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text99975 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text99975 ', 
	  cssClass:'window[PMGRAPHICID].text99975 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text98147 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text98147 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text58227 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text58227 ', 
	  cssClass:'window[PMGRAPHICID].text58227 ', 
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
  
window[PMGRAPHICID].condition67517buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition67517buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition67517onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition67517buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition67517buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition67517buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition67517onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition67517buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition67517buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition67517buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition67517 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition67517onTrue();
	} else {
		window[PMGRAPHICID].condition67517onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition67517);
window[PMGRAPHICID].updateCondition67517; 
window[PMGRAPHICID].condition61297buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition61297buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition61297onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition61297buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition61297buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition61297buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition61297onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition61297buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition61297buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition61297buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition61297 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition61297onTrue();
	} else {
		window[PMGRAPHICID].condition61297onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition61297);
window[PMGRAPHICID].updateCondition61297; 
window[PMGRAPHICID].condition81940buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition81940buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition81940onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition81940buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition81940buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition81940buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition81940onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition81940buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition81940buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition81940buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition81940 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition81940onTrue();
	} else {
		window[PMGRAPHICID].condition81940onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition81940);
window[PMGRAPHICID].updateCondition81940;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_2
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_2
	'scriptblock_2346_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_2'] = NUMBERS.symbols['scriptblock_2346_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_2'];
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
window[PMGRAPHICID].segment_54051 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_54051 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
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
window[PMGRAPHICID].startArrow_23302 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_23302 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_23302 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_23302, window[PMGRAPHICID].endArrow_23302], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_4083 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_4083 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_4083 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_4083, window[PMGRAPHICID].endArrow_4083], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_40951 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_40951 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_40951 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_40951, window[PMGRAPHICID].endArrow_40951], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_2346 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_2346 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_2346 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_2346, window[PMGRAPHICID].endArrow_2346], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_70255 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_70255 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_70255 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_70255, window[PMGRAPHICID].endArrow_70255], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_4108 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_4108 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_4108 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_4108, window[PMGRAPHICID].endArrow_4108], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_42227 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_42227   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_42227 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_56163 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_56163   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_56163 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_43313 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_43313   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_43313 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text11256 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text11256 ', 
	  cssClass:'window[PMGRAPHICID].text11256 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text31167 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text31167 ', 
	  cssClass:'window[PMGRAPHICID].text31167 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text26388 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text26388 ', 
	  cssClass:'window[PMGRAPHICID].text26388 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text30736 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text30736 ', 
	  cssClass:'window[PMGRAPHICID].text30736 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text18727 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text18727 ', 
	  cssClass:'window[PMGRAPHICID].text18727 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text69888 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text69888 ', 
	  cssClass:'window[PMGRAPHICID].text69888 ', 
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
function tml_2346_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_3
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_3
	'scriptblock_2346_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_3'] = NUMBERS.symbols['scriptblock_2346_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_3'];
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
window[PMGRAPHICID].segment_30004 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_30004 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
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
window[PMGRAPHICID].startArrow_30996 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_30996 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAC.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.X()-0.3 : window[PMGRAPHICID].pointAC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAC.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAC.Y()-0.3 : window[PMGRAPHICID].pointAC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_30996 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_30996, window[PMGRAPHICID].endArrow_30996], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_98424 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_98424 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.X()-0.3 : window[PMGRAPHICID].pointCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointCD.Y()-0.3 : window[PMGRAPHICID].pointCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_98424 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_98424, window[PMGRAPHICID].endArrow_98424], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_96036 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_96036 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDB.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.X()-0.3 : window[PMGRAPHICID].pointDB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDB.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDB.Y()-0.3 : window[PMGRAPHICID].pointDB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_96036 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_96036, window[PMGRAPHICID].endArrow_96036], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_88482 = window[PMGRAPHICID].pointAC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_88482 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointAC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointAC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_88482 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_88482, window[PMGRAPHICID].endArrow_88482], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_27951 = window[PMGRAPHICID].pointCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_27951 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_27951 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_27951, window[PMGRAPHICID].endArrow_27951], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_11169 = window[PMGRAPHICID].pointDB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_11169 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointDB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointDB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_11169 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_11169, window[PMGRAPHICID].endArrow_11169], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_78436 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_78436   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_78436 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_16245 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_16245   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_16245 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_93044 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_93044   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_93044 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text19294 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text19294 ', 
	  cssClass:'window[PMGRAPHICID].text19294 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text80407 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text80407 ', 
	  cssClass:'window[PMGRAPHICID].text80407 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text52980 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text52980 ', 
	  cssClass:'window[PMGRAPHICID].text52980 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text18327 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text18327 ', 
	  cssClass:'window[PMGRAPHICID].text18327 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text21115 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text21115 ', 
	  cssClass:'window[PMGRAPHICID].text21115 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text79834 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text79834 ', 
	  cssClass:'window[PMGRAPHICID].text79834 ', 
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
function tml_2346_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_4
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_4
	'scriptblock_2346_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_4';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_4'] = NUMBERS.symbols['scriptblock_2346_SlideNo_4'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_4'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_4'];
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
window[PMGRAPHICID].startArrow_63781 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_63781 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointcCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.X()-0.3 : window[PMGRAPHICID].pointcCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointcCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointcCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.Y()-0.3 : window[PMGRAPHICID].pointcCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_63781 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_63781, window[PMGRAPHICID].endArrow_63781], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_41922 = window[PMGRAPHICID].pointcCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_41922 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointcCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointcCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_41922 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_41922, window[PMGRAPHICID].endArrow_41922], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_40837 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_40837   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_40837 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
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
window[PMGRAPHICID].text76647 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text76647 ', 
	  cssClass:'window[PMGRAPHICID].text76647 ', 
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
window[PMGRAPHICID].text55643 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text55643 ', 
	  cssClass:'window[PMGRAPHICID].text55643 ', 
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
window[PMGRAPHICID].text62513 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text62513 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text94832 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text94832 ', 
	  cssClass:'window[PMGRAPHICID].text94832 ', 
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
  
window[PMGRAPHICID].condition42936buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition42936buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition42936onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition42936buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition42936buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition42936buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition42936onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition42936buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition42936buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition42936buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition42936 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition42936onTrue();
	} else {
		window[PMGRAPHICID].condition42936onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition42936);
window[PMGRAPHICID].updateCondition42936; 
window[PMGRAPHICID].condition95020buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition95020buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition95020onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition95020buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition95020buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition95020buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition95020onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition95020buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition95020buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition95020buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition95020 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition95020onTrue();
	} else {
		window[PMGRAPHICID].condition95020onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition95020);
window[PMGRAPHICID].updateCondition95020; 
window[PMGRAPHICID].condition41933buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition41933buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition41933onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition41933buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition41933buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition41933buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition41933onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition41933buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition41933buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition41933buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition41933 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition41933onTrue();
	} else {
		window[PMGRAPHICID].condition41933onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition41933);
window[PMGRAPHICID].updateCondition41933;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_5
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_5
	'scriptblock_2346_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_5';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_5'] = NUMBERS.symbols['scriptblock_2346_SlideNo_5'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_5'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_5'];
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
window[PMGRAPHICID].startArrow_2625 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_2625 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcCD.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointcCD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.X()-0.3 : window[PMGRAPHICID].pointcCD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointcCD.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointcCD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcCD.Y()-0.3 : window[PMGRAPHICID].pointcCD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_2625 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_2625, window[PMGRAPHICID].endArrow_2625], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_45914 = window[PMGRAPHICID].pointcCD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_45914 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointcCD.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointcCD.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_45914 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_45914, window[PMGRAPHICID].endArrow_45914], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_14439 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointD.X();}, function() { return window[PMGRAPHICID].pointC.Y();} ], {visible:false});window[PMGRAPHICID].poly_14439   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointC, window[PMGRAPHICID].pointD, window[PMGRAPHICID].CPoint_14439 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
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
window[PMGRAPHICID].text82266 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text82266 ', 
	  cssClass:'window[PMGRAPHICID].text82266 ', 
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
window[PMGRAPHICID].text58513 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text58513 ', 
	  cssClass:'window[PMGRAPHICID].text58513 ', 
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
function tml_2346_SlideNo_6 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_6
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_6
	'scriptblock_2346_SlideNo_6'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_6';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_6'] = NUMBERS.symbols['scriptblock_2346_SlideNo_6'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_6'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_6'];
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
window[PMGRAPHICID].startArrow_48332 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_48332 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_48332 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_48332, window[PMGRAPHICID].endArrow_48332], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_27358 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_27358 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_27358 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_27358, window[PMGRAPHICID].endArrow_27358], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_14784 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_14784   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_14784 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text74954 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text74954 ', 
	  cssClass:'window[PMGRAPHICID].text74954 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text39 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text39 ', 
	  cssClass:'window[PMGRAPHICID].text39 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text74817 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text74817 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text90982 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text90982 ', 
	  cssClass:'window[PMGRAPHICID].text90982 ', 
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
function tml_2346_SlideNo_7 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_7
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_7
	'scriptblock_2346_SlideNo_7'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_7';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_7'] = NUMBERS.symbols['scriptblock_2346_SlideNo_7'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_7'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_7'];
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
window[PMGRAPHICID].startArrow_16245 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_16245 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_16245 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_16245, window[PMGRAPHICID].endArrow_16245], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_5926 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_5926 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_5926 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_5926, window[PMGRAPHICID].endArrow_5926], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_90296 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_90296   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_90296 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text91394 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text91394 ', 
	  cssClass:'window[PMGRAPHICID].text91394 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text14164 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text14164 ', 
	  cssClass:'window[PMGRAPHICID].text14164 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text6585 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text6585 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text63449 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text63449 ', 
	  cssClass:'window[PMGRAPHICID].text63449 ', 
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
function tml_2346_SlideNo_8 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_8
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_8
	'scriptblock_2346_SlideNo_8'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_8';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_8'] = NUMBERS.symbols['scriptblock_2346_SlideNo_8'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_8'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_8'];
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
window[PMGRAPHICID].startArrow_92301 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_92301 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_92301 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_92301, window[PMGRAPHICID].endArrow_92301], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_52159 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_52159 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_52159 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_52159, window[PMGRAPHICID].endArrow_52159], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_49131 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_49131   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_49131 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text16773 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text16773 ', 
	  cssClass:'window[PMGRAPHICID].text16773 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text3272 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text3272 ', 
	  cssClass:'window[PMGRAPHICID].text3272 ', 
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
function tml_2346_SlideNo_9 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_9
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_9
	'scriptblock_2346_SlideNo_9'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_9';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_9'] = NUMBERS.symbols['scriptblock_2346_SlideNo_9'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_9'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_9'];
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
window[PMGRAPHICID].startArrow_75542 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_75542 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_75542 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_75542, window[PMGRAPHICID].endArrow_75542], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_68869 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_68869 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_68869 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_68869, window[PMGRAPHICID].endArrow_68869], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_10489 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_10489   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_10489 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text96896 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text96896 ', 
	  cssClass:'window[PMGRAPHICID].text96896 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text84576 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text84576 ', 
	  cssClass:'window[PMGRAPHICID].text84576 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text2041 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text2041 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text32530 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text32530 ', 
	  cssClass:'window[PMGRAPHICID].text32530 ', 
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
function tml_2346_SlideNo_10 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_10
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_10
	'scriptblock_2346_SlideNo_10'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_10';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_10'] = NUMBERS.symbols['scriptblock_2346_SlideNo_10'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_10'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_10'];
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
window[PMGRAPHICID].startArrow_97427 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_97427 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_97427 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_97427, window[PMGRAPHICID].endArrow_97427], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_36486 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_36486 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_36486 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_36486, window[PMGRAPHICID].endArrow_36486], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_17647 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_17647   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_17647 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text6418 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text6418 ', 
	  cssClass:'window[PMGRAPHICID].text6418 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text99454 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text99454 ', 
	  cssClass:'window[PMGRAPHICID].text99454 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text89437 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text89437 ', 
	  cssClass:'window[PMGRAPHICID].text89437 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text8138 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text8138 ', 
	  cssClass:'window[PMGRAPHICID].text8138 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text5007 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text5007 ', 
	  cssClass:'window[PMGRAPHICID].text5007 ', 
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
function tml_2346_SlideNo_11 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_11
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_11
	'scriptblock_2346_SlideNo_11'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_11';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_11'] = NUMBERS.symbols['scriptblock_2346_SlideNo_11'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_11'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_11'];
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
window[PMGRAPHICID].segment_21242 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_21242 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  
window[PMGRAPHICID].startArrow_72252 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_72252 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointAB.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointAB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointAB.X()-0.3 : window[PMGRAPHICID].pointAB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointAB.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointAB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointAB.Y()-0.3 : window[PMGRAPHICID].pointAB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_72252 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_72252, window[PMGRAPHICID].endArrow_72252], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_63067 = window[PMGRAPHICID].pointB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_63067 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointBC.X()-window[PMGRAPHICID].pointB.X(); if (check == 0) return window[PMGRAPHICID].pointBC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointBC.X()-0.3 : window[PMGRAPHICID].pointBC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointBC.Y()-window[PMGRAPHICID].pointB.Y(); if (check == 0) return window[PMGRAPHICID].pointBC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointBC.Y()-0.3 : window[PMGRAPHICID].pointBC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_63067 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_63067, window[PMGRAPHICID].endArrow_63067], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  
window[PMGRAPHICID].startArrow_75906 = window[PMGRAPHICID].pointAB;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_75906 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointB.X()-window[PMGRAPHICID].pointAB.X(); if (check == 0) return window[PMGRAPHICID].pointB.X(); return (check > 0 ) ? window[PMGRAPHICID].pointB.X()-0.3 : window[PMGRAPHICID].pointB.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointB.Y()-window[PMGRAPHICID].pointAB.Y(); if (check == 0) return window[PMGRAPHICID].pointB.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointB.Y()-0.3 : window[PMGRAPHICID].pointB.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_75906 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_75906, window[PMGRAPHICID].endArrow_75906], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_23793 = window[PMGRAPHICID].pointBC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_23793 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointBC.X(); if (check == 0) return window[PMGRAPHICID].pointC.X(); return (check > 0 ) ? window[PMGRAPHICID].pointC.X()-0.3 : window[PMGRAPHICID].pointC.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointBC.Y(); if (check == 0) return window[PMGRAPHICID].pointC.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointC.Y()-0.3 : window[PMGRAPHICID].pointC.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_23793 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_23793, window[PMGRAPHICID].endArrow_23793], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_23046 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_23046   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_23046 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); window[PMGRAPHICID].CPoint_87519 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointC.X();}, function() { return window[PMGRAPHICID].pointB.Y();} ], {visible:false});window[PMGRAPHICID].poly_87519   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointB, window[PMGRAPHICID].pointC, window[PMGRAPHICID].CPoint_87519 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text91596 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text91596 ', 
	  cssClass:'window[PMGRAPHICID].text91596 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text26710 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text26710 ', 
	  cssClass:'window[PMGRAPHICID].text26710 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text72624 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text72624 ', 
	  cssClass:'window[PMGRAPHICID].text72624 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text31645 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text31645 ', 
	  cssClass:'window[PMGRAPHICID].text31645 ', 
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
function tml_2346_SlideNo_12 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_12
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_12
	'scriptblock_2346_SlideNo_12'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_12';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_12'] = NUMBERS.symbols['scriptblock_2346_SlideNo_12'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_12'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_12'];
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
window[PMGRAPHICID].startArrow_56218 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_56218 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_56218 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_56218, window[PMGRAPHICID].endArrow_56218], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_9622 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_9622 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_9622 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_9622, window[PMGRAPHICID].endArrow_9622], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  window[PMGRAPHICID].CPoint_9121 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_9121   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_9121 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text30391 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text30391 ', 
	  cssClass:'window[PMGRAPHICID].text30391 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text15661 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text15661 ', 
	  cssClass:'window[PMGRAPHICID].text15661 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text15626 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text15626 ', 
	  cssClass:'window[PMGRAPHICID].text15626 ', 
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
function tml_2346_SlideNo_13 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_13
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_13
	'scriptblock_2346_SlideNo_13'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_13';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_13'] = NUMBERS.symbols['scriptblock_2346_SlideNo_13'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_13'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_13'];
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
window[PMGRAPHICID].startArrow_50627 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_50627 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointDE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointDE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.X()-0.3 : window[PMGRAPHICID].pointDE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointDE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointDE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointDE.Y()-0.3 : window[PMGRAPHICID].pointDE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_50627 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_50627, window[PMGRAPHICID].endArrow_50627], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_33438 = window[PMGRAPHICID].pointDE;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_33438 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointDE.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointDE.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
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
	});  window[PMGRAPHICID].CPoint_87781 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointD.Y();} ], {visible:false});window[PMGRAPHICID].poly_87781   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_87781 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
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
window[PMGRAPHICID].text77972 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text77972 ', 
	  cssClass:'window[PMGRAPHICID].text77972 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text34054 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text34054 ', 
	  cssClass:'window[PMGRAPHICID].text34054 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text71713 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text71713 ', 
	  cssClass:'window[PMGRAPHICID].text71713 ', 
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
function tml_2346_SlideNo_14 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_14
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_14
	'scriptblock_2346_SlideNo_14'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_14';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_14'] = NUMBERS.symbols['scriptblock_2346_SlideNo_14'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_14'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_14'];
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
function tml_2346_SlideNo_15 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_15
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_15
	'scriptblock_2346_SlideNo_15'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_15';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_15'] = NUMBERS.symbols['scriptblock_2346_SlideNo_15'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_15'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_15'];
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
function tml_2346_SlideNo_16 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_16
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_16
	'scriptblock_2346_SlideNo_16'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_16';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_16'] = NUMBERS.symbols['scriptblock_2346_SlideNo_16'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_16'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_16'];
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
function tml_2346_SlideNo_17 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_17
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_17
	'scriptblock_2346_SlideNo_17'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_17';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_17'] = NUMBERS.symbols['scriptblock_2346_SlideNo_17'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_17'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_17'];
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
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_18 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_18
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_18
	'scriptblock_2346_SlideNo_18'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_18';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_18'] = NUMBERS.symbols['scriptblock_2346_SlideNo_18'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_18'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_18'];
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
  /*
 * Expected Calculation on ((A.x NE B.x) AND (A.y NE B.y))
 */
/*
 * Calculate on C1: ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)));
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
 * Expected Calculation on (A.y EQ B.y)
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0))
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0));
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
 * Expected Calculation on (A.x EQ B.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
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
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
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
		{ cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT3 = window[PMGRAPHICID].board.create('text', 
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
		{ cssClass:'window[PMGRAPHICID].textT3 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].condition71149buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition71149buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition71149onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition71149buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition71149buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition71149buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition71149onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition71149buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition71149buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition71149buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition71149 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition71149onTrue();
	} else {
		window[PMGRAPHICID].condition71149onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition71149);
window[PMGRAPHICID].updateCondition71149; 
window[PMGRAPHICID].condition68178buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition68178buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition68178onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition68178buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition68178buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition68178buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition68178onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition68178buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition68178buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition68178buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition68178 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition68178onTrue();
	} else {
		window[PMGRAPHICID].condition68178onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition68178);
window[PMGRAPHICID].updateCondition68178; 
window[PMGRAPHICID].condition69679buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition69679buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition69679onTrue = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition69679buttonShow('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition69679buttonShow('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition69679buttonShow('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
window[PMGRAPHICID].condition69679onFalse = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition69679buttonHide('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition69679buttonHide('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition69679buttonHide('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition69679 = function () {
	var x = window[PMGRAPHICID].pointC3.X();
	if (window[PMGRAPHICID].pointC3.X()) {
		window[PMGRAPHICID].condition69679onTrue();
	} else {
		window[PMGRAPHICID].condition69679onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition69679);
window[PMGRAPHICID].updateCondition69679; 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_19 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_19
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_19
	'scriptblock_2346_SlideNo_19'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_19';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_19'] = NUMBERS.symbols['scriptblock_2346_SlideNo_19'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_19'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_19'];
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
  /*
 * Expected Calculation on ((A.x NE B.x) AND (A.y NE B.y))
 */
/*
 * Calculate on C1: ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)));
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
 * Expected Calculation on (A.y EQ B.y)
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0))
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0));
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
 * Expected Calculation on (A.x EQ B.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-4 , 
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
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-4 , 
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
		{ cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT3 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-4 , 
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
		{ cssClass:'window[PMGRAPHICID].textT3 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].condition58202buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition58202buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition58202onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition58202buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition58202buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition58202buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition58202onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition58202buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition58202buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition58202buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition58202 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition58202onTrue();
	} else {
		window[PMGRAPHICID].condition58202onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition58202);
window[PMGRAPHICID].updateCondition58202; 
window[PMGRAPHICID].condition2121buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition2121buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition2121onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition2121buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition2121buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition2121buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition2121onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition2121buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition2121buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition2121buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition2121 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition2121onTrue();
	} else {
		window[PMGRAPHICID].condition2121onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition2121);
window[PMGRAPHICID].updateCondition2121; 
window[PMGRAPHICID].condition75964buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition75964buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition75964onTrue = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition75964buttonShow('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition75964buttonShow('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition75964buttonShow('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
window[PMGRAPHICID].condition75964onFalse = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition75964buttonHide('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition75964buttonHide('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition75964buttonHide('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition75964 = function () {
	var x = window[PMGRAPHICID].pointC3.X();
	if (window[PMGRAPHICID].pointC3.X()) {
		window[PMGRAPHICID].condition75964onTrue();
	} else {
		window[PMGRAPHICID].condition75964onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition75964);
window[PMGRAPHICID].updateCondition75964; 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_20 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_20
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_20
	'scriptblock_2346_SlideNo_20'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_20';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_20'] = NUMBERS.symbols['scriptblock_2346_SlideNo_20'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_20'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_20'];
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
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-4,-3], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:6});

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
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:6});

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
  /*
 * Expected Calculation on ((A.x NE B.x) AND (A.y NE B.y))
 */
/*
 * Calculate on C1: ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)));
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
 * Expected Calculation on (A.y EQ B.y)
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0))
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0));
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
 * Expected Calculation on (A.x EQ B.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-4 , 
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
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-4 , 
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
		{ cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT3 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-4 , 
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
		{ cssClass:'window[PMGRAPHICID].textT3 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].condition19931buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition19931buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition19931onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition19931buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition19931buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition19931buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition19931onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition19931buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition19931buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition19931buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition19931 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition19931onTrue();
	} else {
		window[PMGRAPHICID].condition19931onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition19931);
window[PMGRAPHICID].updateCondition19931; 
window[PMGRAPHICID].condition83469buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition83469buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition83469onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition83469buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition83469buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition83469buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition83469onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition83469buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition83469buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition83469buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition83469 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition83469onTrue();
	} else {
		window[PMGRAPHICID].condition83469onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition83469);
window[PMGRAPHICID].updateCondition83469; 
window[PMGRAPHICID].condition11005buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition11005buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition11005onTrue = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition11005buttonShow('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition11005buttonShow('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition11005buttonShow('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
window[PMGRAPHICID].condition11005onFalse = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition11005buttonHide('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition11005buttonHide('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition11005buttonHide('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition11005 = function () {
	var x = window[PMGRAPHICID].pointC3.X();
	if (window[PMGRAPHICID].pointC3.X()) {
		window[PMGRAPHICID].condition11005onTrue();
	} else {
		window[PMGRAPHICID].condition11005onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition11005);
window[PMGRAPHICID].updateCondition11005; 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2346_SlideNo_21 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2346_SlideNo_21
	What do these buy me? tag=, masterid=2346, slideno=SlideNo_21
	'scriptblock_2346_SlideNo_21'
	*/
	
	PMGRAPHICID   = 'graphicblock_2346_SlideNo_21';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2346_SlideNo_21'] = NUMBERS.symbols['scriptblock_2346_SlideNo_21'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2346_SlideNo_21'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2346_SlideNo_21'];
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

/* Create a STANDARD pointP
 */
window[PMGRAPHICID].pointP = window[PMGRAPHICID].board.create('point', [-3,-4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointP.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointP
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointP.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointQ
 */
window[PMGRAPHICID].pointQ = window[PMGRAPHICID].board.create('point', [ 2, 5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointQ.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointQ
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointQ.moveTo([x,y],1000);

    });  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentPQ = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointP, window[PMGRAPHICID].pointQ] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].linePQ = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointP, window[PMGRAPHICID].pointQ] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  /*
 * Expected Calculation on ((P.x EQ Q.x) ? 99 : (P.y-Q.y)/(P.x-Q.x))
 */
/*
 * Calculate on M: ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0))/(((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)))
 */
window[PMGRAPHICID].pointM = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXM = function () {
		if ( window[PMGRAPHICID].getXM.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXM.value = 0;
				return( window[PMGRAPHICID].getXM.value );
			};
		window[PMGRAPHICID].getXM.value = ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0))/(((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0)-((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)));
		return (window[PMGRAPHICID].getXM.value);
	}, window[PMGRAPHICID].getYM = function () {
		if ( window[PMGRAPHICID].getYM.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYM.value = window[PMGRAPHICID].getXM.value;
				return( window[PMGRAPHICID].getYM.value );
			};
		window[PMGRAPHICID].getYM.value = window[PMGRAPHICID].getXM.value;
		return (window[PMGRAPHICID].getYM.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((P.x EQ Q.x) ? 99 : P.y - M.x*P.x)
 */
/*
 * Calculate on B: ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : ((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) - ((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0)*((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0))
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXB = function () {
		if ( window[PMGRAPHICID].getXB.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXB.value = 0;
				return( window[PMGRAPHICID].getXB.value );
			};
		window[PMGRAPHICID].getXB.value = ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) ? 99 : ((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) - ((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0)*((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0));
		return (window[PMGRAPHICID].getXB.value);
	}, window[PMGRAPHICID].getYB = function () {
		if ( window[PMGRAPHICID].getYB.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYB.value = window[PMGRAPHICID].getXB.value;
				return( window[PMGRAPHICID].getYB.value );
			};
		window[PMGRAPHICID].getYB.value = window[PMGRAPHICID].getXB.value;
		return (window[PMGRAPHICID].getYB.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /*
 * Expected Calculation on (P.x EQ Q.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0));
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
 * Expected Calculation on ((P.x NE Q.x) AND (P.y EQ Q.y))
 */
/*
 * Calculate on C2: ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)))
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) == ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)));
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
 * Expected Calculation on ((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x GT 0))
 */
/*
 * Calculate on C3: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0));
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
 * Expected Calculation on ((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x EQ 0))
 */
/*
 * Calculate on C4: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0))
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0));
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
 * Expected Calculation on ((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x LT 0))
 */
/*
 * Calculate on C5: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0))
 */
window[PMGRAPHICID].pointC5 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC5 = function () {
		if ( window[PMGRAPHICID].getXC5.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC5.value = 0;
				return( window[PMGRAPHICID].getXC5.value );
			};
		window[PMGRAPHICID].getXC5.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) != 1) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.X() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.X() : 0)) && (((window[PMGRAPHICID].pointP) ? window[PMGRAPHICID].pointP.Y() : 0) != ((window[PMGRAPHICID].pointQ) ? window[PMGRAPHICID].pointQ.Y() : 0)) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /*
 * Expected Calculation on ((M.x EQ 1) AND (B.x GT 0))
 */
/*
 * Calculate on C6: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0))
 */
window[PMGRAPHICID].pointC6 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC6 = function () {
		if ( window[PMGRAPHICID].getXC6.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC6.value = 0;
				return( window[PMGRAPHICID].getXC6.value );
			};
		window[PMGRAPHICID].getXC6.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) > 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((M.x EQ 1) AND (B.x EQ 0))
 */
/*
 * Calculate on C7: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0))
 */
window[PMGRAPHICID].pointC7 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC7 = function () {
		if ( window[PMGRAPHICID].getXC7.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC7.value = 0;
				return( window[PMGRAPHICID].getXC7.value );
			};
		window[PMGRAPHICID].getXC7.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) == 0));
		return (window[PMGRAPHICID].getXC7.value);
	}, window[PMGRAPHICID].getYC7 = function () {
		if ( window[PMGRAPHICID].getYC7.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC7.value = window[PMGRAPHICID].getXC7.value;
				return( window[PMGRAPHICID].getYC7.value );
			};
		window[PMGRAPHICID].getYC7.value = window[PMGRAPHICID].getXC7.value;
		return (window[PMGRAPHICID].getYC7.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on ((M.x EQ 1) AND (B.x LT 0))
 */
/*
 * Calculate on C8: ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0))
 */
window[PMGRAPHICID].pointC8 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC8 = function () {
		if ( window[PMGRAPHICID].getXC8.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC8.value = 0;
				return( window[PMGRAPHICID].getXC8.value );
			};
		window[PMGRAPHICID].getXC8.value = ((((window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM.X() : 0) == 1) && (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0) < 0));
		return (window[PMGRAPHICID].getXC8.value);
	}, window[PMGRAPHICID].getYC8 = function () {
		if ( window[PMGRAPHICID].getYC8.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC8.value = window[PMGRAPHICID].getXC8.value;
				return( window[PMGRAPHICID].getYC8.value );
			};
		window[PMGRAPHICID].getYC8.value = window[PMGRAPHICID].getXC8.value;
		return (window[PMGRAPHICID].getYC8.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});    
window[PMGRAPHICID].condition82754buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition82754buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition82754onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition82754buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition82754buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition82754buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition82754onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition82754buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition82754buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition82754buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition82754 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition82754onTrue();
	} else {
		window[PMGRAPHICID].condition82754onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition82754);
window[PMGRAPHICID].updateCondition82754; 
window[PMGRAPHICID].condition76195buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition76195buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition76195onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition76195buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition76195buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition76195buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition76195onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition76195buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition76195buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition76195buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition76195 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition76195onTrue();
	} else {
		window[PMGRAPHICID].condition76195onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition76195);
window[PMGRAPHICID].updateCondition76195;  
window[PMGRAPHICID].condition41154buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition41154buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition41154onTrue = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition41154buttonShow('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition41154buttonShow('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition41154buttonShow('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
window[PMGRAPHICID].condition41154onFalse = function () {
	if (window[PMGRAPHICID].pointT3)    { window[PMGRAPHICID].condition41154buttonHide('window[PMGRAPHICID].pointT3',   window[PMGRAPHICID].pointT3); }
	if (window[PMGRAPHICID].textT3)     { window[PMGRAPHICID].condition41154buttonHide('window[PMGRAPHICID].textT3',    window[PMGRAPHICID].textT3); }
	if (window[PMGRAPHICID].segmentT3)  { window[PMGRAPHICID].condition41154buttonHide('window[PMGRAPHICID].segmentT3', window[PMGRAPHICID].segmentT3); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition41154 = function () {
	var x = window[PMGRAPHICID].pointC3.X();
	if (window[PMGRAPHICID].pointC3.X()) {
		window[PMGRAPHICID].condition41154onTrue();
	} else {
		window[PMGRAPHICID].condition41154onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition41154);
window[PMGRAPHICID].updateCondition41154; 
window[PMGRAPHICID].condition71735buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition71735buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition71735onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition71735buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition71735buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition71735buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition71735onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition71735buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition71735buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition71735buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition71735 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition71735onTrue();
	} else {
		window[PMGRAPHICID].condition71735onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition71735);
window[PMGRAPHICID].updateCondition71735; 
window[PMGRAPHICID].condition53881buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition53881buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition53881onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition53881buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition53881buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition53881buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition53881onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition53881buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition53881buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition53881buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition53881 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition53881onTrue();
	} else {
		window[PMGRAPHICID].condition53881onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition53881);
window[PMGRAPHICID].updateCondition53881;  
window[PMGRAPHICID].condition65479buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition65479buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition65479onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition65479buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition65479buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition65479buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition65479onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition65479buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition65479buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition65479buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition65479 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition65479onTrue();
	} else {
		window[PMGRAPHICID].condition65479onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition65479);
window[PMGRAPHICID].updateCondition65479; 
window[PMGRAPHICID].condition63183buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition63183buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition63183onTrue = function () {
	if (window[PMGRAPHICID].pointT7)    { window[PMGRAPHICID].condition63183buttonShow('window[PMGRAPHICID].pointT7',   window[PMGRAPHICID].pointT7); }
	if (window[PMGRAPHICID].textT7)     { window[PMGRAPHICID].condition63183buttonShow('window[PMGRAPHICID].textT7',    window[PMGRAPHICID].textT7); }
	if (window[PMGRAPHICID].segmentT7)  { window[PMGRAPHICID].condition63183buttonShow('window[PMGRAPHICID].segmentT7', window[PMGRAPHICID].segmentT7); }
};
window[PMGRAPHICID].condition63183onFalse = function () {
	if (window[PMGRAPHICID].pointT7)    { window[PMGRAPHICID].condition63183buttonHide('window[PMGRAPHICID].pointT7',   window[PMGRAPHICID].pointT7); }
	if (window[PMGRAPHICID].textT7)     { window[PMGRAPHICID].condition63183buttonHide('window[PMGRAPHICID].textT7',    window[PMGRAPHICID].textT7); }
	if (window[PMGRAPHICID].segmentT7)  { window[PMGRAPHICID].condition63183buttonHide('window[PMGRAPHICID].segmentT7', window[PMGRAPHICID].segmentT7); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition63183 = function () {
	var x = window[PMGRAPHICID].pointC7.X();
	if (window[PMGRAPHICID].pointC7.X()) {
		window[PMGRAPHICID].condition63183onTrue();
	} else {
		window[PMGRAPHICID].condition63183onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition63183);
window[PMGRAPHICID].updateCondition63183; 
window[PMGRAPHICID].condition85330buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition85330buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+'panel'+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition85330onTrue = function () {
	if (window[PMGRAPHICID].pointT8)    { window[PMGRAPHICID].condition85330buttonShow('window[PMGRAPHICID].pointT8',   window[PMGRAPHICID].pointT8); }
	if (window[PMGRAPHICID].textT8)     { window[PMGRAPHICID].condition85330buttonShow('window[PMGRAPHICID].textT8',    window[PMGRAPHICID].textT8); }
	if (window[PMGRAPHICID].segmentT8)  { window[PMGRAPHICID].condition85330buttonShow('window[PMGRAPHICID].segmentT8', window[PMGRAPHICID].segmentT8); }
};
window[PMGRAPHICID].condition85330onFalse = function () {
	if (window[PMGRAPHICID].pointT8)    { window[PMGRAPHICID].condition85330buttonHide('window[PMGRAPHICID].pointT8',   window[PMGRAPHICID].pointT8); }
	if (window[PMGRAPHICID].textT8)     { window[PMGRAPHICID].condition85330buttonHide('window[PMGRAPHICID].textT8',    window[PMGRAPHICID].textT8); }
	if (window[PMGRAPHICID].segmentT8)  { window[PMGRAPHICID].condition85330buttonHide('window[PMGRAPHICID].segmentT8', window[PMGRAPHICID].segmentT8); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition85330 = function () {
	var x = window[PMGRAPHICID].pointC8.X();
	if (window[PMGRAPHICID].pointC8.X()) {
		window[PMGRAPHICID].condition85330onTrue();
	} else {
		window[PMGRAPHICID].condition85330onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition85330);
window[PMGRAPHICID].updateCondition85330;  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:180px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); /* Create Text */
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
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
		{ cssClass:'window[PMGRAPHICID].textT1 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
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
		{ cssClass:'window[PMGRAPHICID].textT2 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].textT3 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_precision('M', 'X', (window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM : null,1,'d2f') + ' x + ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
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
		  highlightCssClass:'window[PMGRAPHICID].textT3 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT3 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT4 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_precision('M', 'X', (window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM : null,1,'d2f') + ' x';
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
		  highlightCssClass:'window[PMGRAPHICID].textT4 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT4 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT5 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_precision('M', 'X', (window[PMGRAPHICID].pointM) ? window[PMGRAPHICID].pointM : null,1,'d2f') + ' x ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
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
		  highlightCssClass:'window[PMGRAPHICID].textT5 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT5 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
  
window[PMGRAPHICID].textT6 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = x + ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
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
		  highlightCssClass:'window[PMGRAPHICID].textT6 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT6 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT7 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = x ';
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
		  highlightCssClass:'window[PMGRAPHICID].textT7 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT7 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].textT8 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = x ' + PM_MATH.add_precision('B', 'X', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,'d2f') + '';
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
		  highlightCssClass:'window[PMGRAPHICID].textT8 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].textT8 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'28' , 
		  strokeColor:'black' });
  /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };