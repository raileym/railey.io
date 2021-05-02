#  https://stackoverflow.com/questions/1393324/given-a-url-to-a-text-file-what-is-the-simplest-way-to-read-the-contents-of-the
#  https://stackoverflow.com/questions/18727347/how-to-extract-a-filename-from-a-url-append-a-word-to-it
#  http://www.assertselenium.com/java/list-of-chrome-driver-command-line-arguments/
#
from __future__ import print_function
import sys

from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

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


def PrintException():
    exc_type, exc_obj, tb = sys.exc_info()
    f = tb.tb_frame
    lineno = tb.tb_lineno
    filename = f.f_code.co_filename
    linecache.checkcache(filename)
    line = linecache.getline(filename, lineno, f.f_globals)
    print('EXCEPTION IN ({}, LINE {} "{}"): {}'.format(filename, lineno, line.strip(), exc_obj))

max_height   = 360 #int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_height'])
max_width    = 600 #int(aSoup.find_all("div", {"class": "ctns-body"})[0]['max_width' ])

write_image  = True
preview      = True

image_file   = 'main.png'
front_file   = 'front.main.png'
back_file    = 'back.main.png'

STATIC_DIR   = './'
image_target = 'LF-GeneralFormS'
HOST_URL     = 'https://cpgd.co'
opt_ctns     = [
    "flashcard"
  , "quiz_container_css='width:100%'" 
  ]
  

URL = "%s?target=%s&%s&max_height=%d&max_width=%d&%s|%s" % (
    HOST_URL+"/showcase8/", 
    image_target, 
    "front=false&back=false", 
    max_height+4, 
    max_width+4,
    "opt="+"|".join(opt_ctns), 
    "id='GENERIC_MARKER'&skipimage=true&seed=17")

URL_FRONT = "%s?target=%s&%s&max_height=%d&max_width=%d&%s|%s" % (
    HOST_URL+"/showcase8/", 
    image_target, 
    "front=true&back=false", 
    max_height+4, 
    max_width+4,
    "opt="+"|".join(opt_ctns), 
    "id='GENERIC_MARKER'&skipimage=true&seed=17")

URL_BACK = "%s?target=%s&%s&max_height=%d&max_width=%d&%s|%s" % (
    HOST_URL+"/showcase8/", 
    image_target, 
    "front=false&back=true", 
    max_height+4, 
    max_width+4,
    "opt="+"|".join(opt_ctns), 
    "id='GENERIC_MARKER'&skipimage=true&seed=17")

OUTPUT = STATIC_DIR + image_file
OUTPUT_FRONT = STATIC_DIR + front_file
OUTPUT_BACK = STATIC_DIR + back_file

DIMENSION       = "%d,%d" % (max_width+100, max_height+100)
DIMENSION_FRONT = "%d,%d" % (max_width+4, max_height+4)
DIMENSION_BACK  = "%d,%d" % (max_width+4, max_height+4)
POSITION        = (0, 0, max_width+2, max_height+2) #"%d,%d" % (50,50)
POSITION_FRONT  = (2, 2, max_width+2, max_height+2) #"%d,%d" % (50,50)
POSITION_BACK   = (2, 2, max_width+2, max_height+2) #"%d,%d" % (50,50)

try:
    if preview:
        print("<pre class='ctns-user-selectable'>URL: %s</pre>" % (URL))
        print("<pre class='ctns-user-selectable'>URL: %s</pre>" % (URL_FRONT))
        print("<pre class='ctns-user-selectable'>URL: %s</pre>" % (URL_BACK))
        print("<pre class='ctns-user-selectable'>OUTPUT: %s</pre>" % (OUTPUT))
        print("<pre class='ctns-user-selectable'>DIMENSION: %s</pre>" % (DIMENSION))
        print("<pre class='ctns-user-selectable'>POSITION: (%d, %d, %d, %d)</pre>" % POSITION)#(1, 1, max_width+2, max_height+2))

    #if write_image and image_target != None and 'flashcard' not in opt_ctns:
    #    make_screenshot(URL, OUTPUT, DIMENSION, POSITION );

    if write_image and image_target != None and 'flashcard' in opt_ctns:
        # Take a Larger dimension so that scrolling is not affected,
        # then use cropping to trim the too-large image.
        make_screenshot(URL_FRONT, OUTPUT_FRONT, DIMENSION, POSITION_FRONT );
        make_screenshot(URL_BACK,  OUTPUT_BACK,  DIMENSION, POSITION_BACK );
        #print(URL_BACK,  OUTPUT_BACK,  DIMENSION_BACK, POSITION_BACK );
except:
    PrintException()

