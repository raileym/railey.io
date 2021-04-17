
  CTNS.QUIZ_SET["a21e071a4329d5d17a6341a13cb05854"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1013 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1013';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1013', 2);
	
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

	jQuery(".slide_1013").each( function() {do_center(this)} );

    do_force('1013');
    
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
    factoryid: '1013',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ5-1",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_Q_MASTERID graph hide'></div><div id='graphicblock_Q_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_Q_MASTERIDpanel'></div><div class='meta graphicblock_Q_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_A_MASTERID graph hide'></div><div id='graphicblock_A_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_A_MASTERIDpanel'></div><div class='meta graphicblock_A_MASTERID panel hide'></div></div><br/><!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div>     ",
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
    factoryid: '1013',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ5-2",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div><br/><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_Q_MASTERID graph hide'></div><div id='graphicblock_Q_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_Q_MASTERIDpanel'></div><div class='meta graphicblock_Q_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div><br/><div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_A_MASTERID graph hide'></div><div id='graphicblock_A_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_A_MASTERIDpanel'></div><div class='meta graphicblock_A_MASTERID panel hide'></div></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_1013';
CTNS.NUMBERS.equations['quiz_1013'] = [];
CTNS.NUMBERS.symbols['quiz_1013'] = CTNS.NUMBERS.symbols['quiz_1013'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1013_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1013_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1013'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1013_SlideNo_0',                ablock           = '#answerblock_1013_SlideNo_0',                acblock          = '#answercommentaryblock_1013_SlideNo_0',                                rightblock       = '#rightblock_1013_SlideNo_0',                wrongblock       = '#wrongblock_1013_SlideNo_0',                undecidedblock   = '#undecidedblock_1013_SlideNo_0',                speech_F         = ($('#speech_F_1013_SlideNo_0').length == 0) ? null : $('#speech_F_1013_SlideNo_0').html(),                speech_B         = ($('#speech_B_1013_SlideNo_0').length == 0) ? null : $('#speech_B_1013_SlideNo_0').html(),                speech_1         = ($('#speech_1_1013_SlideNo_0').length == 0) ? null : $('#speech_1_1013_SlideNo_0').html(),                speech_2         = ($('#speech_2_1013_SlideNo_0').length == 0) ? null : $('#speech_2_1013_SlideNo_0').html(),                speech_3         = ($('#speech_3_1013_SlideNo_0').length == 0) ? null : $('#speech_3_1013_SlideNo_0').html(),                speech_4         = ($('#speech_4_1013_SlideNo_0').length == 0) ? null : $('#speech_4_1013_SlideNo_0').html(),                speech_5         = ($('#speech_5_1013_SlideNo_0').length == 0) ? null : $('#speech_5_1013_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_1013_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_1013_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_1013_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_1013_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_1013_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_1013_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_1013_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_1013_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_1013_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_1013_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_1013_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_1013_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_1013_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_1013_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_1013_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_1013_SlideNo_0',                grblock          = 'graphicblock_1013_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1013_SlideNo_0',                grblock_A        = 'graphicblock_A_1013_SlideNo_0',                grblock_B        = 'graphicblock_B_1013_SlideNo_0',                grblock_C        = 'graphicblock_C_1013_SlideNo_0',                grblock_D        = 'graphicblock_D_1013_SlideNo_0',                grblock_E        = 'graphicblock_E_1013_SlideNo_0',                grblock_F        = 'graphicblock_F_1013_SlideNo_0',                                grblock_f        = (typeof tml_1013_SlideNo_0   !== 'undefined') ? tml_1013_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_1013_SlideNo_0 !== 'undefined') ? tml_Q_1013_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_1013_SlideNo_0 !== 'undefined') ? tml_A_1013_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_1013_SlideNo_0 !== 'undefined') ? tml_B_1013_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_1013_SlideNo_0 !== 'undefined') ? tml_C_1013_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_1013_SlideNo_0 !== 'undefined') ? tml_D_1013_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_1013_SlideNo_0 !== 'undefined') ? tml_E_1013_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_1013_SlideNo_0 !== 'undefined') ? tml_F_1013_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_1013',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1013_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_1013'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();                  symbols.q_m = colorized.ctns_format(['transparent', symbols.m]);         symbols.q_x = colorized.ctns_format(['transparent', symbols.x]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);          symbols.a_m = colorized.ctns_format(['blue', symbols.m]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);                  symbols.EQ = 'y - %s = %s ( x - %s )'.ctns_format([symbols.y, symbols.m, symbols.x]).ctns_equation();          symbols.q_EQ = colorized.ctns_format(['transparent', symbols.EQ]);         symbols.a_EQ = colorized.ctns_format(['blue', symbols.EQ]);          /* Build the QUESTION */         q.push(' Point-Slope Form<br/><br/> $$y - \\boxed{ ${q_y} } = \\boxed{ ${q_m} } ( x - \\boxed{ ${q_x} } )$$<br/><br/> $$ \\boxed{ ${q_EQ} } $$ <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1013_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_1013_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1013'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1013_SlideNo_1',                ablock           = '#answerblock_1013_SlideNo_1',                acblock          = '#answercommentaryblock_1013_SlideNo_1',                                rightblock       = '#rightblock_1013_SlideNo_1',                wrongblock       = '#wrongblock_1013_SlideNo_1',                undecidedblock   = '#undecidedblock_1013_SlideNo_1',                speech_F         = ($('#speech_F_1013_SlideNo_1').length == 0) ? null : $('#speech_F_1013_SlideNo_1').html(),                speech_B         = ($('#speech_B_1013_SlideNo_1').length == 0) ? null : $('#speech_B_1013_SlideNo_1').html(),                speech_1         = ($('#speech_1_1013_SlideNo_1').length == 0) ? null : $('#speech_1_1013_SlideNo_1').html(),                speech_2         = ($('#speech_2_1013_SlideNo_1').length == 0) ? null : $('#speech_2_1013_SlideNo_1').html(),                speech_3         = ($('#speech_3_1013_SlideNo_1').length == 0) ? null : $('#speech_3_1013_SlideNo_1').html(),                speech_4         = ($('#speech_4_1013_SlideNo_1').length == 0) ? null : $('#speech_4_1013_SlideNo_1').html(),                speech_5         = ($('#speech_5_1013_SlideNo_1').length == 0) ? null : $('#speech_5_1013_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_1013_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_1013_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_1013_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_1013_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_1013_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_1013_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_1013_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_1013_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_1013_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_1013_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_1013_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_1013_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_1013_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_1013_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_1013_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_1013_SlideNo_1',                grblock          = 'graphicblock_1013_SlideNo_1',                grblock_Q        = 'graphicblock_Q_1013_SlideNo_1',                grblock_A        = 'graphicblock_A_1013_SlideNo_1',                grblock_B        = 'graphicblock_B_1013_SlideNo_1',                grblock_C        = 'graphicblock_C_1013_SlideNo_1',                grblock_D        = 'graphicblock_D_1013_SlideNo_1',                grblock_E        = 'graphicblock_E_1013_SlideNo_1',                grblock_F        = 'graphicblock_F_1013_SlideNo_1',                                grblock_f        = (typeof tml_1013_SlideNo_1   !== 'undefined') ? tml_1013_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_1013_SlideNo_1 !== 'undefined') ? tml_Q_1013_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_1013_SlideNo_1 !== 'undefined') ? tml_A_1013_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_1013_SlideNo_1 !== 'undefined') ? tml_B_1013_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_1013_SlideNo_1 !== 'undefined') ? tml_C_1013_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_1013_SlideNo_1 !== 'undefined') ? tml_D_1013_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_1013_SlideNo_1 !== 'undefined') ? tml_E_1013_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_1013_SlideNo_1 !== 'undefined') ? tml_F_1013_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_1013',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1013_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_1013'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();                  symbols.q_m = colorized.ctns_format(['transparent', symbols.m]);         symbols.q_x = colorized.ctns_format(['transparent', symbols.x]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);          symbols.a_m = colorized.ctns_format(['blue', symbols.m]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);                  symbols.EQ = 'y - %s = %s ( x - %s )'.ctns_format([symbols.y, symbols.m, symbols.x]).ctns_equation();          symbols.q_EQ = colorized.ctns_format(['transparent', symbols.EQ]);         symbols.a_EQ = colorized.ctns_format(['blue', symbols.EQ]);          /* Build the QUESTION */         q.push(' Given the Point-Slope Form<br/><br/> $$ ${EQ}, $$<br/><br/> draw the graph. <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_1013_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_1013_SlideNo_0
	What do these buy me? tag=Q_, masterid=1013, slideno=SlideNo_0
	'scriptblock_1013_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_1013_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1013_SlideNo_0'] = NUMBERS.symbols['scriptblock_1013_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1013_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1013_SlideNo_0'];
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return    0; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointm
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointu
 */
