
  CTNS.QUIZ_SET["0c95fcceda2dc5395be144af78a8a4e3"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1458 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1458';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1458', 1);
	
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

	jQuery(".slide_1458").each( function() {do_center(this)} );

    do_force('1458');
    
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
    factoryid: '1458',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Synthesize a rational function. Terms are ordered by degree from highest to lowest. Zero coefficients are possible. Rationalize the numerator and denominator using math.js. This approach is NOT as effective as using Nerdamers library.     ",
    sponsor: "",
    figure: "",
    key: "polyD2-alt-1",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
]);
/* This values are set only once for any particular
 * quiz container.
 */
CTNS.NUMBERS.GID = 'quiz_1458';
CTNS.NUMBERS.equations['quiz_1458'] = [];
CTNS.NUMBERS.symbols['quiz_1458'] = CTNS.NUMBERS.symbols['quiz_1458'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1458_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1458_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1458'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1458_SlideNo_0',                ablock           = '#answerblock_1458_SlideNo_0',                acblock          = '#answercommentaryblock_1458_SlideNo_0',                                grblock          = 'graphicblock_1458_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1458_SlideNo_0',                grblock_A        = 'graphicblock_A_1458_SlideNo_0',                grblock_B        = 'graphicblock_B_1458_SlideNo_0',                grblock_C        = 'graphicblock_C_1458_SlideNo_0',                grblock_D        = 'graphicblock_D_1458_SlideNo_0',                                grblock_f        = (typeof tml_1458_SlideNo_0   !== 'undefined') ? tml_1458_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_1458_SlideNo_0 !== 'undefined') ? tml_Q_1458_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_1458_SlideNo_0 !== 'undefined') ? tml_A_1458_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_1458_SlideNo_0 !== 'undefined') ? tml_B_1458_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_1458_SlideNo_0 !== 'undefined') ? tml_C_1458_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_1458_SlideNo_0 !== 'undefined') ? tml_D_1458_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_1458',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1458_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_1458'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             var i,         dividendDegree,         divisorDegree,         isReducible,         divisor = [],         dividend = [];          divisorDegree = 3;     dividendDegree = 3;          i=0;     symbols.divisor = [];     while ( is_lt(i++, divisorDegree) ) {         symbols.divisor.push("( x - %s )".ctns_format([ [3, 2, 1].ctns_rand() ]));     }      i=0;     symbols.dividend = [];     while ( is_lt(i++, dividendDegree) ) {         symbols.dividend.push("( x - %s )".ctns_format([ [3, 2, 1].ctns_rand() ]));     }      symbols.problem = "\\frac{%s}{%s}".ctns_format([         symbols.dividend.join(""),          symbols.divisor.join("")]);          symbols.numerator = MATHJS.rationalize( symbols.dividend.join("*") ).toTex();     symbols.denominator = MATHJS.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");     symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");      /*     symbols.numerator = MATHJS.parse( MATHJS.simplify( symbols.dividend.join("") ) ).toTex();     symbols.denominator = MATHJS.parse( MATHJS.simplify( symbols.divisor.join("") ) ).toTex();     */          symbols.problem = "\\frac{%s}{%s}".ctns_format([         symbols.dividend.join(""),          symbols.divisor.join("")]);          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([         symbols.numerator,          symbols.denominator]);          q.push(' $| f(x) = ${problem} |$ ');              q.push(' $| f(x) = ${problem2} |$ ');              $(qblock).html(tex({'symbols':symbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};