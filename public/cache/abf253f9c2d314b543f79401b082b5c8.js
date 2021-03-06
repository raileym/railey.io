
  CTNS.QUIZ_SET["abf253f9c2d314b543f79401b082b5c8"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2392 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2392';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2392', 1);
	
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

	jQuery(".slide_2392").each( function() {do_center(this)} );

    do_force('2392');
    
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
    factoryid: '2392',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: "",
    sponsor: "",
    figure: "",
    key: "tech-example-button-animate",
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
CTNS.NUMBERS.GID = 'quiz_2392';
CTNS.NUMBERS.equations['quiz_2392'] = [];
CTNS.NUMBERS.symbols['quiz_2392'] = CTNS.NUMBERS.symbols['quiz_2392'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2392_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2392_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2392'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2392_SlideNo_0',                ablock           = '#answerblock_2392_SlideNo_0',                acblock          = '#answercommentaryblock_2392_SlideNo_0',                                rightblock       = '#rightblock_2392_SlideNo_0',                wrongblock       = '#wrongblock_2392_SlideNo_0',                undecidedblock   = '#undecidedblock_2392_SlideNo_0',                speech_F         = ($('#speech_F_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_F_2392_SlideNo_0').html(),                speech_B         = ($('#speech_B_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_B_2392_SlideNo_0').html(),                speech_1         = ($('#speech_1_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_1_2392_SlideNo_0').html(),                speech_2         = ($('#speech_2_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_2_2392_SlideNo_0').html(),                speech_3         = ($('#speech_3_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_3_2392_SlideNo_0').html(),                speech_4         = ($('#speech_4_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_4_2392_SlideNo_0').html(),                speech_5         = ($('#speech_5_2392_SlideNo_0').length == 0) ? null : 'https://cpgd.co/'+$('#speech_5_2392_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_2392_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_2392_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_2392_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_2392_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_2392_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_2392_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_2392_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_2392_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_2392_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_2392_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_2392_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_2392_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_2392_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_2392_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_2392_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_2392_SlideNo_0',                grblock          = 'graphicblock_2392_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2392_SlideNo_0',                grblock_A        = 'graphicblock_A_2392_SlideNo_0',                grblock_B        = 'graphicblock_B_2392_SlideNo_0',                grblock_C        = 'graphicblock_C_2392_SlideNo_0',                grblock_D        = 'graphicblock_D_2392_SlideNo_0',                grblock_E        = 'graphicblock_E_2392_SlideNo_0',                grblock_F        = 'graphicblock_F_2392_SlideNo_0',                                grblock_f        = (typeof tml_2392_SlideNo_0   !== 'undefined') ? tml_2392_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2392_SlideNo_0 !== 'undefined') ? tml_Q_2392_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2392_SlideNo_0 !== 'undefined') ? tml_A_2392_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2392_SlideNo_0 !== 'undefined') ? tml_B_2392_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2392_SlideNo_0 !== 'undefined') ? tml_C_2392_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2392_SlideNo_0 !== 'undefined') ? tml_D_2392_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2392_SlideNo_0 !== 'undefined') ? tml_E_2392_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2392_SlideNo_0 !== 'undefined') ? tml_F_2392_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2392',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2392_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2392'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                  q.push(' Select an animation button below. ');          q.push( graphicblock( {"dim":"6", "gid":grblock}) );              $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                              [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2392_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2392_SlideNo_0
	What do these buy me? tag=, masterid=2392, slideno=SlideNo_0
	'scriptblock_2392_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2392_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2392_SlideNo_0'] = NUMBERS.symbols['scriptblock_2392_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2392_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2392_SlideNo_0'];
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
		window[PMGRAPHICID].textXAXIS = window[PMGRAPHICID].board.create('text', [7.5, -0.5, 'x'], {fixed:true, strokeOpacity:1});
		  
/* Plan on a button for animation
 */
jQuery(".graph.meta."+PMGRAPHICID).removeClass("hide");
jQuery("<button id='button"+PMGRAPHICID+"changeA' class='button graph'>Change A</button>").insertBefore("div.meta.graph."+PMGRAPHICID+" "); 
/* Plan on a button for animation
 */
jQuery(".graph.meta."+PMGRAPHICID).removeClass("hide");
jQuery("<button id='button"+PMGRAPHICID+"changeB' class='button graph'>Change B</button>").insertBefore("div.meta.graph."+PMGRAPHICID+" ");  

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-6,-4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'changeA').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointA
 */
jQuery('button#button'+PMGRAPHICID+'changeA').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointA.moveTo([x,y],1000);

    });

