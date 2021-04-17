
  CTNS.QUIZ_SET["70d3304dc57bec4d690ff9a97cc269d8"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2957 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2957';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2957', 1);
	
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

	jQuery(".slide_2957").each( function() {do_center(this)} );

    do_force('2957');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         1,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2957',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Given a quadratic function, convert the function from standard form into vertex form.     ",
    sponsor: "",
    figure: "",
    key: "quadQ2-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
]);
/* This values are set only once for any particular
 * quiz container.
 */
CTNS.NUMBERS.GID = 'quiz_2957';
CTNS.NUMBERS.equations['quiz_2957'] = [];
CTNS.NUMBERS.symbols['quiz_2957'] = CTNS.NUMBERS.symbols['quiz_2957'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2957_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2957_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2957'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2957_SlideNo_0',                ablock           = '#answerblock_2957_SlideNo_0',                acblock          = '#answercommentaryblock_2957_SlideNo_0',                                grblock          = 'graphicblock_2957_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2957_SlideNo_0',                grblock_A        = 'graphicblock_A_2957_SlideNo_0',                grblock_B        = 'graphicblock_B_2957_SlideNo_0',                grblock_C        = 'graphicblock_C_2957_SlideNo_0',                grblock_D        = 'graphicblock_D_2957_SlideNo_0',                                grblock_f        = (typeof tml_2957_SlideNo_0   !== 'undefined') ? tml_2957_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2957_SlideNo_0 !== 'undefined') ? tml_Q_2957_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2957_SlideNo_0 !== 'undefined') ? tml_A_2957_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2957_SlideNo_0 !== 'undefined') ? tml_B_2957_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2957_SlideNo_0 !== 'undefined') ? tml_C_2957_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2957_SlideNo_0 !== 'undefined') ? tml_D_2957_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2957',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2957_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2957'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             do {         symbols.a = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = symbols.a*2*[-1, -2, 1, 2].ctns_rand();         symbols.c = [0, 1, 2, 3].ctns_rand();          symbols.h = symbols.b / (-2 * symbols.a),         symbols.k = symbols.a * Math.pow(symbols.h, 2) + symbols.b * symbols.h + symbols.c;     } while (is_lt(symbols.h,-5) || is_lt(symbols.k,-2) || is_gt(symbols.h,5) || is_gt(symbols.k,2) );          var b_div_a = d2f( symbols.b / symbols.a ),         half_b_div_a = d2f( symbols.b / (2 * symbols.a ) ),         half_b_div_a_squared = d2f( Math.pow(symbols.b / (2 * symbols.a ), 2) ),         half_b_div_a_neg = d2f( -1 * symbols.b / (2 * symbols.a ) ),         combined_constant = d2f( symbols.c - symbols.a * Math.pow(symbols.b / (2 * symbols.a ), 2) );      symbols.EQ  = "f(x)= %s x ^2 + %s x + %s".ctns_format([symbols.a, symbols.b, symbols.c]).ctns_equation();     symbols.EQ2 = "f(x)= %s (x ^2 + %s x) + %s".ctns_format([symbols.a, b_div_a, symbols.c]).ctns_equation();     symbols.EQ3 = "((%s)/2)^2 = %s".ctns_format([b_div_a, half_b_div_a_squared]).ctns_equation();     symbols.EQ4 = "f(x)= %s (x ^2 + %s x + %s - %s) + %s".ctns_format([symbols.a, b_div_a, half_b_div_a_squared, half_b_div_a_squared, symbols.c]).ctns_equation();     symbols.EQ5 = "f(x)= %s (x ^2 + %s x + %s) - %s (%s) + %s".ctns_format([symbols.a, b_div_a, half_b_div_a_squared, symbols.a, half_b_div_a_squared, symbols.c]).ctns_equation();     symbols.EQ6 = "\\begin{aligned}"             + "f(x) &= %s (x ^2 + %s x + %s) - %s (%s) + %s  \\\\[2ex]".ctns_format([symbols.a, b_div_a, half_b_div_a_squared, symbols.a, half_b_div_a_squared, symbols.c]).ctns_equation()             + "f(x) &= %s (x ^2 + %s x + %s)           + %s  \\\\[2ex]".ctns_format([symbols.a, b_div_a, half_b_div_a_squared, combined_constant]).ctns_equation()             + "f(x) &= %s (x + %s)(x + %s)             + %s  \\\\[2ex]".ctns_format([symbols.a, half_b_div_a, half_b_div_a, combined_constant]).ctns_equation()             + "f(x) &= %s (x + %s)^2                   + %s, \\\\".ctns_format([symbols.a, half_b_div_a, combined_constant]).ctns_equation()             + "\\end{aligned}";     symbols.EQ7 = "f(x)= %s (x + %s)^2 + %s".ctns_format([symbols.a, half_b_div_a, combined_constant]).ctns_equation();     symbols.vertex   = "(%s, %s)".ctns_format([half_b_div_a_neg, combined_constant]).ctns_equation();          q.push(' For example, given a quadratic function $$f$$ in standard form $| ${EQ}, |$ the leading coefficients of the standard form are the three constants $|a=${a}, b=${b}, c=${c}.|$ Complete the square by first dividing out the leading  coefficient $$a = ${a}$$ from the first two terms, $|${EQ2}.|$ Now, divide the new leading coefficient of the $$x$$-term by two and square it, $|${EQ3},|$ and then both add and subtract this value inside the parentheses, $|${EQ4}.|$ Next, move the subtracted value to a position outside the parentheses (do not forget to multiply by $$a = ${a}$$), $|${EQ5}.|$ And finally, complete the square and combine the constants to get the vertex form of the quadratic function, $|${EQ6}|$ or simply $|${EQ7}.|$ ');      $(qblock)  .html(tex({"symbols":symbols}, q.join(' ')));                      [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};