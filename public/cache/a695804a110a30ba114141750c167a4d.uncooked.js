
  CTNS.QUIZ_SET["a695804a110a30ba114141750c167a4d"] = function () {
  
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
    description: " This example demonstrates a parabola with the p-value, with its focus and directrix shown.     ",
    sponsor: "",
    figure: "",
    key: "QF-parabolaQ1-3",
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
    question: " <div class='build-a-graph' style='height:502px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "500",
    width: "500",
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

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_GENERIC_MARKER_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_GENERIC_MARKER'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_GENERIC_MARKER_SlideNo_0',                ablock           = '#answerblock_GENERIC_MARKER_SlideNo_0',                acblock          = '#answercommentaryblock_GENERIC_MARKER_SlideNo_0',                                rightblock       = '#rightblock_GENERIC_MARKER_SlideNo_0',                wrongblock       = '#wrongblock_GENERIC_MARKER_SlideNo_0',                undecidedblock   = '#undecidedblock_GENERIC_MARKER_SlideNo_0',                speech_F         = ($('#speech_F_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_F_GENERIC_MARKER_SlideNo_0').html(),                speech_B         = ($('#speech_B_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_B_GENERIC_MARKER_SlideNo_0').html(),                speech_1         = ($('#speech_1_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_1_GENERIC_MARKER_SlideNo_0').html(),                speech_2         = ($('#speech_2_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_2_GENERIC_MARKER_SlideNo_0').html(),                speech_3         = ($('#speech_3_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_3_GENERIC_MARKER_SlideNo_0').html(),                speech_4         = ($('#speech_4_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_4_GENERIC_MARKER_SlideNo_0').html(),                speech_5         = ($('#speech_5_GENERIC_MARKER_SlideNo_0').length == 0) ? null : $('#speech_5_GENERIC_MARKER_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_GENERIC_MARKER_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_GENERIC_MARKER_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_GENERIC_MARKER_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_GENERIC_MARKER_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_GENERIC_MARKER_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_GENERIC_MARKER_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_GENERIC_MARKER_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_GENERIC_MARKER_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_GENERIC_MARKER_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_GENERIC_MARKER_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_GENERIC_MARKER_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_GENERIC_MARKER_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_GENERIC_MARKER_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_GENERIC_MARKER_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_GENERIC_MARKER_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_GENERIC_MARKER_SlideNo_0',                grblock          = 'graphicblock_GENERIC_MARKER_SlideNo_0',                grblock_Q        = 'graphicblock_Q_GENERIC_MARKER_SlideNo_0',                grblock_A        = 'graphicblock_A_GENERIC_MARKER_SlideNo_0',                grblock_B        = 'graphicblock_B_GENERIC_MARKER_SlideNo_0',                grblock_C        = 'graphicblock_C_GENERIC_MARKER_SlideNo_0',                grblock_D        = 'graphicblock_D_GENERIC_MARKER_SlideNo_0',                grblock_E        = 'graphicblock_E_GENERIC_MARKER_SlideNo_0',                grblock_F        = 'graphicblock_F_GENERIC_MARKER_SlideNo_0',                                grblock_f        = (typeof tml_GENERIC_MARKER_SlideNo_0   !== 'undefined') ? tml_GENERIC_MARKER_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_Q_GENERIC_MARKER_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_A_GENERIC_MARKER_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_B_GENERIC_MARKER_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_C_GENERIC_MARKER_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_D_GENERIC_MARKER_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_E_GENERIC_MARKER_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_GENERIC_MARKER_SlideNo_0 !== 'undefined') ? tml_F_GENERIC_MARKER_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_GENERIC_MARKER',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_GENERIC_MARKER_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_GENERIC_MARKER'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             symbols.p = 2;     symbols.a = 1/(4*symbols.p);     symbols.h = 0,     symbols.k = 0;                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_GENERIC_MARKER_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_GENERIC_MARKER_SlideNo_0
	What do these buy me? tag=, masterid=GENERIC_MARKER, slideno=SlideNo_0
	'scriptblock_GENERIC_MARKER_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_GENERIC_MARKER_SlideNo_0';
	
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
			.attr('class', 'jxgbox  pm-no-border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:400px; ; height:400px; ;');
		
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
			boundingbox: [-8,8,8,-4] ,
			axis: true,
			grid: false,
			showZoom: false,
			showNavigation: false,
			keepaspectratio:false,
			showCopyright:false,
			});
		
		window[PMGRAPHICID].board.suspendUpdate();
	
		window[PMGRAPHICID].textYAXIS = window[PMGRAPHICID].board.create('text', [0.5, 7.5, ''], {fixed:true, strokeOpacity:1});
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [7.5, -0.5, ''], {fixed:true, strokeOpacity:1});
		 

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

/* Create a STANDARD pointaI
 */
window[PMGRAPHICID].pointaI = window[PMGRAPHICID].board.create('point', [ function() { return 1/st.a;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaI.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointaI
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointaI.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointh
 */
window[PMGRAPHICID].pointh = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointk
 */
window[PMGRAPHICID].pointk = window[PMGRAPHICID].board.create('point', [ function() { return st.k;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointk.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointk
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointk.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointv
 */
window[PMGRAPHICID].pointv = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return st.k;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.p;}, function() { return 0;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointp
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointp.moveTo([x,y],1000);

    });  

/* Create a STANDARD pointF
 */
window[PMGRAPHICID].pointF = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return st.k + st.p;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointF.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointF
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointF.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointD
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return st.k - st.p;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointD.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointD
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointD.moveTo([x,y],1000);

    }); 
/* Create a MATCH pointleftD with xcoord set
 */
window[PMGRAPHICID].pointleftD = window[PMGRAPHICID].board.create('point', [ -8, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create a MATCH pointrightD with xcoord set
 */
window[PMGRAPHICID].pointrightD = window[PMGRAPHICID].board.create('point', [ 8, function() { return window[PMGRAPHICID].pointD.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'});  

/* Create a STANDARD pointleftF
 */
window[PMGRAPHICID].pointleftF = window[PMGRAPHICID].board.create('point', [ function() { return st.h-2*st.p;}, function() { return st.k + st.p;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointleftF.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointleftF
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointleftF.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointrightF
 */
window[PMGRAPHICID].pointrightF = window[PMGRAPHICID].board.create('point', [ function() { return st.h+2*st.p;}, function() { return st.k + st.p;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrightF.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointrightF
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointrightF.moveTo([x,y],1000);

    });  
/* Create INLINE pointt1 between two points, window[PMGRAPHICID].pointleftF and window[PMGRAPHICID].pointF
 */
window[PMGRAPHICID].pointt1 = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointleftF.X()+(0.5)*(window[PMGRAPHICID].pointF.X()-window[PMGRAPHICID].pointleftF.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointleftF.Y()+(0.5)*(window[PMGRAPHICID].pointF.Y()-window[PMGRAPHICID].pointleftF.Y());
		}], { fixed:true, visible:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointt2 between two points, window[PMGRAPHICID].pointrightF and window[PMGRAPHICID].pointF
 */
window[PMGRAPHICID].pointt2 = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointrightF.X()+(0.5)*(window[PMGRAPHICID].pointF.X()-window[PMGRAPHICID].pointrightF.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointrightF.Y()+(0.5)*(window[PMGRAPHICID].pointF.Y()-window[PMGRAPHICID].pointrightF.Y());
		}], { fixed:true, visible:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointt3 between two points, window[PMGRAPHICID].pointF and window[PMGRAPHICID].pointv
 */
window[PMGRAPHICID].pointt3 = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointF.X()+(0.5)*(window[PMGRAPHICID].pointv.X()-window[PMGRAPHICID].pointF.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointF.Y()+(0.5)*(window[PMGRAPHICID].pointv.Y()-window[PMGRAPHICID].pointF.Y());
		}], { fixed:true, visible:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointt4 between two points, window[PMGRAPHICID].pointv and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointt4 = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointv.X()+(0.5)*(window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointv.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointv.Y()+(0.5)*(window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointv.Y());
		}], { fixed:true, visible:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_55160 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointleftD, window[PMGRAPHICID].pointrightD] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_55160 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointleftD, window[PMGRAPHICID].pointrightD] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'blue',
	dash:3,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_37867 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointF, window[PMGRAPHICID].pointv] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_37867 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointF, window[PMGRAPHICID].pointv] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_75232 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointv] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_75232 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointD, window[PMGRAPHICID].pointv] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_70643 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointleftF, window[PMGRAPHICID].pointrightF] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_70643 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointleftF, window[PMGRAPHICID].pointrightF] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph10287 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return 1/(4*st.p)*Math.pow(x-st.h,2)+st.k;}, 
            -20,
            20], 
            {strokeColor:'black',strokeWidth:5});  /* Create Text */
window[PMGRAPHICID].text97880 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointt1.X()+-0.25; }, 
		function() { return window[PMGRAPHICID].pointt1.Y()+1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:80%\'><span style=\'color:blue\'>2p</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text97880 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text81574 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointt2.X()+-0.25; }, 
		function() { return window[PMGRAPHICID].pointt2.Y()+1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:80%\'><span style=\'color:blue\'>2p</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text81574 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text62412 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointt3.X()+0.25; }, 
		function() { return window[PMGRAPHICID].pointt3.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:80%\'><span style=\'color:blue\'>p</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text62412 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text92950 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointt4.X()+0.25; }, 
		function() { return window[PMGRAPHICID].pointt4.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:80%\'><span style=\'color:blue\'>p</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text92950 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text97602 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointF.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointF.Y()+2; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:80%\'><span style=\'color:blue\'>Focus (0,p)</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text97602 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text99586 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+4; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+1; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:80%\'><span style=\'color:blue\'>Directrix</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text99586 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text83974 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+4; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.25; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<span style=\'font-size:100%\'><span style=\'color:blue\'>y = -p</span></span>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text83974 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };