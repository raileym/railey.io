
  CTNS.QUIZ_SET["4a8c725b556b0c296458938fceb308b3"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3527 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3527';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3527', 2);
	
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

	jQuery(".slide_3527").each( function() {do_center(this)} );

    do_force('3527');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         2,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '3527',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ10-1",
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
{
    slideNo: 1,
    factoryid: '3527',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ10-3",
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
CTNS.NUMBERS.GID = 'quiz_3527';
CTNS.NUMBERS.equations['quiz_3527'] = [];
CTNS.NUMBERS.symbols['quiz_3527'] = CTNS.NUMBERS.symbols['quiz_3527'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3527_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3527_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3527'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3527_SlideNo_0',                ablock           = '#answerblock_3527_SlideNo_0',                acblock          = '#answercommentaryblock_3527_SlideNo_0',                                grblock          = 'graphicblock_3527_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3527_SlideNo_0',                grblock_A        = 'graphicblock_A_3527_SlideNo_0',                grblock_B        = 'graphicblock_B_3527_SlideNo_0',                grblock_C        = 'graphicblock_C_3527_SlideNo_0',                grblock_D        = 'graphicblock_D_3527_SlideNo_0',                                grblock_f        = (typeof tml_3527_SlideNo_0   !== 'undefined') ? tml_3527_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3527_SlideNo_0 !== 'undefined') ? tml_Q_3527_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3527_SlideNo_0 !== 'undefined') ? tml_A_3527_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3527_SlideNo_0 !== 'undefined') ? tml_B_3527_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3527_SlideNo_0 !== 'undefined') ? tml_C_3527_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3527_SlideNo_0 !== 'undefined') ? tml_D_3527_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3527',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3527_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3527'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var eq; /* temp eq variable */              /* random m, x, y, a, and b */         symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.a = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();                  /* compute and format the negative reciprocal */         symbols.m_ = d2f(-1/symbols.m);                  /* colorize values a, b, and m differently for q and a */         symbols.q_m = colorized.ctns_format(['transparent', symbols.m_]);         symbols.q_a = colorized.ctns_format(['transparent', symbols.a]);         symbols.q_b = colorized.ctns_format(['transparent', symbols.b]);         symbols.a_m = colorized.ctns_format(['blue', symbols.m_]);         symbols.a_a = colorized.ctns_format(['blue', symbols.a]);         symbols.a_b = colorized.ctns_format(['blue', symbols.b]);                  symbols.eq  = 'y - %s = %s( x - %s)'.ctns_format([symbols.y, symbols.m,  symbols.x]).ctns_equation();         symbols.eq_ = 'y - %s = %s( x - %s)'.ctns_format([symbols.b, symbols.m_, symbols.a]).ctns_equation();          symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${a}, ${b} )$$ and is perpendicular to the line,  $| ${eq} .|$  <br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line. Here, you are given the slope $$m = ${m}$$ from the equation of a perpendicular line and a point $$( ${x}, ${y} )$$ on the desired line. <br/><br/>Taking the negative reciprocal of the perpendicular slope  $$m = ${m}$$ gives you the slope $$m = ${m_}$$ of the desired line. With the point $$( ${x}, ${y} )$$ and the new slope $$m = ${m_}$$, you now have everything  necessary to express your new equation in point-slope form.  <hr style="width:50%;clear:both;margin:2em auto;"> From point-slope-form $$y - y_1 = m (x - x_1)$$<br/><br/> with $$m = \\boxed { ${q_m} }$$ and $$(x_1,y_1) = ( ${q_a}, ${q_b} ),$$ then<br/><br/> $$y - \\boxed { ${q_b} } = \\boxed { ${q_m} } (x - \\boxed{ ${q_a} })$$<br/><br/> $$ \\boxed{ ${q_eq} } $$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3527_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3527_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3527'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3527_SlideNo_1',                ablock           = '#answerblock_3527_SlideNo_1',                acblock          = '#answercommentaryblock_3527_SlideNo_1',                                grblock          = 'graphicblock_3527_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3527_SlideNo_1',                grblock_A        = 'graphicblock_A_3527_SlideNo_1',                grblock_B        = 'graphicblock_B_3527_SlideNo_1',                grblock_C        = 'graphicblock_C_3527_SlideNo_1',                grblock_D        = 'graphicblock_D_3527_SlideNo_1',                                grblock_f        = (typeof tml_3527_SlideNo_1   !== 'undefined') ? tml_3527_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_3527_SlideNo_1 !== 'undefined') ? tml_Q_3527_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_3527_SlideNo_1 !== 'undefined') ? tml_A_3527_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_3527_SlideNo_1 !== 'undefined') ? tml_B_3527_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_3527_SlideNo_1 !== 'undefined') ? tml_C_3527_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_3527_SlideNo_1 !== 'undefined') ? tml_D_3527_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_3527',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3527_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3527'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* random m, b, x, and y */         symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();                  /* compute and format the negative reciprocal and the value          * for the y-intercept b          */         symbols.m_ = d2f(-1/symbols.m);         symbols.b_ = d2f(symbols.y + symbols.x/symbols.m); /* this is how the equation works out, btw */                           /* colorize values x, y, b, and m differently for q and a */         symbols.q_m = colorized.ctns_format(['transparent', symbols.m_]);         symbols.q_b = colorized.ctns_format(['transparent', symbols.b_]);         symbols.q_x = colorized.ctns_format(['transparent', symbols.x]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);          symbols.a_m = colorized.ctns_format(['blue', symbols.m_]);         symbols.a_b = colorized.ctns_format(['blue', symbols.b_]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);                  symbols.eq  = 'y = %s x + %s'.ctns_format([symbols.m,  symbols.b ]).ctns_equation();         symbols.eq_ = 'y = %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${x}, ${y} )$$ and is perpendicular to the line,  $| ${eq} .|$  <br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line. Here, you are given the slope $$m = ${m}$$ from the equation of a perpendicular line and a point $$( ${x}, ${y} )$$ on the desired line. <br/><br/>Taking the negative reciprocal of the perpendicular slope  $$m = ${m}$$ gives you the slope $$m = ${m_}$$ of the desired line. With the point $$( ${x}, ${y} )$$ and the new slope $$m = ${m_}$$, you now have everything  necessary to express your new equation in slope-intercept form.  <hr style="width:50%;clear:both;margin:2em auto;"> From slope-intercept form $$y = m x +b$$, <br/> you get $$y - mx = b$$ or rather<br/><br/> $$b = y - m x.$$ <br/><br/> With $$m = \\boxed { ${q_m} }$$ and $$(x_1,y_1) = \\boxed { ( ${q_x}, ${q_y} ) },$$ then<br/><br/> $$b = \\boxed{ ${q_y} } - \\boxed { ${q_m} } \\cdot \\boxed { ${q_x} } = \\boxed { ${q_b} }.$$<br/><br/> With $$y = m x +b$$, then<br/><br/> $$y = \\boxed { ${q_m} } x + \\boxed{ ${q_b} }$$ or<br/><br/> $$ \\boxed{ ${q_eq} } $$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};