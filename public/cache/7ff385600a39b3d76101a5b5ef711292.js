
  CTNS.QUIZ_SET["7ff385600a39b3d76101a5b5ef711292"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3414 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3414';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3414', 6);
	
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

	jQuery(".slide_3414").each( function() {do_center(this)} );

    do_force('3414');
    
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
    factoryid: '3414',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "convertQ1-1",
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
    factoryid: '3414',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "convertQ1-2",
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
    factoryid: '3414',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "convertQ2-1",
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
    factoryid: '3414',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "convertQ2-2",
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
    slideNo: 4,
    factoryid: '3414',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "convertQ3-1",
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
    slideNo: 5,
    factoryid: '3414',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "convertQ3-2",
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
CTNS.NUMBERS.GID = 'quiz_3414';
CTNS.NUMBERS.equations['quiz_3414'] = [];
CTNS.NUMBERS.symbols['quiz_3414'] = CTNS.NUMBERS.symbols['quiz_3414'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3414_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3414_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3414'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3414_SlideNo_0',                ablock           = '#answerblock_3414_SlideNo_0',                acblock          = '#answercommentaryblock_3414_SlideNo_0',                                rightblock       = '#rightblock_3414_SlideNo_0',                wrongblock       = '#wrongblock_3414_SlideNo_0',                undecidedblock   = '#undecidedblock_3414_SlideNo_0',                grblock          = 'graphicblock_3414_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3414_SlideNo_0',                grblock_A        = 'graphicblock_A_3414_SlideNo_0',                grblock_B        = 'graphicblock_B_3414_SlideNo_0',                grblock_C        = 'graphicblock_C_3414_SlideNo_0',                grblock_D        = 'graphicblock_D_3414_SlideNo_0',                grblock_E        = 'graphicblock_E_3414_SlideNo_0',                grblock_F        = 'graphicblock_F_3414_SlideNo_0',                                grblock_f        = (typeof tml_3414_SlideNo_0   !== 'undefined') ? tml_3414_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3414_SlideNo_0 !== 'undefined') ? tml_Q_3414_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3414_SlideNo_0 !== 'undefined') ? tml_A_3414_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3414_SlideNo_0 !== 'undefined') ? tml_B_3414_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3414_SlideNo_0 !== 'undefined') ? tml_C_3414_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3414_SlideNo_0 !== 'undefined') ? tml_D_3414_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_3414_SlideNo_0 !== 'undefined') ? tml_E_3414_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_3414_SlideNo_0 !== 'undefined') ? tml_F_3414_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3414',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3414_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3414'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.A = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.B = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.C = [-3, -2, -1, 1, 2, 3].ctns_rand();          symbols.x  = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.y  = (symbols.C-symbols.A*symbols.x)/symbols.B;         symbols.x_ = symbols.x;         symbols.y_ = d2f( symbols.y );                                  symbols.m  = -1*symbols.A/symbols.B;         symbols.m_ = d2f( -1*symbols.A/symbols.B );                  symbols.generalEQ = "%s x + %s y = %s".ctns_format([symbols.A, symbols.B, symbols.C]).ctns_equation();         symbols.pointSlopeEQ = "y - %s = %s ( x - %s )".ctns_format([symbols.y_, symbols.m_, symbols.x_]).ctns_equation();                  symbols.q_pointSlopeEQ = colorized.ctns_format(["transparent", symbols.pointSlopeEQ]);         symbols.a_pointSlopeEQ = colorized.ctns_format(["blue", symbols.pointSlopeEQ]);                  symbols.q_y = colorized.ctns_format(["transparent", symbols.y_]);         symbols.q_x = colorized.ctns_format(["transparent", symbols.x_]);         symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);          symbols.a_y = colorized.ctns_format(["blue", symbols.y_]);         symbols.a_x = colorized.ctns_format(["blue", symbols.x_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);                  q.push(' Convert from General Form<br><br>  $$ ${generalEQ} $$<br><br> to Point-Slope Form using point $$( ${x_}, ${y_} ) $$<br><br> $$y - \\boxed { ${q_y} } = \\boxed { ${q_m} } \\cdot ( x - \\boxed { ${q_x} } )$$<br><br> $$ \\boxed{ ${q_pointSlopeEQ} }.$$  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3414_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3414_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3414'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3414_SlideNo_1',                ablock           = '#answerblock_3414_SlideNo_1',                acblock          = '#answercommentaryblock_3414_SlideNo_1',                                rightblock       = '#rightblock_3414_SlideNo_1',                wrongblock       = '#wrongblock_3414_SlideNo_1',                undecidedblock   = '#undecidedblock_3414_SlideNo_1',                grblock          = 'graphicblock_3414_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3414_SlideNo_1',                grblock_A        = 'graphicblock_A_3414_SlideNo_1',                grblock_B        = 'graphicblock_B_3414_SlideNo_1',                grblock_C        = 'graphicblock_C_3414_SlideNo_1',                grblock_D        = 'graphicblock_D_3414_SlideNo_1',                grblock_E        = 'graphicblock_E_3414_SlideNo_1',                grblock_F        = 'graphicblock_F_3414_SlideNo_1',                                grblock_f        = (typeof tml_3414_SlideNo_1   !== 'undefined') ? tml_3414_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_3414_SlideNo_1 !== 'undefined') ? tml_Q_3414_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_3414_SlideNo_1 !== 'undefined') ? tml_A_3414_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_3414_SlideNo_1 !== 'undefined') ? tml_B_3414_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_3414_SlideNo_1 !== 'undefined') ? tml_C_3414_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_3414_SlideNo_1 !== 'undefined') ? tml_D_3414_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_3414_SlideNo_1 !== 'undefined') ? tml_E_3414_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_3414_SlideNo_1 !== 'undefined') ? tml_F_3414_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_3414',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3414_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3414'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.A = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.B = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.C = [    -2, -1, 1, 2   ].ctns_rand() * symbols.B; /* Treat C as multiple of B */          symbols.b  = symbols.C/symbols.B;         symbols.b_ = d2f( symbols.b );                                  symbols.m  = -1*symbols.A/symbols.B;         symbols.m_ = d2f( -1*symbols.A/symbols.B );                  symbols.generalEQ        = "%s x + %s y = %s".ctns_format([symbols.A, symbols.B, symbols.C]).ctns_equation();         symbols.slopeInterceptEQ = "y = %s x + %s".ctns_format([symbols.m_, symbols.b_]).ctns_equation();                  symbols.q_slopeInterceptEQ = colorized.ctns_format(["transparent", symbols.slopeInterceptEQ]);         symbols.a_slopeInterceptEQ = colorized.ctns_format(["blue", symbols.slopeInterceptEQ]);                  symbols.q_b = colorized.ctns_format(["transparent", symbols.b_]);         symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);          symbols.a_b = colorized.ctns_format(["blue", symbols.b_]);         symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);                  q.push(' Convert from General Form<br><br>  $$ ${generalEQ} $$<br><br> to Slope-Intercept Form<br><br> $$y = \\boxed { ${q_m} } \\cdot x + \\boxed { ${q_b} }$$<br><br> $$ \\boxed{ ${q_slopeInterceptEQ} }.$$  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3414_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_3414_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3414'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3414_SlideNo_2',                ablock           = '#answerblock_3414_SlideNo_2',                acblock          = '#answercommentaryblock_3414_SlideNo_2',                                rightblock       = '#rightblock_3414_SlideNo_2',                wrongblock       = '#wrongblock_3414_SlideNo_2',                undecidedblock   = '#undecidedblock_3414_SlideNo_2',                grblock          = 'graphicblock_3414_SlideNo_2',                grblock_Q        = 'graphicblock_Q_3414_SlideNo_2',                grblock_A        = 'graphicblock_A_3414_SlideNo_2',                grblock_B        = 'graphicblock_B_3414_SlideNo_2',                grblock_C        = 'graphicblock_C_3414_SlideNo_2',                grblock_D        = 'graphicblock_D_3414_SlideNo_2',                grblock_E        = 'graphicblock_E_3414_SlideNo_2',                grblock_F        = 'graphicblock_F_3414_SlideNo_2',                                grblock_f        = (typeof tml_3414_SlideNo_2   !== 'undefined') ? tml_3414_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_3414_SlideNo_2 !== 'undefined') ? tml_Q_3414_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_3414_SlideNo_2 !== 'undefined') ? tml_A_3414_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_3414_SlideNo_2 !== 'undefined') ? tml_B_3414_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_3414_SlideNo_2 !== 'undefined') ? tml_C_3414_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_3414_SlideNo_2 !== 'undefined') ? tml_D_3414_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_3414_SlideNo_2 !== 'undefined') ? tml_E_3414_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_3414_SlideNo_2 !== 'undefined') ? tml_F_3414_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_3414',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3414_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_3414'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.A = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.B = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.C = [-3, -2, -1, 1, 2, 3].ctns_rand();          symbols.x  = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.y  = (symbols.C-symbols.A*symbols.x)/symbols.B;         symbols.x_ = symbols.x;         symbols.y_ = d2f( symbols.y );                                  symbols.m  = -1*symbols.A/symbols.B;         symbols.m_ = d2f( -1*symbols.A/symbols.B );                  symbols.generalEQ = "%s x + %s y = %s".ctns_format([symbols.A, symbols.B, symbols.C]).ctns_equation();         symbols.pointSlopeEQ = "y - %s = %s ( x - %s )".ctns_format([symbols.y_, symbols.m_, symbols.x_]).ctns_equation();                  symbols.q_generalEQ = colorized.ctns_format(["transparent", symbols.generalEQ]);         symbols.a_generalEQ = colorized.ctns_format(["blue", symbols.generalEQ]);                  symbols.q_A = colorized.ctns_format(["transparent", symbols.A]);         symbols.q_B = colorized.ctns_format(["transparent", symbols.B]);         symbols.q_C = colorized.ctns_format(["transparent", symbols.C]);          symbols.a_A = colorized.ctns_format(["blue", symbols.A]);         symbols.a_B = colorized.ctns_format(["blue", symbols.B]);         symbols.a_C = colorized.ctns_format(["blue", symbols.C]);          q.push(' Convert from Point Slope Form<br><br>  $$ ${pointSlopeEQ} $$<br><br> to General Form<br><br> $$ \\boxed{ ${q_A} } \\cdot x + \\boxed{ ${q_B} } \\cdot y = \\boxed{ ${q_C} } $$<br><br> $$ \\boxed{ ${q_generalEQ} }.$$  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3414_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_3414_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3414'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3414_SlideNo_3',                ablock           = '#answerblock_3414_SlideNo_3',                acblock          = '#answercommentaryblock_3414_SlideNo_3',                                rightblock       = '#rightblock_3414_SlideNo_3',                wrongblock       = '#wrongblock_3414_SlideNo_3',                undecidedblock   = '#undecidedblock_3414_SlideNo_3',                grblock          = 'graphicblock_3414_SlideNo_3',                grblock_Q        = 'graphicblock_Q_3414_SlideNo_3',                grblock_A        = 'graphicblock_A_3414_SlideNo_3',                grblock_B        = 'graphicblock_B_3414_SlideNo_3',                grblock_C        = 'graphicblock_C_3414_SlideNo_3',                grblock_D        = 'graphicblock_D_3414_SlideNo_3',                grblock_E        = 'graphicblock_E_3414_SlideNo_3',                grblock_F        = 'graphicblock_F_3414_SlideNo_3',                                grblock_f        = (typeof tml_3414_SlideNo_3   !== 'undefined') ? tml_3414_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_3414_SlideNo_3 !== 'undefined') ? tml_Q_3414_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_3414_SlideNo_3 !== 'undefined') ? tml_A_3414_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_3414_SlideNo_3 !== 'undefined') ? tml_B_3414_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_3414_SlideNo_3 !== 'undefined') ? tml_C_3414_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_3414_SlideNo_3 !== 'undefined') ? tml_D_3414_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_3414_SlideNo_3 !== 'undefined') ? tml_E_3414_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_3414_SlideNo_3 !== 'undefined') ? tml_F_3414_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_3414',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3414_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_3414'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = [-3, -2, -1, 1, 2, 3].ctns_rand();          symbols.x  = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.y  = symbols.x * symbols.m + symbols.b;         symbols.x_ = symbols.x;         symbols.y_ = d2f( symbols.y );                                  symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );                  symbols.slopeInterceptEQ = "y = %s x + %s".ctns_format([symbols.m_, symbols.b_]).ctns_equation();         symbols.pointSlopeEQ     = "y - %s = %s ( x - %s )".ctns_format([symbols.y_, symbols.m_, symbols.x_]).ctns_equation();                  symbols.q_slopeInterceptEQ = colorized.ctns_format(["transparent", symbols.slopeInterceptEQ]);         symbols.a_slopeInterceptEQ = colorized.ctns_format(["blue", symbols.slopeInterceptEQ]);                  symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.q_b = colorized.ctns_format(["transparent", symbols.b_]);          symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);         symbols.a_b = colorized.ctns_format(["blue", symbols.b_]);          q.push(' Convert from Point Slope Form<br><br>  $$ ${pointSlopeEQ} $$<br><br> to Slope-Intercept Form<br><br> $$ y = \\boxed{ ${q_m} } \\cdot x + \\boxed{ ${q_b} }$$<br><br> $$ \\boxed{ ${q_slopeInterceptEQ} }.$$  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3414_SlideNo_4'] = CTNS.NUMBERS.symbols['new_scriptblock_3414_SlideNo_4'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3414'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3414_SlideNo_4',                ablock           = '#answerblock_3414_SlideNo_4',                acblock          = '#answercommentaryblock_3414_SlideNo_4',                                rightblock       = '#rightblock_3414_SlideNo_4',                wrongblock       = '#wrongblock_3414_SlideNo_4',                undecidedblock   = '#undecidedblock_3414_SlideNo_4',                grblock          = 'graphicblock_3414_SlideNo_4',                grblock_Q        = 'graphicblock_Q_3414_SlideNo_4',                grblock_A        = 'graphicblock_A_3414_SlideNo_4',                grblock_B        = 'graphicblock_B_3414_SlideNo_4',                grblock_C        = 'graphicblock_C_3414_SlideNo_4',                grblock_D        = 'graphicblock_D_3414_SlideNo_4',                grblock_E        = 'graphicblock_E_3414_SlideNo_4',                grblock_F        = 'graphicblock_F_3414_SlideNo_4',                                grblock_f        = (typeof tml_3414_SlideNo_4   !== 'undefined') ? tml_3414_SlideNo_4   : null,                grblock_Q_f      = (typeof tml_Q_3414_SlideNo_4 !== 'undefined') ? tml_Q_3414_SlideNo_4 : null,                grblock_A_f      = (typeof tml_A_3414_SlideNo_4 !== 'undefined') ? tml_A_3414_SlideNo_4 : null,                grblock_B_f      = (typeof tml_B_3414_SlideNo_4 !== 'undefined') ? tml_B_3414_SlideNo_4 : null,                grblock_C_f      = (typeof tml_C_3414_SlideNo_4 !== 'undefined') ? tml_C_3414_SlideNo_4 : null,                grblock_D_f      = (typeof tml_D_3414_SlideNo_4 !== 'undefined') ? tml_D_3414_SlideNo_4 : null,                grblock_E_f      = (typeof tml_E_3414_SlideNo_4 !== 'undefined') ? tml_E_3414_SlideNo_4 : null,                grblock_F_f      = (typeof tml_F_3414_SlideNo_4 !== 'undefined') ? tml_F_3414_SlideNo_4 : null,                numbers          = NUMBERS,                gid              = 'quiz_3414',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3414_SlideNo_4'],                gsymbols         = NUMBERS.symbols['quiz_3414'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = [-3, -2, -1, 1, 2, 3].ctns_rand();          symbols.x  = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.y  = symbols.x * symbols.m + symbols.b;         symbols.x_ = symbols.x;         symbols.y_ = d2f( symbols.y );                                  symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );                  symbols.slopeInterceptEQ = "y = %s x + %s".ctns_format([symbols.m_, symbols.b_]).ctns_equation();         symbols.pointSlopeEQ     = "y - %s = %s ( x - %s )".ctns_format([symbols.y_, symbols.m_, symbols.x_]).ctns_equation();                  symbols.q_pointSlopeEQ = colorized.ctns_format(["transparent", symbols.pointSlopeEQ]);         symbols.a_pointSlopeEQ = colorized.ctns_format(["blue", symbols.pointSlopeEQ]);                  symbols.q_m = colorized.ctns_format(["transparent", symbols.m_]);         symbols.q_x = colorized.ctns_format(["transparent", symbols.x_]);         symbols.q_y = colorized.ctns_format(["transparent", symbols.y_]);          symbols.a_m = colorized.ctns_format(["blue", symbols.m_]);         symbols.a_x = colorized.ctns_format(["blue", symbols.x_]);         symbols.a_y = colorized.ctns_format(["blue", symbols.y_]);          q.push(' Convert from Slope Intercept Form<br><br>  $$ ${slopeInterceptEQ} $$<br><br> to Point-Slope Form using point $$( ${x_}, ${y_} )$$<br><br> $$ y - \\boxed{ ${q_y} } = \\boxed{ ${q_m} } ( x - \\boxed{ ${q_x} } )$$<br><br> $$ \\boxed{ ${q_pointSlopeEQ} }.$$  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3414_SlideNo_5'] = CTNS.NUMBERS.symbols['new_scriptblock_3414_SlideNo_5'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3414'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3414_SlideNo_5',                ablock           = '#answerblock_3414_SlideNo_5',                acblock          = '#answercommentaryblock_3414_SlideNo_5',                                rightblock       = '#rightblock_3414_SlideNo_5',                wrongblock       = '#wrongblock_3414_SlideNo_5',                undecidedblock   = '#undecidedblock_3414_SlideNo_5',                grblock          = 'graphicblock_3414_SlideNo_5',                grblock_Q        = 'graphicblock_Q_3414_SlideNo_5',                grblock_A        = 'graphicblock_A_3414_SlideNo_5',                grblock_B        = 'graphicblock_B_3414_SlideNo_5',                grblock_C        = 'graphicblock_C_3414_SlideNo_5',                grblock_D        = 'graphicblock_D_3414_SlideNo_5',                grblock_E        = 'graphicblock_E_3414_SlideNo_5',                grblock_F        = 'graphicblock_F_3414_SlideNo_5',                                grblock_f        = (typeof tml_3414_SlideNo_5   !== 'undefined') ? tml_3414_SlideNo_5   : null,                grblock_Q_f      = (typeof tml_Q_3414_SlideNo_5 !== 'undefined') ? tml_Q_3414_SlideNo_5 : null,                grblock_A_f      = (typeof tml_A_3414_SlideNo_5 !== 'undefined') ? tml_A_3414_SlideNo_5 : null,                grblock_B_f      = (typeof tml_B_3414_SlideNo_5 !== 'undefined') ? tml_B_3414_SlideNo_5 : null,                grblock_C_f      = (typeof tml_C_3414_SlideNo_5 !== 'undefined') ? tml_C_3414_SlideNo_5 : null,                grblock_D_f      = (typeof tml_D_3414_SlideNo_5 !== 'undefined') ? tml_D_3414_SlideNo_5 : null,                grblock_E_f      = (typeof tml_E_3414_SlideNo_5 !== 'undefined') ? tml_E_3414_SlideNo_5 : null,                grblock_F_f      = (typeof tml_F_3414_SlideNo_5 !== 'undefined') ? tml_F_3414_SlideNo_5 : null,                numbers          = NUMBERS,                gid              = 'quiz_3414',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3414_SlideNo_5'],                gsymbols         = NUMBERS.symbols['quiz_3414'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.A = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.B = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.C = [    -2, -1, 1, 2   ].ctns_rand() * symbols.B; /* Treat C as multiple of B */          symbols.A_ = symbols.A;         symbols.B_ = symbols.B;         symbols.C_ = symbols.C;                  symbols.b  = symbols.C/symbols.B;         symbols.b_ = d2f( symbols.b );                                  symbols.m  = -1*symbols.A/symbols.B;         symbols.m_ = d2f( -1*symbols.A/symbols.B );                                              symbols.slopeInterceptEQ = "y = %s x + %s".ctns_format([symbols.m_, symbols.b_]).ctns_equation();         symbols.generalEQ = "%s x + %s y = %s".ctns_format([symbols.A_, symbols.B_, symbols.C_]).ctns_equation();                  symbols.q_generalEQ = colorized.ctns_format(["transparent", symbols.generalEQ]);         symbols.a_generalEQ = colorized.ctns_format(["blue", symbols.generalEQ]);                  symbols.q_A = colorized.ctns_format(["transparent", symbols.A_]);         symbols.q_B = colorized.ctns_format(["transparent", symbols.B_]);         symbols.q_C = colorized.ctns_format(["transparent", symbols.C_]);          symbols.a_A = colorized.ctns_format(["blue", symbols.A_]);         symbols.a_B = colorized.ctns_format(["blue", symbols.B_]);         symbols.a_C = colorized.ctns_format(["blue", symbols.C_]);          q.push(' Convert from Slope Intercept Form<br><br>  $$ ${slopeInterceptEQ} $$<br><br> to General Form<br><br> $$ \\boxed{ ${q_A} } \\cdot x + \\boxed{ ${q_B} } \\cdot y = \\boxed{ ${q_C} } )$$<br><br> $$ \\boxed{ ${q_generalEQ} }.$$  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};