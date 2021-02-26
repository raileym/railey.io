print("$\\definecolor{brightyellow}{RGB}{222,255,0}$")
print("$\\definecolor{brightred}{RGB}{255,0,188}$")
print("$\\definecolor{brightgreen}{RGB}{3,255,0}$")
print("$\\definecolor{brightblue}{RGB}{0,205,255}$")
print("$\\definecolor{brightpurple} {RGB}{133,0,255}$")
print("$\\renewcommand{\\redbox}[1]{\\fcolorbox{black}{brightred}{#1}}$")
print("$\\renewcommand{\\greenbox}[1]{\\fcolorbox{black}{brightgreen}{#1}}$")
print("$\\renewcommand{\\bluebox}[1]{\\fcolorbox{black}{brightblue}{#1}}$")
print("$\\renewcommand{\\yellowbox}[1]{\\fcolorbox{black}{brightyellow}{#1}}$")
print("$\\renewcommand{\\purplebox}[1]{\\fcolorbox{black}{brightpurple}{#1}}$")

def factoral(n):
    if 0 == n:
        return 1
    if 1 == n:
        return 1
    else:
        return n * factoral(n-1)

def choose(n, m):
    return factoral(n)/( factoral(m) * factoral(n-m))

def pascals_triangle(h, pascal="FALSE", equals="FALSE", combo="FALSE", highlight=[], symbol=[], symbol_chr="_", count=1000):
    triangle = []
    for n in range(h):

        row = ""
        for m in range(n+1):

            count -= 1

            if count < 0:
                break;

            if "TRUE" == combo:
                if "TRUE" == equals:
                    val = "{\\scriptsize { %d \\choose %d } = %d}" % (n,m, choose(n,m))
                else:
                    val = "{\\scriptsize { %d \\choose %d }}" % (n,m)

            elif tuple([n,m]) in symbol:
                val = "{ \\fcolorbox{transparent}{transparent}{%s} }" % symbol_chr

            elif tuple([n,m]) in highlight:
                val = "{ \\fcolorbox{black}{brightblue}{%d} }" % choose(n,m)

            elif tuple([n,m,'blue']) in highlight:
                val = "{ \\fcolorbox{black}{brightblue}{%d} }" % choose(n,m)

            elif tuple([n,m,'green']) in highlight:
                val = "{ \\fcolorbox{black}{brightgreen}{%d} }" % choose(n,m)

            elif tuple([n,m,'purple']) in highlight:
                val = "{ \\fcolorbox{black}{brightpurple}{%d} }" % choose(n,m)

            elif tuple([n,m,'red']) in highlight:
                val = "{ \\fcolorbox{black}{brightred}{%d} }" % choose(n,m)

            elif tuple([n,m,'yellow']) in highlight:
                val = "{ \\fcolorbox{black}{brightyellow}{%d} }" % choose(n,m)

            else:
                val = "{ \\fcolorbox{transparent}{transparent}{%d} }" % choose(n,m)
                #val = "{ \\fcolorbox{transparent}{transparent}{\\scriptsize %d} }" % choose(n,m)

            if 100 <= choose(n,m):
                val = "\\  " + val + "\\  "
            elif 10 <= choose(n,m):
                val = "\\  \\  " + val + "\\  \\  "
            elif n >= 5:
                val = "\\  \\  \\  \\  " + val + "\\  \\  \\  \\  "
            else:
                val = "\\  \\  \\  " + val + "\\  \\  \\  "

            row += val

        triangle.append( "\\begin{equation}" + row + "\\end{equation}")

        if count < 0:
            break;

    return ''.join(triangle)

def pascals_triangle_allbox(h, allbox="FALSE", pascal="FALSE", equals="FALSE", combo="FALSE", highlight=[], symbol=[], symbol_chr="_", count=1000):

    if "TRUE" == allbox:
        triangle = ["\\begin{aligned}"]
    elif "TRUE" == pascal:
        triangle = ["\\begin{aligned}"]
    else:
        triangle = []

    for n in range(h):

        row = ""
        for m in range(n+1):

            count -= 1

            if count < 0:
                break;

            if "TRUE" == combo:
                if "TRUE" == equals:
                    val = "{\\scriptsize { %d \\choose %d } = %d}" % (n,m, choose(n,m))
                else:
                    val = "{\\scriptsize { %d \\choose %d }}" % (n,m)

            elif tuple([n,m]) in symbol:
                val = "{ \\fcolorbox{transparent}{transparent}{%s} }" % symbol_chr

            elif tuple([n,m]) in highlight:
                val = "{ \\fcolorbox{black}{brightblue}{%d} }" % choose(n,m)

            elif tuple([n,m,'blue']) in highlight:
                val = "{ \\fcolorbox{black}{brightblue}{%d} }" % choose(n,m)

            elif tuple([n,m,'green']) in highlight:
                val = "{ \\fcolorbox{black}{brightgreen}{%d} }" % choose(n,m)

            elif tuple([n,m,'purple']) in highlight:
                val = "{ \\fcolorbox{black}{brightpurple}{%d} }" % choose(n,m)

            elif tuple([n,m,'red']) in highlight:
                val = "{ \\fcolorbox{black}{brightred}{%d} }" % choose(n,m)

            elif tuple([n,m,'yellow']) in highlight:
                val = "{ \\fcolorbox{black}{brightyellow}{%d} }" % choose(n,m)

            elif "TRUE" == allbox:
                val = "{ \\bbox[border: 1px solid black] {\\scriptsize {\\Rule{1px}{1em}{1em}%d\\Rule{20px}{0px}{0px}} }}" % choose(n,m)
                                                                                             
            else:                                                                            
                val = "{ \\fcolorbox{transparent}{transparent}{%d} }" % choose(n,m)
                          
            if "TRUE" == allbox:
                val = val + "\\hspace{1px}"
            elif "TRUE" == pascal:         
                val = "\\  " + val + "\\  "
            else:
                val = "\\  \\  " + val + "\\  \\  "
           
            row += val
           
        if "TRUE" == allbox:
            triangle.append( "&" + row + "\\\\[-1px]")
        elif "TRUE" == pascal:                   
            triangle.append( "&" + row + "\\\\") 
        else:
            triangle.append( "\\begin{equation}" + row + "\\end{equation}")
        #triangle.append( "\\begin{equation}" + row + "\\end{equation}")
       
        if count < 0:
            break;
       
    if "TRUE" == allbox:
        triangle.append(" \\end{aligned}")
    elif "TRUE" == pascal:     
        triangle.append(" \\end{aligned}")

    return ''.join(triangle)

def pascals_triangle_by_pascal(h, highlight=[], symbol=[], symbol_chr="_", count=1000):

    triangle = ["\\begin{equation} \\begin{aligned}"] 
   
    for m in range(h):
   
        row = ""
        for n in range(h):
   
            if m > n:
                continue
            
            count -= 1
   
            if count < 0:
                break;

            elif tuple([n,m]) in symbol:
                val = "{ \\fcolorbox{transparent}{transparent}{%s} }" % symbol_chr

            elif tuple([n,m]) in highlight:
                val = "{ \\fcolorbox{black}{brightblue}{%d} }" % choose(n,m)

            elif tuple([n,m,'blue']) in highlight:
                val = "{ \\fcolorbox{black}{brightblue}{%d} }" % choose(n,m)

            elif tuple([n,m,'green']) in highlight:
                val = "{ \\fcolorbox{black}{brightgreen}{%d} }" % choose(n,m)

            elif tuple([n,m,'purple']) in highlight:
                val = "{ \\fcolorbox{black}{brightpurple}{%d} }" % choose(n,m)

            elif tuple([n,m,'red']) in highlight:
                val = "{ \\fcolorbox{black}{brightred}{%d} }" % choose(n,m)

            elif tuple([n,m,'yellow']) in highlight:
                val = "{ \\fcolorbox{black}{brightyellow}{%d} }" % choose(n,m)

            else:
                val = "{ \\fcolorbox{transparent}{transparent}{%d} }" % choose(n,m)

            if  100 <= choose(n,m):
                val = "\\  " + val + "\\  "
            elif 10 <= choose(n,m):
                val = "\\  \\  " + val + "\\  \\  "
            else:
                val = "\\  \\  \\  " + val + "\\  \\  \\  "

            #if 10 <= choose(n,m):
            #    val = "\\  " + val + "\\  "
            #else:
            #    val = "\\  \\  " + val + "\\  \\  "

            row += val

        #triangle.append( "\\begin{equation}" + row + "\\end{equation}")
        triangle.append( "&" + row + "\\\\" )
                
        if count < 0:
            break;
                
    triangle.append("\\end{aligned} \\end{equation}")

    return ''.join(triangle)  
