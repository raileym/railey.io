
  CTNS.QUIZ_SET["514dad3e069935e9b106f7d5f00cd4fb"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: GENERIC_MARKER */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID = 'ctns_GENERIC_MARKER';

  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center,
	    IMAGE = "514dad3e069935e9b106f7d5f00cd4fb",
	    urlParams;
	    
    // See https://davidwalsh.name/query-string-javascript
    //
    // I don't always want to include IMAGE when constructing
    // my quiz. Case in point, if I am using SHOWCASE to synthesize
    // the look  -- which is the source of my images -- then I don't
    // need to include an image within an image (think about that).
    //
    urlParams = new URLSearchParams(window.location.search);
    if ( urlParams.has('skipimage') ) {
    	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 1, null);
    } else {
    	slides = do_quiz(CTNS, questions, myRWU_factoryid, 'GENERIC_MARKER', 1, IMAGE);    
    }

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
       
        jQuery(newSlides).removeClass('ctns-hide');
        jQuery('hr.ctns-one-page').removeClass('ctns-hide-hr');

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
         showDivide:    true,
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
    key: "linearQ14-3",
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

    height: "300",
    width: "300",
    graph_height: "345",
    graph_width: "345",
    problem_height: "3292",
    problem_width: "704",
    
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
    slideCss: "max-width:1024px",
    frontCss: "",
    backCss: "",
    questionCss: "font-weight:normal;font-size:130%;text-align:left;",
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

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* I am toggling between quadrants so that my lines have more          * of a slant to them. Remember, this graph is meant to be           * instructional.          */         if ( [0, 1].ctns_rand() ) {              /* Go positive */             do {                 symbols.xHigh = [4, 3, 2, 1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [-1, -2, -3, -4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh + 1;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          } else {              /* Go negative */             do {                 symbols.xHigh = [-4, -3, -2, -1].ctns_rand();                 symbols.yHigh = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xLow = [1, 2, 3, 4].ctns_rand();                 symbols.yLow = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();                 symbols.xSide = symbols.xHigh - 1.2;                 symbols.ySide = (symbols.yHigh+symbols.yLow)/2;                 symbols.xBase = (symbols.xHigh+symbols.xLow)/2;                 symbols.yBase = symbols.yLow - 0.75;             } while( symbols.xHigh == symbols.xLow || symbols.yHigh == symbols.yLow || is_lt(symbols.yHigh, symbols.yLow) );          }          symbols.RISE = symbols.yHigh - symbols.yLow;         symbols.RUN = symbols.xHigh - symbols.xLow;                          q.push(' Consider the line shown below. <br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_A}) );          q.push(' <br>Mark two points on the line that are easy to identify on the grid.<br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_B}) );          q.push(' <br>Next, draw a horizontal line through your lowest point. This line will serve as the base of your triangle.<br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_C}) );          q.push(' <br>And now, draw a vertical line through your highest point. This line will serve as the side of your triangle.<br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_D}) );          q.push(' <br>And finally, shade in your triangle bounded by your line,  side, and base.<br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_E}) );          q.push(' <br>The red arrows show the RISE and RUN of your triangle.<br><br> ');      q.push( graphicblock( {"dim":"6", "gid":grblock_F}) );          q.push(' <br>Count the squares for your RISE ($$ \\normalsize \\color{red} ${RISE} $$) over RUN ($$ \\normalsize \\color{red} ${RUN} $$).  The RUN is negative if it runs from right-to-left.  $|\\Large \\frac{RISE}{RUN} = \\frac{ \\color{red}{ ${RISE} } }{ \\color{red}{ ${RUN} } } |$<br><br> ');      $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
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
window[PMGRAPHICID].pointtop = window[PMGRAPHICID].board.create('point', [ function() { return st.xHigh;}, function() { return st.yHigh;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].pointbottom = window[PMGRAPHICID].board.create('point', [ function() { return st.xLow ;}, function() { return st.yLow ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_98116 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_98116 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_37495 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_37495 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_49422 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_49422 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_52486 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_52486 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner] , { 
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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_8493 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_8493 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_72754 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_72754 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_25217 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointcorner, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_25217 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointcorner, window[PMGRAPHICID].pointtop] , { 
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
function tml_E_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_E_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=E_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_E_GENERIC_MARKER_SlideNo_0';
	
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
/* Create a basic segment
 */
window[PMGRAPHICID].segment_68147 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_68147 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_63550 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_63550 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_2238 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointcorner, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_2238 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointcorner, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 window[PMGRAPHICID].poly_45680   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} ); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	   
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_F_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_F_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=F_, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_F_GENERIC_MARKER_SlideNo_0';
	
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

/* Create a STANDARD pointside
 */
window[PMGRAPHICID].pointside = window[PMGRAPHICID].board.create('point', [ function() { return st.xSide;}, function() { return st.ySide ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointside
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointside.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointbase
 */
window[PMGRAPHICID].pointbase = window[PMGRAPHICID].board.create('point', [ function() { return st.xBase;}, function() { return st.yBase ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointbase
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointbase.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrun
 */
window[PMGRAPHICID].pointrun = window[PMGRAPHICID].board.create('point', [ function() { return st.RUN;},   function() { return 0        ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrun
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrun.moveTo([x,y],1000);

    });	 	  

/* Create a STANDARD pointrise
 */
window[PMGRAPHICID].pointrise = window[PMGRAPHICID].board.create('point', [ function() { return 0     ;},   function() { return st.RISE  ;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrise
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrise.moveTo([x,y],1000);

    });	 	  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_31326 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_31326 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointtop] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_86579 = window[PMGRAPHICID].pointbottom;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_86579 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointcorner.X()-window[PMGRAPHICID].pointbottom.X(); if (check == 0) return window[PMGRAPHICID].pointcorner.X(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.X()-0.1 : window[PMGRAPHICID].pointcorner.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointcorner.Y()-window[PMGRAPHICID].pointbottom.Y(); if (check == 0) return window[PMGRAPHICID].pointcorner.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointcorner.Y()-0.1 : window[PMGRAPHICID].pointcorner.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_86579 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_86579, window[PMGRAPHICID].endArrow_86579], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); 
window[PMGRAPHICID].startArrow_80405 = window[PMGRAPHICID].pointcorner;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_80405 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointtop.X()-window[PMGRAPHICID].pointcorner.X(); if (check == 0) return window[PMGRAPHICID].pointtop.X(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.X()-0.1 : window[PMGRAPHICID].pointtop.X()+0.1;}, 
	function() { var check = window[PMGRAPHICID].pointtop.Y()-window[PMGRAPHICID].pointcorner.Y(); if (check == 0) return window[PMGRAPHICID].pointtop.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointtop.Y()-0.1 : window[PMGRAPHICID].pointtop.Y()+0.1;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_80405 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_80405, window[PMGRAPHICID].endArrow_80405], {
	strokeWidth: 4,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'red'
	}); window[PMGRAPHICID].poly_87441   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointtop, window[PMGRAPHICID].pointbottom, window[PMGRAPHICID].pointcorner ] , { fillColor:'blue', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
window[PMGRAPHICID].textT0 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointside.X()+0; }, 
		function() { return window[PMGRAPHICID].pointside.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('rise', 'Y', (window[PMGRAPHICID].pointrise) ? window[PMGRAPHICID].pointrise : null,1,null) + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].textT0 center', 
	  cssClass:'window[PMGRAPHICID].textT0 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT1 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} (+' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT1 center', 
	  cssClass:'window[PMGRAPHICID].textT1 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].textT2 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointbase.X()+0; }, 
		function() { return window[PMGRAPHICID].pointbase.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\color{red} ( ' + PM_MATH.add_precision('run', 'X', (window[PMGRAPHICID].pointrun) ? window[PMGRAPHICID].pointrun : null,1,null) + ' )';
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
	  highlightCssClass:'window[PMGRAPHICID].textT2 center', 
	  cssClass:'window[PMGRAPHICID].textT2 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  /*
 * Expected Calculation on (top.x    GT bottom.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)    > ((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0));
		return (window[PMGRAPHICID].getXC1.value);
	}, window[PMGRAPHICID].getYC1 = function () {
		if ( window[PMGRAPHICID].getYC1.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC1.value = window[PMGRAPHICID].getXC1.value;
				return( window[PMGRAPHICID].getYC1.value );
			};
		window[PMGRAPHICID].getYC1.value = window[PMGRAPHICID].getXC1.value;
		return (window[PMGRAPHICID].getYC1.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on (bottom.x GT top.x   )
 */
/*
 * Calculate on C2: (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   )
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = (((window[PMGRAPHICID].pointbottom) ? window[PMGRAPHICID].pointbottom.X() : 0) > ((window[PMGRAPHICID].pointtop) ? window[PMGRAPHICID].pointtop.X() : 0)   );
		return (window[PMGRAPHICID].getXC2.value);
	}, window[PMGRAPHICID].getYC2 = function () {
		if ( window[PMGRAPHICID].getYC2.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC2.value = window[PMGRAPHICID].getXC2.value;
				return( window[PMGRAPHICID].getYC2.value );
			};
		window[PMGRAPHICID].getYC2.value = window[PMGRAPHICID].getXC2.value;
		return (window[PMGRAPHICID].getYC2.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].condition14028buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition14028buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition14028onTrue = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition14028buttonShow('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition14028buttonShow('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition14028buttonShow('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
window[PMGRAPHICID].condition14028onFalse = function () {
	if (window[PMGRAPHICID].pointT1)    { window[PMGRAPHICID].condition14028buttonHide('window[PMGRAPHICID].pointT1',   window[PMGRAPHICID].pointT1); }
	if (window[PMGRAPHICID].textT1)     { window[PMGRAPHICID].condition14028buttonHide('window[PMGRAPHICID].textT1',    window[PMGRAPHICID].textT1); }
	if (window[PMGRAPHICID].segmentT1)  { window[PMGRAPHICID].condition14028buttonHide('window[PMGRAPHICID].segmentT1', window[PMGRAPHICID].segmentT1); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition14028 = function () {
	var x = window[PMGRAPHICID].pointC1.X();
	if (window[PMGRAPHICID].pointC1.X()) {
		window[PMGRAPHICID].condition14028onTrue();
	} else {
		window[PMGRAPHICID].condition14028onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition14028);
window[PMGRAPHICID].updateCondition14028; 
window[PMGRAPHICID].condition57186buttonShow = function (ele_name, ele_value) {

	window[PMGRAPHICID].ConditionStatus[ele_name]=true;

	if ( !(window[PMGRAPHICID].ButtonStatus[ele_name]) ) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
	} else if (window[PMGRAPHICID].ButtonStatus[ele_name] == true) {
		/*var id = 'div#PMGRAPHICID_'+ele_value.id;*/
		var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
		jQuery(id).removeClass('mathjax_hide');
		ele_value.setDisplayRendNode(true);
		window[PMGRAPHICID].board.update(id);
        }	
};

window[PMGRAPHICID].condition57186buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition57186onTrue = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition57186buttonShow('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition57186buttonShow('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition57186buttonShow('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
window[PMGRAPHICID].condition57186onFalse = function () {
	if (window[PMGRAPHICID].pointT2)    { window[PMGRAPHICID].condition57186buttonHide('window[PMGRAPHICID].pointT2',   window[PMGRAPHICID].pointT2); }
	if (window[PMGRAPHICID].textT2)     { window[PMGRAPHICID].condition57186buttonHide('window[PMGRAPHICID].textT2',    window[PMGRAPHICID].textT2); }
	if (window[PMGRAPHICID].segmentT2)  { window[PMGRAPHICID].condition57186buttonHide('window[PMGRAPHICID].segmentT2', window[PMGRAPHICID].segmentT2); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition57186 = function () {
	var x = window[PMGRAPHICID].pointC2.X();
	if (window[PMGRAPHICID].pointC2.X()) {
		window[PMGRAPHICID].condition57186onTrue();
	} else {
		window[PMGRAPHICID].condition57186onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition57186);
window[PMGRAPHICID].updateCondition57186;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}	 	      };