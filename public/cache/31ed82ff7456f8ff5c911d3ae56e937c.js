
  CTNS.QUIZ_SET["31ed82ff7456f8ff5c911d3ae56e937c"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1179 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1179';
  SCRIPTBLOCK_ID                = 'scriptblock_' + CTNS.NUMBERS.getRandomInt();
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1179', 1);
	
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

	jQuery(".slide_1179").each( function() {do_center(this)} );

    do_force('1179');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         1,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '1179',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ9-3",
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
CTNS.NUMBERS.GID = 'quiz_1179';
CTNS.NUMBERS.equations[CTNS.NUMBERS.GID] = [];
CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] = CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] || {};

/*  * See citeations.php for this javascript. * SCRIPTBLOCK_ID is created at random with QuestionTemplate. * I could have created that value right here, btw.  */CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] = CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] || {};CTNS.NUMBERS.symbols['scriptblock_1179_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1179_SlideNo_0'] || {};(function($, CTNS, MATHJS, SCRIPTBLOCK_ID) {    CTNS.NUMBERS.equations[CTNS.NUMBERS.GID].push( (function(CTNS, GID, SCRIPTBLOCK_ID) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1179_SlideNo_0',                ablock           = '#answerblock_1179_SlideNo_0',                acblock          = '#answercommentaryblock_1179_SlideNo_0',                                grblock          = 'graphicblock_1179_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1179_SlideNo_0',                grblock_A        = 'graphicblock_A_1179_SlideNo_0',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols[SCRIPTBLOCK_ID],                zsymbols         = NUMBERS.symbols['scriptblock_1179_SlideNo_0'],                gsymbols         = NUMBERS.symbols[GID],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* random m, b, x, and y */         symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();                  /* compute and format the negative reciprocal and the value          * for the y-intercept b          */         symbols.m_ = symbols.m;         symbols.b_ = d2f(symbols.y - symbols.x*symbols.m_); /* this is how the equation works out, btw */                           /* colorize values x, y, b, and m differently for q and a */         symbols.q_m = colorized.ctns_format(['transparent', symbols.m_]);         symbols.q_b = colorized.ctns_format(['transparent', symbols.b_]);         symbols.q_x = colorized.ctns_format(['transparent', symbols.x]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);          symbols.a_m = colorized.ctns_format(['blue', symbols.m_]);         symbols.a_b = colorized.ctns_format(['blue', symbols.b_]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);                  symbols.eq  = 'y = %s x + %s'.ctns_format([symbols.m,  symbols.b ]).ctns_equation();         symbols.eq_ = 'y = %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${x}, ${y} )$$ and is parallel to the line,  $| ${eq} .|$  <br><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line. Here, you are given the slope $$m = ${m}$$ from the equation of a parallel line and a point $$( ${x}, ${y} )$$ on the desired line. <br><br>Here, you know the slope of desired line directly as $$m = ${m_}$$ because parallel lines share a common slope. With the point $$( ${x}, ${y} )$$ and the slope $$m = ${m_}$$, you now have everything  necessary to express your new equation in slope-intercept form.  <hr style="width:50%;clear:both;margin:2em auto;"> From slope-intercept form $$y = m x +b$$, <br> you get $$y - mx = b$$ or rather<br><br> $$b = y - m x.$$ <br><br> With $$m = \\boxed { ${q_m} }$$ and $$(x,y) = \\boxed { ( ${q_x}, ${q_y} ) },$$ then<br><br> $$b = \\boxed{ ${q_y} } - \\boxed { ${q_m} } \\cdot \\boxed { ${q_x} } = \\boxed { ${q_b} }.$$<br><br> With $$y = m x +b$$, then<br><br> $$y = \\boxed { ${q_m} } x + \\boxed{ ${q_b} }$$ or<br><br> $$ \\boxed{ ${q_eq} } $$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));             }})(CTNS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID));           })( jQuery, CTNS, window.math, SCRIPTBLOCK_ID);};