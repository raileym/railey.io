import sys
import re

ZWRAP           = "%s\n"
CWRAP           = "  , %s\n"
WRAP            = "\n%s\n"
BWRAP           = "[\n%s\n]"
RWRAP           = "\n%s\n  "
SWRAP           = "\n  %s  \n"
CTNS_MAKE           = "[ctns_make id='%s']%s[/ctns_make]"
CTNS_FRONT          = "[ctns_front]%s[/ctns_front]"
CTNS_BACK           = "[ctns_back]%s[/ctns_back]"
CTNS_FRONTSPEAK     = "[ctns_frontspeak]%s[/ctns_frontspeak]"
CTNS_BACKSPEAK      = "[ctns_backspeak]%s[/ctns_backspeak]"
CTNS_PROBLEM_HEIGHT = "[ctns_problem_height]%s[/ctns_problem_height]"
CTNS_PROBLEM_WIDTH  = "[ctns_problem_width]%s[/ctns_problem_width]"

def help():
    return """
Syntax: \n
    python ctns-flashcard-splitter.py [group-name] [file-list]\n
Example: \n
    python ctns-flashcard-splitter.py ax lib/ax*S*\n
"""

def frontspeak(text):
    if text == "":
        return ""
    else:
        return SWRAP % CTNS_FRONTSPEAK % RWRAP % text

def backspeak(text):
    if text == "":
        return ""
    else:
        return SWRAP % CTNS_BACKSPEAK % RWRAP % text

def flashcard_split(set_name, fname, slide_file):

    pattern_front       = r"\[ctns_front\](.*?)\[\/ctns_front\]" 
    pattern_front_style = r"\[ctns_front.*?style='(.*?)'.*?\](.*?)\[\/ctns_front\]" 
    pattern_back        = r"\[ctns_back\](.*?)\[\/ctns_back\]" 
    pattern_back_style  = r"\[ctns_back.*?style='(.*?)'.*?\](.*?)\[\/ctns_back\]" 
    pattern_frontspeak  = r"\[ctns_frontspeak\](.*?)\[\/ctns_frontspeak\]" 
    pattern_backspeak   = r"\[ctns_backspeak\](.*?)\[\/ctns_backspeak\]" 

    if re.search(pattern_front, slide_file):
        frontstyle = ""
        front      = (re.findall(pattern_front, slide_file))[0]
    elif re.search(pattern_front_style, slide_file):
        results       = (re.findall(pattern_front_style, slide_file))
        frontstyle    = results[0][0]
        front         = results[0][1]
    else:
        print("**** Warning: Malformed front ****")
        print(slide_file)
        frontstyle = ""
        front      = "no front"

    if re.search(pattern_back, slide_file):
        backstyle     = ""
        back       = (re.findall(pattern_back, slide_file))[0]
    elif re.search(pattern_back_style, slide_file):
        results       = (re.findall(pattern_back_style, slide_file))
        backstyle     = results[0][0]
        back          = results[0][1]
    else:
        print("**** Warning: Malformed back ****")
        print(slide_file)
        backstyle     = ""
        back          = "no back"

    if re.search(pattern_frontspeak, slide_file):
        frontspeak = (re.findall(pattern_frontspeak, slide_file))[0]
    else:
        frontspeak = ""

    if re.search(pattern_backspeak, slide_file):
        backspeak  = (re.findall(pattern_backspeak,  slide_file))[0]
    else:
        backspeak = ""

    name_left  = set_name
    name_right = re.sub(r'\$\$.*?\$\$', '', front)
    name_right = name_right.replace("-"," ").replace("<br/>"," ").replace("("," ").replace(")", " ")
    
    name = 'gen_' + '_'.join( (name_left.lower() + ' ' + name_right.lower()).split() )
    #name = '_'.join( (set_name+'_'+front).split() )
    #name = re.sub(r'\$\$.*?\$\$', '', name)
    #name = name.replace("-","_").replace("<br/>","")
    #name = '_'.join( (set_name+'_'+front.replace(" ","_").split() ))
    #name = name.lower()
    #name = name.replace("-","_").replace("<br\/>","")
    #name = name.replace("/\$\$.*?\$\$/", "")

    return({'set_name':set_name, 'name': name, 'filename': re.sub(r'lib/','lib/gen_',fname), 'orig_filename':fname, 'front':front.strip(), 'frontstyle':frontstyle.strip(), 'back':back.strip(), 'backstyle':backstyle.strip(), 'frontspeak':frontspeak.strip(), 'backspeak':backspeak.strip()})
    

#slide_data = [
#   "[ctns_back style='color:blue']This is my front[/ctns_back]"
#]

#flashcard_make(slide_data)

#for f in slide_data:
#    print( flashcard_split( "dummy", f ))

#print(sys.argv)
#print(len(sys.argv))
#help()
#exit(0)

if (len(sys.argv) == 1):
    print(help())
    exit(0)

flashcard_set = []
set_name = sys.argv[1]
for fname in sys.argv[2:]:
    fp = open(fname, "r")
    result = fp.read()
    flashcard_set.append( flashcard_split( set_name, fname, result.replace("\n"," ") ))

#print((flashcard_set, [s['name'] for s in flashcard_set]))
for f in flashcard_set:
    print(CWRAP % f)

print("\n****\n")

for f in flashcard_set:
    print("blogdown::shortcode('%s')" % f['name'])

print("\n****\n")

for f in flashcard_set:
    print("  , '%s'" % f['name'])

#print("****")
#print( [s['name'] for s in flashcard_set])
    
