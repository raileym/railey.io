
  CTNS.QUIZ_SET["b363c38688908fbf4884f1cb57659467"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2989 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2989';
  SCRIPTBLOCK_ID                = 'scriptblock_' + CTNS.NUMBERS.getRandomInt();
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2989', 1);
	
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

	jQuery(".slide_2989").each( function() {do_center(this)} );

    do_force('2989');
    
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
    factoryid: '2989',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ4-1",
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
]);
/* This values are set only once for any particular
 * quiz container.
 */
CTNS.NUMBERS.GID = 'quiz_2989';
CTNS.NUMBERS.equations[CTNS.NUMBERS.GID] = [];
CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] = CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] || {};

/*  * See citeations.php for this javascript. * SCRIPTBLOCK_ID is created at random with QuestionTemplate. * I could have created that value right here, btw.  */CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] = CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] || {};CTNS.NUMBERS.symbols['scriptblock_2989_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2989_SlideNo_0'] || {};(function($, CTNS, MATHJS, SCRIPTBLOCK_ID) {    CTNS.NUMBERS.equations[CTNS.NUMBERS.GID].push( (function(CTNS, GID, SCRIPTBLOCK_ID) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2989_SlideNo_0',                ablock           = '#answerblock_2989_SlideNo_0',                acblock          = '#answercommentaryblock_2989_SlideNo_0',                                grblock          = 'graphicblock_2989_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2989_SlideNo_0',                grblock_A        = 'graphicblock_A_2989_SlideNo_0',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols[SCRIPTBLOCK_ID],                zsymbols         = NUMBERS.symbols['scriptblock_2989_SlideNo_0'],                gsymbols         = NUMBERS.symbols[GID],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 /* random x, y, a, and b */         do {             symbols.x = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.y = [1, 2, 3, -1, -2, -3].ctns_rand();             symbols.b = [1, 2, 3, -1, -2, -3].ctns_rand();         } while ( symbols.x === symbols.u || symbols.y === symbols.v );                  symbols.m  = (symbols.y - symbols.b)/(symbols.x);         symbols.m_ = d2f( symbols.m );         symbols.b_ = symbols.b;                  symbols.eq_ = 'y = %s x + %s'.ctns_format([symbols.m_, symbols.b]).ctns_equation();          symbols.q_m  = colorized.ctns_format(['transparent', symbols.m_]);         symbols.q_b  = colorized.ctns_format(['transparent', symbols.b_]);         symbols.q_eq = colorized.ctns_format(['transparent', symbols.eq_]);          symbols.a_m  = colorized.ctns_format(['blue', symbols.m_]);         symbols.a_b  = colorized.ctns_format(['blue', symbols.b_]);         symbols.a_eq = colorized.ctns_format(['blue', symbols.eq_]);          /* Build the QUESTION */         q.push(' Given the line graph,<br/>state the Point-Slope Form of the line.<br/><br/> $$ y = \\boxed{ ${q_m} } \\cdot x + \\boxed{ ${q_b} } $$<br/><br/> $$ \\boxed{ ${q_eq} } $$ <br/><br/><button class="ctns-button ctns-toggle-answer">Show Answer</button> ');               /* BTW, the answer-version is derived from the question-version. Do not          * forget to switch hint hide to hint show          */         $(qblock).html(tex({'symbols':symbols}, q.join(' ')));         $(ablock).html(tex({'symbols':symbols}, q.join(' ').replace(/q_/g,'a_')));                  if (typeof window[grblock_Q] !== 'undefined' && typeof window[grblock_Q].board !== 'undefined' ) {             window[grblock_Q].board.update();         }         if (typeof window[grblock_A] !== 'undefined' && typeof window[grblock_A].board !== 'undefined' ) {             window[grblock_A].board.update();         }             }})(CTNS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID));           })( jQuery, CTNS, window.math, SCRIPTBLOCK_ID);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_Q_2989_SlideNo_0 (CTNS, NUMBERS, GID, SCRIPTBLOCK_ID) {
	
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
	tml_Q_2989_SlideNo_0
	What do these buy me? tag=Q_, masterid=2989, slideno=SlideNo_0
	'scriptblock_2989_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_Q_2989_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols[SCRIPTBLOCK_ID] = NUMBERS.symbols[SCRIPTBLOCK_ID] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols[SCRIPTBLOCK_ID];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols[SCRIPTBLOCK_ID];

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
window[PMGRAPHICID].pointq_ = window[PMGRAPHICID].board.create('point', [ function() { return    0;}, function() { return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_23385 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_23385 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_Q_2989_SlideNo_0
 
 *********************************************************************
 *********************************************************************
 */

/* SCRIPTBLOCK_ID is set earlier within QuestionTemplate */
tml_Q_2989_SlideNo_0(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_A_2989_SlideNo_0 (CTNS, NUMBERS, GID, SCRIPTBLOCK_ID) {
	
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
	tml_A_2989_SlideNo_0
	What do these buy me? tag=A_, masterid=2989, slideno=SlideNo_0
	'scriptblock_2989_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_A_2989_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols[SCRIPTBLOCK_ID] = NUMBERS.symbols[SCRIPTBLOCK_ID] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols[SCRIPTBLOCK_ID];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols[SCRIPTBLOCK_ID];

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
window[PMGRAPHICID].pointq_ = window[PMGRAPHICID].board.create('point', [ function() { return    0;}, function() { return st.b;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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
window[PMGRAPHICID].segment_43922 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_43922 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp_, window[PMGRAPHICID].pointq_] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_A_2989_SlideNo_0
 
 *********************************************************************
 *********************************************************************
 */

/* SCRIPTBLOCK_ID is set earlier within QuestionTemplate */
tml_A_2989_SlideNo_0(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID);
     };