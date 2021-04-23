# import webdriver
from selenium import webdriver
from PIL import Image
 
# create webdriver object
driver = webdriver.Chrome()
 
# get geeksforgeeks.org
driver.get("https://www.geeksforgeeks.org/")
 
driver.save_screenshot("geeks.png")

# https://www.lambdatest.com/blog/python-selenium-screenshots/
# try cropping

fullImage = Image.open("geeks.png")
cropImage = fullImage.crop((50,20,400,400))
cropImage.save("geeks_cropped.png")

# set window position
# NOPE. WRONG IDEA.driver.set_window_position(1000, 500, windowHandle ='current')
