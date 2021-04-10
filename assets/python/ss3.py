# See https://www.lambdatest.com/blog/python-selenium-screenshots/
from selenium import webdriver 
from time import sleep 
from selenium.webdriver import ChromeOptions 
options = ChromeOptions() 
#options.headless = True 
options.add_argument("--headless")
options.add_argument("window-size=440,400")
browser = webdriver.Chrome(options=options) 
URI = "https://cpgd.co/showcase/?target=test-linearQ15-9d-v8"
browser.get(URI) 
sleep(1)
browser.save_screenshot("fullPageScreenshot.png") 

#S = lambda X: browser.execute_script(‘return document.body.parentNode.scroll’+X) browser.set_window_size(S(‘width’), S(‘height’)) 
#browser.find_element_by_tag_name(‘body’).screenshot(‘LambdaTestFullPage.png’) browser.quit() 
