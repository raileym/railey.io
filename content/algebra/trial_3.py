from post import post as P

ctns_make = """
    [ctns_description]
This example illustrates 'how' the slope-intercept form changes with the graph of the line.
    [/ctns_description]
    
    [ctns_question]
TMPL_GRAPHICBLOCK
    [/ctns_question]
   
    [ctns_shortcode]
[graph name='TMPL_GRAPHICID' script='TMPL_SCRIPTID' yaxislabel='f(x)' height='300' width='300' yaxislabel_ycoord='9.5' xaxislabel_xcoord='8.75' boundingbox='-6,6,6,-6']

// Create my two primary points, A and B
//
[point id='P' coordinates='(-3,-4)' labeloffsetx='-3.0' labeloffsety='0.5' showpoint='true' showlabel='false' showcoordinates='false' animate='true']
[point id='Q' coordinates='( 2, 5)' labeloffsetx='0.5'  labeloffsety='-0.5' showpoint='true' showlabel='false' showcoordinates='false' animate='true']

[segment id='PQ' start='P' end='Q' color='black' style='solid' showline='true']

[calculate id='M' points='P,Q'   operation='((P.x EQ Q.x) ? 99 : (P.y-Q.y)/(P.x-Q.x))']
[calculate id='B' points='P,Q,M' operation='((P.x EQ Q.x) ? 99 : P.y - M.x*P.x)']

[calculate id='C1' points='P,Q'     operation='(P.x EQ Q.x)']
[calculate id='C2' points='P,Q'     operation='((P.x NE Q.x) AND (P.y EQ Q.y))']

[calculate id='C3'  points='P,Q,B,M' operation='((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x GT 0))']
[calculate id='C4'  points='P,Q,B,M' operation='((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x EQ 0))']
[calculate id='C5'  points='P,Q,B,M' operation='((M.x NE 1) AND (P.x NE Q.x) AND (P.y NE Q.y) AND (B.x LT 0))']

[calculate id='C6'  points='B,M' operation='((M.x EQ 1) AND (B.x GT 0))']
[calculate id='C7'  points='B,M' operation='((M.x EQ 1) AND (B.x EQ 0))']
[calculate id='C8'  points='B,M' operation='((M.x EQ 1) AND (B.x LT 0))']

[comment]
[calculate id='C5' points='C4'     operation='(C.x EQ A.x)']
[calculate id='C6' points='A,C'    operation='(C.x EQ A.x)']
[calculate id='C7' points='C3'     operation='(C3.x LT 0)']

[calculate id='C8'  points='A,C,C3,C4' operation='((C.x NE A.x) AND (C3.x NE 0) AND (C4.x GT 0))']
[calculate id='C9'  points='A,C,C3,C4' operation='((C.x NE A.x) AND (C3.x NE 0) AND (C4.x EQ 0))']
[calculate id='C10' points='A,C,C3,C4' operation='((C.x NE A.x) AND (C3.x NE 0) AND (C4.x LT 0))']
[/comment]

[condition ontrue='C1' show='T1' panel='panel']
[condition ontrue='C2' show='T2' panel='panel']

[condition ontrue='C3' show='T3' panel='panel']
[condition ontrue='C4' show='T4' panel='panel']
[condition ontrue='C5' show='T5' panel='panel']

[condition ontrue='C6' show='T6' panel='panel']
[condition ontrue='C7' show='T7' panel='panel']
[condition ontrue='C8' show='T8' panel='panel']

[panel control='graph' height='180' width='300']
[text id='T1' align='center' coordinates='(0,9)'][div css='opacity:0.5;' b bg='white' sz='150%']Not a function[/div][/text]
[text id='T2' align='center' coordinates='(0,9)'][div css='opacity:0.5;' b bg='white' sz='150%']Constant Function[/div][/text]

[mtext id='T3' align='center' coordinates='(0,9)' fontsize='28px'][gmath d2f addparen='false' points='M,B']y = M.x x + B.x[/gmath][/mtext]
[mtext id='T4' align='center' coordinates='(0,9)' fontsize='28px'][gmath d2f addparen='false' points='M']y = M.x x[/gmath][/mtext]
[mtext id='T5' align='center' coordinates='(0,9)' fontsize='28px'][gmath d2f addparen='false' points='M,B']y = M.x x B.x[/gmath][/mtext]

[mtext id='T6' align='center' coordinates='(0,9)' fontsize='28px'][gmath d2f addparen='false' points='B']y = x + B.x[/gmath][/mtext]
[mtext id='T7' align='center' coordinates='(0,9)' fontsize='28px'][gmath d2f addparen='false' points='B']y = x [/gmath][/mtext]
[mtext id='T8' align='center' coordinates='(0,9)' fontsize='28px'][gmath d2f addparen='false' points='B']y = x B.x[/gmath][/mtext]

[/panel]

[/graph]
    [/ctns_shortcode]
    
    [ctns_element type='build_a_graph' height='402' width='402'][/ctns_element]

"""


output = P(
  url="https://testcite.com/ctns-make", 
  static_dir = "../../static",
  action= "ctns_make",
  target = [
    ctns_make
  ],
  opt_make = [
    "id='test-linearQ15-9d-v8'",
    "flush"
  ])

print(output)
