
  CTNS.QUIZ_SET["e98e181010969ddafde9ba08077e5c75"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2281 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2281';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2281', 1);
	
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

	jQuery(".slide_2281").each( function() {do_center(this)} );

    do_force('2281');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         1,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '2281',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Use FOIL to multiply two binomials.     ",
    sponsor: "",
    figure: "",
    key: "binomialD2-1",
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
]);
/* This values are set only once for any particular
 * quiz container.
 */
CTNS.NUMBERS.GID = 'quiz_2281';
CTNS.NUMBERS.equations['quiz_2281'] = [];
CTNS.NUMBERS.symbols['quiz_2281'] = CTNS.NUMBERS.symbols['quiz_2281'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2281_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2281_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2281'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2281_SlideNo_0',                ablock           = '#answerblock_2281_SlideNo_0',                acblock          = '#answercommentaryblock_2281_SlideNo_0',                                grblock          = 'graphicblock_2281_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2281_SlideNo_0',                grblock_A        = 'graphicblock_A_2281_SlideNo_0',                grblock_B        = 'graphicblock_B_2281_SlideNo_0',                grblock_C        = 'graphicblock_C_2281_SlideNo_0',                grblock_D        = 'graphicblock_D_2281_SlideNo_0',                                grblock_f        = (typeof tml_2281_SlideNo_0   !== 'undefined') ? tml_2281_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2281_SlideNo_0 !== 'undefined') ? tml_Q_2281_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2281_SlideNo_0 !== 'undefined') ? tml_A_2281_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2281_SlideNo_0 !== 'undefined') ? tml_B_2281_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2281_SlideNo_0 !== 'undefined') ? tml_C_2281_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2281_SlideNo_0 !== 'undefined') ? tml_D_2281_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2281',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2281_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2281'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             isReducible,             dividend = [];          dividendDegree = 2;          symbols.lead = [];         symbols.red_lead = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 var lead = ['x'].ctns_rand();             } while ( false /*symbols.lead.includes(lead)*/ );                          symbols.lead.push( lead );             symbols.red_lead.push( "\\textcolor{red}{%s}".ctns_format([lead]) );                      }          symbols.zero = [];         symbols.red_zero = [];         for ( var i=0; is_lt(i, dividendDegree); i++ ) {                      do {                 /*var zero = ['+a+b', '-a-b'].ctns_rand();*/                 /*var zero = ['+4a+4b', '+3a+3b', '+2a+2b', '+a+b', '-a-b', '-2a-2b', '-3a-3b', '-4a-4b'].ctns_rand();*/                 /*var zero = ['+4y', '+3y', '+2y', '+y', '-y', '-2y', '-3y', '-4y'].ctns_rand();*/                 var zero = ['+4', '+3', '+2', '+1', '-1', '-2', '-3', '-4'].ctns_rand();             } while ( symbols.zero.includes(zero) );                          symbols.zero.push( zero );             symbols.red_zero.push( "\\textcolor{red}{%s}".ctns_format([zero]) );                      }          /* choosing to be tricky here: I am abusing the forEach. */         symbols.dividend = [];         [0, 1].forEach(function(idx) {             symbols.dividend.push( "(%s)".ctns_format([ "%s %s".ctns_format([ symbols.lead[idx], symbols.zero[idx] ]) ]) );         });                  symbols.problem = symbols.dividend.join("");                  q.push(' Use the F-O-I-L method to find the product of two binomials $| ${problem}. |$ <hr>         ');          symbols.like_terms = [];                  symbols.first = [];         symbols.first.push( "(%s %s)".ctns_format([ symbols.red_lead[0], symbols.zero[0] ]) );         symbols.first.push( "(%s %s)".ctns_format([ symbols.red_lead[1], symbols.zero[1] ]) );                  symbols.first_problem = "%s".ctns_format([ symbols.first.join("") ]);         symbols.first_title = "\\textcolor{red}{First}-O-I-L";         symbols.like_terms.push( "(%s) * (%s)".ctns_format( [symbols.lead[0], symbols.lead[1]] ).ctns_expand() );         symbols.first_result = "\\textcolor{red}{%s}".ctns_format([ symbols.like_terms.slice(-1)[0] ]);                  q.push(' Begin with the first rule $| ${first_title}, |$ which says multiply together the first term in each of the two binomials, $| ${first_problem}, |$ to obtain the product, $| ${first_result}. |$         ');          /* Cannot use ctns_equation because of the formatting */         symbols.outside = [];         symbols.outside.push( "(%s %s)".ctns_format([ symbols.red_lead[0], symbols.zero[0]     ]) );         symbols.outside.push( "(%s %s)".ctns_format([ symbols.lead[1],     symbols.red_zero[1] ]) );                  symbols.outside_problem = "%s".ctns_format([ symbols.outside.join("") ]);         symbols.outside_title = "F-\\textcolor{red}{Outside}-I-L";         symbols.like_terms.push( "(%s) * (%s)".ctns_format( [symbols.lead[0], symbols.zero[1]] ).ctns_expand() );         symbols.outside_result = "\\textcolor{red}{%s}".ctns_format([ symbols.like_terms.slice(-1)[0] ]);          q.push(' <hr> Next, use the second rule $| ${outside_title}, |$ which says multiply the two outermost terms in each of the two binonmials, $| ${outside_problem}, |$   to obtain the product, $| ${outside_result}. |$         ');          symbols.inside = [];         symbols.inside.push( "(%s %s)".ctns_format([ symbols.lead[0],     symbols.red_zero[0] ]) );         symbols.inside.push( "(%s %s)".ctns_format([ symbols.red_lead[1], symbols.zero[1]     ]) );                          symbols.inside_problem = "%s".ctns_format([ symbols.inside.join("") ]);         symbols.inside_title = "F-O-\\textcolor{red}{Inside}-L";         /* Order on multiply is significant: helps with x y ordering */         symbols.like_terms.push( "(%s) * (%s)".ctns_format( [symbols.lead[1], symbols.zero[0]] ).ctns_expand() );         symbols.inside_result = "\\textcolor{red}{%s}".ctns_format([ symbols.like_terms.slice(-1)[0] ]);         /*symbols.inside_result = "\\textcolor{red}{%s}".ctns_format([ "(%s) * (%s)".ctns_format([symbols.lead[1], symbols.zero[0]]).ctns_expand() ]);*/          q.push(' <hr> Now use the third rule $| ${inside_title}, |$ which says multiply the two innermost terms in each of the two binonmials, $| ${inside_problem}, |$   to obtain the product, $| ${inside_result}. |$         ');          symbols.last = [];         symbols.last.push( "(%s %s)".ctns_format([ symbols.lead[0], symbols.red_zero[0] ]) );         symbols.last.push( "(%s %s)".ctns_format([ symbols.lead[1], symbols.red_zero[1] ]) );                          symbols.last_problem = "%s".ctns_format([ symbols.last.join("") ]);         symbols.last_title = "F-O-I-\\textcolor{red}{Last} ";         symbols.like_terms.push( "(%s) * (%s)".ctns_format( [symbols.zero[0], symbols.zero[1]] ).ctns_expand() );         symbols.last_result = "\\textcolor{red}{%s}".ctns_format([ symbols.like_terms.slice(-1)[0] ]);         /*symbols.last_result = "\\textcolor{red}{%s}".ctns_format([ "(%s) * (%s)".ctns_format([symbols.zero[0], symbols.zero[1]]).ctns_expand() ]);*/          q.push(' <hr> And finally, use the fourth rule $| ${last_title}, |$ which says multiply the last two terms in each of the two binonmials, $| ${last_problem}, |$   to obtain the product, $| ${last_result}. |$         ');          symbols.sum = symbols.like_terms.join("+").ctns_equation();          symbols.sum_reduced = symbols.like_terms.join("+").ctns_expand();          q.push(' <hr> In the end, you have four terms total as results from each of the four rules,  $| ${sum}. |$  Combining like-terms yields a final result,  $| ${sum_reduced}. |$         ');          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zero[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }            symbols.problem = symbols.dividend.join("");          symbols.expanded = symbols.dividend.join("").ctns_expand();                      q.push(' <hr> In summary, $|  \\begin{aligned} f(x) =& ${problem} \\\\[10pt]      =& ${sum_reduced} \\end{aligned} |$         ');          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);};