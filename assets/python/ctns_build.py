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
SHORTCODES_DIR = "../../../layouts/shortcodes"
HOST_URL   = "https://cpgd.co"

def ctns_build(
    target=[],                      # Soon-to-be qset
    preview=False,                  # Print URLs for practice
    process_support_files=False,    # Manage support files 
    encrypt=True,                   # Encrypt files 
    match=None,                     # More of a wild-card list of targets 
    static_dir=STATIC_DIR+"/",      # Not likely to be used going forward 
    version=-1,
    image_target=None, 
    skip_image=False, 
    write_image=True,
    images_only=False,
    write_file=True, 
    opt_demo=[], 
    opt_make=[], 
    opt_ctns=[], 
    opt=[], 
    #extract=[],
    id=None,                        # Identifies a label on all items
    extract_class=["ctns-body"], 
    url=HOST_URL+"/showcase5/", 
    img_url=HOST_URL+"/showcase/"):
    
    
    # Require an id
    #
    if id == None:
        return "<h1>Missing id</h1>"
        
    # If I have a match set, then use this
    # value to create my target list.
    #
    if match != None:
        target = LIST(match)


    ##########################################################
    #        
    # GRAB MY FILE from [ctns][/ctns] via SHOWCASE5
    #
    if 'flashcard' in opt_ctns or 'flashcard_quiz' in opt_ctns:
    
        aData = {'target'   : ",".join(target), 
                 'opt_ctns' : " ".join(opt_ctns + ["id='%s'" % (id), "location='LOCATION'", "flashcard_image='true'", "flashcard_script='false'"]),
                 'opt_demo' : " ".join(opt_demo),
                 'opt_make' : " ".join(opt_make)} 
    
    else:
    
        aData = {'target'   : ",".join(target), 
                 'opt_ctns' : " ".join(opt_ctns + ["id='%s'" % (id), "slide", "location='LOCATION'", "flashcard_image='false'", "flashcard_script='false'"]),
                 'opt_demo' : " ".join(opt_demo),
                 'opt_make' : " ".join(opt_make)} 
    

    # I need information for images, max_height and max_width,
    # as provided by this first call.
    aResp = requests.post(url = url, data={'payload':json.dumps(aData)})
    aSoup = BeautifulSoup(aResp.text, features='html.parser')

    script_url        = aSoup.find_all("script")[0]['src']
    script_url_parsed = urlparse(script_url)
    
    if not images_only and aResp.status_code != 200:
        print("HTTP Error %d" % aResp.status_code)
        return None
    
    if (version < 0):
        version = random.randint(1000, 10000)

    # The following initial value tees up the LOCATION value
    # downstream.
    if not images_only:
    
        result = "{{ $idx := index (seq 1000 | shuffle) 0 }}\n"
    
        try:
            ##########################################################
            #        
            # GRAB THE SCRIPT
            #
            # Grab the corresponding script file. I should
            # know the name of this script file upfront so
            # that I don't need to grab its name.
        
            #script_url = aSoup.find_all("script")[0]['src']
    
            # PRIMARY: Grab my script file
            response = requests.get(script_url)

        
            ##########################################################
            #
            # SAVE THE SCRIPT locally, encrypted or otherwise.
            #        
            # Here, I am manipulating the file name all
            # within the static dir.
            #script_url_parsed = urlparse(script_url)

            NAME_UNCOOKED  = os.getcwd() + "/" + STATIC_DIR + script_url_parsed.path.replace(".js", ".uncooked.js")
            NAME_TARGET    = os.getcwd() + "/" + STATIC_DIR + script_url_parsed.path

            if write_file:
                fp = open(NAME_UNCOOKED, "w+")
                fp.write(response.text);
                fp.close()

                if encrypt:
                    subprocess.run([
                        '/usr/local/bin/node', 
                        '/Users/mathtutor/node_modules/.bin/javascript-obfuscator', 
                        NAME_UNCOOKED,
                        #NAME_UNENCODED,
                        '--output',
                        NAME_TARGET, 
                        '--options-preset', 
                        'high-obfuscation'
                        #'--compact',
                        #'true'
                    ])
                else:
                    fp = open(NAME_TARGET, "w+")
                    fp.write(response.text);
                    fp.close()

            # Here lies just the path without the full url
            #result += r"<script defer='true' src='%s'></script>" % script_url_parsed.path
            #result += r"<script src='%s'></script>" % script_url_parsed.path
            # See https://www.kirupa.com/html5/loading_script_files_dynamically.htm

            #        result += """
            #<script>
            #    var script_loaded = (function(id) {
            #            CTNS.QUIZ_SET_ID[id] = CTNS.QUIZ_SET_ID[id] || [];
            #            CTNS.QUIZ_SET_ID[id].push('LOCATION');
            #            QUIZ_SET[id](QUIZ_SET_ID['LOCATION');
            #        })('%s')
            #</script>
            #""" % (script_url_parsed.path,script_url_parsed.path)

            #for x in extract:
            #    result += str(aSoup.find_all(x)[0])
         
        
            ##########################################################
            #
            # GRAB CTNS-BODY.
            #
            # Here I am grabbing the primary ctns-body div from the
            # downloaded file
        
            for c in extract_class:
                result += str(aSoup.find_all(class_=c)[0])
         
        
            ##########################################################
            #
            # GRAB SUPPORT FILES
            #
            # Pick up process_support_files, encrypt them or not.
        
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

        
            ##########################################################
            #
            # GRAB ALL THE MP3 FILES
            #
            # Pick up all the mp3 files
        
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
         

            ##########################################################
            #
            # GRAB ALL THE MP3 FILES
            #
            # Pick up all the mp3 files
        
            name = os.path.basename(script_url_parsed.path).replace(".js", "")

            if name != id:
                print("WARNING")
                print("<h1>name (%s) != id(%s)</h1>" % (name, id))
                return
    
            #        result += """
            #<script type='text/javascript'>
            #CTNS.QUIZ_SET_ID['%s'] = CTNS.QUIZ_SET_ID['%s'] || [];
            #CTNS.QUIZ_SET_ID['%s'].push('LOCATION');
            #//                    QUIZ_SET[quizlet](QUIZ_SET_ID[quizlet][i]);
            #
            #</script>
            #""" % (id, id, id)
            result += """
<script>
    var script_loaded_%s = function() {
            CTNS.QUIZ_SET_ID['%s'] = CTNS.QUIZ_SET_ID['%s'] || [];
            CTNS.QUIZ_SET_ID['%s'].push('LOCATION');
        };
</script>
""" % (id, id, id, id)

            result += r"<script defer='true' src='%s?%d' onload='script_loaded_%s()' ></script>" % (script_url_parsed.path, version, id)

            #print("<h1>PATH:%s/%s.html</h1>" % (SHORTCODES_DIR, id))
            fp = open("%s/%s.html" % (SHORTCODES_DIR, id), "w+")
            fp.write(result.replace('LOCATION', '{{ $idx }}'));
            #fp.write(result.replace('LOCATION', '{{.Get "location"}}'));
            fp.close()
        
            #return None

        except:
            PrintException()
            print("Unexpected error:", sys.exc_info()[0])
            print("Problems rendering the following targets.")
            return aResp.text


    if write_image and image_target != None:

        try:
            ##########################################################
            #
            # CREATING MY IMAGE FILES
            #
            # Pick up all the mp3 files
            max_height        = int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_height'])
            max_width         = int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_width' ])

            URL = "%s?id=%s&qset=%s&%s&max_height=%d&max_width=%d&%s|&%s&%s" % (
                HOST_URL+"/showcase8/", 
                id,
                ",".join(target), 
                "front=false&back=false", 
                max_height+4, 
                max_width+4,
                "opt="+"|".join(opt_ctns + ["location='%s'|id='%s'" % (id, id), "slide", "version='%d'" % version]), 
                "skip_slide_image=true&seed=17",
                "red_border='true'")

            URL_FRONT = "%s?id=%s&qset=%s&%s&max_height=%d&max_width=%d&%s|&%s&%s" % (
                HOST_URL+"/showcase8/", 
                id,
                ",".join(target), 
                "front=true&back=false", 
                max_height+4, 
                max_width+4,
                "opt="+"|".join(opt_ctns + ["location='%s'|id='%s'" % (id, id), "version='%d'" % version]), 
                "skip_flashcard_image=true&seed=17",
                "red_border='true'")

            URL_BACK = "%s?id=%s&qset=%s&%s&max_height=%d&max_width=%d&%s|&%s&%s" % (
                HOST_URL+"/showcase8/", 
                id,
                ",".join(target), 
                "front=false&back=true", 
                max_height+4, 
                max_width+4,
                "opt="+"|".join(opt_ctns + ["location='%s'|id='%s'" % (id, id), "version='%d'" % version]), 
                "skip_flashcard_image=true&seed=17",
                "red_border='true'")

            OUTPUT       = STATIC_DIR + script_url_parsed.path.replace(".js", ".png")
            OUTPUT_FRONT = STATIC_DIR + script_url_parsed.path.replace(".js", ".front.png")
            OUTPUT_BACK  = STATIC_DIR + script_url_parsed.path.replace(".js", ".back.png")
            #OUTPUT       = STATIC_DIR + id + ".png"
            #OUTPUT_FRONT = STATIC_DIR + id + ".front.png"
            #OUTPUT_BACK  = STATIC_DIR + id + ".back.png"
            #print(OUTPUT)
            #return
            
            # Always have a larger foot print. Use Cropping to
            # make it smaller.
            DIMENSION       = "%d,%d" % (max_width+100, max_height+100)
            #DIMENSION_FRONT = "%d,%d" % (max_width+4, max_height+4)
            #POSITION        = (2, 2, max_width+2, max_height+2) #"%d,%d" % (50,50)
            POSITION        = (0, 0, max_width+4, max_height+4) #"%d,%d" % (50,50)
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
            
            if 'flashcard' not in opt_ctns and 'flashcard_quiz' not in opt_ctns:
                #print("<h1>Slide image</h1>")
                make_screenshot(URL, OUTPUT, DIMENSION, POSITION );

            if ('flashcard' in opt_ctns or 'flashcard_quiz' in opt_ctns):
                #print("<h1>Flashcard images</h1>")
                make_screenshot(URL_FRONT, OUTPUT_FRONT, DIMENSION, POSITION );
                make_screenshot(URL_BACK,  OUTPUT_BACK,  DIMENSION, POSITION );

            return None

        except:
            PrintException()
            print("Unexpected error:", sys.exc_info()[0])
            print("Problems rendering the following targets.")
            return aResp.text
