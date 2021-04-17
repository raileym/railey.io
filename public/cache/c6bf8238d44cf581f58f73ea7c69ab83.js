
  CTNS.QUIZ_SET["c6bf8238d44cf581f58f73ea7c69ab83"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2852 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2852';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2852', 6);
	
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

	jQuery(".slide_2852").each( function() {do_center(this)} );

    do_force('2852');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         6,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2852',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axClosureQ1-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  The sum <div class='tex' data-expr='a+b'></div> is itself a natural number for any two natural numbers <div class='tex' data-expr='a'></div> and <div class='tex' data-expr='b'></div>.     ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  The question asks whether the sum of any two natural numbers is itself a natural number. To understand what this question is asking, try adding together pairs of natural numbers to see whether you can find a pair of numbers whose sum is not a natural number.     ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  The question asks whether the sum of any two natural numbers is itself a natural number. To understand what this question is asking, try adding together pairs of natural numbers to see whether you can find a pair of numbers whose sum is not a natural number.     "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " The set of natural numbers is closed under addition.     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto;",
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
    factoryid: '2852',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axClosureQ1-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  The sum <div class='tex' data-expr='a+b'></div> is itself an integer for any two integers <div class='tex' data-expr='a'></div> and <div class='tex' data-expr='b'></div>.     ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  The question asks whether the sum of any two integers is itself a integer. To understand what this question is asking, try adding together pairs of integers to see whether you can find a pair of numbers whose sum is not a integer.     ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  The question asks whether the sum of any two integers is itself a integer. To understand what this question is asking, try adding together pairs of integers to see whether you can find a pair of numbers whose sum is not a integer.     "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " The set of integers is closed under addition.     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto;",
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
    factoryid: '2852',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axClosureQ1-3",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  The sum <div class='tex' data-expr='a+b'></div> is itself a real number for any two real numbers <div class='tex' data-expr='a'></div> and <div class='tex' data-expr='b'></div>.     ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  The question asks whether the sum of any two real numbers is itself a real number. To understand what this question is asking, try adding together pairs of real numbers to see whether you can find a pair of numbers whose sum is not a real number.     ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  The question asks whether the sum of any two real numbers is itself a real number. To understand what this question is asking, try adding together pairs of real numbers to see whether you can find a pair of numbers whose sum is not a real number.     "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " The set of real numbers is closed under addition.     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto;",
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
    factoryid: '2852',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axClosureQ2-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  The product <div class='tex' data-expr='a \\cdot b'></div> is itself a natural number for any two natural numbers <div class='tex' data-expr='a'></div> and <div class='tex' data-expr='b'></div>.     ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  The question asks whether the product of any two natural numbers is itself a natural number. To understand what this question is asking, try adding together pairs of natural numbers to see whether you can find a pair of numbers whose product is not a natural number.     ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  The question asks whether the product of any two natural numbers is itself a natural number. To understand what this question is asking, try adding together pairs of natural numbers to see whether you can find a pair of numbers whose product is not a natural number.     "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " The set of natural numbers is closed under multiplication.     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto;",
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
    factoryid: '2852',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axClosureQ2-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  The product <div class='tex' data-expr='a \\cdot b'></div> is itself an integer for any two integers <div class='tex' data-expr='a'></div> and <div class='tex' data-expr='b'></div>.     ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  The question asks whether the product of any two integers is itself a integer. To understand what this question is asking, try adding together pairs of integers to see whether you can find a pair of numbers whose product is not a integer.     ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  The question asks whether the product of any two integers is itself a integer. To understand what this question is asking, try adding together pairs of integers to see whether you can find a pair of numbers whose product is not a integer.     "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " The set of integers is closed under multiplication.     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto;",
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
    factoryid: '2852',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "axClosureQ2-3",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  The product <div class='tex' data-expr='a \\cdot b'></div> is itself a real number for any two real numbers <div class='tex' data-expr='a'></div> and <div class='tex' data-expr='b'></div>.     ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  The question asks whether the product of any two real numbers is itself a real number. To understand what this question is asking, try adding together pairs of real numbers to see whether you can find a pair of numbers whose product is not a real number.     ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  The question asks whether the product of any two real numbers is itself a real number. To understand what this question is asking, try adding together pairs of real numbers to see whether you can find a pair of numbers whose product is not a real number.     "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " The set of real numbers is closed under multiplication.     ",
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
    questionStyle: "width:70%;margin-left:auto;margin-right:auto;",
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
CTNS.NUMBERS.GID = 'quiz_2852';
CTNS.NUMBERS.equations['quiz_2852'] = [];
CTNS.NUMBERS.symbols['quiz_2852'] = CTNS.NUMBERS.symbols['quiz_2852'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2852_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2852_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2852'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2852_SlideNo_0',                ablock           = '#answerblock_2852_SlideNo_0',                acblock          = '#answercommentaryblock_2852_SlideNo_0',                                rightblock       = '#rightblock_2852_SlideNo_0',                wrongblock       = '#wrongblock_2852_SlideNo_0',                undecidedblock   = '#undecidedblock_2852_SlideNo_0',                grblock          = 'graphicblock_2852_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2852_SlideNo_0',                grblock_A        = 'graphicblock_A_2852_SlideNo_0',                grblock_B        = 'graphicblock_B_2852_SlideNo_0',                grblock_C        = 'graphicblock_C_2852_SlideNo_0',                grblock_D        = 'graphicblock_D_2852_SlideNo_0',                grblock_E        = 'graphicblock_E_2852_SlideNo_0',                grblock_F        = 'graphicblock_F_2852_SlideNo_0',                                grblock_f        = (typeof tml_2852_SlideNo_0   !== 'undefined') ? tml_2852_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2852_SlideNo_0 !== 'undefined') ? tml_Q_2852_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2852_SlideNo_0 !== 'undefined') ? tml_A_2852_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2852_SlideNo_0 !== 'undefined') ? tml_B_2852_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2852_SlideNo_0 !== 'undefined') ? tml_C_2852_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2852_SlideNo_0 !== 'undefined') ? tml_D_2852_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2852_SlideNo_0 !== 'undefined') ? tml_E_2852_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2852_SlideNo_0 !== 'undefined') ? tml_F_2852_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2852',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2852_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2852'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2852_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_2852_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2852'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2852_SlideNo_1',                ablock           = '#answerblock_2852_SlideNo_1',                acblock          = '#answercommentaryblock_2852_SlideNo_1',                                rightblock       = '#rightblock_2852_SlideNo_1',                wrongblock       = '#wrongblock_2852_SlideNo_1',                undecidedblock   = '#undecidedblock_2852_SlideNo_1',                grblock          = 'graphicblock_2852_SlideNo_1',                grblock_Q        = 'graphicblock_Q_2852_SlideNo_1',                grblock_A        = 'graphicblock_A_2852_SlideNo_1',                grblock_B        = 'graphicblock_B_2852_SlideNo_1',                grblock_C        = 'graphicblock_C_2852_SlideNo_1',                grblock_D        = 'graphicblock_D_2852_SlideNo_1',                grblock_E        = 'graphicblock_E_2852_SlideNo_1',                grblock_F        = 'graphicblock_F_2852_SlideNo_1',                                grblock_f        = (typeof tml_2852_SlideNo_1   !== 'undefined') ? tml_2852_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_2852_SlideNo_1 !== 'undefined') ? tml_Q_2852_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_2852_SlideNo_1 !== 'undefined') ? tml_A_2852_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_2852_SlideNo_1 !== 'undefined') ? tml_B_2852_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_2852_SlideNo_1 !== 'undefined') ? tml_C_2852_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_2852_SlideNo_1 !== 'undefined') ? tml_D_2852_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_2852_SlideNo_1 !== 'undefined') ? tml_E_2852_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_2852_SlideNo_1 !== 'undefined') ? tml_F_2852_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_2852',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2852_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_2852'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2852_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_2852_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2852'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2852_SlideNo_2',                ablock           = '#answerblock_2852_SlideNo_2',                acblock          = '#answercommentaryblock_2852_SlideNo_2',                                rightblock       = '#rightblock_2852_SlideNo_2',                wrongblock       = '#wrongblock_2852_SlideNo_2',                undecidedblock   = '#undecidedblock_2852_SlideNo_2',                grblock          = 'graphicblock_2852_SlideNo_2',                grblock_Q        = 'graphicblock_Q_2852_SlideNo_2',                grblock_A        = 'graphicblock_A_2852_SlideNo_2',                grblock_B        = 'graphicblock_B_2852_SlideNo_2',                grblock_C        = 'graphicblock_C_2852_SlideNo_2',                grblock_D        = 'graphicblock_D_2852_SlideNo_2',                grblock_E        = 'graphicblock_E_2852_SlideNo_2',                grblock_F        = 'graphicblock_F_2852_SlideNo_2',                                grblock_f        = (typeof tml_2852_SlideNo_2   !== 'undefined') ? tml_2852_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_2852_SlideNo_2 !== 'undefined') ? tml_Q_2852_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_2852_SlideNo_2 !== 'undefined') ? tml_A_2852_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_2852_SlideNo_2 !== 'undefined') ? tml_B_2852_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_2852_SlideNo_2 !== 'undefined') ? tml_C_2852_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_2852_SlideNo_2 !== 'undefined') ? tml_D_2852_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_2852_SlideNo_2 !== 'undefined') ? tml_E_2852_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_2852_SlideNo_2 !== 'undefined') ? tml_F_2852_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_2852',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2852_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_2852'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2852_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_2852_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2852'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2852_SlideNo_3',                ablock           = '#answerblock_2852_SlideNo_3',                acblock          = '#answercommentaryblock_2852_SlideNo_3',                                rightblock       = '#rightblock_2852_SlideNo_3',                wrongblock       = '#wrongblock_2852_SlideNo_3',                undecidedblock   = '#undecidedblock_2852_SlideNo_3',                grblock          = 'graphicblock_2852_SlideNo_3',                grblock_Q        = 'graphicblock_Q_2852_SlideNo_3',                grblock_A        = 'graphicblock_A_2852_SlideNo_3',                grblock_B        = 'graphicblock_B_2852_SlideNo_3',                grblock_C        = 'graphicblock_C_2852_SlideNo_3',                grblock_D        = 'graphicblock_D_2852_SlideNo_3',                grblock_E        = 'graphicblock_E_2852_SlideNo_3',                grblock_F        = 'graphicblock_F_2852_SlideNo_3',                                grblock_f        = (typeof tml_2852_SlideNo_3   !== 'undefined') ? tml_2852_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_2852_SlideNo_3 !== 'undefined') ? tml_Q_2852_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_2852_SlideNo_3 !== 'undefined') ? tml_A_2852_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_2852_SlideNo_3 !== 'undefined') ? tml_B_2852_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_2852_SlideNo_3 !== 'undefined') ? tml_C_2852_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_2852_SlideNo_3 !== 'undefined') ? tml_D_2852_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_2852_SlideNo_3 !== 'undefined') ? tml_E_2852_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_2852_SlideNo_3 !== 'undefined') ? tml_F_2852_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_2852',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2852_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_2852'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2852_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_2852_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2852'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2852_SlideNo_4',                ablock           = '#answerblock_2852_SlideNo_4',                acblock          = '#answercommentaryblock_2852_SlideNo_4',                                rightblock       = '#rightblock_2852_SlideNo_4',                wrongblock       = '#wrongblock_2852_SlideNo_4',                undecidedblock   = '#undecidedblock_2852_SlideNo_4',                grblock          = 'graphicblock_2852_SlideNo_4',                grblock_Q        = 'graphicblock_Q_2852_SlideNo_4',                grblock_A        = 'graphicblock_A_2852_SlideNo_4',                grblock_B        = 'graphicblock_B_2852_SlideNo_4',                grblock_C        = 'graphicblock_C_2852_SlideNo_4',                grblock_D        = 'graphicblock_D_2852_SlideNo_4',                grblock_E        = 'graphicblock_E_2852_SlideNo_4',                grblock_F        = 'graphicblock_F_2852_SlideNo_4',                                grblock_f        = (typeof tml_2852_SlideNo_4   !== 'undefined') ? tml_2852_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_2852_SlideNo_4 !== 'undefined') ? tml_Q_2852_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_2852_SlideNo_4 !== 'undefined') ? tml_A_2852_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_2852_SlideNo_4 !== 'undefined') ? tml_B_2852_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_2852_SlideNo_4 !== 'undefined') ? tml_C_2852_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_2852_SlideNo_4 !== 'undefined') ? tml_D_2852_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_2852_SlideNo_4 !== 'undefined') ? tml_E_2852_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_2852_SlideNo_4 !== 'undefined') ? tml_F_2852_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_2852',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2852_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_2852'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2852_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_2852_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2852'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2852_SlideNo_5',                ablock           = '#answerblock_2852_SlideNo_5',                acblock          = '#answercommentaryblock_2852_SlideNo_5',                                rightblock       = '#rightblock_2852_SlideNo_5',                wrongblock       = '#wrongblock_2852_SlideNo_5',                undecidedblock   = '#undecidedblock_2852_SlideNo_5',                grblock          = 'graphicblock_2852_SlideNo_5',                grblock_Q        = 'graphicblock_Q_2852_SlideNo_5',                grblock_A        = 'graphicblock_A_2852_SlideNo_5',                grblock_B        = 'graphicblock_B_2852_SlideNo_5',                grblock_C        = 'graphicblock_C_2852_SlideNo_5',                grblock_D        = 'graphicblock_D_2852_SlideNo_5',                grblock_E        = 'graphicblock_E_2852_SlideNo_5',                grblock_F        = 'graphicblock_F_2852_SlideNo_5',                                grblock_f        = (typeof tml_2852_SlideNo_5   !== 'undefined') ? tml_2852_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_2852_SlideNo_5 !== 'undefined') ? tml_Q_2852_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_2852_SlideNo_5 !== 'undefined') ? tml_A_2852_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_2852_SlideNo_5 !== 'undefined') ? tml_B_2852_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_2852_SlideNo_5 !== 'undefined') ? tml_C_2852_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_2852_SlideNo_5 !== 'undefined') ? tml_D_2852_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_2852_SlideNo_5 !== 'undefined') ? tml_E_2852_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_2852_SlideNo_5 !== 'undefined') ? tml_F_2852_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_2852',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2852_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_2852'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};