
  CTNS.QUIZ_SET["9b60c0008d6b130c961627c9731843ac"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3755 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3755';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3755', 5);
	
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

	jQuery(".slide_3755").each( function() {do_center(this)} );

    do_force('3755');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         5,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '3755',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "synth-divisionD1-3a",
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
{
    slideNo: 1,
    factoryid: '3755',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "synth-divisionD1-3b",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 2,
    factoryid: '3755',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "synth-divisionD1-3c",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 3,
    factoryid: '3755',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "synth-divisionD1-3d",
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
    slideCss: "width:100%;max-width:1024px;",
    frontCss: "",
    backCss: "",
    questionCss: "font-size:1em;font-weight:normal;",
    answerCss: "font-size:1em;font-weight:normal;",
    commentaryCss: "",
    multipleChoiceCss: "",
},
{
    slideNo: 4,
    factoryid: '3755',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "synth-divisionD1-3e",
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
CTNS.NUMBERS.GID = 'quiz_3755';
CTNS.NUMBERS.equations['quiz_3755'] = [];
CTNS.NUMBERS.symbols['quiz_3755'] = CTNS.NUMBERS.symbols['quiz_3755'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3755_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3755_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3755'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3755_SlideNo_0',                ablock           = '#answerblock_3755_SlideNo_0',                acblock          = '#answercommentaryblock_3755_SlideNo_0',                                grblock          = 'graphicblock_3755_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3755_SlideNo_0',                grblock_A        = 'graphicblock_A_3755_SlideNo_0',                grblock_B        = 'graphicblock_B_3755_SlideNo_0',                grblock_C        = 'graphicblock_C_3755_SlideNo_0',                grblock_D        = 'graphicblock_D_3755_SlideNo_0',                                grblock_f        = (typeof tml_3755_SlideNo_0   !== 'undefined') ? tml_3755_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3755_SlideNo_0 !== 'undefined') ? tml_Q_3755_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3755_SlideNo_0 !== 'undefined') ? tml_A_3755_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3755_SlideNo_0 !== 'undefined') ? tml_B_3755_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3755_SlideNo_0 !== 'undefined') ? tml_C_3755_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3755_SlideNo_0 !== 'undefined') ? tml_D_3755_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3755',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3755_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3755'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             var i=0;     gsymbols.dividend_raw = [ [1, 2, 4].ctns_rand() ];     while ( is_lt(i++, 3) ) {         gsymbols.dividend_raw.push( [-4, -2, -1, 1, 2, 4].ctns_rand() );     }          i=0;     gsymbols.divisor_raw = [ [1, 2, 4].ctns_rand() ];     while ( is_lt(i++, 1) ) {         gsymbols.divisor_raw.push( [-4, -2, -1, 1, 2, 4].ctns_rand() );     }      /*     gsymbols.dividend_raw = [ 4, -4, 4, 1];     gsymbols.divisor_raw = [2, 2];     */                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3755_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3755_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3755'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3755_SlideNo_1',                ablock           = '#answerblock_3755_SlideNo_1',                acblock          = '#answercommentaryblock_3755_SlideNo_1',                                grblock          = 'graphicblock_3755_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3755_SlideNo_1',                grblock_A        = 'graphicblock_A_3755_SlideNo_1',                grblock_B        = 'graphicblock_B_3755_SlideNo_1',                grblock_C        = 'graphicblock_C_3755_SlideNo_1',                grblock_D        = 'graphicblock_D_3755_SlideNo_1',                                grblock_f        = (typeof tml_3755_SlideNo_1   !== 'undefined') ? tml_3755_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_3755_SlideNo_1 !== 'undefined') ? tml_Q_3755_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_3755_SlideNo_1 !== 'undefined') ? tml_A_3755_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_3755_SlideNo_1 !== 'undefined') ? tml_B_3755_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_3755_SlideNo_1 !== 'undefined') ? tml_C_3755_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_3755_SlideNo_1 !== 'undefined') ? tml_D_3755_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_3755',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3755_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3755'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:3em;margin-bottom:3em;",             title:"original problem",              useSteps:true,              steps:0,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});                      gsymbols.problem = "\\frac{%s}{%s}".ctns_format([         gsymbols.tab.dividend.join("+").ctns_equation(),          gsymbols.tab.divisor.join("+").ctns_equation()]);              gsymbols.dividend = gsymbols.tab.dividend.join("+").ctns_equation();     gsymbols.divisor = gsymbols.tab.divisor.join("+").ctns_equation();      gsymbols.dividendDegree = gsymbols.tab.dividend.length - 1;     gsymbols.divisorDegree = gsymbols.tab.divisor.length - 1;          gsymbols.dividendHighestDegree = gsymbols.tab.dividend[0];     gsymbols.divisorHighestDegree = gsymbols.tab.divisor[0];      q.push(' Consider a rational function  $| f(x) = ${problem} |$  where the degree of the dividend ($$ \\small ${dividendDegree} $$) is greater than or equal to  the degree of the divisor ($$ \\small ${divisorDegree} $$). ');      q.push(' <hr> The function $$f$$ can be reduced because the degree of the dividend is greater than or equal to the degree of the divisor,  $| \\small ${dividendDegree} &gt; \\small ${divisorDegree}. |$ ');      q.push(' <hr> ');      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3755_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_3755_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3755'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3755_SlideNo_2',                ablock           = '#answerblock_3755_SlideNo_2',                acblock          = '#answercommentaryblock_3755_SlideNo_2',                                grblock          = 'graphicblock_3755_SlideNo_2',                grblock_Q        = 'graphicblock_Q_3755_SlideNo_2',                grblock_A        = 'graphicblock_A_3755_SlideNo_2',                grblock_B        = 'graphicblock_B_3755_SlideNo_2',                grblock_C        = 'graphicblock_C_3755_SlideNo_2',                grblock_D        = 'graphicblock_D_3755_SlideNo_2',                                grblock_f        = (typeof tml_3755_SlideNo_2   !== 'undefined') ? tml_3755_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_3755_SlideNo_2 !== 'undefined') ? tml_Q_3755_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_3755_SlideNo_2 !== 'undefined') ? tml_A_3755_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_3755_SlideNo_2 !== 'undefined') ? tml_B_3755_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_3755_SlideNo_2 !== 'undefined') ? tml_C_3755_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_3755_SlideNo_2 !== 'undefined') ? tml_D_3755_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_3755',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3755_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_3755'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             q.push(' Begin reducing the function $$f$$ by writing the dividend and the divisor, $| ${problem}, |$ into long-division form, as shown below. ');      /*q.push('<br/><br/><em style="color:red">'+gsymbols.tab.title+'</em>');*/      q.push(gsymbols.tab.q);      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3755_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_3755_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3755'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3755_SlideNo_3',                ablock           = '#answerblock_3755_SlideNo_3',                acblock          = '#answercommentaryblock_3755_SlideNo_3',                                grblock          = 'graphicblock_3755_SlideNo_3',                grblock_Q        = 'graphicblock_Q_3755_SlideNo_3',                grblock_A        = 'graphicblock_A_3755_SlideNo_3',                grblock_B        = 'graphicblock_B_3755_SlideNo_3',                grblock_C        = 'graphicblock_C_3755_SlideNo_3',                grblock_D        = 'graphicblock_D_3755_SlideNo_3',                                grblock_f        = (typeof tml_3755_SlideNo_3   !== 'undefined') ? tml_3755_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_3755_SlideNo_3 !== 'undefined') ? tml_Q_3755_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_3755_SlideNo_3 !== 'undefined') ? tml_A_3755_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_3755_SlideNo_3 !== 'undefined') ? tml_B_3755_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_3755_SlideNo_3 !== 'undefined') ? tml_C_3755_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_3755_SlideNo_3 !== 'undefined') ? tml_D_3755_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_3755',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3755_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_3755'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             q.push(' <hr>Order the terms from highest to lowest according to their degrees. If any term has a zero coefficient, then use zero as a placeholder for that term. ');      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3755_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_3755_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3755'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3755_SlideNo_4',                ablock           = '#answerblock_3755_SlideNo_4',                acblock          = '#answercommentaryblock_3755_SlideNo_4',                                grblock          = 'graphicblock_3755_SlideNo_4',                grblock_Q        = 'graphicblock_Q_3755_SlideNo_4',                grblock_A        = 'graphicblock_A_3755_SlideNo_4',                grblock_B        = 'graphicblock_B_3755_SlideNo_4',                grblock_C        = 'graphicblock_C_3755_SlideNo_4',                grblock_D        = 'graphicblock_D_3755_SlideNo_4',                                grblock_f        = (typeof tml_3755_SlideNo_4   !== 'undefined') ? tml_3755_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_3755_SlideNo_4 !== 'undefined') ? tml_Q_3755_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_3755_SlideNo_4 !== 'undefined') ? tml_A_3755_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_3755_SlideNo_4 !== 'undefined') ? tml_B_3755_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_3755_SlideNo_4 !== 'undefined') ? tml_C_3755_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_3755_SlideNo_4 !== 'undefined') ? tml_D_3755_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_3755',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3755_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_3755'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;",             title:"step 1",              useSteps:true,              steps:1,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});          gsymbols.problem = "\\frac{%s}{%s}".ctns_format([         gsymbols.tab.dividend.join("+").ctns_equation(),          gsymbols.tab.divisor.join("+").ctns_equation()]);              gsymbols.leadDividend = gsymbols.tab.dividend[0];     gsymbols.leadDivisor = gsymbols.tab.divisor[0];     gsymbols.leadQuotient = gsymbols.tab.quotient[0];          q.push(' <hr> <strong>(Step 1)</strong> Divide the leading term of the dividend by the leading term of the divisor,   $| \\frac{ ${leadDividend} }{${leadDivisor} } = \\color{red}{${leadQuotient}}\\color{black}{.} |$  Place this quotient into its quotient position in the long-division form, as shown below.  ');      /*q.push('<br/><br/><em style="color:red">'+gsymbols.tab.title+'</em>');*/      q.push(gsymbols.tab.q);      q.push(' <hr> Be sure to line up terms with like-degrees in the quotient. ');      q.push(' <hr> ');      gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;",             title:"step 2",              useSteps:true,              steps:2,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});          gsymbols.divisor = gsymbols.tab.divisor.join("+").ctns_equation();     gsymbols.leadQuotient = gsymbols.tab.quotient[0];     gsymbols.subtrahend = gsymbols.tab.subtrahend.join("+").ctns_equation();      q.push(' <strong>(Step 2)</strong> Multiply  this quotient term by the divisor to obtain the product, $| \\small {(${leadQuotient}) \\cdot (${divisor}) = \\color{red}{${subtrahend}} }, |$ ');      q.push(' and then place this product into the long division form below the dividend,  as shown below.  ');      gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;",             title:"step 2",              useSteps:true,              steps:2,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});          /*q.push('<br/><br/><em style="color:red">'+gsymbols.tab.title+'</em>');*/      q.push(gsymbols.tab.q);      q.push(' <hr> Again, be sure to line up terms with like-degrees in the quotient. ');      q.push(' <hr> ');      gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;",             title:"step 3",              useSteps:true,              steps:3,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});          gsymbols.remainder = gsymbols.tab.remainder.join("+").ctns_equation();      q.push(' <strong>(Step 3)</strong> Subtract the product (subtrahend) from the dividend (minuend) to get the remainder (difference), $| \\color{red}{${remainder}}\\color{black}{.}|$ See the long-division form below. ');      /*q.push('<br/><br/><em style="color:red">'+gsymbols.tab.title+'</em>');*/      q.push(gsymbols.tab.q);      q.push(' The remainder is the NEW dividend.   <hr> Repeat Step 1 through Step 3 until the degree of the leading term of the dividend is less than the degree of the leading term of the divisor. ');      q.push(' <hr> ');      q.push(' Repeating Steps 1 through 3 yields the final long-division form below. ');      gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;",             title:"All steps",              useSteps:false,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});          /*q.push('<br/><br/><em style="color:red">'+gsymbols.tab.title+'</em>');*/      q.push(gsymbols.tab.q);      gsymbols.quotient = gsymbols.tab.quotient.join("+").ctns_equation();      gsymbols.reduced_remainder = gsymbols.tab.reduced_remainder;      gsymbols.reduced = gsymbols.tab.reduced;          if (gsymbols.tab.is_remainder === "true") {          q.push(' <hr> Because there is a final remainder in this example, the reduced equation equals the quotient, $| ${quotient}, |$ plus the remainder divided by the dividend, $| ${reduced_remainder}, |$ which yields the final the result, $| ${reduced}. |$ ');      } else {          q.push(' <hr> Because there is no final remainder in this example, the reduced equation is simply the quotient,  $| ${reduced}. |$ ');      }          $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};