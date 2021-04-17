
  CTNS.QUIZ_SET["041360432db0fe7f5197df25a27af7ae"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4898 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4898';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4898', 1);
	
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

	jQuery(".slide_4898").each( function() {do_center(this)} );

    do_force('4898');
    
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
    factoryid: '4898',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axMultInvQ1-1",
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
CTNS.NUMBERS.GID = 'quiz_4898';
CTNS.NUMBERS.equations['quiz_4898'] = [];
CTNS.NUMBERS.symbols['quiz_4898'] = CTNS.NUMBERS.symbols['quiz_4898'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4898_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4898_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4898'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4898_SlideNo_0',                ablock           = '#answerblock_4898_SlideNo_0',                acblock          = '#answercommentaryblock_4898_SlideNo_0',                                rightblock       = '#rightblock_4898_SlideNo_0',                wrongblock       = '#wrongblock_4898_SlideNo_0',                undecidedblock   = '#undecidedblock_4898_SlideNo_0',                grblock          = 'graphicblock_4898_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4898_SlideNo_0',                grblock_A        = 'graphicblock_A_4898_SlideNo_0',                grblock_B        = 'graphicblock_B_4898_SlideNo_0',                grblock_C        = 'graphicblock_C_4898_SlideNo_0',                grblock_D        = 'graphicblock_D_4898_SlideNo_0',                grblock_E        = 'graphicblock_E_4898_SlideNo_0',                grblock_F        = 'graphicblock_F_4898_SlideNo_0',                                grblock_f        = (typeof tml_4898_SlideNo_0   !== 'undefined') ? tml_4898_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4898_SlideNo_0 !== 'undefined') ? tml_Q_4898_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4898_SlideNo_0 !== 'undefined') ? tml_A_4898_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4898_SlideNo_0 !== 'undefined') ? tml_B_4898_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4898_SlideNo_0 !== 'undefined') ? tml_C_4898_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4898_SlideNo_0 !== 'undefined') ? tml_D_4898_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4898_SlideNo_0 !== 'undefined') ? tml_E_4898_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4898_SlideNo_0 !== 'undefined') ? tml_F_4898_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4898',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4898_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4898'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.n  = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();         symbols.d  = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();                              symbols.x  = symbols.n/symbols.d;         symbols.x_ = d2f( symbols.x );                  symbols.inverse   = d2f( 1/symbols.x );         symbols.inverse_  = symbols.inverse;                  symbols.q_inverse = colorized.ctns_format(["transparent", symbols.inverse_]);         symbols.a_inverse = colorized.ctns_format(["blue", symbols.inverse_]);          if ( is_neg(symbols.x) ) {             symbols.EQ = "%s \\cdot ( %s ) = 1".ctns_format([symbols.x_, symbols.inverse_]);         } else         {             symbols.EQ = "%s \\cdot %s = 1".ctns_format([symbols.x_, symbols.inverse_]);         }                  q.push(' The multiplicative inverse of $$ ${x_} $$ is $$ \\boxed{ ${q_inverse} } .$$ <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               c.push(' The product of a number $$x$$ and its multiplicative inverse is one, $|x \\cdot \\frac{1}{x} = 1.|$ In this example, for $$x = ${x_},$$ $| ${EQ} ;|$ therefore, $$ ${inverse} $$ is the multiplicative inverse of $$ ${x_} $$. ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));         $(acblock).html(tex({'symbols':symbols}, c.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};