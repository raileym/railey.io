from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.headless = True
driver = webdriver.Chrome(options=options, executable_path=r'/Users/mathtutor/bin/chromedriver')
driver.get("http://google.com/")
print ("Headless Chrome Initialized")
driver.quit()
