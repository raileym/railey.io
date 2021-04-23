
  CTNS.QUIZ_SET["d10697510c46d34cd94293d0c89ad1ce"] = function () {
  
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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
    description: " Given the graph of a linear function, the student is asked to determine the slope of the line.     ",
    sponsor: "",
    figure: "",
    key: "demo-slopeQ2-2",
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

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_1',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_1',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_1',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_1',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_1',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_1',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_1').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_1').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_1').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_1').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_1').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_1').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_1',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_1',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_1',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_1',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_1',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_1',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_1',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_1',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_1',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_1   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_2',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_2',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_2',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_2',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_2',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_2',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_2').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_2').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_2').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_2').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_2').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_2').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_2',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_2',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_2',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_2',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_2',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_2',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_2',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_2',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_2',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_2   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_3',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_3',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_3',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_3',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_3',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_3',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_3').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_3').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_3').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_3').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_3').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_3').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_3').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_3').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_3',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_3',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_3',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_3',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_3',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_3',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_3',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_3',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_3',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_3',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_3',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_3',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_3',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_3',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_3',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_3',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_3',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_3',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_3',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_3',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_3',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_3',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_3',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_3',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_3   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_3 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_4',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_4',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_4',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_4',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_4',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_4',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_4').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_4').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_4').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_4').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_4').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_4').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_4').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_4').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_4',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_4',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_4',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_4',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_4',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_4',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_4',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_4',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_4',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_4',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_4',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_4',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_4',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_4',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_4',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_4',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_4',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_4',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_4',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_4',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_4',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_4',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_4',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_4',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_4   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_4 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_5',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_5',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_5',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_5',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_5',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_5',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_5').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_5').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_5').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_5').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_5').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_5').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_5').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_5').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_5',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_5',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_5',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_5',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_5',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_5',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_5',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_5',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_5',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_5',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_5',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_5',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_5',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_5',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_5',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_5',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_5',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_5',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_5',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_5',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_5',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_5',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_5',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_5',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_5   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_5 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_6'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_6',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_6',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_6',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_6',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_6',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_6',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_6').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_6').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_6').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_6').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_6').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_6').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_6').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_6').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_6',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_6',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_6',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_6',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_6',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_6',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_6',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_6',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_6',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_6',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_6',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_6',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_6',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_6',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_6',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_6',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_6',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_6',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_6',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_6',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_6',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_6',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_6',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_6',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_6   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_6   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_6 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_6 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_6 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_6 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_6 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_6 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_6 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_6 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_6'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_7'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_7',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_7',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_7',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_7',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_7',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_7',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_7').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_7').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_7').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_7').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_7').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_7').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_7').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_7').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_7',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_7',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_7',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_7',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_7',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_7',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_7',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_7',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_7',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_7',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_7',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_7',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_7',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_7',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_7',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_7',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_7',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_7',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_7',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_7',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_7',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_7',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_7',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_7',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_7   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_7   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_7 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_7 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_7 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_7 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_7 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_7 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_7 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_7 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_7'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;          symbols.m_ = d2f(symbols.RISE / symbols.RUN);          symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);          q.push(' The slope of the line above is $$\\boxed{ ${q_m} }$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_1
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_1
	'scriptblock_GENERIC_MARKER_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_1';
	
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
function tml_A_GENERIC_MARKER_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_1
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_1
	'scriptblock_GENERIC_MARKER_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_1';
	
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_2
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_2
	'scriptblock_GENERIC_MARKER_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_2';
	
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
function tml_A_GENERIC_MARKER_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_2
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_2
	'scriptblock_GENERIC_MARKER_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_2';
	
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
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_3
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_3
	'scriptblock_GENERIC_MARKER_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_3';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
function tml_A_GENERIC_MARKER_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_3
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_3
	'scriptblock_GENERIC_MARKER_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_3';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_4
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_4
	'scriptblock_GENERIC_MARKER_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_4';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
function tml_A_GENERIC_MARKER_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_4
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_4
	'scriptblock_GENERIC_MARKER_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_4';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_6 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_6
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_6
	'scriptblock_GENERIC_MARKER_SlideNo_6'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_6';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
function tml_A_GENERIC_MARKER_SlideNo_6 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_6
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_6
	'scriptblock_GENERIC_MARKER_SlideNo_6'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_6';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_GENERIC_MARKER_SlideNo_7 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_GENERIC_MARKER_SlideNo_7
	What do these buy me? tag=Q_, masterid=GENERIC_MARKER, slideno=SlideNo_7
	'scriptblock_GENERIC_MARKER_SlideNo_7'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_GENERIC_MARKER_SlideNo_7';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_40489 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_40489 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
function tml_A_GENERIC_MARKER_SlideNo_7 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_7
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_7
	'scriptblock_GENERIC_MARKER_SlideNo_7'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_7';
	
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_95698 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95698 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_39394 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_39394 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_39394 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_39394, window[PMGRAPHICID].endArrow_39394], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_55450 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_55450 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_55450 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_55450, window[PMGRAPHICID].endArrow_55450], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_32688   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
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
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition18981buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition18981buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition18981onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition18981onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition18981buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition18981 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition18981onTrue();
	} else {
		window[PMGRAPHICID].condition18981onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition18981);
window[PMGRAPHICID].updateCondition18981; 
window[PMGRAPHICID].condition27778buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition27778buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition27778onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition27778onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition27778buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition27778 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition27778onTrue();
	} else {
		window[PMGRAPHICID].condition27778onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition27778);
window[PMGRAPHICID].updateCondition27778;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	      };