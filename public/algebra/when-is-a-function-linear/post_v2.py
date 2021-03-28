# See https://stackoverflow.com/questions/1393324/given-a-url-to-a-text-file-what-is-the-simplest-way-to-read-the-contents-of-the
# See https://stackoverflow.com/questions/18727347/how-to-extract-a-filename-from-a-url-append-a-word-to-it
#
import requests
import json
from bs4 import BeautifulSoup, Comment
from urllib.parse import urlparse
import os
import random

# See https://www.lambdatest.com/blog/python-selenium-screenshots/
from selenium import webdriver 
from time import sleep 
from selenium.webdriver import ChromeOptions 

STATIC_DIR = "../../../static"

def post(static_dir=STATIC_DIR, target=[], write_image=True, write_file=True, opt_demo=[], opt_make=[], opt_ctns=[], extract=[], extract_class=["ctns-body"], opt=[], url="https://testcite.com/showcase5/", img_url="https://testcite.com/showcase/"):
    #
    if not target:
        return "Empty target list"

    aTarget  = ",".join(target)
    aOptCtns = " ".join(opt_ctns) + " id='%s'" % "GENERIC_MARKER"
    aOptDemo = " ".join(opt_demo)
    aOptMake = " ".join(opt_make)
    #
    # data to be sent to api 
    aData = {'target'   : aTarget, 
             'opt_ctns' : aOptCtns,
             'opt_demo' : aOptDemo,
             'opt_make' : aOptMake} 

    aResp = requests.post(url = url, data={'payload':json.dumps(aData)})
    aSoup = BeautifulSoup(aResp.text, features='html.parser')

    marker = "ctns_"+str(random.randint(1000,5000))

    result = ""
    try:
        script_url        = aSoup.find_all("script")[0]['src']
        script_url_parsed = urlparse(script_url)

        max_height        = aSoup.find_all("div", {"class": "ctns-body"})[0]['max_height']
        max_width         = aSoup.find_all("div", {"class": "ctns-body"})[0]['max_width' ]

        response = requests.get(script_url)

        if write_file:
            fp = open(static_dir + script_url_parsed.path, "w+")
            fp.write(response.text);
            fp.close()

        result += "<script defer='true' src='%s'></script>" % script_url_parsed.path
        #result += str(aSoup.find_all("script")[0])
        #result += str(script)
        for x in extract:
            result += str(aSoup.find_all(x)[0])
         
        for c in extract_class:
            result += str(aSoup.find_all(class_=c)[0])
         
        name = os.path.basename(script_url_parsed.path).replace(".js", "")
        result += """
<script type='text/javascript'>
CTNS.QUIZ_SET_ID['%s'] = CTNS.QUIZ_SET_ID['%s'] || [];
CTNS.QUIZ_SET_ID['%s'].push('%s');
</script>
""" % (name, name, name, marker)

        options = ChromeOptions() 
        options.add_argument("--headless")
        options.add_argument("--window-size=%s,%s" % (440,400))
        #options.add_argument("--window-size=%s,%s" % (max_height, max_width))

        browser = webdriver.Chrome(options=options) 
        browser.get(img_url+"?target="+target[0]) 
        sleep(1)
        image_file = script_url_parsed.path.replace(".js", ".png")
        
        if image_file:
            browser.save_screenshot(static_dir + image_file);

        print(static_dir + image_file);

        result += """
<img height='%spx' width='%spx' src='%s'></img>
""" % (max_height, max_width, image_file)

        return result.replace("GENERIC_MARKER", marker)
    except:
        return "empty list"