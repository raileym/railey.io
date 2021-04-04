import requests
import json
from bs4 import BeautifulSoup
import os
import re

# See https://www.lambdatest.com/blog/python-selenium-screenshots/
from selenium import webdriver 
from time import sleep 
from selenium.webdriver import ChromeOptions 

STATIC_DIR = "../../../static"
ASSETS_DIR = "../../../assets/python/lib/"

def ctns_list(match=None, quiet=True):
    #
    results = [f for f in os.listdir(ASSETS_DIR) if re.match(match, f)]

    results.sort()

    return results 
