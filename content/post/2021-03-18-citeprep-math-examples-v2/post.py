import requests
import json
from bs4 import BeautifulSoup

def post(target=[], opt=[], url="https://testcite.com/showcase5/"):
    #
    if not target:
        return "Empty target list"

    aTarget = ",".join(target)
    aOpt    = " ".join(opt)
    #
    # data to be sent to api 
    aData = {'target' : aTarget, 
             'opt'    : aOpt} 
    #
    aResp = requests.post(url = url, data={'payload':json.dumps(aData)})
    #aResp = requests.post(url = "https://testcite.com/showcase5/", data={'payload':json.dumps(aData)})
    aSoup = BeautifulSoup(aResp.text, 'html.parser')
    result = ""
    result += str(aSoup.find_all(class_='ctns-body')[0])
    result += str(aSoup.find_all(class_='ctns-quiz-container')[0])
    if "no_buttons" not in opt:
        result += str(aSoup.find_all(class_='ctns-button-group')[0])
    result += str(aSoup.find_all(class_='ctns-results')[0])
    result += str(aSoup.find_all('script')[0])
    return result