window[PMGRAPHICID].pointu = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointu
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    }); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph88745 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*(x-((window[PMGRAPHICID].pointu) ? window[PMGRAPHICID].pointu.X() : 0))+((window[PMGRAPHICID].pointu) ? window[PMGRAPHICID].pointu.Y() : 0);}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_1013_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_1013_SlideNo_0
	What do these buy me? tag=A_, masterid=1013, slideno=SlideNo_0
	'scriptblock_1013_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_1013_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1013_SlideNo_0'] = NUMBERS.symbols['scriptblock_1013_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1013_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1013_SlideNo_0'];
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return 0; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointm
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointu
 */
window[PMGRAPHICID].pointu = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointu
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    });

/* Show coordinates for pointu
 */
window[PMGRAPHICID].textu = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointu.X();
		if ('' != '') {
			return (x+parseFloat(''));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointu.Y();
		if ('' != '') {
			return (y+parseFloat(''));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointu.X();
		var y = window[PMGRAPHICID].pointu.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph3540 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*(x-((window[PMGRAPHICID].pointu) ? window[PMGRAPHICID].pointu.X() : 0))+((window[PMGRAPHICID].pointu) ? window[PMGRAPHICID].pointu.Y() : 0);}, 
            -20,
            20], 
            {strokeColor:'blue',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_1013_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_1013_SlideNo_1
	What do these buy me? tag=Q_, masterid=1013, slideno=SlideNo_1
	'scriptblock_1013_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_1013_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1013_SlideNo_1'] = NUMBERS.symbols['scriptblock_1013_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1013_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1013_SlideNo_1'];
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return    0; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointm
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointu
 */
window[PMGRAPHICID].pointu = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointu
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    }); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_1013_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_1013_SlideNo_1
	What do these buy me? tag=A_, masterid=1013, slideno=SlideNo_1
	'scriptblock_1013_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_1013_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1013_SlideNo_1'] = NUMBERS.symbols['scriptblock_1013_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1013_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1013_SlideNo_1'];
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return 0; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointm
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointu
 */
window[PMGRAPHICID].pointu = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointu
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointu.moveTo([x,y],1000);

    });

/* Show coordinates for pointu
 */
window[PMGRAPHICID].textu = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointu.X();
		if ('' != '') {
			return (x+parseFloat(''));
		}
		if (x > 3) {
			return (x-2.5); 
		} if (x <= 0 && x > -4) {
			return (x-2.5); 
		} else {
			return (x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointu.Y();
		if ('' != '') {
			return (y+parseFloat(''));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointu.X();
		var y = window[PMGRAPHICID].pointu.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph68286 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*(x-((window[PMGRAPHICID].pointu) ? window[PMGRAPHICID].pointu.X() : 0))+((window[PMGRAPHICID].pointu) ? window[PMGRAPHICID].pointu.Y() : 0);}, 
            -20,
            20], 
            {strokeColor:'blue',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };