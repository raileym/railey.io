
  CTNS.QUIZ_SET["e9fedb1829b4b335070b531225024cd9"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2879 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2879';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2879', 8);
	
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

	jQuery(".slide_2879").each( function() {do_center(this)} );

    do_force('2879');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         8,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates one  vertical asymptote along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-1",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 1,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates two  vertical asymptotes along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-2",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 2,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates two  vertical asymptotes along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-3",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 3,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates one  vertical asymptote along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-4",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 4,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates one  vertical asymptote along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-5",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 5,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates one  vertical asymptote along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-5a",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 6,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates two  vertical asymptotes along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-6",
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
    slideCss: "max-width:100%;width:100%;font-weight:normal;font-size:100%;width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    answerCss: "font-weight:normal;font-size:160%;font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 7,
    factoryid: '2879',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A simple rational function that demonstrates two  vertical asymptotes along with its full graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD4-6a",
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
CTNS.NUMBERS.GID = 'quiz_2879';
CTNS.NUMBERS.equations['quiz_2879'] = [];
CTNS.NUMBERS.symbols['quiz_2879'] = CTNS.NUMBERS.symbols['quiz_2879'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_0',                ablock           = '#answerblock_2879_SlideNo_0',                acblock          = '#answercommentaryblock_2879_SlideNo_0',                                grblock          = 'graphicblock_2879_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_0',                grblock_A        = 'graphicblock_A_2879_SlideNo_0',                grblock_B        = 'graphicblock_B_2879_SlideNo_0',                grblock_C        = 'graphicblock_C_2879_SlideNo_0',                grblock_D        = 'graphicblock_D_2879_SlideNo_0',                                grblock_f        = (typeof tml_2879_SlideNo_0   !== 'undefined') ? tml_2879_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_0 !== 'undefined') ? tml_Q_2879_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_0 !== 'undefined') ? tml_A_2879_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_0 !== 'undefined') ? tml_B_2879_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_0 !== 'undefined') ? tml_C_2879_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_0 !== 'undefined') ? tml_D_2879_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var i,             dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 1;         dividendDegree = 0;          symbols.dividend = [1];         symbols.zeros = [];         while ( is_lt(i++, dividendDegree) ) {             var zero = [3, 2, 1].ctns_rand();             symbols.zeros.push(zero);             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         }          i=0;         symbols.divisor = [];         symbols.asymptotes = [];         while ( is_lt(i++, divisorDegree) ) {             var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             symbols.asymptotes.push(asymptote);             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         }          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote = symbols.asymptotes[0];                  q.push(" Consider a simple rational function $$f$$ with one linear factor in its denominator $| f(x) = ${problem}. |$ The function $$f$$ has one vertical asymptote in its graph. <hr> To find the vertical asymptote, set $$f$$'s denominator to zero,  $| ${denominator} = 0, |$ and solve for $$x.$$  Here, the answer is simple:  the vertical asymptote occurs at $$x = ${asymptote}.$$         ");              q.push(' <hr> A graph of $$f$$ shows its curve together with its vertical asymptote at $$x = ${asymptote}.$$ <br/><br/>         ');          q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_1',                ablock           = '#answerblock_2879_SlideNo_1',                acblock          = '#answercommentaryblock_2879_SlideNo_1',                                grblock          = 'graphicblock_2879_SlideNo_1',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_1',                grblock_A        = 'graphicblock_A_2879_SlideNo_1',                grblock_B        = 'graphicblock_B_2879_SlideNo_1',                grblock_C        = 'graphicblock_C_2879_SlideNo_1',                grblock_D        = 'graphicblock_D_2879_SlideNo_1',                                grblock_f        = (typeof tml_2879_SlideNo_1   !== 'undefined') ? tml_2879_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_1 !== 'undefined') ? tml_Q_2879_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_1 !== 'undefined') ? tml_A_2879_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_1 !== 'undefined') ? tml_B_2879_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_1 !== 'undefined') ? tml_C_2879_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_1 !== 'undefined') ? tml_D_2879_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 2;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];         symbols.asymptote2 = symbols.asymptotes[1];                  q.push(" Consider a simple rational function $$f$$ with two linear factors in its denominator $| f(x) = ${problem}. |$ The function $$f$$ has two vertical asymptotes in its graph. <hr> To find the two vertical asymptotes,  set $$f$$'s denominator to zero,  $| ${denominator} = 0, |$ and solve for $$x.$$  Here, the answer is simple:  there is one vertical asymptote at $$x = ${asymptote1}$$, and another at $$x = ${asymptote2}.$$          ");              q.push(" <hr> A graph of $$f$$ shows its curve together with it's two vertical asymptotes, one each at  $$x = ${asymptote1}$$ and $$x = ${asymptote2}.$$ <br/><br/>         ");          q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_2',                ablock           = '#answerblock_2879_SlideNo_2',                acblock          = '#answercommentaryblock_2879_SlideNo_2',                                grblock          = 'graphicblock_2879_SlideNo_2',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_2',                grblock_A        = 'graphicblock_A_2879_SlideNo_2',                grblock_B        = 'graphicblock_B_2879_SlideNo_2',                grblock_C        = 'graphicblock_C_2879_SlideNo_2',                grblock_D        = 'graphicblock_D_2879_SlideNo_2',                                grblock_f        = (typeof tml_2879_SlideNo_2   !== 'undefined') ? tml_2879_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_2 !== 'undefined') ? tml_Q_2879_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_2 !== 'undefined') ? tml_A_2879_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_2 !== 'undefined') ? tml_B_2879_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_2 !== 'undefined') ? tml_C_2879_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_2 !== 'undefined') ? tml_D_2879_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 2;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];         symbols.asymptote2 = symbols.asymptotes[1];                  q.push(' The graph of the function $| f(x) = ${problem} |$ shows $$f$$ has two vertical asymptotes, one each at $$x = ${asymptote1}$$ and $$x = ${asymptote2}$$. <br/><br/>         ');              q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_3',                ablock           = '#answerblock_2879_SlideNo_3',                acblock          = '#answercommentaryblock_2879_SlideNo_3',                                grblock          = 'graphicblock_2879_SlideNo_3',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_3',                grblock_A        = 'graphicblock_A_2879_SlideNo_3',                grblock_B        = 'graphicblock_B_2879_SlideNo_3',                grblock_C        = 'graphicblock_C_2879_SlideNo_3',                grblock_D        = 'graphicblock_D_2879_SlideNo_3',                                grblock_f        = (typeof tml_2879_SlideNo_3   !== 'undefined') ? tml_2879_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_3 !== 'undefined') ? tml_Q_2879_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_3 !== 'undefined') ? tml_A_2879_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_3 !== 'undefined') ? tml_B_2879_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_3 !== 'undefined') ? tml_C_2879_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_3 !== 'undefined') ? tml_D_2879_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 1;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];                  q.push(' The graph of the function $$f,$$ $| f(x) = ${problem} ,|$ shows $$f$$ has one vertical asymptote  at $$x = ${asymptote1},$$ where its denominator equals zero. <br/><br/>         ');              q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_4',                ablock           = '#answerblock_2879_SlideNo_4',                acblock          = '#answercommentaryblock_2879_SlideNo_4',                                grblock          = 'graphicblock_2879_SlideNo_4',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_4',                grblock_A        = 'graphicblock_A_2879_SlideNo_4',                grblock_B        = 'graphicblock_B_2879_SlideNo_4',                grblock_C        = 'graphicblock_C_2879_SlideNo_4',                grblock_D        = 'graphicblock_D_2879_SlideNo_4',                                grblock_f        = (typeof tml_2879_SlideNo_4   !== 'undefined') ? tml_2879_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_4 !== 'undefined') ? tml_Q_2879_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_4 !== 'undefined') ? tml_A_2879_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_4 !== 'undefined') ? tml_B_2879_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_4 !== 'undefined') ? tml_C_2879_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_4 !== 'undefined') ? tml_D_2879_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 1;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];                  q.push(' Consider a rational function $$f$$ with one linear factor in its denominator $| f(x) = ${problem}.|$ The graph of the function $$f$$ shows it has one vertical asymptote  at $$x = ${asymptote1},$$ where its denominator equals zero. <br/><br/>         ');              q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_5',                ablock           = '#answerblock_2879_SlideNo_5',                acblock          = '#answercommentaryblock_2879_SlideNo_5',                                grblock          = 'graphicblock_2879_SlideNo_5',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_5',                grblock_A        = 'graphicblock_A_2879_SlideNo_5',                grblock_B        = 'graphicblock_B_2879_SlideNo_5',                grblock_C        = 'graphicblock_C_2879_SlideNo_5',                grblock_D        = 'graphicblock_D_2879_SlideNo_5',                                grblock_f        = (typeof tml_2879_SlideNo_5   !== 'undefined') ? tml_2879_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_5 !== 'undefined') ? tml_Q_2879_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_5 !== 'undefined') ? tml_A_2879_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_5 !== 'undefined') ? tml_B_2879_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_5 !== 'undefined') ? tml_C_2879_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_5 !== 'undefined') ? tml_D_2879_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 1;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];                  q.push(' For example, consider a rational function $$f$$ with one linear factor in its denominator $| f(x) = ${problem}.|$ The graph of the function $$f$$ shows it has one vertical asymptote  at $$x = ${asymptote1},$$ where its denominator equals zero. <br/><br/>         ');              q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_6'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_6'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_6',                ablock           = '#answerblock_2879_SlideNo_6',                acblock          = '#answercommentaryblock_2879_SlideNo_6',                                grblock          = 'graphicblock_2879_SlideNo_6',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_6',                grblock_A        = 'graphicblock_A_2879_SlideNo_6',                grblock_B        = 'graphicblock_B_2879_SlideNo_6',                grblock_C        = 'graphicblock_C_2879_SlideNo_6',                grblock_D        = 'graphicblock_D_2879_SlideNo_6',                                grblock_f        = (typeof tml_2879_SlideNo_6   !== 'undefined') ? tml_2879_SlideNo_6   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_6 !== 'undefined') ? tml_Q_2879_SlideNo_6 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_6 !== 'undefined') ? tml_A_2879_SlideNo_6 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_6 !== 'undefined') ? tml_B_2879_SlideNo_6 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_6 !== 'undefined') ? tml_C_2879_SlideNo_6 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_6 !== 'undefined') ? tml_D_2879_SlideNo_6 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_6'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 2;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];         symbols.asymptote2 = symbols.asymptotes[1];                  q.push(' Consider a rational function $$f$$ with two linear factors in its denominator $| f(x) = ${problem}.|$ The graph of the function $$f$$ shows it has two vertical asymptotes,  one each   at $$x = ${asymptote1}$$ and $$x = ${asymptote2},$$ where its denominator equals zero. <br/><br/>         ');              q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2879_SlideNo_7'] = CTNS.NUMBERS.symbols['new_scriptblock_2879_SlideNo_7'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2879'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2879_SlideNo_7',                ablock           = '#answerblock_2879_SlideNo_7',                acblock          = '#answercommentaryblock_2879_SlideNo_7',                                grblock          = 'graphicblock_2879_SlideNo_7',                grblock_Q        = 'graphicblock_Q_2879_SlideNo_7',                grblock_A        = 'graphicblock_A_2879_SlideNo_7',                grblock_B        = 'graphicblock_B_2879_SlideNo_7',                grblock_C        = 'graphicblock_C_2879_SlideNo_7',                grblock_D        = 'graphicblock_D_2879_SlideNo_7',                                grblock_f        = (typeof tml_2879_SlideNo_7   !== 'undefined') ? tml_2879_SlideNo_7   : null,                grblock_Q_f      = (typeof tml_Q_2879_SlideNo_7 !== 'undefined') ? tml_Q_2879_SlideNo_7 : null,                grblock_A_f      = (typeof tml_A_2879_SlideNo_7 !== 'undefined') ? tml_A_2879_SlideNo_7 : null,                grblock_B_f      = (typeof tml_B_2879_SlideNo_7 !== 'undefined') ? tml_B_2879_SlideNo_7 : null,                grblock_C_f      = (typeof tml_C_2879_SlideNo_7 !== 'undefined') ? tml_C_2879_SlideNo_7 : null,                grblock_D_f      = (typeof tml_D_2879_SlideNo_7 !== 'undefined') ? tml_D_2879_SlideNo_7 : null,                numbers          = NUMBERS,                gid              = 'quiz_2879',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2879_SlideNo_7'],                gsymbols         = NUMBERS.symbols['quiz_2879'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 2;         dividendDegree = 0;          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) );                          symbols.zeros.push( zero );                      }          symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [1];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          /*         symbols.numerator = math.rationalize( symbols.dividend.join("*") ).toTex();         symbols.denominator = math.rationalize( symbols.divisor.join("*") ).toTex();                      symbols.numerator = symbols.numerator.replace(/\\cdot/g, "");         symbols.denominator = symbols.denominator.replace(/\\cdot/g, "");          symbols.problem2 = "\\frac{%s}{%s}".ctns_format([             symbols.numerator,              symbols.denominator]);         */                  symbols.asymptote1 = symbols.asymptotes[0];         symbols.asymptote2 = symbols.asymptotes[1];                  q.push(' For example, consider a rational function $$f$$ with two linear factors in its denominator $| f(x) = ${problem}.|$ The graph of the function $$f$$ shows it has two vertical asymptotes,  one each   at $$x = ${asymptote1}$$ and $$x = ${asymptote2},$$ where its denominator equals zero. <br/><br/>         ');              q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_0
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_0
	'scriptblock_2879_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_0'] = NUMBERS.symbols['scriptblock_2879_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointT
 */
window[PMGRAPHICID].pointT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_61748 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointT, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_61748 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointT, window[PMGRAPHICID].pointB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph17626 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/(x - ((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_1
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_1
	'scriptblock_2879_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_1'] = NUMBERS.symbols['scriptblock_2879_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_1'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_18960 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_18960 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbT
 */
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbB
 */
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_21063 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_21063 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph18340 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/((x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0))*(x-((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_2
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_2
	'scriptblock_2879_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_2'] = NUMBERS.symbols['scriptblock_2879_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_2'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_69882 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_69882 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbT
 */
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbB
 */
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_45544 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_45544 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph10495 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/((x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0))*(x-((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_3
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_3
	'scriptblock_2879_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_3'] = NUMBERS.symbols['scriptblock_2879_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_3'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_34119 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_34119 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph19148 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/(x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_4 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_4
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_4
	'scriptblock_2879_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_4';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_4'] = NUMBERS.symbols['scriptblock_2879_SlideNo_4'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_4'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_4'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_36314 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_36314 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph77032 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/(x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_5 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_5
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_5
	'scriptblock_2879_SlideNo_5'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_5';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_5'] = NUMBERS.symbols['scriptblock_2879_SlideNo_5'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_5'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_5'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_42808 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_42808 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph54348 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/(x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_6 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_6
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_6
	'scriptblock_2879_SlideNo_6'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_6';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_6'] = NUMBERS.symbols['scriptblock_2879_SlideNo_6'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_6'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_6'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_23328 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_23328 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbT
 */
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbB
 */
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_84041 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_84041 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph32441 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/((x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0))*(x-((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2879_SlideNo_7 (symbols, gsymbols, NUMBERS) {
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	/* 
	tml_2879_SlideNo_7
	What do these buy me? tag=, masterid=2879, slideno=SlideNo_7
	'scriptblock_2879_SlideNo_7'
	*/
	
	PMGRAPHICID   = 'graphicblock_2879_SlideNo_7';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2879_SlideNo_7'] = NUMBERS.symbols['scriptblock_2879_SlideNo_7'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2879_SlideNo_7'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2879_SlideNo_7'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:300px; ; height:300px; ;');
		
		JXG.Options.text.useMathJax = true;
		JXG.Options.axis.ticks.drawLabels = false;
		JXG.Options.axis.strokeColor = 'black';
		JXG.Options.axis.strokeWidth = '2';
		JXG.Options.axis.lastArrow = false;
		JXG.Options.grid.strokeColor = 'black';
		JXG.Options.grid.strokeOpacity = '0.5';
		
		/* Look for this comment */
		window[PMGRAPHICID]={};
		window[PMGRAPHICID].ButtonStatus = {};
		window[PMGRAPHICID].ConditionStatus = {};
		
		window[PMGRAPHICID].board = JXG.JSXGraph.initBoard(PMGRAPHICID, {
			boundingbox: [-6,6,6,-6] ,
			axis: true,
			grid: true,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:true,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 9.5, 'f(x)'], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [8.75, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaT
 */
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointaB
 */
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_69774 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_69774 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbT
 */
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbB
 */
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_33784 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_33784 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph83775 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/((x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0))*(x-((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)));}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	      };