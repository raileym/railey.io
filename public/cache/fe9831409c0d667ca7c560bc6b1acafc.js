
  CTNS.QUIZ_SET["fe9831409c0d667ca7c560bc6b1acafc"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4557 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4557';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4557', 1);
	
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

	jQuery(".slide_4557").each( function() {do_center(this)} );

    do_force('4557');
    
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
    factoryid: '4557',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-6",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "300",
    width: "300",
    graph_height: "300",
    graph_width: "300",
    
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
CTNS.NUMBERS.GID = 'quiz_4557';
CTNS.NUMBERS.equations['quiz_4557'] = [];
CTNS.NUMBERS.symbols['quiz_4557'] = CTNS.NUMBERS.symbols['quiz_4557'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4557_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4557_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4557'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4557_SlideNo_0',                ablock           = '#answerblock_4557_SlideNo_0',                acblock          = '#answercommentaryblock_4557_SlideNo_0',                                grblock          = 'graphicblock_4557_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4557_SlideNo_0',                grblock_A        = 'graphicblock_A_4557_SlideNo_0',                grblock_B        = 'graphicblock_B_4557_SlideNo_0',                grblock_C        = 'graphicblock_C_4557_SlideNo_0',                grblock_D        = 'graphicblock_D_4557_SlideNo_0',                                grblock_f        = (typeof tml_4557_SlideNo_0   !== 'undefined') ? tml_4557_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4557_SlideNo_0 !== 'undefined') ? tml_Q_4557_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4557_SlideNo_0 !== 'undefined') ? tml_A_4557_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4557_SlideNo_0 !== 'undefined') ? tml_B_4557_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4557_SlideNo_0 !== 'undefined') ? tml_C_4557_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4557_SlideNo_0 !== 'undefined') ? tml_D_4557_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4557',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4557_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4557'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );          symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          q.push(' Consider a line with slope-intercept form $| ${EQ} |$ that connects the two points $$p$$ and $$q$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br/><br/> The <strong>slope of this line</strong> equals the ratio $$\\frac{\\Delta y}{\\Delta x}$$,<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br/><br/> where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br/>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$ ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4557_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4557_SlideNo_0
	What do these buy me? tag=, masterid=4557, slideno=SlideNo_0
	'scriptblock_4557_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_4557_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4557_SlideNo_0'] = NUMBERS.symbols['scriptblock_4557_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4557_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4557_SlideNo_0'];
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
		 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.b;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointp
 */
window[PMGRAPHICID].pointp = window[PMGRAPHICID].board.create('point', [ function() { return st.x1; }, function() { return st.y1; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show label for pointp
 */
window[PMGRAPHICID].textp = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointp.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointp.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointp.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'p';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointq
 */
window[PMGRAPHICID].pointq = window[PMGRAPHICID].board.create('point', [ function() { return st.x2; }, function() { return st.y2; } ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointq
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointq.moveTo([x,y],1000);

    });

/* Show label for pointq
 */
window[PMGRAPHICID].textq = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointq.X();
		if ('' != '-1') {
			return (x+parseFloat('-1'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointq.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointq.Y();
		if ('' != '0') {
			return (y+parseFloat('0'));
		}
		if (y > 0) {
			return(y+1); 
		} else {
			return(y-1.5); 
		}
	 },
	 function () { 
	    return 'q';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointr
 */
window[PMGRAPHICID].pointr = window[PMGRAPHICID].board.create('point', [2,4], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointr
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointr.moveTo([x,y],1000);

    }); 
/* Create a basic segment
 */
window[PMGRAPHICID].segment_63776 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_63776 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 /* Create Text */
window[PMGRAPHICID].text19213 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '<div style=\'padding:5px;margin:0 auto;width:fit-content;font-size:100%;background:transparent;font-weight:normal;opacity:0.5;height:4em;background-color:aqua;width:5.5em;\'></div>';
            value = NUMBERS.cleanEqn(value);
            
			if (-1 != value.indexOf(PM_MATH_ERROR)) {
                return '<span class=\'PMGRAPHICID '+PM_MATH_ERROR+'-text\'>'+value+'</span>';
			}
			return value;
		} 
	], 
	{ cssClass:'window[PMGRAPHICID].text19213 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].startArrow_11201 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_11201 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_11201 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_11201, window[PMGRAPHICID].endArrow_11201], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].text94716 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text94716 center', 
	  cssClass:'window[PMGRAPHICID].text94716 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text81799 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointr.X()+1; }, 
		function() { return window[PMGRAPHICID].pointr.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize b = ' + PM_MATH.add_paren('b', 'Y', (window[PMGRAPHICID].pointb) ? window[PMGRAPHICID].pointb : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text81799 center', 
	  cssClass:'window[PMGRAPHICID].text81799 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };