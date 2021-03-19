import requests
import json
from bs4 import BeautifulSoup

def post(target=[], opt_demo=[], opt_make=[], opt_ctns=[], extract=[], extract_class=[], opt=[], url="https://testcite.com/showcase5/"):
    #
    if not target:
        return "Empty target list"

    aTarget  = ",".join(target)
    aOptCtns = " ".join(opt_ctns)
    aOptDemo = " ".join(opt_demo)
    aOptMake = " ".join(opt_make)
    #
    # data to be sent to api 
    aData = {'target'   : aTarget, 
             'opt_ctns' : aOptCtns,
             'opt_demo' : aOptDemo,
             'opt_make' : aOptMake} 
    #
    aResp = requests.post(url = url, data={'payload':json.dumps(aData)})
    aSoup = BeautifulSoup(aResp.text, 'html.parser')
    result = ""
    try:
        for x in extract:
            result += str(aSoup.find_all(x)[0])
         
        for c in extract_class:
            result += str(aSoup.find_all(class_=c)[0])
         
        #result += str(aSoup.find_all('h3')[0])
        #result += str(aSoup.find_all(class_='ctns-body')[0])
        #result += str(aSoup.find_all(class_='ctns-quiz-container')[0])
        #if "no_buttons" not in opt:
        #    result += str(aSoup.find_all(class_='ctns-button-group')[0])
        #result += str(aSoup.find_all(class_='ctns-results')[0])
        #result += str(aSoup.find_all('script')[0])
        return result
    except:
        return "empty list"
