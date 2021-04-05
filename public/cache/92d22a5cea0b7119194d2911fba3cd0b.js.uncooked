
  CTNS.QUIZ_SET["92d22a5cea0b7119194d2911fba3cd0b"] = function (PYTHON_ID) {
  
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
    key: "axFieldS3",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: " <div>A <strong>field</strong> is a set <div class='tex' data-expr='\\mathbb{F}'></div> with two binary operations, addition (<div class='tex' data-expr='+'></div>) and multiplication (<div class='tex' data-expr='\\cdot'></div>), that obey the 12 field axioms for <div class='tex' data-expr='x, y, z \\in \\mathbb{F},'></div></div><br> <div> <div> <div><strong>name</strong></div> <ul> <li>closure</li> <li>associativity</li> <li>commutativity</li> <li>distributivity</li> <li>identity</li> <li>inverses </li></ul> </div> <div> <div><strong>addition</strong></div> <ul> <li><div class='tex' data-expr='x+y \\in \\mathbb{F}'></div>, &nbsp; <div class='tex' data-expr='x+y'></div> is unique</li> <li><div class='tex' data-expr='(x+y)+z = x+(y+z)'></div></li> <li><div class='tex' data-expr='x+y=y+x'></div></li> <li><div class='tex' data-expr='x \\cdot (y + z ) = x \\cdot y + x \\cdot z'></div></li> <li><div class='tex' data-expr='x+0=x'></div></li> <li><div class='tex' data-expr='x+(-x) = 0'></div></li> </ul> </div> <div> <div><strong>multiplication</strong></div> <ul> <li><div class='tex' data-expr='x \\cdot y \\in \\mathbb{F}'></div>, &nbsp; <div class='tex' data-expr='x \\cdot y'></div> is unique</li> <li><div class='tex' data-expr='(x \\cdot y) \\cdot z = x \\cdot (y \\cdot z)'></div></li> <li><div class='tex' data-expr='x \\cdot y = y \\cdot x'></div></li> <li><div class='tex' data-expr='(x + y) \\cdot z = x \\cdot z + y \\cdot z'></div></li> <li><div class='tex' data-expr='x \\cdot 1 = x'></div></li> <li><div class='tex' data-expr='x \\cdot \\frac{1}{x} = 1, \\; x \\neq 0'></div></li> </ul> </div> </div>     ",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: " A field is a set ...     ",
    backSpeak: " A field is a set F with two binary operations addition and multiplication that obey the twelve field axioms for closure, associativity, commutativity, distributivity, identity, and inverse.     ",
    frontSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone'></i>",
    backSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone-alt'></i>",
    front: " A field is a set ...     ",
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
    backStyle: "font-size:45%;",
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