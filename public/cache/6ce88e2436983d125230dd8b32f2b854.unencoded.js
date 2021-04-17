
  CTNS.QUIZ_SET["6ce88e2436983d125230dd8b32f2b854"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4122 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4122';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4122', 2);
	
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

	jQuery(".slide_4122").each( function() {do_center(this)} );

    do_force('4122');
    
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
    factoryid: '4122',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ6-1",
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
    factoryid: '4122',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ6-2",
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
CTNS.NUMBERS.GID = 'quiz_4122';
CTNS.NUMBERS.equations['quiz_4122'] = [];
CTNS.NUMBERS.symbols['quiz_4122'] = CTNS.NUMBERS.symbols['quiz_4122'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4122_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4122_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4122'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4122_SlideNo_0',                ablock           = '#answerblock_4122_SlideNo_0',                acblock          = '#answercommentaryblock_4122_SlideNo_0',                                rightblock       = '#rightblock_4122_SlideNo_0',                wrongblock       = '#wrongblock_4122_SlideNo_0',                undecidedblock   = '#undecidedblock_4122_SlideNo_0',                speech_F         = ($('#speech_F_4122_SlideNo_0').length == 0) ? null : $('#speech_F_4122_SlideNo_0').html(),                speech_B         = ($('#speech_B_4122_SlideNo_0').length == 0) ? null : $('#speech_B_4122_SlideNo_0').html(),                speech_1         = ($('#speech_1_4122_SlideNo_0').length == 0) ? null : $('#speech_1_4122_SlideNo_0').html(),                speech_2         = ($('#speech_2_4122_SlideNo_0').length == 0) ? null : $('#speech_2_4122_SlideNo_0').html(),                speech_3         = ($('#speech_3_4122_SlideNo_0').length == 0) ? null : $('#speech_3_4122_SlideNo_0').html(),                speech_4         = ($('#speech_4_4122_SlideNo_0').length == 0) ? null : $('#speech_4_4122_SlideNo_0').html(),                speech_5         = ($('#speech_5_4122_SlideNo_0').length == 0) ? null : $('#speech_5_4122_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_4122_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_4122_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_4122_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_4122_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_4122_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_4122_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_4122_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_4122_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_4122_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_4122_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_4122_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_4122_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_4122_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_4122_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_4122_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_4122_SlideNo_0',                grblock          = 'graphicblock_4122_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4122_SlideNo_0',                grblock_A        = 'graphicblock_A_4122_SlideNo_0',                grblock_B        = 'graphicblock_B_4122_SlideNo_0',                grblock_C        = 'graphicblock_C_4122_SlideNo_0',                grblock_D        = 'graphicblock_D_4122_SlideNo_0',                grblock_E        = 'graphicblock_E_4122_SlideNo_0',                grblock_F        = 'graphicblock_F_4122_SlideNo_0',                                grblock_f        = (typeof tml_4122_SlideNo_0   !== 'undefined') ? tml_4122_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4122_SlideNo_0 !== 'undefined') ? tml_Q_4122_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4122_SlideNo_0 !== 'undefined') ? tml_A_4122_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4122_SlideNo_0 !== 'undefined') ? tml_B_4122_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4122_SlideNo_0 !== 'undefined') ? tml_C_4122_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4122_SlideNo_0 !== 'undefined') ? tml_D_4122_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_4122_SlideNo_0 !== 'undefined') ? tml_E_4122_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_4122_SlideNo_0 !== 'undefined') ? tml_F_4122_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4122',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4122_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4122'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* random x, y, a, and b */         do {             symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.a = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();         } while ( symbols.x === symbols.a || symbols.y === symbols.b );                  /* compute and format the negative reciprocal and the value          * for the y-intercept b          */         symbols.delta_x = symbols.a - symbols.x;         symbols.delta_y = symbols.b - symbols.y;         symbols.m_  = d2f( (symbols.b - symbols.y)/(symbols.a - symbols.x) );         symbols.sx_ = d2f( symbols.x, true );         symbols.sy_ = d2f( symbols.y, true );         symbols.sa_ = d2f( symbols.a, true );         symbols.sb_ = d2f( symbols.b, true );                  /* colorize values x, y, a, b, and m differently for q and a */         symbols.q_m = colorized.ctns_format(['transparent', symbols.m_]);         symbols.a_m = colorized.ctns_format(['blue', symbols.m_]);                  symbols.q_x = colorized.ctns_format(['transparent', symbols.x]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);         symbols.q_sx = colorized.ctns_format(['transparent', symbols.sx_]);         symbols.q_sy = colorized.ctns_format(['transparent', symbols.sy_]);         symbols.q_sa = colorized.ctns_format(['transparent', symbols.sa_]);         symbols.q_sb = colorized.ctns_format(['transparent', symbols.sb_]);         symbols.q_delta_x = colorized.ctns_format(['transparent', symbols.delta_x]);         symbols.q_delta_y = colorized.ctns_format(['transparent', symbols.delta_y]);          symbols.a_x = colorized.ctns_format(['blue', symbols.x]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);         symbols.a_sx = colorized.ctns_format(['blue', symbols.sx_]);         symbols.a_sy = colorized.ctns_format(['blue', symbols.sy_]);         symbols.a_sa = colorized.ctns_format(['black', symbols.sa_]);         symbols.a_sb = colorized.ctns_format(['black', symbols.sb_]);         symbols.a_delta_x = colorized.ctns_format(['blue', symbols.delta_x]);         symbols.a_delta_y = colorized.ctns_format(['blue', symbols.delta_y]);                  symbols.eq_ = 'y - %s = %s ( x - %s )'.ctns_format([symbols.y, symbols.m_, symbols.x]).ctns_equation();          symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Given the line graph,<br/>state the Point-Slope Form of the line.  <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Select two points, $$(x_1,y_1)$$ and $$(x_2,y_2)$$, in the graph, and then calculate the slope of the line using these two points with the slope formula, $| \\textrm{slope} = m = \\frac{y_2-y_1}{x_2-x_1}.|$ Next, choose one of the two selected points, e.g., $$(x_1, y_1)$$, and then simply state the point-slope form using this chosen point and the calculated slope $$m$$,  $|y - y_1 = m (x - x_1).|$ <hr style="width:50%;clear:both;margin:2em auto;"> $$(x_1,y_1) = (${q_sx},${q_sy})$$<br/> $$(x_2,y_2) = (${q_sa},${q_sb})$$<br/><br/> $$m = \\frac{y_2-y_1}{x_2-x_1} = \\boxed{ \\frac{ (${q_sb})-(${q_sy}) }{ (${q_sa})-(${q_sx}) } } = \\boxed { \\frac{ ${q_delta_y} }{ ${q_delta_x} } } = \\boxed { ${q_m} }$$<br/><br/> $$y - \\boxed{ ${q_y} } = \\boxed{ ${q_m} }(x - ${q_x})$$<br/><br/> $$ \\boxed{ ${q_eq} } $$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4122_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_4122_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4122'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4122_SlideNo_1',                ablock           = '#answerblock_4122_SlideNo_1',                acblock          = '#answercommentaryblock_4122_SlideNo_1',                                rightblock       = '#rightblock_4122_SlideNo_1',                wrongblock       = '#wrongblock_4122_SlideNo_1',                undecidedblock   = '#undecidedblock_4122_SlideNo_1',                speech_F         = ($('#speech_F_4122_SlideNo_1').length == 0) ? null : $('#speech_F_4122_SlideNo_1').html(),                speech_B         = ($('#speech_B_4122_SlideNo_1').length == 0) ? null : $('#speech_B_4122_SlideNo_1').html(),                speech_1         = ($('#speech_1_4122_SlideNo_1').length == 0) ? null : $('#speech_1_4122_SlideNo_1').html(),                speech_2         = ($('#speech_2_4122_SlideNo_1').length == 0) ? null : $('#speech_2_4122_SlideNo_1').html(),                speech_3         = ($('#speech_3_4122_SlideNo_1').length == 0) ? null : $('#speech_3_4122_SlideNo_1').html(),                speech_4         = ($('#speech_4_4122_SlideNo_1').length == 0) ? null : $('#speech_4_4122_SlideNo_1').html(),                speech_5         = ($('#speech_5_4122_SlideNo_1').length == 0) ? null : $('#speech_5_4122_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_4122_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_4122_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_4122_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_4122_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_4122_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_4122_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_4122_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_4122_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_4122_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_4122_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_4122_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_4122_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_4122_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_4122_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_4122_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_4122_SlideNo_1',                grblock          = 'graphicblock_4122_SlideNo_1',                grblock_Q        = 'graphicblock_Q_4122_SlideNo_1',                grblock_A        = 'graphicblock_A_4122_SlideNo_1',                grblock_B        = 'graphicblock_B_4122_SlideNo_1',                grblock_C        = 'graphicblock_C_4122_SlideNo_1',                grblock_D        = 'graphicblock_D_4122_SlideNo_1',                grblock_E        = 'graphicblock_E_4122_SlideNo_1',                grblock_F        = 'graphicblock_F_4122_SlideNo_1',                                grblock_f        = (typeof tml_4122_SlideNo_1   !== 'undefined') ? tml_4122_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_4122_SlideNo_1 !== 'undefined') ? tml_Q_4122_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_4122_SlideNo_1 !== 'undefined') ? tml_A_4122_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_4122_SlideNo_1 !== 'undefined') ? tml_B_4122_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_4122_SlideNo_1 !== 'undefined') ? tml_C_4122_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_4122_SlideNo_1 !== 'undefined') ? tml_D_4122_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_4122_SlideNo_1 !== 'undefined') ? tml_E_4122_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_4122_SlideNo_1 !== 'undefined') ? tml_F_4122_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_4122',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4122_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_4122'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* random x, y, a, and b */         do {             symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.a = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();         } while ( symbols.x === symbols.a || symbols.y === symbols.b );                           symbols.m   = (symbols.b - symbols.y)/(symbols.a - symbols.x);         symbols.m_  = d2f( symbols.m );          symbols.eq = 'y - %s = %s ( x - %s )'.ctns_format([symbols.a, symbols.m_, symbols.b]).ctns_equation();                  q.push(' Given the Point-Slope Form $| ${eq}, |$ draw the graph. <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ')));                          [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_4122_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_4122_SlideNo_0
	What do these buy me? tag=Q_, masterid=4122, slideno=SlideNo_0
	'scriptblock_4122_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_4122_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4122_SlideNo_0'] = NUMBERS.symbols['scriptblock_4122_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4122_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4122_SlideNo_0'];
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
		 

