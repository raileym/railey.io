# Helpful URLs (somewhat).
#
#   https://sites.google.com/a/chromium.org/chromedriver/downloads
#   https://linuxhint.com/chrome_selenium_headless_running/
#   https://stackoverflow.com/questions/12698843/how-do-i-pass-options-to-the-selenium-chrome-driver-using-python
#   https://chromedriver.chromium.org/capabilities

# So what did I do to get this working AGAIN?

# First, I downloaded chrome driver from the repository that is owned
# by Google, of course. 
#
# https://sites.google.com/a/chromium.org/chromedriver/downloads
#
# I unzipped the file [chromedriver], moved it to /usr/local/bin/chromedriver.VERSION,
# and then symbolically linked THAT version of chromedriver to 
# /usr/local/bin/chromedriver.
#
# To ensure I am on the right track, I ask chromedriver, "What is your version?"
#
#    which chromedriver .... # validates the path and settings
#    chromedriver --version  # gives me the version number (2021/04/20: 90.0.4430.24)
#
# At this point, the following script failed. Ultimately, the problem came down
# to the expression, chrome_options.binary_location, which no longer applies or is
# necessary.
#
# Also, I check the actual webdriver.py files, as located here.
#
# /Users/mathtutor/opt/anaconda3/lib/python3.7/site-packages/selenium/webdriver/chrome/webdriver.py
#

from optparse import OptionParser

from selenium import webdriver  
from selenium.webdriver.chrome.options import Options

from time import sleep

from PIL import Image

#from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

# Not used apparently, CHROME_PATH = '/Users/mathtutor/Library/Application Support/Google/Chrome/'
CHROMEDRIVER_PATH = '/usr/local/bin/chromedriver'

# When I go THIS route using to_capabilities, then I understand
# the formats that I need under-the-hood, as in
# 
#   desired_capabilities = chrome_options.to_capabilities()
#   print(desired_capabilities)
#
#   { 'browserName': 'chrome', 
#     'version': '', 
#     'platform': 'ANY', 
#     'goog:chromeOptions': {
#         'extensions': [], 
#         'args': [
#             '--headless', 
#             '--window-size=1920,1080'
#         ]
#     }
#   }
#
#
# When I just plug-n-play with capabilities directly, I end up
# including the desired attributes in the wrong format.
#
# caps = webdriver.DesiredCapabilities.CHROME.copy()
# caps['headless'] = True
# caps['window-size'] = WINDOW_SIZE
# print(caps)
#
#   { 'browserName': 'chrome', 
#     'version': '', 
#     'platform': 'ANY', 
#     'headless': True, 
#     'window-size': '1920,1080'
#   }
#
# Obviously, this is a wrong result
#
# I decided to go back to the work-the-options route using
# my expressions for chrome_options. You can see the logic
# for yourself when looking at webdriver.py.

def make_screenshot(url, output, dimensions="1920,1080", box=(0,0,400,300)):
    if not url.startswith('http'):
        raise Exception('URLs need to start with "http"')

    chrome_options = Options() # I skipped using webdriver.ChromeOptions(),
    chrome_options.add_argument("--headless")  
    chrome_options.add_argument("--window-size=%s" % dimensions)
    # WRONG IDEA ... chrome_options.add_argument("--window-position=%s" % position)
    #chrome_options.binary_location = CHROME_PATH # THIS LINE DOES NOT WORK. LEAVE IT OUT

    #print(chrome_options.to_capabilities())

    driver = webdriver.Chrome(
        executable_path=CHROMEDRIVER_PATH,
        options=chrome_options
    )  

    # https://www.skptricks.com/2018/03/how-to-set-browser-window-position-in-selenium-webdriver.html
    # https://www.geeksforgeeks.org/set_window_position-driver-method-selenium-python/
    # WRONG IDEA driver.set_window_position(100,100)

    #print('<h3>'+url+'</h1>')
    driver.get(url)
    sleep(3)
    #driver.save_screenshot(output)

    # Going for CROPPING instead
    # https://www.lambdatest.com/blog/python-selenium-screenshots/
    
    driver.save_screenshot("crop.temp.png")
    fullImage = Image.open("crop.temp.png")
    cropImage = fullImage.crop(box)
    cropImage.save(output)

    #driver.close() # According to https://stackoverflow.com/questions/15067107/difference-between-webdriver-dispose-close-and-quit
    driver.quit()

if __name__ == '__main__':
    usage = "usage: %prog [options] <url> <output>"
    parser = OptionParser(usage=usage)

    (options, args) = parser.parse_args()

    if len(args) < 2:
        parser.error("please specify a URL and an output")

    make_screenshot(args[0], args[1])
