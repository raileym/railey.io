#  https://stackoverflow.com/questions/1393324/given-a-url-to-a-text-file-what-is-the-simplest-way-to-read-the-contents-of-the
#  https://stackoverflow.com/questions/18727347/how-to-extract-a-filename-from-a-url-append-a-word-to-it
#  http://www.assertselenium.com/java/list-of-chrome-driver-command-line-arguments/
#
from __future__ import print_function
import sys

from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

import hashlib

from chrome_headless_screenshot import make_screenshot
import subprocess
import requests
import json
from bs4 import BeautifulSoup, Comment
from urllib.parse import urlparse
import os
import random
import re
from ctns_list import ctns_list as LIST

# See https://www.lambdatest.com/blog/python-selenium-screenshots/
from selenium import webdriver 
from time import sleep 
from selenium.webdriver import ChromeOptions 

import linecache
import sys

# See https://stackoverflow.com/questions/5574702/how-to-print-to-stderr-in-python
def eprint(*args, **kwargs):
    print(*args, file=sys.stderr, **kwargs)

support_files = [
    ("/css/pm-struct.css",        "https://cpgd.co/wp-content/plugins/pm-struct/includes/pm-struct.css", False),
    ("/css/dashicons.css",        "https://cpgd.co/wp-includes/css/dashicons.min.css", False),

    ("/js/ctns-init.js",          "https://cpgd.co/wp-content/plugins/ctns/js/src/ctns-init.js", False),
    ("/js/katex.min.js",          "https://cpgd.co/wp-content/plugins/ctns/js/lib/katex/katex/katex.min.js", False),
    ("/js/jsxgraphcore-patch.js", "https://cpgd.co/wp-content/plugins/ctns/js/lib/jsxgraph/jsxgraphcore-1.2.1-patch.js", False),
    ("/js/pm-struct.js",          "https://cpgd.co/wp-content/plugins/pm-struct/includes/pm-struct.js", True),

    ("/js/ctns-scss.js",          "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-scss.js", False),
    ("/js/ctns-init.js",          "https://cpgd.co/wp-content/plugins/ctns/js/src/ctns-init.js", False),
    ("/js/ctns-main-1-2.js",      "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-main-1-2.js", True),
    ("/js/ctns-main-2-1.js",      "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-main-2-1.js", True),
    ("/js/ctns-main-2-2.js",      "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-main-2-2.js", True),

    ("/js/ctns-scss.js.map",      "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-scss.js", False),
    ("/js/ctns-init.js.map",      "https://cpgd.co/wp-content/plugins/ctns/js/src/ctns-init.js", False),
    ("/js/ctns-main-1-2.js.map",  "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-main-1-2.js", False),
    ("/js/ctns-main-2-1.js.map",  "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-main-2-1.js", False),
    ("/js/ctns-main-2-2.js.map",  "https://cpgd.co/wp-content/plugins/ctns/js/dist/ctns-main-2-2.js", False)
]

def PrintException():
    exc_type, exc_obj, tb = sys.exc_info()
    f = tb.tb_frame
    lineno = tb.tb_lineno
    filename = f.f_code.co_filename
    linecache.checkcache(filename)
    line = linecache.getline(filename, lineno, f.f_globals)
    print('EXCEPTION IN ({}, LINE {} "{}"): {}'.format(filename, lineno, line.strip(), exc_obj))

ASSETS_DIR = "../../../assets/python/lib/"
STATIC_DIR = "../../../static"
HOST_URL   = "https://cpgd.co"

def ctns(
    target=[], 
    preview=False,
    process_support_files=True, 
    encrypt=True, 
    action="ctns", 
    match=None, 
    static_dir=STATIC_DIR+"/", 
    image_target=None, 
    skip_image=False, 
    write_image=True, 
    write_file=True, 
    opt_demo=[], 
    opt_make=[], 
    opt_ctns=[], 
    extract=[],
    id=None,
    extract_class=["ctns-body"], 
    opt=[], 
    url=HOST_URL+"/showcase5/", 
    img_url=HOST_URL+"/showcase/"):
    #
    if match != None:
        target = LIST(match)

    if id == None:
        return "<h1>Missing id</h1>"
        
    marker = id
    
    #if 'id' in aOpt_ctns_values.keys():
    #    marker = aOpt_ctns_values['id']
    #    #print("Using id as marker: %s" % (marker))
    #else:
    #    marker = str(random.randint(1000,5000))
    #    #print("Using RANDOM as marker: %s" % (marker))

    #if 'format' not in aOpt_ctns:
    #    aOpt_ctns.push( 'slide' )
        
    if 'flashcard' in opt_ctns or 'flashcard_quiz' in opt_ctns:
    
        aData = {'target'   : ",".join(target), 
                 'opt_ctns' : " ".join(opt_ctns + ["id='%s'" % (id), "flashcard_image='true'", "flashcard_script='false'"]), #+ " id='%s'" % 'GENERIC_MARKER',
                 'opt_demo' : " ".join(opt_demo),
                 'opt_make' : " ".join(opt_make)} 
    
    else:
    
        aData = {'target'   : ",".join(target), 
                 'opt_ctns' : " ".join(opt_ctns + ["id='%s'" % (id), "slide", "flashcard_image='false'", "flashcard_script='false'"]), #+ " id='%s'" % 'GENERIC_MARKER',
                 'opt_demo' : " ".join(opt_demo),
                 'opt_make' : " ".join(opt_make)} 
    

    aResp = requests.post(url = url, data={'payload':json.dumps(aData)})
    aSoup = BeautifulSoup(aResp.text, features='html.parser')

    #return "<h5>" + aResp.text + "</h5>"

    #print("<h1>NOT HERE</h1>")
    
    if action == 'ctns_make':
        return aResp.text

    result = ""
    try:
        script_url = aSoup.find_all("script")[0]['src']
        
        script_url_parsed = urlparse(script_url)

        response = requests.get(script_url)

        # Apparently, I have GENERIC_MARKER buried inside
        # my javascript file.
        
        # I plan to skip the GENERIC_MARKER concept.
        text = response.text #.replace("GENERIC_MARKER", marker)

        #NAME_UNCOOKED  = STATIC_DIR + script_url_parsed.path.replace(".js", ".uncooked.js")
        #NAME_UNENCODED = STATIC_DIR + script_url_parsed.path.replace(".js", ".unencoded.js")
        #NAME           = STATIC_DIR + script_url_parsed.path

        NAME_UNCOOKED  = os.getcwd() + "/" + STATIC_DIR + script_url_parsed.path.replace(".js", ".uncooked.js")
        NAME_UNENCODED = os.getcwd() + "/" + STATIC_DIR + script_url_parsed.path.replace(".js", ".unencoded.js")
        NAME_TARGET    = os.getcwd() + "/" + STATIC_DIR + script_url_parsed.path

        if write_file:
            fp = open(NAME_UNCOOKED, "w+")
            fp.write(response.text);
            fp.close()

            fp = open(NAME_UNENCODED, "w+")
            fp.write(text);
            fp.close()
            
            if encrypt:
                fp = open(NAME_UNENCODED, "w+")
                fp.write(text);
                fp.close()

                subprocess.run([
                    '/usr/local/bin/node', 
                    '/Users/mathtutor/node_modules/.bin/javascript-obfuscator', 
                    NAME_UNENCODED,
                    '--output',
                    NAME_TARGET, 
                    '--options-preset', 
                    'high-obfuscation'
                    #'--compact',
                    #'true'
                ])
            else:
                fp = open(NAME_TARGET, "w+")
                fp.write(text);
                fp.close()

        result += r"<script defer='true' src='%s'></script>" % script_url_parsed.path

        for x in extract:
            result += str(aSoup.find_all(x)[0])
         
        for c in extract_class:
            result += str(aSoup.find_all(class_=c)[0])
         
        if process_support_files:
            for ftarget,forigin,fencrypt in support_files:
                
                FILE_UNENCODED = os.getcwd() + "/" + STATIC_DIR + ftarget.replace(".js", ".unencoded.js")
                FILE_TARGET    = os.getcwd() + "/" + STATIC_DIR + ftarget

                req = Request(forigin, headers={'User-Agent': 'Mozilla/5.0'})
                support_file = urlopen(req).read()
            
                if fencrypt and encrypt:
                    #print("<br/>ENCODING: %s:%s" % (ftarget, forigin))
                    #print("ENCODED: %s" % (FILE_TARGET))
                
                    fp = open(FILE_UNENCODED, "wb")
                    fp.write(support_file);
                    fp.close()

                    subprocess.run([
                    #print([
                        '/usr/local/bin/node', 
                        '/Users/mathtutor/node_modules/.bin/javascript-obfuscator', 
                        FILE_UNENCODED,
                        '--output',
                        FILE_TARGET, 
                        '--options-preset', 
                        'high-obfuscation'
                        #'--compact',
                        #'true'
                    ])
                else:
                    #print("<br/>NOT ENCODING: %s:%s" % (ftarget, forigin))
                    fp = open(FILE_TARGET, "wb")
                    fp.write(support_file);
                    fp.close()

        for c in ["ctns-speech"]:
            for z in aSoup.find_all(class_=c):
                
                # See https://stackoverflow.com/questions/16627227/http-error-403-in-python-3-web-scraping
                #
                mp3_url = HOST_URL+str(z.string)

                req = Request(mp3_url, headers={'User-Agent': 'Mozilla/5.0'})

                mp3_file = urlopen(req).read()

                fp = open(static_dir + str(z.string), "wb")
                fp.write(mp3_file);
                fp.close()
         
        name = os.path.basename(script_url_parsed.path).replace(".js", "")

        image_file = script_url_parsed.path.replace(".js", ".png")
        front_file = script_url_parsed.path.replace(".js", ".front.png")
        back_file  = script_url_parsed.path.replace(".js", ".back.png")
    
        print(front_file);
        
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

        max_height        = int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_height'])
        max_width         = int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_width' ])

        URL = "%s?id=%s&qset=%s&%s&max_height=%d&max_width=%d&%s|&%s" % (
            HOST_URL+"/showcase8/", 
            id,
            ",".join(target), 
            "front=false&back=false", 
            max_height+4, 
            max_width+4,
            "opt="+"|".join(opt_ctns + ["id='%s'" % (id), "slide"]), 
            "skip_slide_image=true&seed=17")

        URL_FRONT = "%s?id=%s&qset=%s&%s&max_height=%d&max_width=%d&%s|&%s" % (
            HOST_URL+"/showcase8/", 
            id,
            ",".join(target), 
            "front=true&back=false", 
            max_height+4, 
            max_width+4,
            "opt="+"|".join(opt_ctns + ["id='%s'" % (id)]), 
            "skip_flashcard_image=true&seed=17")

        URL_BACK = "%s?id=%s&qset=%s&%s&max_height=%d&max_width=%d&%s|&%s" % (
            HOST_URL+"/showcase8/", 
            id,
            ",".join(target), 
            "front=false&back=true", 
            max_height+4, 
            max_width+4,
            "opt="+"|".join(opt_ctns + ["id='%s'" % (id)]), 
            "skip_flashcard_image=true&seed=17")

        OUTPUT = STATIC_DIR + image_file
        OUTPUT_FRONT = STATIC_DIR + front_file
        OUTPUT_BACK = STATIC_DIR + back_file

        # Always have a larger foot print. Use Cropping to
        # make it smaller.
        DIMENSION       = "%d,%d" % (max_width+100, max_height+100)
        #DIMENSION_FRONT = "%d,%d" % (max_width+4, max_height+4)
        POSITION        = (2, 2, max_width+2, max_height+2) #"%d,%d" % (50,50)
        #POSITION_FRONT  = (1, 1, max_width+2-1, max_height+2-1) #"%d,%d" % (50,50)
        #POSITION_BACK   = (1, 1, max_width+2-1, max_height+2-1) #"%d,%d" % (50,50)

        qset = ",".join(target)
        md5  = hashlib.md5( qset.encode() )
        
        if preview:
            print("MD5: %s" % ( md5.hexdigest() ) )
            print("<pre class='ctns-user-selectable'>URL: %s</pre>" % (URL))
            print("<pre class='ctns-user-selectable'>URL: %s</pre>" % (URL_FRONT))
            print("<pre class='ctns-user-selectable'>URL: %s</pre>" % (URL_BACK))
            print("<pre class='ctns-user-selectable'>OUTPUT: %s</pre>" % (OUTPUT))
            print("<pre class='ctns-user-selectable'>DIMENSION: %s</pre>" % (DIMENSION))
            print("<pre class='ctns-user-selectable'>POSITION: (%d, %d, %d, %d)</pre>" % POSITION)#(1, 1, max_width+2, max_height+2))
        
            print(result)
            return
            
        if write_image and image_target != None and 'flashcard' not in opt_ctns and 'flashcard_quiz' not in opt_ctns:
            #print("<h1>Slide image</h1>")
            make_screenshot(URL, OUTPUT, DIMENSION, POSITION );

        if write_image and image_target != None and ('flashcard' in opt_ctns or 'flashcard_quiz' in opt_ctns):
            #print("<h1>Flashcard images</h1>")
            make_screenshot(URL_FRONT, OUTPUT_FRONT, DIMENSION, POSITION );
            make_screenshot(URL_BACK,  OUTPUT_BACK,  DIMENSION, POSITION );

        #print( result.replace("GENERIC_MARKER", marker) )
        print( result )
        
        #fp = open("./result", "w+")
        #fp.write(result);
        #fp.close()

        return None

    except:
        PrintException()
        print("Unexpected error:", sys.exc_info()[0])
        print("Problems rendering the following targets.")
        return aResp.text
