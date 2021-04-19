
  CTNS.QUIZ_SET["c2cfb7bad164e25dcde5c83c04008948"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4033 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4033';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4033', 2);
	
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

	jQuery(".slide_4033").each( function() {do_center(this)} );

    do_force('4033');
    
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
    factoryid: '4033',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ7-1",
    label: "Ctns\Question",
    callHome: "PLACEHOLDER CALLHOME",
    callHomeCss: "callhome",
    callHomeStyle: "font-weight:bold",
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
    factoryid: '4033',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ7-2",
    label: "Ctns\Question",
    callHome: "PLACEHOLDER CALLHOME",
    callHomeCss: "callhome",
    callHomeStyle: "font-weight:bold",
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
CTNS.NUMBERS.GID = 'quiz_4033';
CTNS.NUMBERS.equations['quiz_4033'] = [];
CTNS.NUMBERS.symbols['quiz_4033'] = CTNS.NUMBERS.symbols['quiz_4033'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4033_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4033_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4033'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4033_SlideNo_0',                ablock           = '#answerblock_4033_SlideNo_0',                acblock          = '#answercommentaryblock_4033_SlideNo_0',                                rightblock       = '#rightblock_4033_SlideNo_0',                wrongblock       = '#wrongblock_4033_SlideNo_0',                undecidedblock   = '#undecidedblock_4033_SlideNo_0',                speech_F         = ($('#speech_F_4033_SlideNo_0').length == 0) ? null : $('#speech_F_4033_SlideNo_0').html(),                speech_B         = ($('#speech_B_4033_SlideNo_0').length == 0) ? null : $('#speech_B_4033_SlideNo_0').html(),                speech_1         = ($('#speech_1_4033_SlideNo_0').length == 0) ? null : $('#speech_1_4033_SlideNo_0').html(),                speech_2         = ($('#speech_2_4033_SlideNo_0').length == 0) ? null : $('#speech_2_4033_SlideNo_0').html(),                speech_3         = ($('#speech_3_4033_SlideNo_0').length == 0) ? null : $('#speech_3_4033_SlideNo_0').html(),                speech_4         = ($('#speech_4_4033_SlideNo_0').length == 0) ? null : $('#speech_4_4033_SlideNo_0').html(),                speech_5         = ($('#speech_5_4033_SlideNo_0').length == 0) ? null : $('#speech_5_4033_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_4033_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_4033_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_4033_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_4033_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_4033_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_4033_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_4033_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_4033_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_4033_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_4033_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_4033_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_4033_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_4033_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_4033_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_4033_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_4033_SlideNo_0',                grblock          = 'graphicblock_4033_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4033_SlideNo_0',                grblock_A        = 'graphicblock_A_4033_SlideNo_0',                grblock_B        = 'graphicblock_B_4033_SlideNo_0',                grblock_C        = 'graphicblock_C_4033_SlideNo_0',                grblock_D        = 'graphicblock_D_4033_SlideNo_0',                grblock_E        = 'graphicblock_E_4033_SlideNo_0',                grblock_F        = 'graphicblock_F_4033_SlideNo_0',                                grblock_f        = (typeof tml_4033_SlideNo_0   !== 'undefined') ? tml_4033_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4033_SlideNo_0 !== 'undefined') ? tml_Q_4033_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4033_SlideNo_0 !== 'undefined') ? tml_A_4033_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4033_SlideNo_0 !== 'undefined') ? tml_B_4033_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4033_SlideNo_0 !== 'undefined') ? tml_C_4033_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4033_SlideNo_0 !== 'undefined') ? tml_D_4033_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4033_SlideNo_0 !== 'undefined') ? tml_E_4033_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4033_SlideNo_0 !== 'undefined') ? tml_F_4033_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4033',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4033_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4033'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.a_ = [1, 2, 3,    -1, -2, -3].ctns_rand();         symbols.b_ = [1, 2, 3, 4, -1, -2, -3, -4].ctns_rand();                  symbols.q_a = colorized.ctns_format(['transparent', symbols.a_]);         symbols.q_b = colorized.ctns_format(['transparent', symbols.b_]);         symbols.a_a = colorized.ctns_format(['blue', symbols.a_]);         symbols.a_b = colorized.ctns_format(['blue', symbols.b_]);          if ( is_neg(symbols.a_) && is_neg(symbols.b_) ) {             symbols.eq = '-\\frac{x}{%s} - \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         } else if ( is_pos(symbols.a_) && is_neg(symbols.b_) ) {             symbols.eq = ' \\frac{x}{%s} - \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         } else if ( is_neg(symbols.a_) && is_pos(symbols.b_) ) {             symbols.eq = '-\\frac{x}{%s} + \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         } else {             symbols.eq = ' \\frac{x}{%s} + \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         }                  symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq]);                  q.push(' Given the line graph, state the Intercept-Intercept Form of the line.  <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Given a graph that shows two intercepts, the <strong>$$x$$-intercept</strong> and the <strong>$$y$$-intercept</strong>,  the Intercept-Intercept Form of the corresponding linear function is simply expressed using these two intercepts, $| \\frac{x}{A} + \\frac{y}{B} = 1,|$ where $$A$$ is the <strong>$$x$$-intercept</strong> and $$B$$ is the <strong>$$y$$-intercept</strong>. <hr style="width:50%;clear:both;margin:2em auto;"> $$x\\textrm{-intercept} = (\\boxed{ ${q_a} }, 0)$$<br/> $$y\\textrm{-intercept} = (0, \\boxed{ ${q_b} })$$<br/><br/> $$ \\boxed{ ${q_eq} } $$ </div> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4033_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_4033_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4033'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4033_SlideNo_1',                ablock           = '#answerblock_4033_SlideNo_1',                acblock          = '#answercommentaryblock_4033_SlideNo_1',                                rightblock       = '#rightblock_4033_SlideNo_1',                wrongblock       = '#wrongblock_4033_SlideNo_1',                undecidedblock   = '#undecidedblock_4033_SlideNo_1',                speech_F         = ($('#speech_F_4033_SlideNo_1').length == 0) ? null : $('#speech_F_4033_SlideNo_1').html(),                speech_B         = ($('#speech_B_4033_SlideNo_1').length == 0) ? null : $('#speech_B_4033_SlideNo_1').html(),                speech_1         = ($('#speech_1_4033_SlideNo_1').length == 0) ? null : $('#speech_1_4033_SlideNo_1').html(),                speech_2         = ($('#speech_2_4033_SlideNo_1').length == 0) ? null : $('#speech_2_4033_SlideNo_1').html(),                speech_3         = ($('#speech_3_4033_SlideNo_1').length == 0) ? null : $('#speech_3_4033_SlideNo_1').html(),                speech_4         = ($('#speech_4_4033_SlideNo_1').length == 0) ? null : $('#speech_4_4033_SlideNo_1').html(),                speech_5         = ($('#speech_5_4033_SlideNo_1').length == 0) ? null : $('#speech_5_4033_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_4033_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_4033_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_4033_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_4033_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_4033_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_4033_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_4033_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_4033_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_4033_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_4033_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_4033_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_4033_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_4033_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_4033_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_4033_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_4033_SlideNo_1',                grblock          = 'graphicblock_4033_SlideNo_1',                grblock_Q        = 'graphicblock_Q_4033_SlideNo_1',                grblock_A        = 'graphicblock_A_4033_SlideNo_1',                grblock_B        = 'graphicblock_B_4033_SlideNo_1',                grblock_C        = 'graphicblock_C_4033_SlideNo_1',                grblock_D        = 'graphicblock_D_4033_SlideNo_1',                grblock_E        = 'graphicblock_E_4033_SlideNo_1',                grblock_F        = 'graphicblock_F_4033_SlideNo_1',                                grblock_f        = (typeof tml_4033_SlideNo_1   !== 'undefined') ? tml_4033_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_4033_SlideNo_1 !== 'undefined') ? tml_Q_4033_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_4033_SlideNo_1 !== 'undefined') ? tml_A_4033_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_4033_SlideNo_1 !== 'undefined') ? tml_B_4033_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_4033_SlideNo_1 !== 'undefined') ? tml_C_4033_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_4033_SlideNo_1 !== 'undefined') ? tml_D_4033_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_4033_SlideNo_1 !== 'undefined') ? tml_E_4033_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_4033_SlideNo_1 !== 'undefined') ? tml_F_4033_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_4033',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4033_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_4033'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.a_ = [1, 2, 3,    -1, -2, -3].ctns_rand();         symbols.b_ = [1, 2, 3, 4, -1, -2, -3, -4].ctns_rand();                  if ( is_neg(symbols.a_) && is_neg(symbols.b_) ) {             symbols.eq = '-\\frac{x}{%s} - \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         } else if ( is_pos(symbols.a_) && is_neg(symbols.b_) ) {             symbols.eq = ' \\frac{x}{%s} - \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         } else if ( is_neg(symbols.a_) && is_pos(symbols.b_) ) {             symbols.eq = '-\\frac{x}{%s} + \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         } else {             symbols.eq = ' \\frac{x}{%s} + \\frac{y}{%s} = 1'.ctns_format([Math.abs(symbols.a_), Math.abs(symbols.b_)]).ctns_equation();         }                  q.push(' Given the Intercept-Intercept Form $| ${eq}, |$ draw the graph. <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_4033_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_4033_SlideNo_0
	What do these buy me? tag=Q_, masterid=4033, slideno=SlideNo_0
	'scriptblock_4033_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_4033_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4033_SlideNo_0'] = NUMBERS.symbols['scriptblock_4033_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4033_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4033_SlideNo_0'];
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
		 

