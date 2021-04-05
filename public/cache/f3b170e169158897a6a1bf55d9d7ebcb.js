
  CTNS.QUIZ_SET["f3b170e169158897a6a1bf55d9d7ebcb"] = function (PYTHON_ID) {
  
  /* SAMPLE: MASTERID */
  /* SAMPLE: 3500 */
  /* Unfortunately, I must key my Javascript off of the incoming
   * value of PYTHON_ID, not off the FACTORYID that comes through
   * PHP.
   */
  CTNS_ID                       = 'ctns_3500';
  
  var ctns_marker = ctns_marker || {};
  ctns_marker.quiz = "CTNS technical details on a quiz table:";

  (function(CTNS, myRWU_factoryid, questions_meta, questions) {
	
	var slides,
	    do_quiz = CTNS.QUIZ.do_quiz,
	    do_katex = CTNS.PROBLEMS.do_katex,
	    do_matex = CTNS.PROBLEMS.do_matex,
	    do_force = CTNS.PROBLEMS.do_force,
	    do_center = CTNS.PROBLEMS.do_center;
	    
	slides = do_quiz(CTNS, questions, myRWU_factoryid, '3500', 5);
	
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

	jQuery(".slide_3500").each( function() {do_center(this)} );

    do_force('3500');
    
  })(CTNS, 
     "", 
     CTNS.QUESTIONS_META[CTNS_ID] = {
         count:         5,
         shuffleSlides: false,
         showDivide:    true,
     }, 
     CTNS.QUESTIONS[CTNS_ID] = [
{
    slideNo: 0,
    factoryid: '3500',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Given the proper graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form? Demonstrates using both Q and A, although A is not used.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-2",
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
{
    slideNo: 1,
    factoryid: '3500',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " Given the proper graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form? Demonstrates using both Q and A, although A is not used.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-2",
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
{
    slideNo: 2,
    factoryid: '3500',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' to find the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-3",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
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
{
    slideNo: 3,
    factoryid: '3500',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' to find the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-4",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:452px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:400px; height:400px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "450",
    width: "450",
    graph_height: "400",
    graph_width: "400",
    
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
{
    slideNo: 4,
    factoryid: '3500',
    masterid: 'MASTERID',
    wpscript: "See notes in code",
    ctns_id: CTNS_ID,
    qid: "",
    description: " This example illustrates 'how' to find the slope of a line.     ",
    sponsor: "",
    figure: "",
    key: "linearQ2-4b",
    label: "Ctns\Question",
    multipleChoice: {a: "True", b: "False" },
    back: "",
    commentary: {a:"<scan class='ctns-right'>That answer is correct.</scan>  <!-- rightblock --><div id='rightblock_MASTERID' class='rightblock'></div> ",b:"<scan class='ctns-wrong'>That answer is incorrect.</scan>  <!-- wrongblock --><div id='wrongblock_MASTERID' class='wrongblock'></div> ",undecided:"<scan class='ctns-wrong'>No answer selected.</scan>  <!-- undecidedblock --><div id='undecidedblock_MASTERID' class='undecidedblock'></div> "},
    frontSpeak: "",
    backSpeak: "",
    frontSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    backSpeakIcon: "<div class='ctns-icon-25x25 ctns-single-png'></div>",
    front: "",
    question: " <div class='build-a-graph' style='height:402px;width:402px;'><div style='width:400px;' class='meta graphicblock_MASTERID graph hide'></div><div id='graphicblock_MASTERID' class='jxgbox  border' style='  margin-left:auto; margin-right:auto;  width:300px; height:300px; '></div><div id='graphicblock_MASTERIDpanel'></div><div class='meta graphicblock_MASTERID panel hide'></div></div>     ",
    rightAnswer: "a",
    answer: " <!-- answerblock --><div id='answerblock_MASTERID' class='answerblock'></div> ",
    wrongAnswer: "b",
    answerCommentary: " <!-- answercommentaryblock --><div id='answercommentaryblock_MASTERID' class='answercommentaryblock'></div> ",

    height: "400",
    width: "400",
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
CTNS.NUMBERS.GID = 'quiz_3500';
CTNS.NUMBERS.equations['quiz_3500'] = [];
CTNS.NUMBERS.symbols['quiz_3500'] = CTNS.NUMBERS.symbols['quiz_3500'] || {};

/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3500_SlideNo_0'] = CTNS.NUMBERS.symbols['new_scriptblock_3500_SlideNo_0'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3500'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3500_SlideNo_0',                ablock           = '#answerblock_3500_SlideNo_0',                acblock          = '#answercommentaryblock_3500_SlideNo_0',                                grblock          = 'graphicblock_3500_SlideNo_0',                grblock_Q        = 'graphicblock_Q_3500_SlideNo_0',                grblock_A        = 'graphicblock_A_3500_SlideNo_0',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3500_SlideNo_0'],                gsymbols         = NUMBERS.symbols['quiz_3500'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );          symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          q.push(' Consider a line with slope-intercept form $| ${EQ} |$ that connects the two points $$a$$ and $$b$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br/><br/> The <strong>slope of this line</strong> equals the ratio $$\\frac{\\Delta y}{\\Delta x}$$,<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br/><br/> where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br/>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$ ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));          if (typeof window[grblock] !== 'undefined' && typeof window[grblock].board !== 'undefined' ) {             window[grblock].board.update();         }             }})(CTNS));           })( jQuery, CTNS, window.math);/*  * See citeations.php for this javascript. */CTNS.NUMBERS.symbols['scriptblock_3500_SlideNo_1'] = CTNS.NUMBERS.symbols['new_scriptblock_3500_SlideNo_1'] || {};(function($, CTNS, MATHJS) {    CTNS.NUMBERS.equations['quiz_3500'].push( (function(CTNS) {            var VALIDATE   = CTNS.VALIDATE,            PROBLEMS   = CTNS.PROBLEMS,            NUMBERS    = CTNS.NUMBERS,            TERM       = CTNS.TERM,            TABLES     = CTNS.TABLES,            TML_MATH3D = CTNS.TML_MATH3D,            tables     = CTNS.TABLES;                return function() {                    var colorized      = '\\textcolor{%s}{%s}',                        qblock           = '#questionblock_3500_SlideNo_1',                ablock           = '#answerblock_3500_SlideNo_1',                acblock          = '#answercommentaryblock_3500_SlideNo_1',                                grblock          = 'graphicblock_3500_SlideNo_1',                grblock_Q        = 'graphicblock_Q_3500_SlideNo_1',                grblock_A        = 'graphicblock_A_3500_SlideNo_1',                                graphic          = NUMBERS,                graphicblock     = NUMBERS.graphicblock,                graphic3dblock   = NUMBERS.graphic3dblock,                                symbols          = NUMBERS.symbols['scriptblock_3500_SlideNo_1'],                gsymbols         = NUMBERS.symbols['quiz_3500'],                 audio            = PROBLEMS.audio_onDemand,                audio_inline     = PROBLEMS.audio_inline_onDemand,                graphicblock     = NUMBERS.graphicblock,                exposeTextarea   = NUMBERS.exposeTextarea,                d2f              = NUMBERS.mk_d2f,                term             = TERM.term_updated,                is_zero          = NUMBERS.is_zero,                is_pos           = NUMBERS.is_pos,                is_neg           = NUMBERS.is_neg,                is_lt            = NUMBERS.is_lt,                is_gt            = NUMBERS.is_gt,                is_gte           = NUMBERS.is_gte,                is_lte           = NUMBERS.is_lte,                tex              = NUMBERS.mk_tex,                d2f              = NUMBERS.mk_d2f,                abs              = NUMBERS.mk_abs,                addparen         = NUMBERS.mk_addparen,                natural          = NUMBERS.natural,                imaginary        = NUMBERS.imaginary,                negative         = NUMBERS.negative,                rational         = NUMBERS.rational,                irrational       = NUMBERS.irrational,                integer          = NUMBERS.integer,                decimal          = NUMBERS.decimal,                odd              = NUMBERS.odd,                even             = NUMBERS.even,                real             = NUMBERS.real,                complex          = NUMBERS.complex,                whole            = NUMBERS.whole,                term             = TERM.term_updated,                debug            = NUMBERS.debug,                    a = [],                c = [],                q = [],                r = [],                w = [],                d = [];                 do {             symbols.x1 = [-4, -3, -2, -1].ctns_rand();             symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();             symbols.x2 = [1, 2, 3, 4].ctns_rand();             symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();         } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));          symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);         symbols.b = symbols.y1 - symbols.x1*symbols.m;          symbols.m_ = d2f( symbols.m );         symbols.b_ = d2f( symbols.b );          symbols.p_x1 = addparen( symbols.x1);         symbols.p_y1 = addparen( symbols.y1);          symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();          q.push(' Consider a line with slope-intercept form $| ${EQ} |$ that connects the two points $$a$$ and $$b$$, <br/><br/> $$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br/><br/> The <strong>slope of this line</strong> equals the ratio $$\\frac{\\Delta y}{\\Delta x}$$,<br/><br/> $$\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1} = \\frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br/><br/> where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br/>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$ ');          $(qblock).html(tex({'symbols':symbols}, q.join(' ')));          if (typeof window[grblock] !== 'undefined' && typeof window[grblock].board !== 'undefined' ) {             window[grblock].board.update();         }             }})(CTNS));           })( jQuery, CTNS, window.math);
 
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3500_SlideNo_0 (CTNS, NUMBERS, GID) {
	
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
	tml_3500_SlideNo_0
	What do these buy me? tag=, masterid=3500, slideno=SlideNo_0
	'scriptblock_3500_SlideNo_0'
	*/
	
	PMGRAPHICID   = 'graphicblock_3500_SlideNo_0';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols['scriptblock_3500_SlideNo_0'] = NUMBERS.symbols['scriptblock_3500_SlideNo_0'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3500_SlideNo_0'];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3500_SlideNo_0'];

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
window[PMGRAPHICID].segment_12268 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_12268 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_63374 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_63374 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_63374 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_63374, window[PMGRAPHICID].endArrow_63374], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); /* Create Text */
window[PMGRAPHICID].text62216 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text62216 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text85180 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text85180 center', 
	  cssClass:'window[PMGRAPHICID].text85180 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text64679 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text64679 center', 
	  cssClass:'window[PMGRAPHICID].text64679 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_3500_SlideNo_0
 
 *********************************************************************
 *********************************************************************
 */

tml_3500_SlideNo_0(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID);
      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3500_SlideNo_1 (CTNS, NUMBERS, GID) {
	
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
	tml_3500_SlideNo_1
	What do these buy me? tag=, masterid=3500, slideno=SlideNo_1
	'scriptblock_3500_SlideNo_1'
	*/
	
	PMGRAPHICID   = 'graphicblock_3500_SlideNo_1';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols['scriptblock_3500_SlideNo_1'] = NUMBERS.symbols['scriptblock_3500_SlideNo_1'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3500_SlideNo_1'];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3500_SlideNo_1'];

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
window[PMGRAPHICID].segment_17705 = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].line_17705 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointp, window[PMGRAPHICID].pointq] , { 
	visible:true,
	straightFirst: true, 
	straightLast: true, 
	strokeColor:'blue',
	dash:0,
	strokeWidth: 4} );
 
window[PMGRAPHICID].startArrow_98922 = window[PMGRAPHICID].pointr;
/* On showarrowend ...
 */
window[PMGRAPHICID].endArrow_98922 = window[PMGRAPHICID].board.create('point', 
	[ 
	function() { var check = window[PMGRAPHICID].pointb.X()-window[PMGRAPHICID].pointr.X(); if (check == 0) return window[PMGRAPHICID].pointb.X(); return (check > 0 ) ? window[PMGRAPHICID].pointb.X()-0.3 : window[PMGRAPHICID].pointb.X()+0.3;}, 
	function() { var check = window[PMGRAPHICID].pointb.Y()-window[PMGRAPHICID].pointr.Y(); if (check == 0) return window[PMGRAPHICID].pointb.Y(); return (check > 0 ) ? window[PMGRAPHICID].pointb.Y()-0.3 : window[PMGRAPHICID].pointb.Y()+0.3;}, 
	], 
	{visible:false});
window[PMGRAPHICID].arrow_98922 = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].startArrow_98922, window[PMGRAPHICID].endArrow_98922], {
	strokeWidth: 2,
	straightfirst:false,
	straightlast:false,
	lastArrow:true,
	firstArrow:false,
	arrowType: 'normal',
	strokeColor: 'black'
	}); /* Create Text */
window[PMGRAPHICID].text86364 = window[PMGRAPHICID].board.create('text', 
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
	{ cssClass:'window[PMGRAPHICID].text86364 center', cssStyle:'' , fontSize:'18' , strokeColor:'black' } );
 
window[PMGRAPHICID].text23803 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text23803 center', 
	  cssClass:'window[PMGRAPHICID].text23803 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text34500 = window[PMGRAPHICID].board.create('text', 
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
	  highlightCssClass:'window[PMGRAPHICID].text34500 center', 
	  cssClass:'window[PMGRAPHICID].text34500 center', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_3500_SlideNo_1
 
 *********************************************************************
 *********************************************************************
 */

tml_3500_SlideNo_1(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID);
      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3500_SlideNo_2 (CTNS, NUMBERS, GID) {
	
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
	tml_3500_SlideNo_2
	What do these buy me? tag=, masterid=3500, slideno=SlideNo_2
	'scriptblock_3500_SlideNo_2'
	*/
	
	PMGRAPHICID   = 'graphicblock_3500_SlideNo_2';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols['scriptblock_3500_SlideNo_2'] = NUMBERS.symbols['scriptblock_3500_SlideNo_2'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3500_SlideNo_2'];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3500_SlideNo_2'];

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
		  // Create my two primary points, A and B // 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-3,-4], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointA
 */
window[PMGRAPHICID].textA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		if ('' != '-3.0') {
			return (x+parseFloat('-3.0'));
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
		if ('' != '0.5') {
			return (y+parseFloat('0.5'));
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
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ 2, 5], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '0.5') {
			return (x+parseFloat('0.5'));
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
		if ('' != '-0.5') {
			return (y+parseFloat('-0.5'));
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
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
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
  
/* Create a CORNER / CORNER-RIGHT pointC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointB
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create INLINE pointE between two points, window[PMGRAPHICID].pointB and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointB.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointB.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointB.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointB.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segmentBC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointB, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineBC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointB, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPoint_72484 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointB.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_72484   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointB, window[PMGRAPHICID].CPoint_72484 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on B.y-C.y
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0);
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
 * Expected Calculation on C.x-A.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on (B.y-C.y)/(C.x-A.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on A.x-A.y/C3.x
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text45670 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointE.Y()+1.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = ' \\scriptsize \\begin{array}{rcl} \\Delta y & = & y_2 - y_1 \\\\ & = & ' + PM_MATH.add_paren('B', 'Y', (window[PMGRAPHICID].pointB) ? window[PMGRAPHICID].pointB : null,1,null) + ' - ' + PM_MATH.add_paren('C', 'Y', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,null) + ' \\\\ & = & ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + ' \\\\ \\end{array} ';
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
	  highlightCssClass:'window[PMGRAPHICID].text45670 ', 
	  cssClass:'window[PMGRAPHICID].text45670 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text19570 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.75; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = ' \\scriptsize \\begin{array}{rcl} \\Delta x & = & x_2 - x_1 \\\\ & = & ' + PM_MATH.add_paren('C', 'X', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,null) + ' - ' + PM_MATH.add_paren('A', 'X', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,null) + ' \\\\ & = & ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + ' \\\\ \\end{array} ';
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
	  highlightCssClass:'window[PMGRAPHICID].text19570 ', 
	  cssClass:'window[PMGRAPHICID].text19570 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
window[PMGRAPHICID].text17388 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointA.X()+-3; }, 
		function() { return window[PMGRAPHICID].pointA.Y()+2.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize (x_1,y_1)';
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
	  highlightCssClass:'window[PMGRAPHICID].text17388 ', 
	  cssClass:'window[PMGRAPHICID].text17388 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text72829 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointB.X()+-3.25; }, 
		function() { return window[PMGRAPHICID].pointB.Y()+2.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\scriptsize (x_2,y_2)';
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
	  highlightCssClass:'window[PMGRAPHICID].text72829 ', 
	  cssClass:'window[PMGRAPHICID].text72829 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:180px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text56198 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,9 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = 'y = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + ' x + ' + PM_MATH.add_paren('C4', 'X', (window[PMGRAPHICID].pointC4) ? window[PMGRAPHICID].pointC4 : null,1,null) + '';
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
		  highlightCssClass:'window[PMGRAPHICID].text56198 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text56198 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 
window[PMGRAPHICID].text149 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,6 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '  slope \\; (m) = \\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '}{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '} = ' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,null) + ' ';
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
		  highlightCssClass:'window[PMGRAPHICID].text149 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text149 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'18' , 
		  strokeColor:'black' });
 /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_3500_SlideNo_2
 
 *********************************************************************
 *********************************************************************
 */

tml_3500_SlideNo_2(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID);
      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3500_SlideNo_3 (CTNS, NUMBERS, GID) {
	
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
	tml_3500_SlideNo_3
	What do these buy me? tag=, masterid=3500, slideno=SlideNo_3
	'scriptblock_3500_SlideNo_3'
	*/
	
	PMGRAPHICID   = 'graphicblock_3500_SlideNo_3';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols['scriptblock_3500_SlideNo_3'] = NUMBERS.symbols['scriptblock_3500_SlideNo_3'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3500_SlideNo_3'];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3500_SlideNo_3'];

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
		  // Create my two primary points, A and B // 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-3,-4], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointA
 */
window[PMGRAPHICID].textA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		if ('' != '-2.0') {
			return (x+parseFloat('-2.0'));
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
		if ('' != '1.0') {
			return (y+parseFloat('1.0'));
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
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [ 3, 4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '0.5') {
			return (x+parseFloat('0.5'));
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
		if ('' != '-0.5') {
			return (y+parseFloat('-0.5'));
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
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
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
 
window[PMGRAPHICID].pointG = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointG.setGliderPosition(0.5);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/

/* Show coordinates for pointG
 */
window[PMGRAPHICID].textG = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointG.X();
		if ('' != '-2.0') {
			return (x+parseFloat('-2.0'));
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
		var y = window[PMGRAPHICID].pointG.Y();
		if ('' != '1.0') {
			return (y+parseFloat('1.0'));
		}
		if (y > 0) {
			return (y+1); 
		} else {
			return (y-1.5); 
		}
	 },
	 function () { 
		var x = window[PMGRAPHICID].pointG.X();
		var y = window[PMGRAPHICID].pointG.Y();
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
/* Create a CORNER / CORNER-RIGHT pointC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointG
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create INLINE pointE between two points, window[PMGRAPHICID].pointG and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointG.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointG.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointG.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointG.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segmentGC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineGC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPoint_779 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_779   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointG, window[PMGRAPHICID].CPoint_779 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on G.y-C.y
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0);
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
 * Expected Calculation on C.x-A.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on (G.y-C.y)/(C.x-A.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on A.x-A.y/C3.x
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text87717 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointE.X()+0.5; }, 
		function() { return window[PMGRAPHICID].pointE.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta y = ' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text87717 ', 
	  cssClass:'window[PMGRAPHICID].text87717 ', 
	  cssStyle:'background-color:rgba(255,0,0,1);' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text19259 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.5; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '\\Delta x = ' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,null) + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text19259 ', 
	  cssClass:'window[PMGRAPHICID].text19259 ', 
	  cssStyle:'background-color:rgba(255,0,0,1);' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false}); 
window[PMGRAPHICID].text36581 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('G', 'Y', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + '-' + PM_MATH.add_paren('C', 'Y', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '}{' + PM_MATH.add_paren('C', 'X', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '-' + PM_MATH.add_paren('A', 'X', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,'d2f') + '} = \\frac{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}=' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
		  anchorY:'top',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].text36581 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text36581 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'20' , 
		  strokeColor:'black' });
 /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_3500_SlideNo_3
 
 *********************************************************************
 *********************************************************************
 */

tml_3500_SlideNo_3(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID);
      
var pm_marker = pm_marker || {};
pm_marker.wordpress = 'PM technical details on included wordpress scripts ... SYNTHESIZED Build A Graph:';
/*********************************************************************
 Build A Graph. 
*********************************************************************/
function tml_3500_SlideNo_4 (CTNS, NUMBERS, GID) {
	
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
	tml_3500_SlideNo_4
	What do these buy me? tag=, masterid=3500, slideno=SlideNo_4
	'scriptblock_3500_SlideNo_4'
	*/
	
	PMGRAPHICID   = 'graphicblock_3500_SlideNo_4';
	
	boardHandle   = jQuery('#'+PMGRAPHICID);
	panelHandle   = jQuery('#'+PMGRAPHICID+'panel');

    monitorTitle  = PMGRAPHICID+'monitor';

    PM_MATH_ERROR = 'PM_MATH_ERROR';
    title_line    = '';

    NUMBERS.symbols['scriptblock_3500_SlideNo_4'] = NUMBERS.symbols['scriptblock_3500_SlideNo_4'] || {};
    NUMBERS.symbols[GID] = NUMBERS.symbols[GID] || {};
    var gt = NUMBERS.symbols[GID],
        st = NUMBERS.symbols['scriptblock_3500_SlideNo_4'];

	jQuery(document).ready(function() { 
	
        /* Kind of worried about this */
        var gt = NUMBERS.symbols[GID],
            st = NUMBERS.symbols['scriptblock_3500_SlideNo_4'];

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
		  // Create my two primary points, A and B // 

/* Create a STANDARD pointA
 */
window[PMGRAPHICID].pointA = window[PMGRAPHICID].board.create('point', [-4,-4], {snapToGrid:true, visible:true, fixed:true, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointA
 */
window[PMGRAPHICID].textA = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointA.X();
		if ('' != '-2.0') {
			return (x+parseFloat('-2.0'));
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
		if ('' != '1.0') {
			return (y+parseFloat('1.0'));
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
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'}); 

/* Create a STANDARD pointB
 */
window[PMGRAPHICID].pointB = window[PMGRAPHICID].board.create('point', [4, 4], {snapToGrid:true, visible:true, fixed:false, fillColor:'red', strokeColor:'red', showInfobox:false, withLabel:false ,size:4});

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

/* Show coordinates for pointB
 */
window[PMGRAPHICID].textB = window[PMGRAPHICID].board.create('text', 
    [
	 function () { 
		var x = window[PMGRAPHICID].pointB.X();
		if ('' != '0.5') {
			return (x+parseFloat('0.5'));
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
		if ('' != '-0.5') {
			return (y+parseFloat('-0.5'));
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
        var coordinates = '(' + PM_MATH.precision(x, 1) + ',' + PM_MATH.precision(y, 1) +')';
        return coordinates;
     }
    ], 
    {cssClass:'JXGlabel'});  
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
 
window[PMGRAPHICID].pointG = window[PMGRAPHICID].board.create('glider',[window[PMGRAPHICID].lineAB], {snapToGrid:true, visible:true, fillColor:'red', size:4, strokeColor:'red', showInfobox:false, withLabel:false, name:''}); 
window[PMGRAPHICID].board.unsuspendUpdate();
window[PMGRAPHICID].pointG.setGliderPosition(0.5);
window[PMGRAPHICID].board.suspendUpdate();/*window[PMGRAPHICID].board.update();*/  
/* Create a CORNER / CORNER-RIGHT pointC on points window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointG
 */
window[PMGRAPHICID].pointC = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], { visible:false, showInfobox:false, withLabel:false, size:4, fillColor:'blue', strokeColor:'blue'}); 
/* Create INLINE pointE between two points, window[PMGRAPHICID].pointG and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointE = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointG.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointG.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointG.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointG.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4}); 
/* Create INLINE pointD between two points, window[PMGRAPHICID].pointA and window[PMGRAPHICID].pointC
 */
window[PMGRAPHICID].pointD = window[PMGRAPHICID].board.create('point', [
		function() {
			return window[PMGRAPHICID].pointA.X()+(0.5)*(window[PMGRAPHICID].pointC.X()-window[PMGRAPHICID].pointA.X());
		}, 
		function() {
			return window[PMGRAPHICID].pointA.Y()+(0.5)*(window[PMGRAPHICID].pointC.Y()-window[PMGRAPHICID].pointA.Y());
		}], { fixed:true, visible:false, fillColor:'blue', strokeColor:'blue', showInfobox:false, withLabel:false, size:4});  
/* Create a basic segment
 */
window[PMGRAPHICID].segmentAC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineAC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
 
/* Create a basic segment
 */
window[PMGRAPHICID].segmentGC = window[PMGRAPHICID].board.create('segment', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible: true,
	firstArrow: false,
	lastArrow: false,
	strokeColor:'black',
	dash:0,
	strokeWidth: 4});

/* Create a basic line
 */
window[PMGRAPHICID].lineGC = window[PMGRAPHICID].board.create('line', [window[PMGRAPHICID].pointG, window[PMGRAPHICID].pointC] , { 
	visible:false,
	straightFirst: false, 
	straightLast: false, 
	strokeColor:'black',
	dash:0,
	strokeWidth: 4} );
  window[PMGRAPHICID].CPoint_57344 = window[PMGRAPHICID].board.create('point', [ function() { return window[PMGRAPHICID].pointG.X();}, function() { return window[PMGRAPHICID].pointA.Y();} ], {visible:false});window[PMGRAPHICID].poly_57344   = window[PMGRAPHICID].board.create('polygon', [ window[PMGRAPHICID].pointA, window[PMGRAPHICID].pointG, window[PMGRAPHICID].CPoint_57344 ] , { fillColor:'green', withLines:false, strokeColor: '#00FFEE', fillOpacity:0.35} );  /*
 * Expected Calculation on G.y-C.y
 */
/*
 * Calculate on C1: ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0)
 */
window[PMGRAPHICID].pointC1 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC1 = function () {
		if ( window[PMGRAPHICID].getXC1.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC1.value = 0;
				return( window[PMGRAPHICID].getXC1.value );
			};
		window[PMGRAPHICID].getXC1.value = ((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0);
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
 * Expected Calculation on C.x-A.x
 */
/*
 * Calculate on C2: ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)
 */
window[PMGRAPHICID].pointC2 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC2 = function () {
		if ( window[PMGRAPHICID].getXC2.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC2.value = 0;
				return( window[PMGRAPHICID].getXC2.value );
			};
		window[PMGRAPHICID].getXC2.value = ((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0);
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
 * Expected Calculation on (G.y-C.y)/(C.x-A.x)
 */
/*
 * Calculate on C3: (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0))
 */
window[PMGRAPHICID].pointC3 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC3 = function () {
		if ( window[PMGRAPHICID].getXC3.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC3.value = 0;
				return( window[PMGRAPHICID].getXC3.value );
			};
		window[PMGRAPHICID].getXC3.value = (((window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG.Y() : 0)-((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.Y() : 0))/(((window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0));
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'}); /*
 * Expected Calculation on A.x-A.y/C3.x
 */
/*
 * Calculate on C4: ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0)
 */
window[PMGRAPHICID].pointC4 = window[PMGRAPHICID].board.create('point',
	[ window[PMGRAPHICID].getXC4 = function () {
		if ( window[PMGRAPHICID].getXC4.value == undefined ) {
				/* It has not... perform the initialization */
				window[PMGRAPHICID].getXC4.value = 0;
				return( window[PMGRAPHICID].getXC4.value );
			};
		window[PMGRAPHICID].getXC4.value = ((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.X() : 0)-((window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA.Y() : 0)/((window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3.X() : 0);
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
	], { cssClass: 'conditional', visible:false, showInfobox:false, withLabel:true, size:3, color:'red'});  
window[PMGRAPHICID].text8400 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointE.X()+0.7; }, 
		function() { return window[PMGRAPHICID].pointE.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text8400 ', 
	  cssClass:'window[PMGRAPHICID].text8400 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text71519 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointD.X()+0; }, 
		function() { return window[PMGRAPHICID].pointD.Y()+-0.6; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '';
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
	  highlightCssClass:'window[PMGRAPHICID].text71519 ', 
	  cssClass:'window[PMGRAPHICID].text71519 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
 
window[PMGRAPHICID].text70756 = window[PMGRAPHICID].board.create('text', 
    [ 
		function() { return window[PMGRAPHICID].pointG.X()+-0.5; }, 
		function() { return window[PMGRAPHICID].pointG.Y()+0; }, 
		function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
			var value = '(' + PM_MATH.add_precision('G', 'X', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + ', ' + PM_MATH.add_precision('G', 'Y', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + ')';
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
	  highlightCssClass:'window[PMGRAPHICID].text70756 ', 
	  cssClass:'window[PMGRAPHICID].text70756 ', 
	  cssStyle:'' , 
	  fontSize:'18' , 
	  strokeColor:'black' } );
  
		/*	Create Panel
		 */
		jQuery(panelHandle)
			.attr('class', ' jxgbox no-border jxgbox-panel')
			.attr('style', 'margin-left:auto; margin-right:auto;  ; height:120px; width:300px;') ;

		window[PMGRAPHICID].panel = JXG.JSXGraph.initBoard(PMGRAPHICID+'panel', {boundingbox: [-10,11,10,-1], showNavigation:false, showCopyright:false});  
window[PMGRAPHICID].text13799 = window[PMGRAPHICID].panel.create('text', 
        [ 
			0,8 , 
			function() { 
				/* Very tricky. Single quotes (not double quotes) are necessary here
				 * because the content part actually contains function calls combined
				 * with their own single quotes, some escaped, some not. In this case,
				 * content comes in with its own surrounding single quotes.
				 */
				var value = '\\frac{\\Delta y}{\\Delta x} = \\frac{' + PM_MATH.add_paren('G', 'Y', (window[PMGRAPHICID].pointG) ? window[PMGRAPHICID].pointG : null,1,'d2f') + '-' + PM_MATH.add_paren('C', 'Y', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '}{' + PM_MATH.add_paren('C', 'X', (window[PMGRAPHICID].pointC) ? window[PMGRAPHICID].pointC : null,1,'d2f') + '-' + PM_MATH.add_paren('A', 'X', (window[PMGRAPHICID].pointA) ? window[PMGRAPHICID].pointA : null,1,'d2f') + '} = \\frac{' + PM_MATH.add_paren('C1', 'X', (window[PMGRAPHICID].pointC1) ? window[PMGRAPHICID].pointC1 : null,1,'d2f') + '}{' + PM_MATH.add_paren('C2', 'X', (window[PMGRAPHICID].pointC2) ? window[PMGRAPHICID].pointC2 : null,1,'d2f') + '}=' + PM_MATH.add_paren('C3', 'X', (window[PMGRAPHICID].pointC3) ? window[PMGRAPHICID].pointC3 : null,1,'d2f') + '';
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
		  anchorY:'top',
    	  highlightCssStyle:'opacity:1.0', 
		  highlightCssClass:'window[PMGRAPHICID].text13799 pm-math-text-center',
		  cssClass:'window[PMGRAPHICID].text13799 pm-math-text-center', 
		  cssStyle:'' , 
		  fontSize:'20' , 
		  strokeColor:'black' });
  /* add board child */
window[PMGRAPHICID].board.addChild( window[PMGRAPHICID].panel );  
		window[PMGRAPHICID].board.unsuspendUpdate(); 
	});
}

/*********************************************************************
 *********************************************************************

 Launch BUILD A GRAPH application here. 
 
 Description. 
 
 Title. 

 Name. tml_3500_SlideNo_4
 
 *********************************************************************
 *********************************************************************
 */

tml_3500_SlideNo_4(CTNS, CTNS.NUMBERS, CTNS.NUMBERS.GID);
     };