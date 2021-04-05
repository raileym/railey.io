
  CTNS.QUIZ_SET["ee01323401c270bc4d4ea76aaff615fe"] = function (PYTHON_ID) {
  
  CTNS_ID                       = "ctns_"+PYTHON_ID;
  FACTORY_ID                    = PYTHON_ID;
  SCRIPTBLOCK_ID                = "scriptblock_" + CTNS.NUMBERS.getRandomInt();
  CTNS.GRAPHICBLOCK_ID          = "graphicblock_";
  CTNS.FACTORY_ID               = PYTHON_ID;
  QUESTIONBLOCK_ID              = "questionblock_"         + FACTORY_ID;
  ANSWERBLOCK_ID                = "answerblock_"           + FACTORY_ID;
  GRAPHICBLOCK_ID               = "graphicblock_TAGFACTORYID_SLIDENO";
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, factoryid, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, factoryid, 1);
	
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

	jQuery(".slide_"+factoryid).each( function() {do_center(this)} );

    do_force(factoryid);
    
  })(CTNS, 
     FACTORY_ID,
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         1,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factory_id: FACTORY_ID,
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    atag: "",
    qtag: "",
    description: " This graph demonstrates a random horizontal line, as in 'The graph of a constant function is a horizontal line.' Values for m and b vary -- m is zero.     ",
    sponsor: "",
    figure: "",
    key: "linearQ11-4",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_'+ FACTORY_ID;
CTNS.NUMBERS.equations[CTNS.NUMBERS.GID] = [];
CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] = CTNS.NUMBERS.symbols[CTNS.NUMBERS.GID] || {};

/*  * See citeations.php for this javascript. * SCRIPTBLOCK_ID is created at random with QuestionTemplate. * I could have created that value right here, btw.  */CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] = CTNS.NUMBERS.symbols[SCRIPTBLOCK_ID] || {};(function($, CTNS, MATHJS, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID) {    CTNS.NUMBERS.equations[CTNS.NUMBERS.GID].push( (function(CTNS, GID, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                qblock_Q         = '#questionblock_Q_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                qblock_A         = '#questionblock_A_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                                ablock           = '#answerblock_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                ablock_Q         = '#answerblock_Q_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                ablock_A         = '#answerblock_A_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                                grblock          = 'graphicblock_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                grblock_Q        = 'graphicblock_Q_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                grblock_A        = 'graphicblock_A_FACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID),                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols[SCRIPTBLOCK_ID],                gsymbols         = NUMBERS.symbols[GID],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.m = 0;         symbols.b = [-1, -2, -3, 1, 2, 3].ctns_rand();                              if (typeof window[grblock] !== "undefined" && typeof window[grblock].board !== "undefined" ) {             window[grblock].board.update();         }             }})(CTNS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID));           })( jQuery, CTNS, window.math, SCRIPTBLOCK_ID, QUESTIONBLOCK_ID, ANSWERBLOCK_ID, GRAPHICBLOCK_ID, FACTORY_ID);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_653041809 (CTNS, NUMBERS, GID, SCRIPTBLOCK_ID, FACTORY_ID, GRAPHICBLOCK_ID) {
	
    /* Temporarily, I am leaving javascript variable GRAPHICBLOCK_ID
     * in place, until I decide how to handle specializing
     * this invocation. I want to have multiple copies of the
     * same graphic without the overhead of creating custom 
     * javascript each time.
     */
	
    var PMGRAPHICID,
	    boardTarget,
	    boardHandle,
	    panelTarget,
	    panelHandle,
	    monitorTitle,
	    PM_MATH_ERROR,
	    title_line,
	    html;
        
	PMGRAPHICID   = 'graphicblock_TAGFACTORYID_SlideNo_0'.replace('FACTORYID', FACTORY_ID).replace('TAG','');
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

	/* Not working. I am having a coding problem here.
	metaTarget    = BROKEN ... '#' + GID + ' ' + '.slide-0 graphicblock_' + '' + CTNS.FACTORY_ID + '.meta';
	metaHandle    = BROKEN ... jQuery(boardHandle).parent().children('.meta');

	jQuery(metaTarget).removeClass('graphicblock_' + '' + CTNS.FACTORY_ID).addClass(PMGRAPHICID);
	*/
	
    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    /*
	var PMGRAPHICID   = 'graphicblock_' + '' + CTNS.FACTORY_ID,
	    boardTitle    = PMGRAPHICID,
	    monitorTitle  = PMGRAPHICID+'monitor',
	    panelTitle    = PMGRAPHICID+'panel',
	    PM_MATH_ERROR = 'PM_MATH_ERROR',
	    title_line    = '',
	    html;
    */
    
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
			boundingbox: [-5,5,5,-5] ,
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
		 

/* Create a STANDARD pointm
 */
window[PMGRAPHICID].pointm = window[PMGRAPHICID].board.create('point', [ function() { return st.m;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointm
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointm.moveTo([x,y],1000);

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
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph46853 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointm) ? window[PMGRAPHICID].pointm.X() : 0)*x+((window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb.X() : 0);}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. 653041809
 
 *********************************************************************
 *********************************************************************
 */

/* SCRIPTBLOCK_ID is set earlier within QuestionTemplate */
tml_653041809(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID, SCRIPTBLOCK_ID, FACTORY_ID, GRAPHICBLOCK_ID);
     };