/* Create a STANDARD pointa_
 */
window[PMGRAPHICID].pointa_ = window[PMGRAPHICID].board.create('point', [ function() { return st.a_;}, function() { return     0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointb_
 */
window[PMGRAPHICID].pointb_ = window[PMGRAPHICID].board.create('point', [ function() { return     0;}, function() { return st.b_;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_14155 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_14155 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
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
function tml_A_4033_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_4033_SlideNo_0
	What do these buy me? tag=A_, masterid=4033, slideno=SlideNo_0
	'scriptblock_4033_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_4033_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4033_SlideNo_0'] = NUMBERS.symbols['scriptblock_4033_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4033_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4033_SlideNo_0'];
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
		 

/* Create a STANDARD pointa_
 */
window[PMGRAPHICID].pointa_ = window[PMGRAPHICID].board.create('point', [ function() { return st.a_;}, function() { return     0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointb_
 */
window[PMGRAPHICID].pointb_ = window[PMGRAPHICID].board.create('point', [ function() { return     0;}, function() { return st.b_;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_74985 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_74985 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
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
function tml_Q_4033_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_4033_SlideNo_1
	What do these buy me? tag=Q_, masterid=4033, slideno=SlideNo_1
	'scriptblock_4033_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_4033_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4033_SlideNo_1'] = NUMBERS.symbols['scriptblock_4033_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4033_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4033_SlideNo_1'];
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
		 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_4033_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_4033_SlideNo_1
	What do these buy me? tag=A_, masterid=4033, slideno=SlideNo_1
	'scriptblock_4033_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_4033_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4033_SlideNo_1'] = NUMBERS.symbols['scriptblock_4033_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4033_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4033_SlideNo_1'];
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
		 

/* Create a STANDARD pointa_
 */
window[PMGRAPHICID].pointa_ = window[PMGRAPHICID].board.create('point', [ function() { return st.a_;}, function() { return     0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointb_
 */
window[PMGRAPHICID].pointb_ = window[PMGRAPHICID].board.create('point', [ function() { return     0;}, function() { return st.b_;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_43481 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_43481 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };