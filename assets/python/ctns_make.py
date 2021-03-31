import requests
import json
from bs4 import BeautifulSoup
#from bs4 import BeautifulSoup, Comment

# See https://www.lambdatest.com/blog/python-selenium-screenshots/
from selenium import webdriver 
from time import sleep 
from selenium.webdriver import ChromeOptions 

STATIC_DIR = "../../../static"
ASSETS_DIR = "../../../assets/python/"

def ctns_make(target=[], url="https://testcite.com/ctns-new-demo/"):
    #
    if not target:
        return "Empty target list"

    aTarget = ''
    for f in target:
        fp = open(ASSETS_DIR + f, "r")
        aTarget += fp.read()
        fp.close()

    aData = {'target'   : aTarget} 

    aResp = requests.post(url = url, data={'payload':json.dumps(aData)})
    aSoup = BeautifulSoup(aResp.text, features='html.parser')

    return aResp.text
