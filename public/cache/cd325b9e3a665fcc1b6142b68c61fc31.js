
  CTNS.QUIZ_SET["cd325b9e3a665fcc1b6142b68c61fc31"] = function (PYTHON_ID) {
  
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
    key: "prTransS1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: " For all real numbers <div class='tex' data-expr='x,y,z \\in \\mathbb{R},'></div><br><br>if <div class='tex' data-expr='x=y'></div> and <div class='tex' data-expr='y=z'></div>, then <div class='tex' data-expr='x=z;'></div> and, if <div class='tex' data-expr='x \\lt y'></div> and <div class='tex' data-expr='y \\lt z'></div>, then <div class='tex' data-expr='x \\lt z.'></div>     ",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: " Transitive Property Of Equality<br> Transitive Property of Order     ",
    backSpeak: " For all real numbers $$x,y,z \in \mathbb{R},$$<br><br>if $$x=y$$ and $$y=z$$, then $$x=z;$$ and, if $$x \lt y$$ and $$y \lt z$$, then $$x \lt z.$$     ",
    frontSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone'></i>",
    backSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone'></i>",
    front: " Transitive Property Of Equality<br> Transitive Property of Order     ",
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