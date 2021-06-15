ZWRAP           = "%s\n"
WRAP           = "\n%s\n"
RWRAP           = "\n%s\n  "
SWRAP           = "\n  %s  \n"
CTNS_MAKE           = "[ctns_make id='%s']%s[/ctns_make]"
CTNS_FRONT          = "[ctns_front style='%s']%s[/ctns_front]"
CTNS_BACK           = "[ctns_back style='%s']%s[/ctns_back]"
CTNS_FRONTSPEAK     = "[ctns_frontspeak]%s[/ctns_frontspeak]"
CTNS_BACKSPEAK      = "[ctns_backspeak]%s[/ctns_backspeak]"
CTNS_PROBLEM_HEIGHT = "[ctns_problem_height]%s[/ctns_problem_height]"
CTNS_PROBLEM_WIDTH  = "[ctns_problem_width]%s[/ctns_problem_width]"

ASSETS_DIR = "../../../assets/python/lib/"

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

def flashcard_make(slide_data):

    slide_set = []
    for slide in slide_data:

        #name = '_'.join( (slide['set_name']+'_'+slide['front']).split() )
        result = ZWRAP % CTNS_MAKE % (slide['name'] , WRAP % ( 
            SWRAP % CTNS_FRONT % (slide['frontstyle'], RWRAP % slide['front']) 
          + SWRAP % CTNS_BACK  % (slide['backstyle'],  RWRAP % slide['back'])
          + frontspeak(slide['frontspeak'])
          + backspeak(slide['backspeak'])
        ))
        fp = open( ASSETS_DIR + slide['name'], "w+")
        fp.write(result)
        fp.close()
        slide_set.append(slide['name'])

    return slide_set

slide_data = [
   {'set_name': 'basic',   'front': 'origin',        'back': 'The origin is the point on a number line marked as zero (0).',    'frontspeak': 'origin', 'backspeak': ''}
 , {'set_name': 'basic',   'front': 'unit distance', 'back': 'The unit distance is the distance from 0 to 1 on a number line.', 'frontspeak': '', 'backspeak': 'unit distance'}
 , {'set_name': 'basic',   'front': 'elements',      'back': 'The members of a set are called elements.',                       'frontspeak': '', 'backspeak': ''}
 , {'set_name': 'basic',   'front': 'empty set',     'back': 'The empty set is the set that contains no elements.',             'frontspeak': 'empty set', 'backspeak': 'The empty set is the set that contains no elements.'}
]

slide_data = [

    {'set_name': 'func', 'name': 'func_asymptote', 'filename': 'FN_AsymptoteS', 'front': 'Asymptote', 'frontstyle': '', 'back': 'An Asymptote is a line which a graph gets arbitrarily close to, but never touches, as the independent or dependent variable gets very large.', 'backstyle': 'width:80%;font-size:90%;', 'frontspeak': 'Ass-em-tote', 'backspeak': 'An Ass-em-tote is a line which a graph gets arbitrarily close to, but never touches, as the independent or dependent variable gets very large.'}

  , {'set_name': 'func', 'name': 'func_average_rate_of_change_the_slope', 'filename': 'FN_AverageRateOfChangeS', 'front': 'Average Rate of Change<br/>(The Slope)', 'frontstyle': '', 'back': 'The Average Rate of Change of a function $$f$$ between two points $$(a, f(a))$$ and $$(b, f(b))$$ is the slope of the line that connects these two points.  $|m = \\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b-a}|$', 'backstyle': 'width:80%;font-size:90%;', 'frontspeak': '', 'backspeak': 'The Average Rate of Change of a function eff between two points (a comma eff of a) and (b comma eff of b) is the slope of the line that  connects these two points.'}

  , {'set_name': 'func', 'name': 'func_domain', 'filename': 'FN_DomainS', 'front': 'Domain', 'frontstyle': '', 'back': 'The Domain of a function is the set of all  values of the independent variable.', 'backstyle': 'width:80%;font-size:90%;', 'frontspeak': '', 'backspeak': ''}

]

flashcard_make(slide_data)
