
  CTNS.QUIZ_SET["7a2aa81b5ed754652174246a8cc1c6ec"] = function (PYTHON_ID) {
  
  CTNS_ID                       = "ctns_"+PYTHON_ID;
  FACTORY_ID                    = PYTHON_ID;
  SCRIPTBLOCK_ID                = "scriptblock_" + CTNS.NUMBERS.getRandomInt();
  CTNS.GRAPHICBLOCK_ID          = "graphicblock_";
  CTNS.FACTORY_ID               = PYTHON_ID;
  QUESTIONBLOCK_ID              = "questionblock_"         + FACTORY_ID;
  ANSWERBLOCK_ID                = "answerblock_"           + FACTORY_ID;
  GRAPHICBLOCK_ID               = "graphicblock_TAGFACTORYID_SLIDENO";
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, factoryid, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, factoryid, 1);
	
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

	jQuery(".slide_"+factoryid).each( function() {do_center(this)} );

    do_force(factoryid);
    
  })(CTNS, 
     FACTORY_ID,
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         1,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factory_id: FACTORY_ID,
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    atag: "",
    qtag: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "ntWholeS1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: " <div class='tex' data-expr='\\mathbb{W} = \\{0, 1, 2, ... \\}'></div><br><br>The set of <strong>whole numbers</strong> <div class='tex' data-expr='\\mathbb{W}'></div> is the number zero, combined with the set of natural numbers.     ",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: " Whole Numbers     ",
    backSpeak: " The set of whole numbers is the number zero, combined with the set of natural numbers.     ",
    frontSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone'></i>",
    backSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone-alt'></i>",
    front: " Whole Numbers     ",
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
]);};