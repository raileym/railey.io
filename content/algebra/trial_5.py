from post import post as P

ctns_make = """
[ctns_make id='test-linearQ2-2' flush]

    [ctns_description]
Given the graph of a linear function with positive or negative slope, and a y-coefficient equal to 1, the student is asked, what is the equation of the line in slope-intercept form? Demonstrates using both Q and A, although A is not used.
    [/ctns_description]

    [ctns_question]
TMPL_GRAPHICBLOCK<br>TMPL_QUESTIONBLOCK
    [/ctns_question]

    [ctns_script]
        do {
            symbols.x1 = [-4, -3, -2, -1].ctns_rand();
            symbols.y1 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();
            symbols.x2 = [1, 2, 3, 4].ctns_rand();
            symbols.y2 = [-4, -3, -2, -1, 1, 2, 3, 4].ctns_rand();
        } while( symbols.x1 == symbols.x2 || symbols.y1 == symbols.y2 || is_lt(symbols.y1, symbols.y2) || is_pos(symbols.x1) || is_neg(symbols.x2));

        symbols.m = (symbols.y2-symbols.y1)/(symbols.x2-symbols.x1);
        symbols.b = symbols.y1 - symbols.x1*symbols.m;

        symbols.m_ = d2f( symbols.m );
        symbols.b_ = d2f( symbols.b );

        symbols.p_x1 = addparen( symbols.x1);
        symbols.p_y1 = addparen( symbols.y1);

        symbols.EQ = 'y= %s x + %s'.ctns_format([symbols.m_, symbols.b_]).ctns_equation();

        q.push('
Consider a line with slope-intercept form $| ${EQ} |$
that connects the two points $$a$$ and $$b$$, <br><br>
$$ (${x1}, ${y1}) $$ and $$ (${x2}, ${y2}).$$ <br><br>
The <strong>slope of this line</strong> equals the ratio $$\frac{\Delta y}{\Delta x}$$,<br><br>
$$\frac{\Delta y}{\Delta x} = \frac{y_2-y_1}{x_2-x_1} = \frac{${y2}-${p_y1}}{${x2}-${p_x1}} = ${m_}$$, <br><br>
where $$(x_1,y_1)$$ corresponds to $$ (${x1}, ${y1}) $$, and <br>$$(x_2,y_2)$$ corresponds to $$ (${x2}, ${y2}).$$
');

        $('#TMPL_QUESTIONID')  .html(tex({'symbols':symbols}, q.join(' ')));

        if (typeof window['TMPL_GRAPHICID'] !== 'undefined' && typeof window['TMPL_GRAPHICID'].board !== 'undefined' ) {
            window['TMPL_GRAPHICID'].board.update();
        }
    [/ctns_script]

    [ctns_shortcode]
[graph name='TMPL_GRAPHICID' script='TMPL_SCRIPTID' yaxislabel='f(x)' height='300' width='300' yaxislabel_ycoord='9.5' xaxislabel_xcoord='8.75' boundingbox='-6,6,6,-6']
[point id='b' coordinates='( function() { return 0;}, function() {return st.b;} )' showpoint='false' showlabel='false' showcoordinates='false' animate='false']
[point id='p' coordinates='( function() { return st.x1; }, function() { return st.y1; } )' labeloffsetx='-1' labeloffsety='0' showpoint='true' showlabel='true' showcoordinates='false' animate='false']
[point id='q' coordinates='( function() { return st.x2; }, function() { return st.y2; } )' labeloffsetx='-1' labeloffsety='0' showpoint='true' showlabel='true' showcoordinates='false' animate='false']
[point id='r' coordinates='(2,4)'   showpoint='false' showlabel='false' showcoordinates='false' animate='false']
[segment start='p' end='q' color='blue' style='solid' showline='true']
[segment start='r' end='b' color='black' thickness='2' showarrowstart='false' showarrowend='true' arrowtype='normal']
[text  align='center' point='r' offsetx='-1' offsety='0'][div css='opacity:0.5;height:4em;background-color:aqua;width:5.5em'][/div][/text]
[mtext align='center' point='r' offsetx='1' offsety='0.5'][gmath points='b']/scriptsize y-/textrm{intercept}[/gmath][/mtext]
[mtext align='center' point='r' offsetx='1' offsety='-0.5'][gmath color='blue' points='b' d2f]/scriptsize b = b.y[/gmath][/mtext]
[/graph]
    [/ctns_shortcode]

    [ctns_element type='build_a_graph' height='300' width='300'][/ctns_element]
[/ctns_make]

[ctns_make id='linearQ2-3' flush]

    [ctns_description]
This example illustrates 'how' to find the slope of a line.
    [/ctns_description]

    [ctns_question]
TMPL_GRAPHICBLOCK
    [/ctns_question]

    [ctns_shortcode]
[graph name='TMPL_GRAPHICID' script='TMPL_SCRIPTID' yaxislabel='f(x)' height='300' width='300' yaxislabel_ycoord='9.5' xaxislabel_xcoord='8.75' boundingbox="-6,6,6,-6"]

// Create my two primary points, A and B
//
[point id='A' coordinates='(-3,-4)' labeloffsetx='-3.0' labeloffsety='0.5' showpoint='true' showlabel='false' showcoordinates='true' animate='false']
[point id='B' coordinates='( 2, 5)' labeloffsetx='0.5'  labeloffsety='-0.5' showpoint='true' showlabel='false' showcoordinates='true' animate='true']

[segment id='AB' start='A' end='B' color='black' style='solid' showline='true']

[point id='C' points='A,B' type='corner-right'          showcoordinates='false' showpoint='false' showlabel='false']
[point id='E' points='B,C' type='inline' distance='0.5' showcoordinates='false' showpoint='false' showlabel='false']
[point id='D' points='A,C' type='inline' distance='0.5' showcoordinates='false' showpoint='false' showlabel='false']

[segment id='AC' start='A' end='C' color='black' style='solid']
[segment id='BC' start='B' end='C' color='black' style='solid']

[polygon points='A,B' fill='green' type='right' ]

[calculate id='C1' points='B,C'   operation='B.y-C.y']
[calculate id='C2' points='A,C'   operation='C.x-A.x']
[calculate id='C3' points='A,B,C' operation='(B.y-C.y)/(C.x-A.x)']
[calculate id='C4' points='A,C3' operation='A.x-A.y/C3.x']

[mtext point='E' offsetx='0.5' offsety='1.5'][gmath points='B,C,C1']
/scriptsize
/begin{array}{rcl}
/Delta y & = & y_2 - y_1 ////
& = & B.y - C.y ////
& = & C1.x ////
/end{array}
[/gmath][/mtext]

[mtext point='D' offsetx='-0.5' offsety='-0.75'][gmath points='A,C,C2']
/scriptsize
/begin{array}{rcl}
/Delta x & = & x_2 - x_1 ////
& = & C.x - A.x ////
& = & C2.x ////
/end{array}
[/gmath][/mtext]

[mtext point='A' offsetx='-3' offsety='2.5'][gmath]/scriptsize (x_1,y_1)[/gmath][/mtext]
[mtext point='B' offsetx='-3.25' offsety='2.5'][gmath]/scriptsize (x_2,y_2)[/gmath][/mtext]

[panel control='graph' height='180' width='300']
[mtext align='center' coordinates='(0,9)'][gmath points='C3,C4']y = C3.x x + C4.x[/gmath][/mtext]
[mtext align='center' coordinates='(0,6)']
[gmath addparen='true' points='A,C,B,C1,C2,C3']
slope /; (m) = /frac{/Delta y}{/Delta x} = /frac{C1.x}{C2.x} = C3.x
[/gmath][/mtext]
[/panel]

[/graph]
    [/ctns_shortcode]

    [ctns_element type="build_a_graph" height="450" width="400"][/ctns_element]
[/ctns_make]

"""

print(P(
  url="https://testcite.com/ctns-new-demo", 
  write_image = False,
  skip_image = True,
  action="ctns_make",
  target = [
    ctns_make
  ]
  ))
