
  CTNS.QUIZ_SET["75edf14a77b5aa1b8638d80b8cf298d6"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: GENERIC_MARKER */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_GENERIC_MARKER';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 3);
	
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

	jQuery(".slide_GENERIC_MARKER").each( function() {do_center(this)} );

    do_force('GENERIC_MARKER');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         3,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "Malcolm R (Orlando)",
    figure: "",
    key: "linearQ9-1",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div>     ",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ9-2",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div>     ",
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
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ9-3",
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
    question: " <!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_GENERIC_MARKER';
CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'] = [];
CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] = CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var eq; /* temp eq variable */              /* random m, x, y, x_, and y_ */         symbols.m  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.m_ = symbols.m;         symbols.x_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y_ = [1, 2, 3, -1, -2, -3].ctns_rand();                  /* colorize values a, b, and m differently for q and a */         symbols.q_m = colorized.ctns_format(['transparent', symbols.m_]);         symbols.q_x = colorized.ctns_format(['transparent', symbols.x_]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y_]);         symbols.a_m = colorized.ctns_format(['blue', symbols.m_]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x_]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y_]);                  symbols.eq  = 'y - %s = %s( x - %s)'.ctns_format([symbols.y,  symbols.m,  symbols.x ]).ctns_equation();         symbols.eq_ = 'y - %s = %s( x - %s)'.ctns_format([symbols.y_, symbols.m_, symbols.x_]).ctns_equation();          symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${x_}, ${y_} )$$ and is parallel to the line,  $| ${eq} .|$  <br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line. Here, you are given the slope $$m = ${m}$$ from the equation of a parallel line and a point $$( ${x_}, ${y_} )$$ on the desired line. <br/><br/>Because parallel lines have the same slope, you already have the slope $$m = ${m_}$$ of the desired line. With the point $$( ${x_}, ${y_} )$$ and the new slope $$m = ${m_}$$, you now have everything  necessary to express your new equation in point-slope form.  <hr style="width:50%;clear:both;margin:2em auto;"> From point-slope-form $$y - y_1 = m (x - x_1)$$<br/><br/> with $$m = \\boxed { ${q_m} }$$ and $$(x_1,y_1) = ( ${q_x}, ${q_y} ),$$ then<br/><br/> $$y - \\boxed { ${q_y} } = \\boxed { ${q_m} } (x - \\boxed{ ${q_x} })$$<br/><br/> $$ \\boxed{ ${q_eq} } $$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_1',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_1',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_1',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_1',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_1',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_1',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_1').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_1').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_1').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_1').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_1').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_1').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_1').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_1').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_1',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_1',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_1',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_1',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_1',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_1',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_1',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_1',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_1',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_1',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_1',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_1',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_1',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_1',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_1',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_1',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_1',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_1',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_1',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_1',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_1',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_1',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_1',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_1',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_1   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_1 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_1 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_1 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var eq; /* temp eq variable */              /* random m, x, y, x_, and y_ */         symbols.A  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.B  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.C  = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.A_ = symbols.A;         symbols.B_ = symbols.B;         symbols.x_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.C_ = (symbols.A_)*(symbols.x_) + (symbols.B_)*(symbols.y_);                  /* colorize values a, b, and m differently for q and a */         symbols.q_A = colorized.ctns_format(['transparent', symbols.A_]);         symbols.q_B = colorized.ctns_format(['transparent', symbols.B_]);         symbols.q_C = colorized.ctns_format(['transparent', symbols.C_]);         symbols.q_x = colorized.ctns_format(['blue', symbols.x_]);         symbols.q_y = colorized.ctns_format(['blue', symbols.y_]);         symbols.a_A = colorized.ctns_format(['blue', symbols.A_]);         symbols.a_B = colorized.ctns_format(['blue', symbols.B_]);         symbols.a_C = colorized.ctns_format(['blue', symbols.C_]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x_]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y_]);                  symbols.EQ   = '%s x + %s y = %s'.ctns_format([symbols.A,  symbols.B,  symbols.C ]).ctns_equation();         symbols.EQ_  = '%s x + %s y = %s'.ctns_format([symbols.A_, symbols.B_, 'C']).ctns_equation();         symbols.EQ__ = '%s x + %s y = %s'.ctns_format([symbols.A_, symbols.B_, symbols.C_]).ctns_equation();          symbols.q_EQ = colorized.ctns_format(['transparent', symbols.EQ__]);         symbols.a_EQ = colorized.ctns_format(['blue', symbols.EQ__]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${x_}, ${y_} )$$ and is parallel to the line, <br/><br/> $| ${EQ}. |$  <br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line.  In the question above, the given line is expressed in general form, $|A x + B y = C,|$ with $$A=${A}$$ and $$B=${B}$$. Using the general form makes finding $$m$$ easy: parallel lines share common values for $$A$$ and $$B$$  because they share a common slope $$m = - \\frac{A}{B}.$$ Parallel lines differ only in their values for $$C$$, which is calculated using $$A$$ and $$B$$ and a point on the particular line. <hr style="width:50%;clear:both;margin:2em auto;"> The general form $$A x + B y = C$$  with $$A = ${A}$$ and $$B = ${B}$$ yields the form of the desired line,  $| ${EQ_}. |$ Calculate $$C$$ using this form and the point $$(x,y) = ( ${q_x}, ${q_y} ),$$ $|( ${A} ) \\cdot ( ${q_x} ) + ( ${B} ) \\cdot ( ${q_y} ) = \\boxed{ ${q_C} }.|$ The final answer is simply, $|\\boxed{ ${q_EQ} }.|$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_2'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_2',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_2',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_2',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_2',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_2',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_2',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_2').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_2').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_2').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_2').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_2').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_2').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_2').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_2').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_2',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_2',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_2',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_2',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_2',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_2',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_2',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_2',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_2',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_2',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_2',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_2',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_2',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_2',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_2',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_2',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_2',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_2',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_2',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_2',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_2',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_2',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_2',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_2',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_2   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_2   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_2 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_2 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_2 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_2 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_2 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_2 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_2 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_2 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_2'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* random m, b, x, and y */         symbols.m = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();                  /* compute and format the negative reciprocal and the value          * for the y-intercept b          */         symbols.m_ = symbols.m;         symbols.b_ = d2f(symbols.y - symbols.x*symbols.m_); /* this is how the equation works out, btw */                           /* colorize values x, y, b, and m differently for q and a */         symbols.q_m = colorized.ctns_format(['transparent', symbols.m_]);         symbols.q_b = colorized.ctns_format(['transparent', symbols.b_]);         symbols.q_x = colorized.ctns_format(['transparent', symbols.x]);         symbols.q_y = colorized.ctns_format(['transparent', symbols.y]);          symbols.a_m = colorized.ctns_format(['blue', symbols.m_]);         symbols.a_b = colorized.ctns_format(['blue', symbols.b_]);         symbols.a_x = colorized.ctns_format(['blue', symbols.x]);         symbols.a_y = colorized.ctns_format(['blue', symbols.y]);                  symbols.eq  = 'y = %s x + %s'.ctns_format([symbols.m,  symbols.b ]).ctns_equation();         symbols.eq_ = 'y = %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Find the particular equation of a line that contains the point $$( ${x}, ${y} )$$ and is parallel to the line,  $| ${eq} .|$  <br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> <button class="ctns-button ctns-toggle-hint">Hint</button> <div class="ctns-hint ctns-hide"> Finding the equation of a line requires knowing its slope $$m$$ and one point $$(x, y)$$ on the line. Here, you are given the slope $$m = ${m}$$ from the equation of a parallel line and a point $$( ${x}, ${y} )$$ on the desired line. <br/><br/>Here, you know the slope of desired line directly as $$m = ${m_}$$ because parallel lines share a common slope. With the point $$( ${x}, ${y} )$$ and the slope $$m = ${m_}$$, you now have everything  necessary to express your new equation in slope-intercept form.  <hr style="width:50%;clear:both;margin:2em auto;"> From slope-intercept form $$y = m x +b$$, <br/> you get $$y - mx = b$$ or rather<br/><br/> $$b = y - m x.$$ <br/><br/> With $$m = \\boxed { ${q_m} }$$ and $$(x,y) = \\boxed { ( ${q_x}, ${q_y} ) },$$ then<br/><br/> $$b = \\boxed{ ${q_y} } - \\boxed { ${q_m} } \\cdot \\boxed { ${q_x} } = \\boxed { ${q_b} }.$$<br/><br/> With $$y = m x +b$$, then<br/><br/> $$y = \\boxed { ${q_m} } x + \\boxed{ ${q_b} }$$ or<br/><br/> $$ \\boxed{ ${q_eq} } $$ </div> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_').replace(/ctns-hint ctns-hide/,'ctns-hint ctns-show')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};