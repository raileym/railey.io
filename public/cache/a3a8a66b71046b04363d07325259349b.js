
  CTNS.QUIZ_SET["a3a8a66b71046b04363d07325259349b"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3460 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3460';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3460', 4);
	
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

	jQuery(".slide_3460").each( function() {do_center(this)} );

    do_force('3460');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         4,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '3460',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example demonstrates a linear function showing the y-intercept.     ",
    sponsor: "",
    figure: "",
    key: "alg-linear-1-ex",
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
    factoryid: '3460',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example demonstrates a linear function showing the x-intercept.     ",
    sponsor: "",
    figure: "",
    key: "alg-linear-2-ex",
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
    factoryid: '3460',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example illustrates (quickly) computing the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "alg-linear-3-ex",
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
    factoryid: '3460',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This example demonstrates a linear function with the x-intercept and y-intercept points marked.     ",
    sponsor: "",
    figure: "",
    key: "alg-linear-4-ex",
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
CTNS.NUMBERS.GID = 'quiz_3460';
CTNS.NUMBERS.equations['quiz_3460'] = [];
CTNS.NUMBERS.symbols['quiz_3460'] = CTNS.NUMBERS.symbols['quiz_3460'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3460_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3460_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3460'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3460_SlideNo_0',                ablock           = '#answerblock_3460_SlideNo_0',                acblock          = '#answercommentaryblock_3460_SlideNo_0',                                rightblock       = '#rightblock_3460_SlideNo_0',                wrongblock       = '#wrongblock_3460_SlideNo_0',                undecidedblock   = '#undecidedblock_3460_SlideNo_0',                speech_F         = ($('#speech_F_3460_SlideNo_0').length == 0) ? null : $('#speech_F_3460_SlideNo_0').html(),                speech_B         = ($('#speech_B_3460_SlideNo_0').length == 0) ? null : $('#speech_B_3460_SlideNo_0').html(),                speech_1         = ($('#speech_1_3460_SlideNo_0').length == 0) ? null : $('#speech_1_3460_SlideNo_0').html(),                speech_2         = ($('#speech_2_3460_SlideNo_0').length == 0) ? null : $('#speech_2_3460_SlideNo_0').html(),                speech_3         = ($('#speech_3_3460_SlideNo_0').length == 0) ? null : $('#speech_3_3460_SlideNo_0').html(),                speech_4         = ($('#speech_4_3460_SlideNo_0').length == 0) ? null : $('#speech_4_3460_SlideNo_0').html(),                speech_5         = ($('#speech_5_3460_SlideNo_0').length == 0) ? null : $('#speech_5_3460_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_3460_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_3460_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_3460_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_3460_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_3460_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_3460_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_3460_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_3460_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_3460_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_3460_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_3460_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_3460_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_3460_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_3460_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_3460_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_3460_SlideNo_0',                grblock          = 'graphicblock_3460_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3460_SlideNo_0',                grblock_A        = 'graphicblock_A_3460_SlideNo_0',                grblock_B        = 'graphicblock_B_3460_SlideNo_0',                grblock_C        = 'graphicblock_C_3460_SlideNo_0',                grblock_D        = 'graphicblock_D_3460_SlideNo_0',                grblock_E        = 'graphicblock_E_3460_SlideNo_0',                grblock_F        = 'graphicblock_F_3460_SlideNo_0',                                grblock_f        = (typeof tml_3460_SlideNo_0   !== 'undefined') ? tml_3460_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3460_SlideNo_0 !== 'undefined') ? tml_Q_3460_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3460_SlideNo_0 !== 'undefined') ? tml_A_3460_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3460_SlideNo_0 !== 'undefined') ? tml_B_3460_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3460_SlideNo_0 !== 'undefined') ? tml_C_3460_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3460_SlideNo_0 !== 'undefined') ? tml_D_3460_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_3460_SlideNo_0 !== 'undefined') ? tml_E_3460_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_3460_SlideNo_0 !== 'undefined') ? tml_F_3460_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3460',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3460_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3460'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  /* I am organizing the creation of points using a pair          * of random values. Yes, there are many ways to code          * this question. I am choosing to go this route as          * practice.          */         if ( [0, 1].ctns_rand() ) {              if ( [0, 1].ctns_rand() ) {                  /* Q1 line */                 symbols.x = [ 1,  2,  3,  4].ctns_rand();                 symbols.y = [ 1,  2,  3,  4].ctns_rand();              } else {                  /* Q2 line */                 symbols.x = [-1, -2, -3, -4].ctns_rand();                 symbols.y = [ 1,  2,  3,  4].ctns_rand();              }          } else {              if ( [0, 1].ctns_rand() ) {                  /* Q3 line */                 symbols.x = [-1, -2, -3, -4].ctns_rand();                 symbols.y = [-1, -2, -3, -4].ctns_rand();              } else {                  /* Q4 line */                 symbols.x = [ 1,  2,  3,  4].ctns_rand();                 symbols.y = [-1, -2, -3, -4].ctns_rand();              }          }                  symbols.q_x = colorized.ctns_format(['black', 0]);         symbols.q_y = colorized.ctns_format(['black', symbols.y]);          q.push(' The $$y$$-intercept is the point $$(0, ${q_y})$$. ');           q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3460_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3460_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3460'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3460_SlideNo_1',                ablock           = '#answerblock_3460_SlideNo_1',                acblock          = '#answercommentaryblock_3460_SlideNo_1',                                rightblock       = '#rightblock_3460_SlideNo_1',                wrongblock       = '#wrongblock_3460_SlideNo_1',                undecidedblock   = '#undecidedblock_3460_SlideNo_1',                speech_F         = ($('#speech_F_3460_SlideNo_1').length == 0) ? null : $('#speech_F_3460_SlideNo_1').html(),                speech_B         = ($('#speech_B_3460_SlideNo_1').length == 0) ? null : $('#speech_B_3460_SlideNo_1').html(),                speech_1         = ($('#speech_1_3460_SlideNo_1').length == 0) ? null : $('#speech_1_3460_SlideNo_1').html(),                speech_2         = ($('#speech_2_3460_SlideNo_1').length == 0) ? null : $('#speech_2_3460_SlideNo_1').html(),                speech_3         = ($('#speech_3_3460_SlideNo_1').length == 0) ? null : $('#speech_3_3460_SlideNo_1').html(),                speech_4         = ($('#speech_4_3460_SlideNo_1').length == 0) ? null : $('#speech_4_3460_SlideNo_1').html(),                speech_5         = ($('#speech_5_3460_SlideNo_1').length == 0) ? null : $('#speech_5_3460_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_3460_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_3460_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_3460_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_3460_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_3460_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_3460_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_3460_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_3460_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_3460_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_3460_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_3460_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_3460_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_3460_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_3460_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_3460_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_3460_SlideNo_1',                grblock          = 'graphicblock_3460_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3460_SlideNo_1',                grblock_A        = 'graphicblock_A_3460_SlideNo_1',                grblock_B        = 'graphicblock_B_3460_SlideNo_1',                grblock_C        = 'graphicblock_C_3460_SlideNo_1',                grblock_D        = 'graphicblock_D_3460_SlideNo_1',                grblock_E        = 'graphicblock_E_3460_SlideNo_1',                grblock_F        = 'graphicblock_F_3460_SlideNo_1',                                grblock_f        = (typeof tml_3460_SlideNo_1   !== 'undefined') ? tml_3460_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_3460_SlideNo_1 !== 'undefined') ? tml_Q_3460_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_3460_SlideNo_1 !== 'undefined') ? tml_A_3460_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_3460_SlideNo_1 !== 'undefined') ? tml_B_3460_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_3460_SlideNo_1 !== 'undefined') ? tml_C_3460_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_3460_SlideNo_1 !== 'undefined') ? tml_D_3460_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_3460_SlideNo_1 !== 'undefined') ? tml_E_3460_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_3460_SlideNo_1 !== 'undefined') ? tml_F_3460_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_3460',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3460_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3460'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  /* I am organizing the creation of points using a pair          * of random values. Yes, there are many ways to code          * this question. I am choosing to go this route as          * practice.          */         if ( [0, 1].ctns_rand() ) {              if ( [0, 1].ctns_rand() ) {                  /* Q1 line */                 symbols.x = [ 1,  2,  3,  4].ctns_rand();                 symbols.y = [ 1,  2,  3,  4].ctns_rand();              } else {                  /* Q2 line */                 symbols.x = [-1, -2, -3, -4].ctns_rand();                 symbols.y = [ 1,  2,  3,  4].ctns_rand();              }          } else {              if ( [0, 1].ctns_rand() ) {                  /* Q3 line */                 symbols.x = [-1, -2, -3, -4].ctns_rand();                 symbols.y = [-1, -2, -3, -4].ctns_rand();              } else {                  /* Q4 line */                 symbols.x = [ 1,  2,  3,  4].ctns_rand();                 symbols.y = [-1, -2, -3, -4].ctns_rand();              }          }                  symbols.q_x = colorized.ctns_format(['black', symbols.x]);         symbols.q_y = colorized.ctns_format(['black', 0]);          q.push(' The $$x$$-intercept is the point $$(${q_x}, 0)$$. ');           q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3460_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_3460_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3460'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3460_SlideNo_2',                ablock           = '#answerblock_3460_SlideNo_2',                acblock          = '#answercommentaryblock_3460_SlideNo_2',                                rightblock       = '#rightblock_3460_SlideNo_2',                wrongblock       = '#wrongblock_3460_SlideNo_2',                undecidedblock   = '#undecidedblock_3460_SlideNo_2',                speech_F         = ($('#speech_F_3460_SlideNo_2').length == 0) ? null : $('#speech_F_3460_SlideNo_2').html(),                speech_B         = ($('#speech_B_3460_SlideNo_2').length == 0) ? null : $('#speech_B_3460_SlideNo_2').html(),                speech_1         = ($('#speech_1_3460_SlideNo_2').length == 0) ? null : $('#speech_1_3460_SlideNo_2').html(),                speech_2         = ($('#speech_2_3460_SlideNo_2').length == 0) ? null : $('#speech_2_3460_SlideNo_2').html(),                speech_3         = ($('#speech_3_3460_SlideNo_2').length == 0) ? null : $('#speech_3_3460_SlideNo_2').html(),                speech_4         = ($('#speech_4_3460_SlideNo_2').length == 0) ? null : $('#speech_4_3460_SlideNo_2').html(),                speech_5         = ($('#speech_5_3460_SlideNo_2').length == 0) ? null : $('#speech_5_3460_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_3460_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_3460_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_3460_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_3460_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_3460_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_3460_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_3460_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_3460_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_3460_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_3460_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_3460_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_3460_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_3460_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_3460_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_3460_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_3460_SlideNo_2',                grblock          = 'graphicblock_3460_SlideNo_2',                grblock_Q        = 'graphicblock_Q_3460_SlideNo_2',                grblock_A        = 'graphicblock_A_3460_SlideNo_2',                grblock_B        = 'graphicblock_B_3460_SlideNo_2',                grblock_C        = 'graphicblock_C_3460_SlideNo_2',                grblock_D        = 'graphicblock_D_3460_SlideNo_2',                grblock_E        = 'graphicblock_E_3460_SlideNo_2',                grblock_F        = 'graphicblock_F_3460_SlideNo_2',                                grblock_f        = (typeof tml_3460_SlideNo_2   !== 'undefined') ? tml_3460_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_3460_SlideNo_2 !== 'undefined') ? tml_Q_3460_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_3460_SlideNo_2 !== 'undefined') ? tml_A_3460_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_3460_SlideNo_2 !== 'undefined') ? tml_B_3460_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_3460_SlideNo_2 !== 'undefined') ? tml_C_3460_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_3460_SlideNo_2 !== 'undefined') ? tml_D_3460_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_3460_SlideNo_2 !== 'undefined') ? tml_E_3460_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_3460_SlideNo_2 !== 'undefined') ? tml_F_3460_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_3460',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3460_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_3460'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;                 symbols.xHighCoord = symbols.xHigh + 0.5;                 symbols.yHighCoord = symbols.yHigh - 1.5;                 symbols.xLowCoord = symbols.xLow + 0.5;                 symbols.yLowCoord = symbols.yLow - 1.5;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;                 symbols.xHighCoord = symbols.xHigh + 0.5;                 symbols.yHighCoord = symbols.yHigh + 1.5;                 symbols.xLowCoord = symbols.xLow + 0.5;                 symbols.yLowCoord = symbols.yLow + 1.5;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN  = symbols.xHigh - symbols.xLow;         symbols.m_   = d2f(symbols.RISE / symbols.RUN);           symbols.xLow_ = addparen( symbols.xLow);         symbols.yLow_ = addparen( symbols.yLow);                          q.push(' $|  \\textrm{Slope} = ${m_} |$ ');           q.push( graphicblock( {"dim":"6", "gid":grblock}) );          q.push(' $|  \\begin{aligned} \\textrm{Slope} &= \\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} \\\\[2ex]       &= \\frac{${yHigh} - ${yLow_}}{${xHigh} - ${xLow_}} \\\\[2ex]       &= ${m_},  \\end{aligned} |$ where $$ (x_2, y_2) $$ corresponds to $$( ${xHigh}, ${yHigh} )$$ and       $$ (x_1, y_1) $$ corresponds to $$( ${xLow}, ${yLow} )$$. ');      $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3460_SlideNo_3'] = CTNS.NUMBERS.symbols['new_scriptblock_3460_SlideNo_3'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3460'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3460_SlideNo_3',                ablock           = '#answerblock_3460_SlideNo_3',                acblock          = '#answercommentaryblock_3460_SlideNo_3',                                rightblock       = '#rightblock_3460_SlideNo_3',                wrongblock       = '#wrongblock_3460_SlideNo_3',                undecidedblock   = '#undecidedblock_3460_SlideNo_3',                speech_F         = ($('#speech_F_3460_SlideNo_3').length == 0) ? null : $('#speech_F_3460_SlideNo_3').html(),                speech_B         = ($('#speech_B_3460_SlideNo_3').length == 0) ? null : $('#speech_B_3460_SlideNo_3').html(),                speech_1         = ($('#speech_1_3460_SlideNo_3').length == 0) ? null : $('#speech_1_3460_SlideNo_3').html(),                speech_2         = ($('#speech_2_3460_SlideNo_3').length == 0) ? null : $('#speech_2_3460_SlideNo_3').html(),                speech_3         = ($('#speech_3_3460_SlideNo_3').length == 0) ? null : $('#speech_3_3460_SlideNo_3').html(),                speech_4         = ($('#speech_4_3460_SlideNo_3').length == 0) ? null : $('#speech_4_3460_SlideNo_3').html(),                speech_5         = ($('#speech_5_3460_SlideNo_3').length == 0) ? null : $('#speech_5_3460_SlideNo_3').html(),                gr3dblock        = 'graphic3dblock_3460_SlideNo_3',                gr3dblock_A      = 'graphic3dblock_A_3460_SlideNo_3',                gr3dblock_B      = 'graphic3dblock_B_3460_SlideNo_3',                gr3dblock_C      = 'graphic3dblock_C_3460_SlideNo_3',                gr3dblock_D      = 'graphic3dblock_D_3460_SlideNo_3',                gr3dblock_E      = 'graphic3dblock_E_3460_SlideNo_3',                gr3dblock_F      = 'graphic3dblock_F_3460_SlideNo_3',                gr3dblock_1      = 'graphic3dblock_1_3460_SlideNo_3',                gr3dblock_2      = 'graphic3dblock_2_3460_SlideNo_3',                gr3dblock_3      = 'graphic3dblock_3_3460_SlideNo_3',                gr3dblock_4      = 'graphic3dblock_4_3460_SlideNo_3',                gr3dblock_5      = 'graphic3dblock_5_3460_SlideNo_3',                gr3dblock_6      = 'graphic3dblock_6_3460_SlideNo_3',                gr3dblock_7      = 'graphic3dblock_7_3460_SlideNo_3',                gr3dblock_8      = 'graphic3dblock_8_3460_SlideNo_3',                gr3dblock_9      = 'graphic3dblock_9_3460_SlideNo_3',                grblock          = 'graphicblock_3460_SlideNo_3',                grblock_Q        = 'graphicblock_Q_3460_SlideNo_3',                grblock_A        = 'graphicblock_A_3460_SlideNo_3',                grblock_B        = 'graphicblock_B_3460_SlideNo_3',                grblock_C        = 'graphicblock_C_3460_SlideNo_3',                grblock_D        = 'graphicblock_D_3460_SlideNo_3',                grblock_E        = 'graphicblock_E_3460_SlideNo_3',                grblock_F        = 'graphicblock_F_3460_SlideNo_3',                                grblock_f        = (typeof tml_3460_SlideNo_3   !== 'undefined') ? tml_3460_SlideNo_3   : null,                grblock_Q_f      = (typeof tml_Q_3460_SlideNo_3 !== 'undefined') ? tml_Q_3460_SlideNo_3 : null,                grblock_A_f      = (typeof tml_A_3460_SlideNo_3 !== 'undefined') ? tml_A_3460_SlideNo_3 : null,                grblock_B_f      = (typeof tml_B_3460_SlideNo_3 !== 'undefined') ? tml_B_3460_SlideNo_3 : null,                grblock_C_f      = (typeof tml_C_3460_SlideNo_3 !== 'undefined') ? tml_C_3460_SlideNo_3 : null,                grblock_D_f      = (typeof tml_D_3460_SlideNo_3 !== 'undefined') ? tml_D_3460_SlideNo_3 : null,                grblock_E_f      = (typeof tml_E_3460_SlideNo_3 !== 'undefined') ? tml_E_3460_SlideNo_3 : null,                grblock_F_f      = (typeof tml_F_3460_SlideNo_3 !== 'undefined') ? tml_F_3460_SlideNo_3 : null,                numbers          = NUMBERS,                gid              = 'quiz_3460',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3460_SlideNo_3'],                gsymbols         = NUMBERS.symbols['quiz_3460'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;                          symbols.x = 2;         symbols.y = 2;          symbols.x = [1, 2, 3, 4].ctns_rand();         symbols.y = [1, 2, 3, 4].ctns_rand();                  symbols.q_x = colorized.ctns_format(['transparent', 0]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);         symbols.a_x = colorized.ctns_format(['blue', 0]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);          q.push(' Find the $$y$$-intercept on the y-axis. ');          q.push( graphicblock( {"dim":"6", "gid":grblock_Q}) );          a.push(' Find the $$y$$-intercept on the y-axis. ');          a.push( graphicblock( {"dim":"6", "gid":grblock_A}) );          q.push(' The $$y$$-intercept is the point $$\\boxed{ (0, ${q_y}) }$$.  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');           a.push(' The $$y$$-intercept is the point $$\\boxed{ (0, ${a_y}) }$$.  <br><br><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');           $(qblock).html(tex({"symbols":symbols}, q.join(' ')));         $(ablock).html(tex({"symbols":symbols}, a.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3460_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_3460_SlideNo_0
	What do these buy me? tag=, masterid=3460, slideno=SlideNo_0
	'scriptblock_3460_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_3460_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3460_SlideNo_0'] = NUMBERS.symbols['scriptblock_3460_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3460_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3460_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
		    

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() {return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_23689 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_23689 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
           
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3460_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_3460_SlideNo_1
	What do these buy me? tag=, masterid=3460, slideno=SlideNo_1
	'scriptblock_3460_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_3460_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3460_SlideNo_1'] = NUMBERS.symbols['scriptblock_3460_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3460_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3460_SlideNo_1'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
		    

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() {return 0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_45561 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_45561 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
           
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3460_SlideNo_2 (symbols, gsymbols, NUMBERS) {
	
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
	tml_3460_SlideNo_2
	What do these buy me? tag=, masterid=3460, slideno=SlideNo_2
	'scriptblock_3460_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_3460_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3460_SlideNo_2'] = NUMBERS.symbols['scriptblock_3460_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3460_SlideNo_2'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3460_SlideNo_2'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
		 

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointtop
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointtop.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbottom
 */
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbottom
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbottom.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcorner
 */
window[PMGRAPHICID].pointcorner = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcorner
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcorner.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointhighCoord
 */
window[PMGRAPHICID].pointhighCoord = window[PMGRAPHICID].board.create('point', [ function() { return st.xHighCoord;}, function() { return st.yHighCoord;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointhighCoord.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointhighCoord
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointhighCoord.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointlowCoord
 */
window[PMGRAPHICID].pointlowCoord = window[PMGRAPHICID].board.create('point', [ function() { return st.xLowCoord; }, function() { return st.yLowCoord; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointlowCoord.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointlowCoord
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointlowCoord.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_42351 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_42351 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].text99074 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointhighCoord.X()+0; }, 
		function() { return window[PMGRAPHICID].pointhighCoord.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '(    ' + PM_MATH.add_precision('top', 'X', (window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop : null,1,null) + ',    ' + PM_MATH.add_precision('top', 'Y', (window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop : null,1,null) + ' )';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text99074 center', 
	  cssClass:'window[PMGRAPHICID].text99074 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text29170 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointlowCoord.X()+0; }, 
		function() { return window[PMGRAPHICID].pointlowCoord.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '( ' + PM_MATH.add_precision('bottom', 'X', (window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom : null,1,null) + ', ' + PM_MATH.add_precision('bottom', 'Y', (window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom : null,1,null) + ' )';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text29170 center', 
	  cssClass:'window[PMGRAPHICID].text29170 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_3460_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_3460_SlideNo_3
	What do these buy me? tag=Q_, masterid=3460, slideno=SlideNo_3
	'scriptblock_3460_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_3460_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3460_SlideNo_3'] = NUMBERS.symbols['scriptblock_3460_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3460_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3460_SlideNo_3'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
		    

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() {return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_65222 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_65222 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
              
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}    
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_3460_SlideNo_3 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_3460_SlideNo_3
	What do these buy me? tag=A_, masterid=3460, slideno=SlideNo_3
	'scriptblock_3460_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_3460_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3460_SlideNo_3'] = NUMBERS.symbols['scriptblock_3460_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3460_SlideNo_3'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3460_SlideNo_3'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  pm-border ')
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
		  

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() {return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointC
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointC.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointC
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointC.moveTo([x,y],1000);

    });   
/* Create a basic segment
 */
window[PMGRAPHICID].segment_7306 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_7306 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_49490 = window[PMGRAPHICID].pointC;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_49490 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointA.X()-window[PMGRAPHICID].pointC.X(); if (check == 0) return window[PMGRAPHICID].pointA.X(); return (check > 0 ) ? window[PMGRAPHICID].pointA.X()-0.3 : window[PMGRAPHICID].pointA.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointA.Y()-window[PMGRAPHICID].pointC.Y(); if (check == 0) return window[PMGRAPHICID].pointA.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointA.Y()-0.3 : window[PMGRAPHICID].pointA.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_49490 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_49490, window[PMGRAPHICID].endArrow_49490], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});   /* Create Text */
window[PMGRAPHICID].text17856 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text17856 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
   
window[PMGRAPHICID].text43820 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+1; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text43820 center', 
	  cssClass:'window[PMGRAPHICID].text43820 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text72044 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+1; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+1.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y = ' + PM_MATH.add_paren('A', 'Y', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,null) + '';
            value = NUMBERS.cleanEqn(value);
            
            value = katex.renderToString(value, {throwOnError: false});
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
            return '<div>'+value+'</div>'; 
		} 
	], 
	{ anchorX:'middle', 
      anchorY:'middle',
	  highlightCssStyle:'opacity:1.0', 
	  highlightCssClass:'window[PMGRAPHICID].text72044 center', 
	  cssClass:'window[PMGRAPHICID].text72044 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
    
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };