
  CTNS.QUIZ_SET["09712a1e3e7f40e37c342bf264f0033a"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4656 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4656';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4656', 1);
	
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

	jQuery(".slide_4656").each( function() {do_center(this)} );

    do_force('4656');
    
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
    factoryid: '4656',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This graph demonstrates a simple parabola and its axis of symmetry and vertex.     ",
    sponsor: "",
    figure: "",
    key: "quadQ1-5",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:402px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "400",
    width: "400",
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
CTNS.NUMBERS.GID = 'quiz_4656';
CTNS.NUMBERS.equations['quiz_4656'] = [];
CTNS.NUMBERS.symbols['quiz_4656'] = CTNS.NUMBERS.symbols['quiz_4656'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4656_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4656_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4656'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4656_SlideNo_0',                ablock           = '#answerblock_4656_SlideNo_0',                acblock          = '#answercommentaryblock_4656_SlideNo_0',                                grblock          = 'graphicblock_4656_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4656_SlideNo_0',                grblock_A        = 'graphicblock_A_4656_SlideNo_0',                grblock_B        = 'graphicblock_B_4656_SlideNo_0',                grblock_C        = 'graphicblock_C_4656_SlideNo_0',                grblock_D        = 'graphicblock_D_4656_SlideNo_0',                                grblock_f        = (typeof tml_4656_SlideNo_0   !== 'undefined') ? tml_4656_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4656_SlideNo_0 !== 'undefined') ? tml_Q_4656_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4656_SlideNo_0 !== 'undefined') ? tml_A_4656_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4656_SlideNo_0 !== 'undefined') ? tml_B_4656_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4656_SlideNo_0 !== 'undefined') ? tml_C_4656_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4656_SlideNo_0 !== 'undefined') ? tml_D_4656_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4656',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4656_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4656'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];             symbols.a = [-3,-2,-1,-0.5,0.5,1,2,3].ctns_rand();     symbols.h = [-2,-1,1,2].ctns_rand();                 symbols.k = [2,1].ctns_rand();          symbols.k = ( is_neg(symbols.a) ) ? symbols.k : -1 * symbols.k;                      [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4656_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4656_SlideNo_0
	What do these buy me? tag=, masterid=4656, slideno=SlideNo_0
	'scriptblock_4656_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_4656_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4656_SlideNo_0'] = NUMBERS.symbols['scriptblock_4656_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4656_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4656_SlideNo_0'];
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

/* Create a STANDARD pointpAxisLow
 */
window[PMGRAPHICID].pointpAxisLow = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return -6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointpAxisLow.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointpAxisLow
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointpAxisLow.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointpAxisHigh
 */
window[PMGRAPHICID].pointpAxisHigh = window[PMGRAPHICID].board.create('point', [ function() { return st.h;}, function() { return 6;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointpAxisHigh.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointpAxisHigh
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointpAxisHigh.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_81047 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointpAxisLow, window[PMGRAPHICID].pointpAxisHigh] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'red',
	dash:3,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_81047 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointpAxisLow, window[PMGRAPHICID].pointpAxisHigh] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'red',
	dash:3,
	strokeWidth: 4} );
 
        /* Generate a particular function
         */
        window[PMGRAPHICID].graph69995 = window[PMGRAPHICID].board.create('functiongraph', 
            [function(x){ return ((window[PMGRAPHICID].pointa) ? window[PMGRAPHICID].pointa.X() : 0)*Math.pow(x-((window[PMGRAPHICID].pointh) ? window[PMGRAPHICID].pointh.X() : 0), 2)+((window[PMGRAPHICID].pointk) ? window[PMGRAPHICID].pointk.X() : 0);}, 
            -6,
            6], 
            {strokeColor:'black',strokeWidth:5}); 
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:100px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,8,10,0], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text25266 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-4,6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\textrm{Axis of symmetry at } x = ' + PM_MATH.add_precision('h', 'X', (window[PMGRAPHICID].pointh) ? window[PMGRAPHICID].pointh : null,1,null) + '';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].text25266 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text25266 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].text58812 = window[PMGRAPHICID].panel.create('text', 
        [ 
			-4,3 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\textrm{Vertex at point } (' + PM_MATH.add_precision('h', 'X', (window[PMGRAPHICID].pointh) ? window[PMGRAPHICID].pointh : null,1,null) + ', ' + PM_MATH.add_precision('k', 'X', (window[PMGRAPHICID].pointk) ? window[PMGRAPHICID].pointk : null,1,null) + ')';
				value = NUMBERS.cleanEqn(value);
				
                value = katex.renderToString(value, {throwOnError: false});
				
				var err = value.indexOf(PM_MATH_ERROR);
				if (-1 != value.indexOf(PM_MATH_ERROR)) {
    				return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
				}
				return '<div>'+value+'</div>'; 
			} 
		], 
		{ anchorX:'middle', 
		  anchorY:'middle',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].text58812 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text58812 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add panel child */
window[PMGRAPHICID].panel.addChild( window[PMGRAPHICID].board ); 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };