
  CTNS.QUIZ_SET["8cab7f34cc496484dd9ef5526238f947"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 1200 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_1200';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '1200', 1);
	
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

	jQuery(".slide_1200").each( function() {do_center(this)} );

    do_force('1200');
    
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
    factoryid: '1200',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "linearQ15-10",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:352px;width:352px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div> ",
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
CTNS.NUMBERS.GID = 'quiz_1200';
CTNS.NUMBERS.equations['quiz_1200'] = [];
CTNS.NUMBERS.symbols['quiz_1200'] = CTNS.NUMBERS.symbols['quiz_1200'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_1200_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_1200_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_1200'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_1200_SlideNo_0',                ablock           = '#answerblock_1200_SlideNo_0',                acblock          = '#answercommentaryblock_1200_SlideNo_0',                                grblock          = 'graphicblock_1200_SlideNo_0',                grblock_Q        = 'graphicblock_Q_1200_SlideNo_0',                grblock_A        = 'graphicblock_A_1200_SlideNo_0',                grblock_B        = 'graphicblock_B_1200_SlideNo_0',                grblock_C        = 'graphicblock_C_1200_SlideNo_0',                grblock_D        = 'graphicblock_D_1200_SlideNo_0',                grblock_E        = 'graphicblock_E_1200_SlideNo_0',                grblock_F        = 'graphicblock_F_1200_SlideNo_0',                                grblock_f        = (typeof tml_1200_SlideNo_0   !== 'undefined') ? tml_1200_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_1200_SlideNo_0 !== 'undefined') ? tml_Q_1200_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_1200_SlideNo_0 !== 'undefined') ? tml_A_1200_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_1200_SlideNo_0 !== 'undefined') ? tml_B_1200_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_1200_SlideNo_0 !== 'undefined') ? tml_C_1200_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_1200_SlideNo_0 !== 'undefined') ? tml_D_1200_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_1200_SlideNo_0 !== 'undefined') ? tml_E_1200_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_1200_SlideNo_0 !== 'undefined') ? tml_F_1200_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_1200',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_1200_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_1200'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];         /* See Make.php for this dummy entry. A custom script will override this entry. */             [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_1200_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_1200_SlideNo_0
	What do these buy me? tag=, masterid=1200, slideno=SlideNo_0
	'scriptblock_1200_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_1200_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_1200_SlideNo_0'] = NUMBERS.symbols['scriptblock_1200_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_1200_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_1200_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
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
			boundingbox: [-8,8,8,-8] ,
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
		 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-4,-3], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [3,4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointB
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointC
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [-5,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointC.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointC
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointC.moveTo([x,y],1000);

    });  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAB = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAB = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointE.setGliderPosition(0.8);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointD on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:true, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
window[PMGRAPHICID].startArrow_44869 = window[PMGRAPHICID].pointA;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_44869 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointA.X(); if (check == 0) return window[PMGRAPHICID].pointD.X(); return (check > 0 ) ? window[PMGRAPHICID].pointD.X()-0.3 : window[PMGRAPHICID].pointD.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointA.Y(); if (check == 0) return window[PMGRAPHICID].pointD.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointD.Y()-0.3 : window[PMGRAPHICID].pointD.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_44869 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_44869, window[PMGRAPHICID].endArrow_44869], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_52294 = window[PMGRAPHICID].pointD;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_52294 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointD.X(); if (check == 0) return window[PMGRAPHICID].pointE.X(); return (check > 0 ) ? window[PMGRAPHICID].pointE.X()-0.3 : window[PMGRAPHICID].pointE.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointD.Y(); if (check == 0) return window[PMGRAPHICID].pointE.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointE.Y()-0.3 : window[PMGRAPHICID].pointE.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_52294 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_52294, window[PMGRAPHICID].endArrow_52294], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); window[PMGRAPHICID].CPoint_8468 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointE.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_8468   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointE, window[PMGRAPHICID].CPoint_8468 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
/* Create INLINE pointAD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointD
 */
window[PMGRAPHICID].pointAD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointD.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointD.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointDE between two points, window[PMGRAPHICID].pointD and window[PMGRAPHICID].pointE
 */