/* Show coordinates for pointA
 */
window[PMGRAPHICID].textA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		if ('' != '') {
			return (x+parseFloat(''));
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
		var y = window[PMGRAPHICID].pointA.Y();
		if ('' != '') {
			return (y+parseFloat(''));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		var y = window[PMGRAPHICID].pointA.Y();

        /* Show label for pointA
         */
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return 'A' + ' ' + coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});

/* Show axis
 */
window[PMGRAPHICID].yPointA = window[PMGRAPHICID].board.create('point', [ function () { return 0 ; }, function () { return window[PMGRAPHICID].pointA.Y(); } ], {showInfobox:false, withLabel:false,size:0, color:'blue'});
window[PMGRAPHICID].xPointA = window[PMGRAPHICID].board.create('point', [ function () { return window[PMGRAPHICID].pointA.X() ; }, function () { return 0; } ], {showInfobox:false, withLabel:false,size:0, color:'blue'});

window[PMGRAPHICID].yAxisA = window[PMGRAPHICID].board.create('segment',[window[PMGRAPHICID].yPointA,window[PMGRAPHICID].pointA], {dash:2, strokeColor:'#0000ff',strokeWidth:3});
window[PMGRAPHICID].xAxisA = window[PMGRAPHICID].board.create('segment',[window[PMGRAPHICID].xPointA,window[PMGRAPHICID].pointA], {dash:2, strokeColor:'#0000ff',strokeWidth:3});

window[PMGRAPHICID].textXPointA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { return window[PMGRAPHICID].pointA.X()+0.5; },
	 function () { 
		if (window[PMGRAPHICID].pointA.Y() > 0) {
			return(-1.0); 
		} else {
			return(1.0); 
		}
	 },
	 function () { return '(x='+window[PMGRAPHICID].pointA.X()+')';}
	]); 

window[PMGRAPHICID].textYPointA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		if (window[PMGRAPHICID].pointA.X() > 0) {
			return(-2.0); 
		} else {
			return(1.0); 
		}
	 },
	 function () { return window[PMGRAPHICID].pointA.Y()-0.5; },
	 function () { return '(y='+window[PMGRAPHICID].pointA.Y()+')';}
	]); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [7,7], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'changeB').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointB
 */
jQuery('button#button'+PMGRAPHICID+'changeB').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointB.moveTo([x,y],1000);

    });

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '') {
			return (x+parseFloat(''));
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
		var y = window[PMGRAPHICID].pointB.Y();
		if ('' != '') {
			return (y+parseFloat(''));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		var y = window[PMGRAPHICID].pointB.Y();

        /* Show label for pointB
         */
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return 'B' + ' ' + coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});

/* Show axis
 */
window[PMGRAPHICID].yPointB = window[PMGRAPHICID].board.create('point', [ function () { return 0 ; }, function () { return window[PMGRAPHICID].pointB.Y(); } ], {showInfobox:false, withLabel:false,size:0, color:'blue'});
window[PMGRAPHICID].xPointB = window[PMGRAPHICID].board.create('point', [ function () { return window[PMGRAPHICID].pointB.X() ; }, function () { return 0; } ], {showInfobox:false, withLabel:false,size:0, color:'blue'});

window[PMGRAPHICID].yAxisB = window[PMGRAPHICID].board.create('segment',[window[PMGRAPHICID].yPointB,window[PMGRAPHICID].pointB], {dash:2, strokeColor:'#0000ff',strokeWidth:3});
window[PMGRAPHICID].xAxisB = window[PMGRAPHICID].board.create('segment',[window[PMGRAPHICID].xPointB,window[PMGRAPHICID].pointB], {dash:2, strokeColor:'#0000ff',strokeWidth:3});

window[PMGRAPHICID].textXPointB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { return window[PMGRAPHICID].pointB.X()+0.5; },
	 function () { 
		if (window[PMGRAPHICID].pointB.Y() > 0) {
			return(-1.0); 
		} else {
			return(1.0); 
		}
	 },
	 function () { return '(x='+window[PMGRAPHICID].pointB.X()+')';}
	]); 

window[PMGRAPHICID].textYPointB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		if (window[PMGRAPHICID].pointB.X() > 0) {
			return(-2.0); 
		} else {
			return(1.0); 
		}
	 },
	 function () { return window[PMGRAPHICID].pointB.Y()-0.5; },
	 function () { return '(y='+window[PMGRAPHICID].pointB.Y()+')';}
	]);  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAB = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAB = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'blue',
	dash:3,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPointPOLY = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].polyPOLY   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPointPOLY ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
} 	      };