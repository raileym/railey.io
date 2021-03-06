
  CTNS.QUIZ_SET["e26ff501824ed4a355653a4ce3504d04"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3464 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3464';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3464', 5);
	
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

	jQuery(".slide_3464").each( function() {do_center(this)} );

    do_force('3464');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         5,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '3464',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Examples of a binomial with varying symbols, degrees, and coefficients.     ",
    sponsor: "",
    figure: "",
    key: "trinomialD1-1a",
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
{
    slideNo: 1,
    factoryid: '3464',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Examples of a binomial with varying symbols, degrees, and coefficients.     ",
    sponsor: "",
    figure: "",
    key: "trinomialD1-1",
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
{
    slideNo: 2,
    factoryid: '3464',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Examples of a binomial with varying symbols, degrees, and coefficients.     ",
    sponsor: "",
    figure: "",
    key: "trinomialD1-2a",
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
{
    slideNo: 3,
    factoryid: '3464',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "trinomialS1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: " A <strong>trinomial</strong> is a polynomial with three terms.     ",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: " Trinomial     ",
    backSpeak: " A  trinomial  is a polynomial with three terms.     ",
    frontSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone'></i>",
    backSpeakIcon: "<i style='font-size:24px;' class='fas fa-microphone'></i>",
    front: " Trinomial     ",
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
    backStyle: "width:70%;font-size:100%;",
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
    slideNo: 4,
    factoryid: '3464',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Examples of a binomial with varying symbols, degrees, and coefficients.     ",
    sponsor: "",
    figure: "",
    key: "trinomialD1-2",
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
CTNS.NUMBERS.GID = 'quiz_3464';
CTNS.NUMBERS.equations['quiz_3464'] = [];
CTNS.NUMBERS.symbols['quiz_3464'] = CTNS.NUMBERS.symbols['quiz_3464'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3464_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3464_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3464'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3464_SlideNo_0',                ablock           = '#answerblock_3464_SlideNo_0',                acblock          = '#answercommentaryblock_3464_SlideNo_0',                                grblock          = 'graphicblock_3464_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3464_SlideNo_0',                grblock_A        = 'graphicblock_A_3464_SlideNo_0',                grblock_B        = 'graphicblock_B_3464_SlideNo_0',                grblock_C        = 'graphicblock_C_3464_SlideNo_0',                grblock_D        = 'graphicblock_D_3464_SlideNo_0',                                grblock_f        = (typeof tml_3464_SlideNo_0   !== 'undefined') ? tml_3464_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3464_SlideNo_0 !== 'undefined') ? tml_Q_3464_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3464_SlideNo_0 !== 'undefined') ? tml_A_3464_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3464_SlideNo_0 !== 'undefined') ? tml_B_3464_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3464_SlideNo_0 !== 'undefined') ? tml_C_3464_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3464_SlideNo_0 !== 'undefined') ? tml_D_3464_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3464',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3464_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3464'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  var var_list_choices = [                 ['x'],                 ['w'],                 ['p'],                 ['m'],                 ['a']             ];          var var_list = var_list_choices.ctns_rand(),             degree = [2].ctns_rand(),             tm,             terms = [],             max_term,             max_coef,                         polynomial;                      tm = term( {degree:degree, vars:var_list, coef_type:natural} );                  symbols.max_term = tm['term'];         symbols.max_coef = tm['coef'];                  terms.push( symbols.max_term );          degree--;         while( is_gte(degree, 0) && is_lt(terms.length, 3) ) {             terms.push( term( {degree:degree, vars:var_list, coef_type:natural} )['term'] );             degree --;/*= (1 + whole() % degree);*/         }                  symbols.poly = terms.join('+').ctns_equation();                      q.push(' $| ${poly}. |$         ');                   $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                  [grblock_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols);                    });            [grblock,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3464_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3464_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3464'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3464_SlideNo_1',                ablock           = '#answerblock_3464_SlideNo_1',                acblock          = '#answercommentaryblock_3464_SlideNo_1',                                grblock          = 'graphicblock_3464_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3464_SlideNo_1',                grblock_A        = 'graphicblock_A_3464_SlideNo_1',                grblock_B        = 'graphicblock_B_3464_SlideNo_1',                grblock_C        = 'graphicblock_C_3464_SlideNo_1',                grblock_D        = 'graphicblock_D_3464_SlideNo_1',                                grblock_f        = (typeof tml_3464_SlideNo_1   !== 'undefined') ? tml_3464_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_3464_SlideNo_1 !== 'undefined') ? tml_Q_3464_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_3464_SlideNo_1 !== 'undefined') ? tml_A_3464_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_3464_SlideNo_1 !== 'undefined') ? tml_B_3464_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_3464_SlideNo_1 !== 'undefined') ? tml_C_3464_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_3464_SlideNo_1 !== 'undefined') ? tml_D_3464_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_3464',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3464_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3464'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  var var_list_choices = [                 ['x'],                 ['w'],                 ['p'],                 ['m'],                 ['a']             ];          var var_list = var_list_choices.ctns_rand(),             degree = [2].ctns_rand(),             tm,             terms = [],             max_term,             max_coef,                         polynomial;                      tm = term( {degree:degree, vars:var_list, coef_type:natural} );                  symbols.max_term = tm['term'];         symbols.max_coef = tm['coef'];                  terms.push( symbols.max_term );          degree--;         while( is_gte(degree, 0) && is_lt(terms.length, 3) ) {             terms.push( term( {degree:degree, vars:var_list, coef_type:natural} )['term'] );             degree --;/*= (1 + whole() % degree);*/         }                  symbols.poly = terms.join('+').ctns_equation();                      q.push(' $| ${poly} |$         ');                   $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                  [grblock_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols);                    });            [grblock,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3464_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_3464_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3464'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3464_SlideNo_2',                ablock           = '#answerblock_3464_SlideNo_2',                acblock          = '#answercommentaryblock_3464_SlideNo_2',                                grblock          = 'graphicblock_3464_SlideNo_2',                grblock_Q        = 'graphicblock_Q_3464_SlideNo_2',                grblock_A        = 'graphicblock_A_3464_SlideNo_2',                grblock_B        = 'graphicblock_B_3464_SlideNo_2',                grblock_C        = 'graphicblock_C_3464_SlideNo_2',                grblock_D        = 'graphicblock_D_3464_SlideNo_2',                                grblock_f        = (typeof tml_3464_SlideNo_2   !== 'undefined') ? tml_3464_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_3464_SlideNo_2 !== 'undefined') ? tml_Q_3464_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_3464_SlideNo_2 !== 'undefined') ? tml_A_3464_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_3464_SlideNo_2 !== 'undefined') ? tml_B_3464_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_3464_SlideNo_2 !== 'undefined') ? tml_C_3464_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_3464_SlideNo_2 !== 'undefined') ? tml_D_3464_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_3464',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3464_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_3464'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  var var_list_choices = [                 ['x', 'y', 'z'],                 ['w', 'x', 'y', 'z'],                 ['p', 'q', 'r'],                 ['m', 'n'],                 ['a', 'b', 'c']             ];          var var_list = var_list_choices.ctns_rand(),             degree = [2, 3, 4, 5].ctns_rand(),             tm,             terms = [],             max_term,             max_coef,                         polynomial;                      tm = term( {degree:degree, vars:var_list, coef_type:natural} );                  symbols.max_term = tm['term'];         symbols.max_coef = tm['coef'];                  terms.push( symbols.max_term );          degree--;         while( is_gte(degree, 0) && is_lt(terms.length, 3) ) {             terms.push( term( {degree:degree, vars:var_list, coef_type:natural} )['term'] );             degree --;/*= (1 + whole() % degree);*/         }                  symbols.poly = terms.join('+').ctns_equation();                      q.push(' $| ${poly}. |$         ');                   $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                  [grblock_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols);                    });            [grblock,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3464_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_3464_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3464'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3464_SlideNo_4',                ablock           = '#answerblock_3464_SlideNo_4',                acblock          = '#answercommentaryblock_3464_SlideNo_4',                                grblock          = 'graphicblock_3464_SlideNo_4',                grblock_Q        = 'graphicblock_Q_3464_SlideNo_4',                grblock_A        = 'graphicblock_A_3464_SlideNo_4',                grblock_B        = 'graphicblock_B_3464_SlideNo_4',                grblock_C        = 'graphicblock_C_3464_SlideNo_4',                grblock_D        = 'graphicblock_D_3464_SlideNo_4',                                grblock_f        = (typeof tml_3464_SlideNo_4   !== 'undefined') ? tml_3464_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_3464_SlideNo_4 !== 'undefined') ? tml_Q_3464_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_3464_SlideNo_4 !== 'undefined') ? tml_A_3464_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_3464_SlideNo_4 !== 'undefined') ? tml_B_3464_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_3464_SlideNo_4 !== 'undefined') ? tml_C_3464_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_3464_SlideNo_4 !== 'undefined') ? tml_D_3464_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_3464',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3464_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_3464'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  var var_list_choices = [                 ['x', 'y', 'z'],                 ['w', 'x', 'y', 'z'],                 ['p', 'q', 'r'],                 ['m', 'n'],                 ['a', 'b', 'c']             ];          var var_list = var_list_choices.ctns_rand(),             degree = [2, 3, 4, 5].ctns_rand(),             tm,             terms = [],             max_term,             max_coef,                         polynomial;                      tm = term( {degree:degree, vars:var_list, coef_type:natural} );                  symbols.max_term = tm['term'];         symbols.max_coef = tm['coef'];                  terms.push( symbols.max_term );          degree--;         while( is_gte(degree, 0) && is_lt(terms.length, 3) ) {             terms.push( term( {degree:degree, vars:var_list, coef_type:natural} )['term'] );             degree --;/*= (1 + whole() % degree);*/         }                  symbols.poly = terms.join('+').ctns_equation();                      q.push(' $| ${poly} |$         ');                   $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                  [grblock_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols);                    });            [grblock,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};