/* Create a STANDARD pointp_
 */
window[PMGRAPHICID].pointp_ = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointq_
 */
window[PMGRAPHICID].pointq_ = window[PMGRAPHICID].board.create('point', [ function() { return st.a;}, function() { return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq_.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_68200 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_68200 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
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
function tml_A_4122_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_4122_SlideNo_0
	What do these buy me? tag=A_, masterid=4122, slideno=SlideNo_0
	'scriptblock_4122_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_4122_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4122_SlideNo_0'] = NUMBERS.symbols['scriptblock_4122_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4122_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4122_SlideNo_0'];
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
		 

/* Create a STANDARD pointp_
 */
window[PMGRAPHICID].pointp_ = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp_.moveTo([x,y],1000);

    });

/* Show coordinates for pointp_
 */
window[PMGRAPHICID].textp_ = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointp_.X();
		if ('' != '0') {
			return (x+parseFloat('0'));
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
		var y = window[PMGRAPHICID].pointp_.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointp_.X();
		var y = window[PMGRAPHICID].pointp_.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq_
 */
window[PMGRAPHICID].pointq_ = window[PMGRAPHICID].board.create('point', [ function() { return st.a;}, function() { return st.b;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq_.moveTo([x,y],1000);

    });

/* Show coordinates for pointq_
 */
window[PMGRAPHICID].textq_ = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointq_.X();
		if ('' != '0') {
			return (x+parseFloat('0'));
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
		var y = window[PMGRAPHICID].pointq_.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointq_.X();
		var y = window[PMGRAPHICID].pointq_.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_10903 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_10903 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
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
function tml_Q_4122_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_Q_4122_SlideNo_1
	What do these buy me? tag=Q_, masterid=4122, slideno=SlideNo_1
	'scriptblock_4122_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_4122_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4122_SlideNo_1'] = NUMBERS.symbols['scriptblock_4122_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4122_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4122_SlideNo_1'];
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
		 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}  
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_4122_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_4122_SlideNo_1
	What do these buy me? tag=A_, masterid=4122, slideno=SlideNo_1
	'scriptblock_4122_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_4122_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4122_SlideNo_1'] = NUMBERS.symbols['scriptblock_4122_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4122_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4122_SlideNo_1'];
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
		 

/* Create a STANDARD pointu
 */
window[PMGRAPHICID].pointu = window[PMGRAPHICID].board.create('point', [ function() { return st.a;}, function() { return st.b;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
		if ('' != '0') {
			return (x+parseFloat('0'));
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
		if ('' != '0') {
			return (y+parseFloat('0'));
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

/* Create a STANDARD pointv
 */
window[PMGRAPHICID].pointv = window[PMGRAPHICID].board.create('point', [ function() { return st.x;}, function() { return st.y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointv.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointv
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointv.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_12136 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointu, window[PMGRAPHICID].pointv] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_12136 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointu, window[PMGRAPHICID].pointv] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };