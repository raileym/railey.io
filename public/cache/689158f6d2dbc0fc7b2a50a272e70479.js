
  CTNS.QUIZ_SET["689158f6d2dbc0fc7b2a50a272e70479"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3480 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3480';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3480', 2);
	
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

	jQuery(".slide_3480").each( function() {do_center(this)} );

    do_force('3480');
    
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
    factoryid: '3480',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A rational function that demonstrates two zeros in the numerator, and three asymptotes in the  denominator, along with its graph,  not to include any holes.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD6-1",
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
    factoryid: '3480',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A rational function that demonstrates two zeros in the numerator, and three asymptotes in the  denominator, along with its graph,  not to include any holes.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD6-2",
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
CTNS.NUMBERS.GID = 'quiz_3480';
CTNS.NUMBERS.equations['quiz_3480'] = [];
CTNS.NUMBERS.symbols['quiz_3480'] = CTNS.NUMBERS.symbols['quiz_3480'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3480_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3480_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3480'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3480_SlideNo_0',                ablock           = '#answerblock_3480_SlideNo_0',                acblock          = '#answercommentaryblock_3480_SlideNo_0',                                grblock          = 'graphicblock_3480_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3480_SlideNo_0',                grblock_A        = 'graphicblock_A_3480_SlideNo_0',                grblock_B        = 'graphicblock_B_3480_SlideNo_0',                grblock_C        = 'graphicblock_C_3480_SlideNo_0',                grblock_D        = 'graphicblock_D_3480_SlideNo_0',                                grblock_f        = (typeof tml_3480_SlideNo_0   !== 'undefined') ? tml_3480_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3480_SlideNo_0 !== 'undefined') ? tml_Q_3480_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3480_SlideNo_0 !== 'undefined') ? tml_A_3480_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3480_SlideNo_0 !== 'undefined') ? tml_B_3480_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3480_SlideNo_0 !== 'undefined') ? tml_C_3480_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3480_SlideNo_0 !== 'undefined') ? tml_D_3480_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3480',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3480_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3480'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree  = 3;         dividendDegree = 2;          /* No holes, thank you */         symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [6, 4, 2, 0, -2, -4, -6].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }                  symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6].ctns_rand();             } while ( symbols.zeros.includes(zero) || symbols.asymptotes.includes(zero) );                          symbols.zeros.push( zero );                      }          /*         symbols.zeros = [-1, -3];         symbols.asymptotes = [-4, -2, 2];         */                  symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  /* Beautify the handling of a single x */         if ( symbols.zeros.includes(0) ) {             symbols.zeros.ctns_remove(0);             symbols.zeros.unshift(0);         }                  symbols.dividend = [];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            /* See https://mathjs.org/docs/reference/functions/parse.html */         var eq = "(%s) / (%s)".ctns_format([symbols.dividend.join("*"), symbols.divisor.join("*")]),             node = MATHJS.parse(eq),             code = node.compile();         symbols.eq = (function(code) {             return function(x) {                 return code.eval( {'x':x} );             };         })(code);            symbols.numerator   = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          symbols.zero = "x \\in [ %s ]".ctns_format([ symbols.zeros.join(",") ]);         symbols.asymptote = "x \\in [ %s ]".ctns_format([ symbols.asymptotes.join(",") ]);                  q.push(' Consider a rational function $$f$$ with the product of two first-degree terms in the numerator,  divided by the product of three first-degree terms in the denominator,  $| f(x) = ${problem}. |$ What makes the function $$f$$ interesting is where both its numerator and denominator go to zero. <hr>         ');          q.push(' To find where the denominator of $$f$$ goes to zero, set the denominator to zero,  $| ${denominator} = 0, |$ and then solve for values of $$x$$ that satisfy this equation. <br/><br/> Here, the answer is $$ ${asymptote}. $$ <hr>         ');              q.push(' Similarly, to find where the numerator of $$f$$ goes to zero, set the numerator to zero,  $| ${numerator} = 0, |$ and then solve for values of $$x$$ that satisfy this equation. <br/><br/> Here, the answer is $$ ${zero}. $$ <hr>         ');              q.push(" As shown below, a partial graph of $$f$$  shows a vertical asymptote at each zero of $$f$$'s denominator, one asymptote for every $$ ${asymptote}, $$ and one zero for every $$ ${zero}. $$ <br/><br/>         ");          q.push( graphicblock( {"dim":"6", "gid":grblock_A}) );          q.push(" <hr> A complete graph of $$f$$ shows the curve together with it's vertical asymptotes and zeros. <br/><br/>         ");          q.push( graphicblock( {"dim":"6", "gid":grblock_B}) );          q.push(exposeTextarea({             title:"Equation used for the graph of f(x)",             css:"margin:1em;margin-top:3em;font-size:70%;",             data:eq         }));              $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3480_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3480_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3480'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3480_SlideNo_1',                ablock           = '#answerblock_3480_SlideNo_1',                acblock          = '#answercommentaryblock_3480_SlideNo_1',                                grblock          = 'graphicblock_3480_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3480_SlideNo_1',                grblock_A        = 'graphicblock_A_3480_SlideNo_1',                grblock_B        = 'graphicblock_B_3480_SlideNo_1',                grblock_C        = 'graphicblock_C_3480_SlideNo_1',                grblock_D        = 'graphicblock_D_3480_SlideNo_1',                                grblock_f        = (typeof tml_3480_SlideNo_1   !== 'undefined') ? tml_3480_SlideNo_1   : null,                grblock_Q_f      = (typeof tml_Q_3480_SlideNo_1 !== 'undefined') ? tml_Q_3480_SlideNo_1 : null,                grblock_A_f      = (typeof tml_A_3480_SlideNo_1 !== 'undefined') ? tml_A_3480_SlideNo_1 : null,                grblock_B_f      = (typeof tml_B_3480_SlideNo_1 !== 'undefined') ? tml_B_3480_SlideNo_1 : null,                grblock_C_f      = (typeof tml_C_3480_SlideNo_1 !== 'undefined') ? tml_C_3480_SlideNo_1 : null,                grblock_D_f      = (typeof tml_D_3480_SlideNo_1 !== 'undefined') ? tml_D_3480_SlideNo_1 : null,                numbers          = NUMBERS,                gid              = 'quiz_3480',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3480_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3480'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree  = 3;         dividendDegree = 2;          /* No holes, thank you */         symbols.asymptotes = [];         for ( var i=0; is_lt(i, divisorDegree); i++ ) {                      do {                 var asymptote = [6, 4, 2, 0, -2, -4, -6].ctns_rand();             } while ( symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }                  symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var zero = [6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6].ctns_rand();             } while ( symbols.zeros.includes(zero) || symbols.asymptotes.includes(zero) );                          symbols.zeros.push( zero );                      }          /*         symbols.zeros = [-1, -3];         symbols.asymptotes = [-4, -2, 2];         */                  symbols.zeros.sort();         symbols.asymptotes.sort();                  /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  /* Beautify the handling of a single x */         if ( symbols.zeros.includes(0) ) {             symbols.zeros.ctns_remove(0);             symbols.zeros.unshift(0);         }                  symbols.dividend = [];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");             } else if ( 1 === dividendDegree) {                 symbols.dividend.push( "x - %s".ctns_format([ zero ]).ctns_equation() );             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");             } else if ( 1 === divisorDegree) {                 symbols.divisor.push( "x - %s".ctns_format([ asymptote ]).ctns_equation() );             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            /* See https://mathjs.org/docs/reference/functions/parse.html */         var eq = "(%s) / (%s)".ctns_format([symbols.dividend.join("*"), symbols.divisor.join("*")]),             node = MATHJS.parse(eq),             code = node.compile();         symbols.eq = (function(code) {             return function(x) {                 return code.eval( {'x':x} );             };         })(code);            symbols.numerator   = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          symbols.zero = "x \\in [ %s ]".ctns_format([ symbols.zeros.join(",") ]);         symbols.asymptote = "x \\in [ %s ]".ctns_format([ symbols.asymptotes.join(",") ]);                  q.push(' Consider a rational function $$f$$ with the product of two first-degree terms in the numerator,  divided by the product of three first-degree terms in the denominator,  $| f(x) = ${problem}. |$ <hr>         ');          q.push( graphicblock( {"dim":"6", "gid":grblock}) );          q.push(exposeTextarea({             title:"Equation used for the graph of f(x)",             css:"margin:1em;margin-top:3em;font-size:70%;",             data:eq         }));              $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_3480_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_3480_SlideNo_0
	What do these buy me? tag=A_, masterid=3480, slideno=SlideNo_0
	'scriptblock_3480_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_3480_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3480_SlideNo_0'] = NUMBERS.symbols['scriptblock_3480_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3480_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3480_SlideNo_0'];
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
			boundingbox: [-10,10,10,-10] ,
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
		 

/* Create a STANDARD pointz1
 */
window[PMGRAPHICID].pointz1 = window[PMGRAPHICID].board.create('point', [ function() { return st.getZero(0); }, function() { return  0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz1.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointz1
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz1.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointz2
 */
window[PMGRAPHICID].pointz2 = window[PMGRAPHICID].board.create('point', [ function() { return st.getZero(1); }, function() { return  0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz2.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointz2
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz2.moveTo([x,y],1000);

    });	 	   

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
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_95905 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_95905 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
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
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_57215 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_57215 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointc
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcT
 */
window[PMGRAPHICID].pointcT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcB
 */
window[PMGRAPHICID].pointcB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_27986 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointcT, window[PMGRAPHICID].pointcB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_27986 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointcT, window[PMGRAPHICID].pointcB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	   
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_B_3480_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_B_3480_SlideNo_0
	What do these buy me? tag=B_, masterid=3480, slideno=SlideNo_0
	'scriptblock_3480_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_B_3480_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3480_SlideNo_0'] = NUMBERS.symbols['scriptblock_3480_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3480_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3480_SlideNo_0'];
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
			boundingbox: [-10,10,10,-10] ,
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
		 

/* Create a STANDARD pointz1
 */
window[PMGRAPHICID].pointz1 = window[PMGRAPHICID].board.create('point', [ function() { return st.getZero(0); }, function() { return  0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz1.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointz1
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz1.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointz2
 */
window[PMGRAPHICID].pointz2 = window[PMGRAPHICID].board.create('point', [ function() { return st.getZero(1); }, function() { return  0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz2.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointz2
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz2.moveTo([x,y],1000);

    });	 	   

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
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_61856 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_61856 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
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
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_45775 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_45775 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointc
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcT
 */
window[PMGRAPHICID].pointcT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcB
 */
window[PMGRAPHICID].pointcB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_92049 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointcT, window[PMGRAPHICID].pointcB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_92049 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointcT, window[PMGRAPHICID].pointcB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph65592 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return st.eq(x);}, 
            -10,
            10], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	       
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3480_SlideNo_1 (symbols, gsymbols, NUMBERS) {
	
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
	tml_3480_SlideNo_1
	What do these buy me? tag=, masterid=3480, slideno=SlideNo_1
	'scriptblock_3480_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_3480_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3480_SlideNo_1'] = NUMBERS.symbols['scriptblock_3480_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3480_SlideNo_1'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3480_SlideNo_1'];
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
			boundingbox: [-10,10,10,-10] ,
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
		 

/* Create a STANDARD pointz1
 */
window[PMGRAPHICID].pointz1 = window[PMGRAPHICID].board.create('point', [ function() { return st.getZero(0); }, function() { return  0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz1.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointz1
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz1.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointz2
 */
window[PMGRAPHICID].pointz2 = window[PMGRAPHICID].board.create('point', [ function() { return st.getZero(1); }, function() { return  0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz2.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointz2
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointz2.moveTo([x,y],1000);

    });	 	   

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
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_96813 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_96813 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
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
window[PMGRAPHICID].pointbT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(1);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_55880 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_55880 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbT, window[PMGRAPHICID].pointbB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return  0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointc
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointc.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcT
 */
window[PMGRAPHICID].pointcT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return  10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcT.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcT
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcT.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointcB
 */
window[PMGRAPHICID].pointcB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(2);}, function() { return -10;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointcB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointcB.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_50076 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointcT, window[PMGRAPHICID].pointcB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_50076 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointcT, window[PMGRAPHICID].pointcB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph326 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return st.eq(x);}, 
            -10,
            10], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	      };