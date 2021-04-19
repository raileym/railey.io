
  CTNS.QUIZ_SET["d6741c6794847f014e4c03d7442ce978"] = function () {
  
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
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 1);
	
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
         count:         1,
         shuffleSlides: false,
         showDivide:    false,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: 'GENERIC_MARKER',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " Given a quadratic function, find the axis of symmetry, the vertex, and two points on the graph.     ",
    sponsor: "",
    figure: "",
    key: "quadQ3-1",
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
CTNS.NUMBERS.GID = 'quiz_GENERIC_MARKER';
CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'] = [];
CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] = CTNS.NUMBERS.symbols['quiz_GENERIC_MARKER'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             do {         symbols.a = [-3, -2, -1, 1, 2, 3].ctns_rand();         symbols.b = symbols.a*2*[-1, -2, 0, 1, 2].ctns_rand();         symbols.c = [-2, -1, 0, 1, 2].ctns_rand();          symbols.h = symbols.b / (-2 * symbols.a),         symbols.k = symbols.a * Math.pow(symbols.h, 2) + symbols.b * symbols.h + symbols.c;     } while (is_lt(symbols.h,-5) || is_lt(symbols.k,-2) || is_gt(symbols.h,5) || is_gt(symbols.k,2) );      symbols.h_ = d2f( symbols.h );     symbols.k_ = d2f( symbols.k );     symbols.h_double = 2*symbols.h;      var b_div_a = d2f( symbols.b / symbols.a ),         half_b_div_a = d2f( symbols.b / (2 * symbols.a ) ),         half_b_div_a_squared = d2f( Math.pow(symbols.b / (2 * symbols.a ), 2) ),         half_b_div_a_neg = d2f( -1 * symbols.b / (2 * symbols.a ) ),         combined_constant = d2f( symbols.c - symbols.a * Math.pow(symbols.b / (2 * symbols.a ), 2) );      if (symbols.b !== 0) {         symbols.EQ  = "f(x)= %s x ^2 + %s x + %s".ctns_format([symbols.a, symbols.b, symbols.c]).ctns_equation();         symbols.chosen_x = 0;     } else {         symbols.EQ  = "f(x)= %s x ^2 + %s".ctns_format([symbols.a, symbols.c]).ctns_equation();         symbols.chosen_x = 1;     }      symbols.EQ2 = "f(x)= %s (x ^2 + %s x) + %s".ctns_format([symbols.a, b_div_a, symbols.c]).ctns_equation();     symbols.EQ3 = "f(x)= %s (x ^2 + %s x + %s - %s) + %s".ctns_format([symbols.a, b_div_a, half_b_div_a_squared, half_b_div_a_squared, symbols.c]).ctns_equation();     symbols.EQ4 = "f(x)= %s (x ^2 + %s x + %s) - %s (%s) + %s".ctns_format([symbols.a, b_div_a, half_b_div_a_squared, symbols.a, half_b_div_a_squared, symbols.c]).ctns_equation();     symbols.EQ5 = "f(x)= %s (x + %s)^2 + %s".ctns_format([symbols.a, half_b_div_a, combined_constant]).ctns_equation();     symbols.vertex   = "(%s, %s)".ctns_format([half_b_div_a_neg, combined_constant]).ctns_equation();     symbols.factored = "x(%s x + %s)".ctns_format([symbols.a, symbols.b]).ctns_equation();          symbols.f_of_minus_one = symbols.a * Math.pow(-1, 2) + symbols.b * (-1) + symbols.c;     symbols.f_of_plus_one  = symbols.a * Math.pow( 1, 2) + symbols.b * ( 1) + symbols.c;     symbols.f_of_minus_one_ = d2f( symbols.f_of_minus_one );     symbols.f_of_plus_one_  = d2f( symbols.f_of_plus_one );      q.push(' For example, given a quadratic function in standard form  $|${EQ},|$ the leading coefficients from the standard form are the three constants $|a=${a}, b=${b}, c=${c}.|$ The <span>axis of symmetry</span> is the vertical line $|x = \\frac{-b}{2a} \\textrm{ or } \\color{red}x = ${h_}.|$ ');          q.push( graphicblock( {"dim":"6", "gid":grblock_A}) );      q.push(' <br>and the <span>vertex</span> of the graph is the point $|(\\frac{-b}{2a}, f(\\frac{-b}{2a})) = (${h_}, f(${h_})) = \\color{blue}{(${h_}, ${k_})}.|$ ');      q.push( graphicblock( {"dim":"6", "gid":grblock_B}) );      if (symbols.b === 0) {          symbols.p1_x = -1;         symbols.p1_y = symbols.a * Math.pow(symbols.p1_x, 2) + symbols.b * (symbols.p1_x) + symbols.c;         symbols.p2_x = 1;         symbols.p2_y = symbols.a * Math.pow(symbols.p2_x, 2) + symbols.b * (symbols.p2_x) + symbols.c;          q.push(' <br>Because $$b = 0$$, choose <span>two points:</span> one point for $$x = ${p1_x}$$,  $|(${p1_x}, f(${p1_x})) = \\color{blue}{(${p1_x},${p1_y})},|$ and the other point for $$x = ${p2_x},$$ $|(${p2_x}, f(${p2_x})) = \\color{blue}{(${p2_x},${p2_y})}.|$ ');     } else {         symbols.p1_x = 0;         symbols.p1_y = symbols.c;         symbols.p2_x = symbols.h_double;         symbols.p2_y = symbols.c;          q.push(' <br>Because $$b \\ne 0$$, choose two points: the $$y$$-intercept as one point, $|(0, f(0)) = \\color{blue}{(0, ${c})}|$ and the reflection of the $$y$$-intercept across the axis of symmetry as the other, $| (\\frac{-b}{a}, ${c}) = \\color{blue}{(${h_double}, ${c})}.|$ ');     }      q.push( graphicblock( {"dim":"6", "gid":grblock_C}) );      q.push(' <br>Drawing a parabola through these points yields a good graph of the quadratic function $$f$$.<br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_D}) );      $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_A_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=A_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_GENERIC_MARKER_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
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
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_45249 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_45249 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
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
function tml_B_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_B_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=B_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_B_GENERIC_MARKER_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
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
		 

/* Create a STANDARD pointv
 */
window[PMGRAPHICID].pointv = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return st.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_9868 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_9868 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
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
function tml_C_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_C_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=C_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_C_GENERIC_MARKER_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
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
		 

/* Create a STANDARD pointv
 */
window[PMGRAPHICID].pointv = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return st.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp1
 */
window[PMGRAPHICID].pointp1 = window[PMGRAPHICID].board.create('point', [ function() { return st.p1_x;}, function() { return st.p1_y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp1.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp1
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp1.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointp2
 */
window[PMGRAPHICID].pointp2 = window[PMGRAPHICID].board.create('point', [ function() { return st.p2_x;}, function() { return st.p2_y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp2.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp2
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp2.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_20210 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_20210 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
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
function tml_D_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_D_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=D_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_D_GENERIC_MARKER_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'];
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
		 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.a;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.b;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return st.c;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointv
 */
window[PMGRAPHICID].pointv = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return st.k;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp1
 */
window[PMGRAPHICID].pointp1 = window[PMGRAPHICID].board.create('point', [ function() { return st.p1_x;}, function() { return st.p1_y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp1.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp1
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp1.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointp2
 */
window[PMGRAPHICID].pointp2 = window[PMGRAPHICID].board.create('point', [ function() { return st.p2_x;}, function() { return st.p2_y;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp2.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp2
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp2.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointtop
 */
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return  6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_14747 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_14747 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph91542 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0)*Math.pow(x, 2)+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0)*x + ((window[PMGRAPHICID].pointc) ? window[PMGRAPHICID].pointc.X() : 0);}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5});	 	  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	      };