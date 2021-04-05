
  CTNS.QUIZ_SET["34004218b23d233547829cb304c50218"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3277 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3277';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3277', 1);
	
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

	jQuery(".slide_3277").each( function() {do_center(this)} );

    do_force('3277');
    
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
    factoryid: '3277',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " A rational function that demonstrates one asymptote,  one zero, and one hole in its graph.     ",
    sponsor: "",
    figure: "",
    key: "rational-functionD7-2",
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
CTNS.NUMBERS.GID = 'quiz_3277';
CTNS.NUMBERS.equations['quiz_3277'] = [];
CTNS.NUMBERS.symbols['quiz_3277'] = CTNS.NUMBERS.symbols['quiz_3277'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3277_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3277_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3277'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3277_SlideNo_0',                ablock           = '#answerblock_3277_SlideNo_0',                acblock          = '#answercommentaryblock_3277_SlideNo_0',                                grblock          = 'graphicblock_3277_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3277_SlideNo_0',                grblock_A        = 'graphicblock_A_3277_SlideNo_0',                grblock_B        = 'graphicblock_B_3277_SlideNo_0',                grblock_C        = 'graphicblock_C_3277_SlideNo_0',                grblock_D        = 'graphicblock_D_3277_SlideNo_0',                                grblock_f        = (typeof tml_3277_SlideNo_0   !== 'undefined') ? tml_3277_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_3277_SlideNo_0 !== 'undefined') ? tml_Q_3277_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_3277_SlideNo_0 !== 'undefined') ? tml_A_3277_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_3277_SlideNo_0 !== 'undefined') ? tml_B_3277_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_3277_SlideNo_0 !== 'undefined') ? tml_C_3277_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_3277_SlideNo_0 !== 'undefined') ? tml_D_3277_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_3277',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3277_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3277'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 var dividendDegree,             divisorDegree,             isReducible,             divisor = [],             dividend = [];          divisorDegree = 2;         dividendDegree = 2;          symbols.holes = [];         for ( var i=0; is_lt(i, 1); i++ ) {                      do {                 var hole = [4, 3, 2, 1, -1, -2, -3, -4].ctns_rand();             } while ( symbols.holes.includes(hole) );                          symbols.holes.push( hole );                      }          symbols.zeros = [];         for ( var i=0; is_lt(i, dividendDegree-1); i++ ) {                      do {                 var zero = [4, 3, 2, 1, 0, -1, -2, -3, -4].ctns_rand();             } while ( symbols.zeros.includes(zero) || symbols.holes.includes(zero) );                          symbols.zeros.push( zero );                      }          /* One hole is expected from the beginning. */         symbols.asymptotes = [ ];         for ( var i=0; is_lt(i, divisorDegree - 1); i++ ) {                      do {                 var asymptote = [3, 2, 1, 0, -1, -2, -3].ctns_rand();             } while ( symbols.zeros.includes(asymptote) || symbols.holes.includes(asymptote) || symbols.asymptotes.includes(asymptote) );                          symbols.asymptotes.push( asymptote );                      }          symbols.asymptotes.sort();         symbols.zeros.sort();          /* Beautify the handling of a single x */         if ( symbols.zeros.includes(0) ) {             symbols.zeros.ctns_remove(0);             symbols.zeros.unshift(0);         }                          /* Beautify the handling of a single x */         if ( symbols.asymptotes.includes(0) ) {             symbols.asymptotes.ctns_remove(0);             symbols.asymptotes.unshift(0);         }                  symbols.dividend = [];         symbols.dividend_depressed = [];         symbols.zeros.forEach(function(zero, idx) {             if ( is_zero(zero) ) {                 symbols.dividend.push("x");                 symbols.dividend_depressed.push("x");             } else {                 symbols.dividend.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );                 symbols.dividend_depressed.push( "(%s)".ctns_format([ "x - %s".ctns_format([ zero ]).ctns_equation() ]) );             }         });                  symbols.divisor = [];         symbols.divisor_depressed = [];         symbols.asymptotes.forEach(function(asymptote, idx) {             if ( is_zero(asymptote) ) {                 symbols.divisor.push("x");                 symbols.divisor_depressed.push("x");             } else {                 symbols.divisor.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );                 symbols.divisor_depressed.push( "(%s)".ctns_format([ "x - %s".ctns_format([ asymptote ]).ctns_equation() ]) );             }         });          symbols.holes.forEach(function(hole, idx) {             if ( is_zero(hole) ) {                 symbols.dividend.unshift("x");                 symbols.divisor.unshift("x");             } else {                 symbols.dividend.unshift( "(%s)".ctns_format([ "x - %s".ctns_format([ hole ]).ctns_equation() ]) );                 symbols.divisor.unshift( "(%s)".ctns_format([ "x - %s".ctns_format([ hole ]).ctns_equation() ]) );             }         });          symbols.factor = "(%s)".ctns_format([ "x - %s".ctns_format([ symbols.holes[0] ]).ctns_equation() ]);         symbols.factor_cancelled = "\\bcancel{ (%s) }".ctns_format([ "x - %s".ctns_format([ symbols.holes[0] ]).ctns_equation() ]);         symbols.hole = symbols.holes[0];         symbols.zero = symbols.zeros[0];         symbols.asymptote = symbols.asymptotes[0];          symbols.numerator = symbols.dividend.join("");         symbols.denominator = symbols.divisor.join("");          symbols.numerator_cancelled   = symbols.factor_cancelled + symbols.dividend_depressed.join("");         symbols.denominator_cancelled = symbols.factor_cancelled + symbols.divisor_depressed.join("");          symbols.numerator_depressed   = symbols.dividend_depressed.join("");         symbols.denominator_depressed = symbols.divisor_depressed.join("");          symbols.problem = "\\frac{%s}{%s}".ctns_format([             symbols.dividend.join(""),              symbols.divisor.join("")]);          if ("undefined" === typeof symbols.getHoleX) {             symbols.getHoleX = (function(symbols) {                 return function(idx) {                     return symbols.holes[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getHoleY) {             symbols.getHoleY = (function(symbols) {                 return function(idx) {                     return MATHJS.eval( symbols.numerator_depressed + "/" + symbols.denominator_depressed, {x : symbols.holes[idx]} );                 };             })(symbols);         }          symbols.holeX = symbols.getHoleX(0);         symbols.holeY = d2f( symbols.getHoleY(0) );          if ("undefined" === typeof symbols.getZero) {             symbols.getZero = (function(symbols) {                 return function(idx) {                     return symbols.zeros[idx];                 };             })(symbols);         }          if ("undefined" === typeof symbols.getAsymptote) {             symbols.getAsymptote = (function(symbols) {                 return function(idx) {                     return symbols.asymptotes[idx];                 };             })(symbols);         }                              q.push(' Consider a rational function $$f$$ with two linear factors in its numerator  divided by two linear factors in its denominator, with one factor shared by both,  $| f(x) = ${problem}. |$  The function $$f$$ has one vertical asymptote,  one zero, and one hole in its graph. <hr>         ');            q.push(" A graph of $$f$$ shows its curve together with its one vertical asymptote at $$x=${asymptote}$$,  one zero at $$x=${zero}$$, and one hole at $$( ${holeX}, ${holeY} ).$$         ");          q.push( graphicblock( {"dim":"6", "gid":grblock}) );          $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3277_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_3277_SlideNo_0
	What do these buy me? tag=, masterid=3277, slideno=SlideNo_0
	'scriptblock_3277_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_3277_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_3277_SlideNo_0'] = NUMBERS.symbols['scriptblock_3277_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3277_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3277_SlideNo_0'];
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
			showZoom: true,
			showNavigation: true,
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
window[PMGRAPHICID].pointaT = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return  18;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointaB = window[PMGRAPHICID].board.create('point', [ function() { return st.getAsymptote(0);}, function() { return -18;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_70436 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_70436 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointaT, window[PMGRAPHICID].pointaB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
  
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph49648 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return (x-((window[PMGRAPHICID].pointz1) ? window[PMGRAPHICID].pointz1.X() : 0))/(x-((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0));}, 
            -18,
            18], 
            {strokeColor:'black',strokeWidth:5});	 	   

/* Create a STANDARD pointh
 */
window[PMGRAPHICID].pointh = window[PMGRAPHICID].board.create('point', [ function() { return st.getHoleX(0);}, function() { return st.getHoleY(0);} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'white', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointh.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointh
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointh.moveTo([x,y],1000);

    });	 	   
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	      };