window[PMGRAPHICID].pointDE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointD.X()+(0.5)*(window[PMGRAPHICID].pointE.X()-window[PMGRAPHICID].pointD.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointD.Y()+(0.5)*(window[PMGRAPHICID].pointE.Y()-window[PMGRAPHICID].pointD.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  /*
 * Expected Calculation on (D.x-A.x)
 */
/*
 * Calculate on C1: (((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = (((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
 * Expected Calculation on E.y-D.y
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE.Y() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointE) ? window[PMGRAPHICID].pointE.Y() : 0)-((window[PMGRAPHICID].pointD) ? window[PMGRAPHICID].pointD.Y() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on C2.x/C1.x
 */
/*
 * Calculate on C3: ((window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2.X() : 0)/((window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1.X() : 0)
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = ((window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2.X() : 0)/((window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1.X() : 0);
		return (window[PMGRAPHICID].getXC3.value);
	}, window[PMGRAPHICID].getYC3 = function () {
		if ( window[PMGRAPHICID].getYC3.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC3.value = window[PMGRAPHICID].getXC3.value;
				return( window[PMGRAPHICID].getYC3.value );
			};
		window[PMGRAPHICID].getYC3.value = window[PMGRAPHICID].getXC3.value;
		return (window[PMGRAPHICID].getYC3.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text70928 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointAD.X()+-1.2; }, 
		function() { return window[PMGRAPHICID].pointAD.Y()+-0.4; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta x = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text70928 ', 
	  cssClass:'window[PMGRAPHICID].text70928 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text29429 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointDE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointDE.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text29429 ', 
	  cssClass:'window[PMGRAPHICID].text29429 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text27234 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-2.5; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+2.0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:white;font-weight:bold;border:2px solid black;border-radius:5px;;\'>Constant<br/>Rate Of Change</div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text27234 ', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text92737 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointC.X()+-2.5; }, 
		function() { return window[PMGRAPHICID].pointC.Y()+2.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize \\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '}{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text92737 ', 
	  cssClass:'window[PMGRAPHICID].text92737 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  /*
 * Expected Calculation on ((A.x NE B.x) AND (A.y NE B.y))
 */
/*
 * Calculate on C4: ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)))
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0)) && (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) != ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)));
		return (window[PMGRAPHICID].getXC4.value);
	}, window[PMGRAPHICID].getYC4 = function () {
		if ( window[PMGRAPHICID].getYC4.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC4.value = window[PMGRAPHICID].getXC4.value;
				return( window[PMGRAPHICID].getYC4.value );
			};
		window[PMGRAPHICID].getYC4.value = window[PMGRAPHICID].getXC4.value;
		return (window[PMGRAPHICID].getYC4.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on (A.y EQ B.y)
 */
/*
 * Calculate on C5: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0))
 */
window[PMGRAPHICID].pointC5 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC5 = function () {
		if ( window[PMGRAPHICID].getXC5.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC5.value = 0;
				return( window[PMGRAPHICID].getXC5.value );
			};
		window[PMGRAPHICID].getXC5.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0));
		return (window[PMGRAPHICID].getXC5.value);
	}, window[PMGRAPHICID].getYC5 = function () {
		if ( window[PMGRAPHICID].getYC5.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC5.value = window[PMGRAPHICID].getXC5.value;
				return( window[PMGRAPHICID].getYC5.value );
			};
		window[PMGRAPHICID].getYC5.value = window[PMGRAPHICID].getXC5.value;
		return (window[PMGRAPHICID].getYC5.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on (A.x EQ B.x)
 */
/*
 * Calculate on C6: (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0))
 */
window[PMGRAPHICID].pointC6 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC6 = function () {
		if ( window[PMGRAPHICID].getXC6.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC6.value = 0;
				return( window[PMGRAPHICID].getXC6.value );
			};
		window[PMGRAPHICID].getXC6.value = (((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0) == ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.X() : 0));
		return (window[PMGRAPHICID].getXC6.value);
	}, window[PMGRAPHICID].getYC6 = function () {
		if ( window[PMGRAPHICID].getYC6.value == undefined ) {
				/* It has not... perform the initialization
				 * BE CARE WITH THIS ASSIGNMENT from x
				 */
				window[PMGRAPHICID].getYC6.value = window[PMGRAPHICID].getXC6.value;
				return( window[PMGRAPHICID].getYC6.value );
			};
		window[PMGRAPHICID].getYC6.value = window[PMGRAPHICID].getXC6.value;
		return (window[PMGRAPHICID].getYC6.value);
	}
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  /* Create Text */
window[PMGRAPHICID].textT4 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Linear Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT4 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT5 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Constant Function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT5 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
 /* Create Text */
window[PMGRAPHICID].textT6 = window[PMGRAPHICID].board.create('text', 
        [ 
			0,-6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:150%;background:white;font-weight:bold;opacity:0.5;;\'>Not a function</div>';
				value = NUMBERS.cleanEqn(value);
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return value; 
			} 
		], 
		{ cssClass:'window[PMGRAPHICID].textT6 pm-math-text-center', cssStyle:'' , fontSize:'18' , strokeColor:'black' });
  
window[PMGRAPHICID].condition14564buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition14564buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition14564onTrue = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition14564buttonShow('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition14564buttonShow('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition14564buttonShow('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
window[PMGRAPHICID].condition14564onFalse = function () {
	if (window[PMGRAPHICID].pointT4)    { window[PMGRAPHICID].condition14564buttonHide('window[PMGRAPHICID].pointT4',   window[PMGRAPHICID].pointT4); }
	if (window[PMGRAPHICID].textT4)     { window[PMGRAPHICID].condition14564buttonHide('window[PMGRAPHICID].textT4',    window[PMGRAPHICID].textT4); }
	if (window[PMGRAPHICID].segmentT4)  { window[PMGRAPHICID].condition14564buttonHide('window[PMGRAPHICID].segmentT4', window[PMGRAPHICID].segmentT4); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition14564 = function () {
	var x = window[PMGRAPHICID].pointC4.X();
	if (window[PMGRAPHICID].pointC4.X()) {
		window[PMGRAPHICID].condition14564onTrue();
	} else {
		window[PMGRAPHICID].condition14564onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition14564);
window[PMGRAPHICID].updateCondition14564; 
window[PMGRAPHICID].condition97546buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition97546buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition97546onTrue = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition97546buttonShow('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition97546buttonShow('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition97546buttonShow('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
window[PMGRAPHICID].condition97546onFalse = function () {
	if (window[PMGRAPHICID].pointT5)    { window[PMGRAPHICID].condition97546buttonHide('window[PMGRAPHICID].pointT5',   window[PMGRAPHICID].pointT5); }
	if (window[PMGRAPHICID].textT5)     { window[PMGRAPHICID].condition97546buttonHide('window[PMGRAPHICID].textT5',    window[PMGRAPHICID].textT5); }
	if (window[PMGRAPHICID].segmentT5)  { window[PMGRAPHICID].condition97546buttonHide('window[PMGRAPHICID].segmentT5', window[PMGRAPHICID].segmentT5); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition97546 = function () {
	var x = window[PMGRAPHICID].pointC5.X();
	if (window[PMGRAPHICID].pointC5.X()) {
		window[PMGRAPHICID].condition97546onTrue();
	} else {
		window[PMGRAPHICID].condition97546onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition97546);
window[PMGRAPHICID].updateCondition97546; 
window[PMGRAPHICID].condition7659buttonShow = function (ele_name, ele_value) {

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

window[PMGRAPHICID].condition7659buttonHide = function (ele_name, ele_value) {
	
	window[PMGRAPHICID].ConditionStatus[ele_name]=false;

	var id = 'div#'+PMGRAPHICID+''+'_'+ele_value.id;
	var test = jQuery(id);
	jQuery(id).addClass('mathjax_hide');
	ele_value.setDisplayRendNode(false);
};
window[PMGRAPHICID].condition7659onTrue = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition7659buttonShow('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition7659buttonShow('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition7659buttonShow('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
window[PMGRAPHICID].condition7659onFalse = function () {
	if (window[PMGRAPHICID].pointT6)    { window[PMGRAPHICID].condition7659buttonHide('window[PMGRAPHICID].pointT6',   window[PMGRAPHICID].pointT6); }
	if (window[PMGRAPHICID].textT6)     { window[PMGRAPHICID].condition7659buttonHide('window[PMGRAPHICID].textT6',    window[PMGRAPHICID].textT6); }
	if (window[PMGRAPHICID].segmentT6)  { window[PMGRAPHICID].condition7659buttonHide('window[PMGRAPHICID].segmentT6', window[PMGRAPHICID].segmentT6); }
};
/* onTrue is set for doCondition.  In this case, we
 * are triggering on the True condition.
 */
window[PMGRAPHICID].updateCondition7659 = function () {
	var x = window[PMGRAPHICID].pointC6.X();
	if (window[PMGRAPHICID].pointC6.X()) {
		window[PMGRAPHICID].condition7659onTrue();
	} else {
		window[PMGRAPHICID].condition7659onFalse();
	}
};

window[PMGRAPHICID].board.on('update', window[PMGRAPHICID].updateCondition7659);
window[PMGRAPHICID].updateCondition7659;  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
} };