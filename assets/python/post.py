# See https://stackoverflow.com/questions/1393324/given-a-url-to-a-text-file-what-is-the-simplest-way-to-read-the-contents-of-the
# See https://stackoverflow.com/questions/18727347/how-to-extract-a-filename-from-a-url-append-a-word-to-it
# See http://www.assertselenium.com/java/list-of-chrome-driver-command-line-arguments/
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

def post(action="ctns", static_dir=STATIC_DIR, image_target=None, target=[], skip_image=False, write_image=True, write_file=True, opt_demo=[], opt_make=[], opt_ctns=[], extract=[], extract_class=["ctns-body"], opt=[], url="https://cpgd.co/showcase5/", img_url="https://cpgd.co/showcase/"):
    #
    if not target:
        return "Empty target list"

    marker = str(random.randint(1000,5000))

    aTarget  = ",".join(target)
    aOptCtns = " ".join(opt_ctns) + " id='%s'" % 'GENERIC_MARKER' #"ctns_" + marker #"PYTHON_MARKER"
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

    if action == 'ctns_make':
        return aResp.text

    marker = str(random.randint(1000,5000))

    result = ""
    try:
        script_url        = aSoup.find_all("script")[0]['src']
        script_url_parsed = urlparse(script_url)

        response = requests.get(script_url)

        # Apparently, I have GENERIC_MARKER buried inside
        # my javascript file.
        text = response.text.replace("GENERIC_MARKER", marker)

        if write_file:
            fp = open(static_dir + script_url_parsed.path + ".uncooked", "w+")
            fp.write(response.text);
            #fp.write(text);
            fp.close()

            fp = open(static_dir + script_url_parsed.path, "w+")
            #fp.write(response.text);
            fp.write(text);
            fp.close()

        result += r"<script defer='true' src='%s'></script>" % script_url_parsed.path
        #result += str(aSoup.find_all("script")[0])
        #result += str(script)
        for x in extract:
            result += str(aSoup.find_all(x)[0])
         
        for c in extract_class:
            result += str(aSoup.find_all(class_=c)[0])
         
        name = os.path.basename(script_url_parsed.path).replace(".js", "")
        result += """
<script type='text/javascript'>
// These instructions, including the value of %s, are
// coming from the Python-based script called post.py.
// The script post.py originates the value of %s, and then
// passes this value into the system using these two lines
// below.
//
CTNS.QUIZ_SET_ID['%s'] = CTNS.QUIZ_SET_ID['%s'] || [];
CTNS.QUIZ_SET_ID['%s'].push('%s');
</script>
""" % (marker, marker, name, name, name, marker)

        image_file = script_url_parsed.path.replace(".js", ".png")

        if write_image and image_target != None:
            options = ChromeOptions() 
            options.add_argument("--headless")

            max_height        = int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_height'])
            max_width         = int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_width' ])

            # Added 30px to the width because the screen shot is off by
            # a left-margin of 15. Also I purposely added a border on
            # showcase to help me debug this effort/adjustment. For now,
            # I toggle that border between green and transparent.
            options.add_argument("--window-size=%d,%d" % (max_width+30, max_height))

            browser = webdriver.Chrome(options=options) 
            browser.get(img_url+"?target="+image_target) #target[0]) 
            sleep(1)
            browser.save_screenshot(static_dir + image_file);

        if not skip_image:
            result += r"""
<pre class='ctns-image'><img class='ctns-image' src='%s'></img></pre>
""" % (image_file)

        return result.replace("GENERIC_MARKER", marker)
    except:
        return "empty list"
