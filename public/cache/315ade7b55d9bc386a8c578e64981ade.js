
  CTNS.QUIZ_SET["315ade7b55d9bc386a8c578e64981ade"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1798 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1798';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1798', 2);
	
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

	jQuery(".slide_1798").each( function() {do_center(this)} );

    do_force('1798');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         2,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '1798',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "synth-divisionD3-1a",
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
    factoryid: '1798',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Synthesize a rational function showing the terms in order from the highest degree to the lowest.     ",
    sponsor: "",
    figure: "",
    key: "synth-divisionD3-1b",
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
CTNS.NUMBERS.GID = 'quiz_1798';
CTNS.NUMBERS.equations['quiz_1798'] = [];
CTNS.NUMBERS.symbols['quiz_1798'] = CTNS.NUMBERS.symbols['quiz_1798'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1798_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1798_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1798'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1798_SlideNo_0',                ablock           = '#answerblock_1798_SlideNo_0',                acblock          = '#answercommentaryblock_1798_SlideNo_0',                                grblock          = 'graphicblock_1798_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1798_SlideNo_0',                grblock_A        = 'graphicblock_A_1798_SlideNo_0',                grblock_B        = 'graphicblock_B_1798_SlideNo_0',                grblock_C        = 'graphicblock_C_1798_SlideNo_0',                grblock_D        = 'graphicblock_D_1798_SlideNo_0',                                grblock_f        = (typeof tml_1798_SlideNo_0   !== 'undefined') ? tml_1798_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_1798_SlideNo_0 !== 'undefined') ? tml_Q_1798_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_1798_SlideNo_0 !== 'undefined') ? tml_A_1798_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_1798_SlideNo_0 !== 'undefined') ? tml_B_1798_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_1798_SlideNo_0 !== 'undefined') ? tml_C_1798_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_1798_SlideNo_0 !== 'undefined') ? tml_D_1798_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_1798',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1798_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_1798'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             var i = 0,         divisor_degree,         dividend_degree;          divisor_degree = [1, 2].ctns_rand();     dividend_degree = divisor_degree + [1, 2].ctns_rand();      gsymbols.dividend_raw = [ [1, 2, 4].ctns_rand() ];     while ( is_lt(i++, dividend_degree) ) {         gsymbols.dividend_raw.push( [-4, -2, -1, 1, 2, 4].ctns_rand() );     }          i=0;     gsymbols.divisor_raw = [ [1, 2, 4].ctns_rand() ];     while ( is_lt(i++, divisor_degree) ) {         gsymbols.divisor_raw.push( [-4, -2, -1, 1, 2, 4].ctns_rand() );     }                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1798_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_1798_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1798'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1798_SlideNo_1',                ablock           = '#answerblock_1798_SlideNo_1',                acblock          = '#answercommentaryblock_1798_SlideNo_1',                                grblock          = 'graphicblock_1798_SlideNo_1',                grblock_Q        = 'graphicblock_Q_1798_SlideNo_1',                grblock_A        = 'graphicblock_A_1798_SlideNo_1',                grblock_B        = 'graphicblock_B_1798_SlideNo_1',                grblock_C        = 'graphicblock_C_1798_SlideNo_1',                grblock_D        = 'graphicblock_D_1798_SlideNo_1',                                grblock_f        = (typeof tml_1798_SlideNo_1   !== 'undefined') ? tml_1798_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_1798_SlideNo_1 !== 'undefined') ? tml_Q_1798_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_1798_SlideNo_1 !== 'undefined') ? tml_A_1798_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_1798_SlideNo_1 !== 'undefined') ? tml_B_1798_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_1798_SlideNo_1 !== 'undefined') ? tml_C_1798_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_1798_SlideNo_1 !== 'undefined') ? tml_D_1798_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_1798',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1798_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_1798'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             gsymbols.tab = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;margin-bottom:2em;",             title:"original problem",              useSteps:true,              steps:0,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});                      /* Carry out long division to completion */     gsymbols.tab2 = tables.synthDiv({             css:"ctns-synth-division",             style: "margin-top:2em;margin-bottom:2em;",             title:"original problem",              useSteps:false,              dividend:gsymbols.dividend_raw,              divisor:gsymbols.divisor_raw});                      gsymbols.dividend = gsymbols.tab.dividend.join("+").ctns_equation();     gsymbols.divisor = gsymbols.tab.divisor.join("+").ctns_equation();      gsymbols.dividendDegree = gsymbols.tab.dividend.length - 1;     gsymbols.divisorDegree = gsymbols.tab.divisor.length - 1;          gsymbols.dividendHighestDegree = gsymbols.tab.dividend[0];     gsymbols.divisorHighestDegree = gsymbols.tab.divisor[0];      gsymbols.problem = "\\frac{%s}{%s}".ctns_format([         gsymbols.tab.dividend.join("+").ctns_equation(),          gsymbols.tab.divisor.join("+").ctns_equation()]);              q.push(' Given a reducible rational function $| f(x) = ${problem}, |$ re-write the dividend and divisor into the proper form for long-division of polynomials. <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');      a.push(' Given a reducible rational function $| f(x) = ${problem}, |$ re-write the dividend and divisor into the proper form for long-division of polynomials. <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');      a.push(gsymbols.tab.q);      a.push(' <hr>Be certain to order the terms from highest to lowest according to their degrees. And if any term has a zero coefficient, use zero as a placeholder for that term. ');      a.push(' <hr>For the curious, the function $$f$$ is reduced by long  division as shown below. ');      a.push(gsymbols.tab2.q);          gsymbols.reduced = gsymbols.tab2.reduced;      a.push(' <hr>The reduced function $$f$$ is given by the expression, ');      switch( gsymbols.dividendDegree ) {              case 4 :         case 5 :                       a.push(' $| \\scriptsize{ \\begin{aligned} f(x) &= ${problem} \\\\[10pt]  &= ${reduced}. \\end{aligned} } |$            ');             break;              case 3 :                       a.push(' $| \\small{ \\begin{aligned} f(x) &= ${problem} \\\\[10pt]  &= ${reduced}. \\end{aligned} } |$            ');             break;              default:         case 2 :                      a.push(' $| \\normalsize{ \\begin{aligned} f(x) &= ${problem} \\\\[10pt]  &= ${reduced}. \\end{aligned} } |$            ');             break;      }                               a.push(exposeTextarea({         title:"Dividend",         css:"margin:1em;margin-top:3em;",         data:gsymbols.tab2.dividend_wolfram     }));      a.push(exposeTextarea({         title:"Divisor",         css:"margin:1em",         data:gsymbols.tab2.divisor_wolfram     }));      $(qblock).html(tex({'symbols':gsymbols}, q.join(' ')));     $(ablock).html(tex({'symbols':gsymbols}, a.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};