
  CTNS.QUIZ_SET["267194befdbf3d90340faeaeab121951"] = function () {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 2444 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_2444';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '2444', 1);
	
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

	jQuery(".slide_2444").each( function() {do_center(this)} );

    do_force('2444');
    
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
    factoryid: '2444',
    masterid: 'MASTERID',
    wpscript: "See notes in code - watch these quotes",
    speech: "",
    description: " This graph demonstrates a simple parabola, as in 'The graph of a quadratic function is a parabola.'     ",
    sponsor: "",
    figure: "",
    key: "tech-example-rotationQ1-1",
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
CTNS.NUMBERS.GID = 'quiz_2444';
CTNS.NUMBERS.equations['quiz_2444'] = [];
CTNS.NUMBERS.symbols['quiz_2444'] = CTNS.NUMBERS.symbols['quiz_2444'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_2444_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_2444_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_2444'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_2444_SlideNo_0',                ablock           = '#answerblock_2444_SlideNo_0',                acblock          = '#answercommentaryblock_2444_SlideNo_0',                                rightblock       = '#rightblock_2444_SlideNo_0',                wrongblock       = '#wrongblock_2444_SlideNo_0',                undecidedblock   = '#undecidedblock_2444_SlideNo_0',                speech_F         = ($('#speech_F_2444_SlideNo_0').length == 0) ? null : $('#speech_F_2444_SlideNo_0').html(),                speech_B         = ($('#speech_B_2444_SlideNo_0').length == 0) ? null : $('#speech_B_2444_SlideNo_0').html(),                speech_1         = ($('#speech_1_2444_SlideNo_0').length == 0) ? null : $('#speech_1_2444_SlideNo_0').html(),                speech_2         = ($('#speech_2_2444_SlideNo_0').length == 0) ? null : $('#speech_2_2444_SlideNo_0').html(),                speech_3         = ($('#speech_3_2444_SlideNo_0').length == 0) ? null : $('#speech_3_2444_SlideNo_0').html(),                speech_4         = ($('#speech_4_2444_SlideNo_0').length == 0) ? null : $('#speech_4_2444_SlideNo_0').html(),                speech_5         = ($('#speech_5_2444_SlideNo_0').length == 0) ? null : $('#speech_5_2444_SlideNo_0').html(),                gr3dblock        = 'graphic3dblock_2444_SlideNo_0',                gr3dblock_A      = 'graphic3dblock_A_2444_SlideNo_0',                gr3dblock_B      = 'graphic3dblock_B_2444_SlideNo_0',                gr3dblock_C      = 'graphic3dblock_C_2444_SlideNo_0',                gr3dblock_D      = 'graphic3dblock_D_2444_SlideNo_0',                gr3dblock_E      = 'graphic3dblock_E_2444_SlideNo_0',                gr3dblock_F      = 'graphic3dblock_F_2444_SlideNo_0',                gr3dblock_1      = 'graphic3dblock_1_2444_SlideNo_0',                gr3dblock_2      = 'graphic3dblock_2_2444_SlideNo_0',                gr3dblock_3      = 'graphic3dblock_3_2444_SlideNo_0',                gr3dblock_4      = 'graphic3dblock_4_2444_SlideNo_0',                gr3dblock_5      = 'graphic3dblock_5_2444_SlideNo_0',                gr3dblock_6      = 'graphic3dblock_6_2444_SlideNo_0',                gr3dblock_7      = 'graphic3dblock_7_2444_SlideNo_0',                gr3dblock_8      = 'graphic3dblock_8_2444_SlideNo_0',                gr3dblock_9      = 'graphic3dblock_9_2444_SlideNo_0',                grblock          = 'graphicblock_2444_SlideNo_0',                grblock_Q        = 'graphicblock_Q_2444_SlideNo_0',                grblock_A        = 'graphicblock_A_2444_SlideNo_0',                grblock_B        = 'graphicblock_B_2444_SlideNo_0',                grblock_C        = 'graphicblock_C_2444_SlideNo_0',                grblock_D        = 'graphicblock_D_2444_SlideNo_0',                grblock_E        = 'graphicblock_E_2444_SlideNo_0',                grblock_F        = 'graphicblock_F_2444_SlideNo_0',                                grblock_f        = (typeof tml_2444_SlideNo_0   !== 'undefined') ? tml_2444_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_2444_SlideNo_0 !== 'undefined') ? tml_Q_2444_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_2444_SlideNo_0 !== 'undefined') ? tml_A_2444_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_2444_SlideNo_0 !== 'undefined') ? tml_B_2444_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_2444_SlideNo_0 !== 'undefined') ? tml_C_2444_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_2444_SlideNo_0 !== 'undefined') ? tml_D_2444_SlideNo_0 : null,                grblock_E_f      = (typeof tml_E_2444_SlideNo_0 !== 'undefined') ? tml_E_2444_SlideNo_0 : null,                grblock_F_f      = (typeof tml_F_2444_SlideNo_0 !== 'undefined') ? tml_F_2444_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_2444',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_2444_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_2444'],                 audio            = PROBLEMS.audio_remote_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.a = [-3,-2,-1,1,2,3].ctns_rand();         symbols.h = [-2,-1,1,2].ctns_rand();                     symbols.k = [-2,-1,1,2].ctns_rand();                  if ( is_neg(symbols.a) ) {             symbols.k = Math.abs(symbols.k);         } else {             symbols.k = -1*Math.abs(symbols.k);         }                  q.push(' <p>Here are my first words for this example, including  the slope-intercept form of a line,</p> $|y=mx+b.|$ ');          q.push( graphicblock( {"dim":"6", "gid":grblock}) );          q.push(' <p>Here are my second words for this example, including  yet another equation of a line,</p> $|y-y_1=m(x-x_1).|$ ');          q.push(' <p>Focus on one quadrant.</p> ');          q.push( graphic3dblock( {"gid":gr3dblock_1}) );          q.push(' <p>Now view all three.</p> ');          q.push( graphic3dblock( {"gid":gr3dblock_2}) );          q.push(' <p>And finally, here are my last words for this example.</p> ');          q.push( graphic3dblock( {"gid":gr3dblock_3}) );          q.push( graphic3dblock( {"gid":gr3dblock_4}) );          q.push( graphic3dblock( {"gid":gr3dblock_5}) );          q.push( graphic3dblock( {"gid":gr3dblock_6}) );          q.push( graphic3dblock( {"gid":gr3dblock_7}) );          q.push( graphic3dblock( {"gid":gr3dblock_8}) );          q.push( graphic3dblock( {"gid":gr3dblock_9}) );          q.push(' <p>Whoops, I forgot one thing.</p> ');          var handleQ = $(qblock).html(tex({"symbols":symbols}, q.join(' ')));                  TML_MATH3D.init({handle:handleQ, name:gr3dblock_1, camera: {position: {x:20, y:-30, z:20}}})             .createCylinderSet({                 style:"baseSquare",                  plane:"yz-plane",                  rotation:"primary",                  color:"green",                  addToScene:true,                  addToRotation:true,                  pickOne:true})             .render();          TML_MATH3D.init({handle:handleQ, name:gr3dblock_2})             .createCylinderSet({                 style:"baseSquare",                  plane:"xy-plane",                  rotation:"primary",                  color:"red",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .createCylinderSet({                 style:"baseSquare",                  plane:"yz-plane",                  rotation:"primary",                  color:"green",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .createCylinderSet({                 style:"baseSquare",                  plane:"xz-plane",                  rotation:"primary",                  color:"blue",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .render();                  TML_MATH3D.init({handle:handleQ, name:gr3dblock_3})             .createCylinderSet({                 style:"rectangle",                  plane:"xy-plane",                  rotation:"primary",                  color:"red",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .createCylinderSet({                 style:"rectangle",                  plane:"yz-plane",                  rotation:"primary",                  color:"green",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .createCylinderSet({                 style:"rectangle",                  plane:"xz-plane",                  rotation:"primary",                  color:"blue",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .render();                              TML_MATH3D.init({handle:handleQ, name:gr3dblock_4})             .createCylinderSet({                 style:"rectangle",                  plane:"xy-plane",                  rotation:"secondary",                  color:"red",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .render();          TML_MATH3D.init({handle:handleQ, name:gr3dblock_5})             .createCylinderSet({                 style:"rectangle",                  plane:"yz-plane",                  rotation:"secondary",                  color:"green",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .render();          TML_MATH3D.init({handle:handleQ, name:gr3dblock_6})             .createCylinderSet({                 style:"rectangle",                  plane:"xz-plane",                  rotation:"secondary",                  color:"blue",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .render();          TML_MATH3D.init({handle:handleQ, name:gr3dblock_7})             .createCylinderSet({                 style:"baseRightTriangle",                  plane:"xy-plane",                  rotation:"primary",                  color:"red",                  addToScene:true,                  addToRotation:false,                  pickOne:false,                 fill:true})             .render();          TML_MATH3D.init({handle:handleQ, name:gr3dblock_8})             .createCylinderSet({                 style:"baseHemisphere",                  plane:"yz-plane",                  rotation:"primary",                  color:"green",                  addToScene:true,                  addToRotation:false,                  pickOne:false,                 fill:true})             .render();          TML_MATH3D.init({handle:handleQ, name:gr3dblock_9})             .createCylinderSet({                 style:"rectangle",                  plane:"xy-plane",                  rotation:"primary",                  color:"red",                  addToScene:true,                  addToRotation:true,                  pickOne:false})             .render();                 [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f,             grblock_E_f,             grblock_F_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D,             grblock_E,             grblock_F].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_2444_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_2444_SlideNo_0
	What do these buy me? tag=, masterid=2444, slideno=SlideNo_0
	'scriptblock_2444_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_2444_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_2444_SlideNo_0'] = NUMBERS.symbols['scriptblock_2444_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_2444_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_2444_SlideNo_0'];
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
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph46761 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0)*Math.pow(x-((window[PMGRAPHICID].pointh) ? window[PMGRAPHICID].pointh.X() : 0), 2)+((window[PMGRAPHICID].pointk) ? window[PMGRAPHICID].pointk.X() : 0);}, 
            -5,
            5], 
            {strokeColor:'black',strokeWidth:5}); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}      };