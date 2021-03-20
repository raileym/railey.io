# See https://stackoverflow.com/questions/1393324/given-a-url-to-a-text-file-what-is-the-simplest-way-to-read-the-contents-of-the
# See https://stackoverflow.com/questions/18727347/how-to-extract-a-filename-from-a-url-append-a-word-to-it
#
import requests
import json
from bs4 import BeautifulSoup, Comment
from urllib.parse import urlparse

STATIC_DIR = "../../../static"

#def post(target=[], opt_demo=[], opt_make=[], opt_ctns=[], extract=["script"], extract_class=["ctns-body"], opt=[], url="https://testcite.com/showcase5/"):
def post(target=[], opt_demo=[], opt_make=[], opt_ctns=[], extract=[], extract_class=["ctns-body"], opt=[], url="https://testcite.com/showcase5/"):
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
    aSoup = BeautifulSoup(aResp.text, features='html.parser')

    result = ""
    try:
        script_url        = aSoup.find_all("script")[0]['src']
        script_url_parsed = urlparse(script_url)

        response = requests.get(script_url)

        #return "<h1>%s</h1>" % (STATIC_DIR + script_url_parsed.path)
        fp = open(STATIC_DIR + script_url_parsed.path, "w+")
        #return "<h1>%s</h1>" % "Made it"

        fp.write(response.text);
        fp.close()
        #return "Works!"

        result += "<script defer src='%s'></script>" % script_url_parsed.path
        #result += str(aSoup.find_all("script")[0])
        #result += str(script)
        for x in extract:
            result += str(aSoup.find_all(x)[0])
         
        for c in extract_class:
            result += str(aSoup.find_all(class_=c)[0])
         
        return result
    except:
        return "empty list"
