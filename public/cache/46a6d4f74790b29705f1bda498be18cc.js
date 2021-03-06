
  CTNS.QUIZ_SET["46a6d4f74790b29705f1bda498be18cc"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 4651 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_4651';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '4651', 1);
	
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

	jQuery(".slide_4651").each( function() {do_center(this)} );

    do_force('4651');
    
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
    factoryid: '4651',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form?     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-9",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:302px;width:302px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:345px; height:345px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div><br/><!-- questionblock --><div id='questionblock_MASTERID' class='questionblock'></div>     ",
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
CTNS.NUMBERS.GID = 'quiz_4651';
CTNS.NUMBERS.equations['quiz_4651'] = [];
CTNS.NUMBERS.symbols['quiz_4651'] = CTNS.NUMBERS.symbols['quiz_4651'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_4651_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_4651_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_4651'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_4651_SlideNo_0',                ablock           = '#answerblock_4651_SlideNo_0',                acblock          = '#answercommentaryblock_4651_SlideNo_0',                                grblock          = 'graphicblock_4651_SlideNo_0',                grblock_Q        = 'graphicblock_Q_4651_SlideNo_0',                grblock_A        = 'graphicblock_A_4651_SlideNo_0',                grblock_B        = 'graphicblock_B_4651_SlideNo_0',                grblock_C        = 'graphicblock_C_4651_SlideNo_0',                grblock_D        = 'graphicblock_D_4651_SlideNo_0',                                grblock_f        = (typeof tml_4651_SlideNo_0   !== 'undefined') ? tml_4651_SlideNo_0   : null,                grblock_Q_f      = (typeof tml_Q_4651_SlideNo_0 !== 'undefined') ? tml_Q_4651_SlideNo_0 : null,                grblock_A_f      = (typeof tml_A_4651_SlideNo_0 !== 'undefined') ? tml_A_4651_SlideNo_0 : null,                grblock_B_f      = (typeof tml_B_4651_SlideNo_0 !== 'undefined') ? tml_B_4651_SlideNo_0 : null,                grblock_C_f      = (typeof tml_C_4651_SlideNo_0 !== 'undefined') ? tml_C_4651_SlideNo_0 : null,                grblock_D_f      = (typeof tml_D_4651_SlideNo_0 !== 'undefined') ? tml_D_4651_SlideNo_0 : null,                numbers          = NUMBERS,                gid              = 'quiz_4651',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_4651_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_4651'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 symbols.a = 2;         symbols.b = 2;          symbols.a_ = [1, 2, 3, -1, -2, -3].ctns_rand();         symbols.b_ = [1, 2, 3, 4, -1, -2, -3, -4].ctns_rand();          symbols.a = {};         symbols.b = {};         symbols.c = {};         symbols.d = {};          if ( is_pos(symbols.a_) && is_pos(symbols.b_) ) {             symbols.a.x = -0.5;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ + 0.5;             symbols.b.y = 0.75;             symbols.c.x = 2;             symbols.c.y = 4.5;             symbols.d.x = -2;             symbols.d.y = -4;         } else if ( is_pos(symbols.a_) && is_neg(symbols.b_) ) {             symbols.a.x = 0.25;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ - 0.75;             symbols.b.y = 0.75;             symbols.c.x = -2;             symbols.c.y = 4.5;             symbols.d.x = 2;             symbols.d.y = -4;         } else if ( is_neg(symbols.a_) && is_pos(symbols.b_) ) {             symbols.a.x = 0.25;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ - 0.75;             symbols.b.y = 0.75;             symbols.c.x = -3;             symbols.c.y = 1.5;             symbols.d.x = 3;             symbols.d.y = -4;         } else {             symbols.a.x = -0.5;             symbols.a.y = symbols.a_ - 0.25;             symbols.b.x = symbols.b_ + 0.5;             symbols.b.y = 0.75;             symbols.c.x = 1;             symbols.c.y = 1.5;             symbols.d.x = -3;             symbols.d.y = -4;         }          q.push(tex({'symbols':symbols},' Consider a line in <strong>intercept-intercept form</strong><br/><br/> $$\\frac{x}{${b_}} + \\frac{y}{${a_}} = 1$$ <br/><br/>that connects the two points $$a$$ and $$b$$, <br/><br/> $$(0, ${a_})$$ and $$(${b_}, 0),$$ <br/><br/> '));          q.push(tex({'symbols':symbols},' where the <strong>$$y$$-intercept</strong> is $$ ${a_} $$, and the <strong>$$x$$-intercept</strong> is $$ ${b_} $$. '));          $(qblock).html(q.join(' '));                  [grblock_f,             grblock_Q_f,             grblock_A_f,             grblock_B_f,             grblock_C_f,             grblock_D_f].forEach(function(e) {                     if (null === e) {                    return;                }                                e(symbols, gsymbols, NUMBERS);                    });            [grblock,             grblock_Q,             grblock_A,             grblock_B,             grblock_C,             grblock_D].forEach(function(e) {                if (typeof window[e] !== "undefined" && typeof window[e].board !== "undefined" ) {                    window[e].board.update();                }            });        }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_4651_SlideNo_0 (symbols, gsymbols, NUMBERS) {
	
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
	tml_4651_SlideNo_0
	What do these buy me? tag=, masterid=4651, slideno=SlideNo_0
	'scriptblock_4651_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_4651_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

/*
    NUMBERS.symbols['scriptblock_4651_SlideNo_0'] = NUMBERS.symbols['scriptblock_4651_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_4651_SlideNo_0'];
*/

    var gt = gsymbols,
        st = symbols;

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
/*
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_4651_SlideNo_0'];
*/

        var gt = gsymbols,
            st = symbols;

		if (title_line !== '') {
    		jQuery('<h2>'+title_line+'</h2>').insertBefore('#'+PMGRAPHICID);
		}
		
		jQuery(boardHandle)
			.attr('class', 'jxgbox  border ')
			.attr('style', 'border-color:black;  margin-left:auto; margin-right:auto;  width:345px; ; height:345px; ;');
		
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
		 

/* Create a STANDARD pointa_
 */
window[PMGRAPHICID].pointa_ = window[PMGRAPHICID].board.create('point', [ function() { return 0;}, function() {return st.a_;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointa_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointa_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointb_
 */
window[PMGRAPHICID].pointb_ = window[PMGRAPHICID].board.create('point', [ function() { return st.b_;}, function() { return 0;} ], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointb_
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointb_.moveTo([x,y],1000);

    }); 

/* Create a STANDARD pointa
 */
window[PMGRAPHICID].pointa = window[PMGRAPHICID].board.create('point', [ function() { return st.a.x;}, function() { return st.a.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show label for pointa
 */
window[PMGRAPHICID].texta = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointa.X();
		if ('' != '0') {
			return (x+parseFloat('0'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointa.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointa.Y();
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
	    return 'a';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointb
 */
window[PMGRAPHICID].pointb = window[PMGRAPHICID].board.create('point', [ function() { return st.b.x;}, function() { return st.b.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show label for pointb
 */
window[PMGRAPHICID].textb = window[PMGRAPHICID].board.create('text', 
    [
     function () { 
		var x = window[PMGRAPHICID].pointb.X();
		if ('' != '0') {
			return (x+parseFloat('0'));
		}
		if (x > 3) {
			return(x-2.5); 
		} if (x <= 0 && window[PMGRAPHICID].pointb.X() > -4) {
			return(x-2.5); 
		} else {
			return(x+0.5); 
		}
	 },
	 function () { 
		var y = window[PMGRAPHICID].pointb.Y();
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
	    return 'b';
	 }
	], 
	{cssClass:'JXGlabel'}); 

/* Create a STANDARD pointc
 */
window[PMGRAPHICID].pointc = window[PMGRAPHICID].board.create('point', [ function() { return st.c.x; }, function() { return st.c.y;} ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Create a STANDARD pointd
 */
window[PMGRAPHICID].pointd = window[PMGRAPHICID].board.create('point', [ function() { return st.d.x; }, function() { return st.d.y; } ], {snapToGrid:true, visible:false, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointd.moveTo([x,y],1000);

    });

/* Assign CLICK EVENT to button for pointd
 */
jQuery('button#button'+PMGRAPHICID+'start').click(function(event) {
    event.stopPropagation();

    var x = Math.floor((Math.random()*16)+1)-8;
    var y = Math.floor((Math.random()*16)+1)-8;
    
    window[PMGRAPHICID].pointd.moveTo([x,y],1000);

    });  
/* Create a basic segment
 */
window[PMGRAPHICID].segment_52794 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_52794 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointa_, window[PMGRAPHICID].pointb_] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_77933 = window[PMGRAPHICID].pointc;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_77933 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointa_.X()-window[PMGRAPHICID].pointc.X(); if (check == 0) return window[PMGRAPHICID].pointa_.X(); return (check > 0 ) ? window[PMGRAPHICID].pointa_.X()-0.3 : window[PMGRAPHICID].pointa_.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointa_.Y()-window[PMGRAPHICID].pointc.Y(); if (check == 0) return window[PMGRAPHICID].pointa_.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointa_.Y()-0.3 : window[PMGRAPHICID].pointa_.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_77933 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_77933, window[PMGRAPHICID].endArrow_77933], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); 
window[PMGRAPHICID].startArrow_35800 = window[PMGRAPHICID].pointd;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_35800 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb_.X()-window[PMGRAPHICID].pointd.X(); if (check == 0) return window[PMGRAPHICID].pointb_.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb_.X()-0.3 : window[PMGRAPHICID].pointb_.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb_.Y()-window[PMGRAPHICID].pointd.Y(); if (check == 0) return window[PMGRAPHICID].pointb_.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb_.Y()-0.3 : window[PMGRAPHICID].pointb_.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_35800 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_35800, window[PMGRAPHICID].endArrow_35800], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	});  /* Create Text */
window[PMGRAPHICID].text10437 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointc.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointc.Y()+0; }, 
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
	{ cssClass:'window[PMGRAPHICID].text10437 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 /* Create Text */
window[PMGRAPHICID].text46056 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointd.X()+-1; }, 
		function() { return window[PMGRAPHICID].pointd.Y()+0; }, 
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
	{ cssClass:'window[PMGRAPHICID].text46056 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
  
window[PMGRAPHICID].text29331 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointc.X()+1; }, 
		function() { return window[PMGRAPHICID].pointc.Y()+0.5; }, 
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
	  highlightCssClass:'window[PMGRAPHICID].text29331 center', 
	  cssClass:'window[PMGRAPHICID].text29331 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text55499 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointc.X()+1; }, 
		function() { return window[PMGRAPHICID].pointc.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize y = ' + PM_MATH.add_paren('a_', 'Y', (window[PMGRAPHICID].pointa_) ? window[PMGRAPHICID].pointa_ : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text55499 center', 
	  cssClass:'window[PMGRAPHICID].text55499 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text99824 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointd.X()+1; }, 
		function() { return window[PMGRAPHICID].pointd.Y()+0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize x-\\textrm{intercept}';
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
	  highlightCssClass:'window[PMGRAPHICID].text99824 center', 
	  cssClass:'window[PMGRAPHICID].text99824 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text1742 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointd.X()+1; }, 
		function() { return window[PMGRAPHICID].pointd.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize x = ' + PM_MATH.add_paren('b_', 'X', (window[PMGRAPHICID].pointb_) ? window[PMGRAPHICID].pointb_ : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text1742 center', 
	  cssClass:'window[PMGRAPHICID].text1742 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}     };