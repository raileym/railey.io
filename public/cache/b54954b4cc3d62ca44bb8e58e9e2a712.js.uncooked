
  CTNS.QUIZ_SET["b54954b4cc3d62ca44bb8e58e9e2a712"] = function (PYTHON_ID) {
  
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
    key: "linearQ9-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_'+ FACTORY_ID;
CTNS.NUMBERS.equations[CTNS.NUMBERS.GID] = [];
CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] = CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] || {};

/*  * See citeations.php for this javascript. * SCRIPTBLOCK_ID is created at random with QuestionTemplate. * I could have created that value right here, btw.  */CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] = CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] || {};(function($, CTNS, MATHJS, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID) {    CTNS.NUMBERS.equations[CTNS.NUMBERS.GID].push( (function(CTNS, GID, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                qblock_Q         = '#questionblock_Q_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                qblock_A         = '#questionblock_A_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                                ablock           = '#answerblock_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                ablock_Q         = '#answerblock_Q_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                ablock_A         = '#answerblock_A_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                                grblock          = 'graphicblock_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                grblock_Q        = 'graphicblock_Q_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                grblock_A        = 'graphicblock_A_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols[SCRIPTBLOCK_ID],                gsymbols         = NUMBERS.symbols[GID],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var eq; /* temp eq variable */              /* random m, x, y, x_, and y_ */         symbols.A  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.B  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.C  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.A_ = symbols.A;         symbols.B_ = symbols.B;         symbols.x_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.C_ = (symbols.A_)*(symbols.x_) + (symbols.B_)*(symbols.y_);                  /* colorize values a, b, and m differently for q and a */         symbols.q_A = colorized.ctns_format(['transparent', symbols.A_]);         symbols.q_B = colorized.ctns_format(['transparent', symbols.B_]);         symbols.q_C = colorized.ctns_format(['transparent', symbols.C_]);         symbols.q_x = colorized.ctns_format(['blue', symbols.x_]);         symbols.q_y = colorized.ctns_format(['blue', symbols.y_]);         symbols.a_A = colorized.ctns_format(['blue', symbols.A_]);         symbols.a_B = colorized.ctns_format(['blue', symbols.B_]);         symbols.a_C = colorized.ctns_format(['blue', symbols.C_]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x_]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y_]);                  symbols.EQ   = '%s x + %s y = %s'.ctns_format([symbols.A,  symbols.B,  symbols.C ]).ctns_equation();         symbols.EQ_  = '%s x + %s y = %s'.ctns_format([symbols.A_, symbols.B_, 'C']).ctns_equation();         symbols.EQ__ = '%s x + %s y = %s'.ctns_format([symbols.A_, symbols.B_, symbols.C_]).ctns_equation();          symbols.q_EQ = colorized.ctns_format(['transparent', symbols.EQ__]);         symbols.a_EQ = colorized.ctns_format(['blue', symbols.EQ__]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${x_}, ${y_} )$$ and is parallel to the line, <br><br> $| ${EQ}. |$  <br><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line.  In the question above, the given line is expressed in general form, $|A x + B y = C,|$ with $$A=${A}$$ and $$B=${B}$$. Using the general form makes finding $$m$$ easy: parallel lines share common values for $$A$$ and $$B$$  because they share a common slope $$m = - \\frac{A}{B}.$$ Parallel lines differ only in their values for $$C$$, which is calculated using $$A$$ and $$B$$ and a point on the particular line. <hr style="width:50%;clear:both;margin:2em auto;"> The general form $$A x + B y = C$$  with $$A = ${A}$$ and $$B = ${B}$$ yields the form of the desired line,  $| ${EQ_}. |$ Calculate $$C$$ using this form and the point $$(x,y) = ( ${q_x}, ${q_y} ),$$ $|( ${A} ) \\cdot ( ${q_x} ) + ( ${B} ) \\cdot ( ${q_y} ) = \\boxed{ ${q_C} }.|$ The final answer is simply, $|\\boxed{ ${q_EQ} }.|$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));             }})(CTNS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID));           })( jQuery, CTNS, window.math, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID);};