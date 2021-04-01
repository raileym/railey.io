from bs4 import BeautifulSoup

data = '''<div class="image">
        <a href="http://www.example.com/eg1">Content1<img  
        src="http://image.example.com/img1.jpg" /></a>
        </div>
        <div class="image">
        <a href="http://www.example.com/eg2">Content2<img  
        src="http://image.example.com/img2.jpg" /> </a>
        </div>'''

data = '''<script type='text/javascript' src="MY-SRC"></script>'''

soup = BeautifulSoup(data, features="lxml")

#for div in soup.findAll('div', attrs={'class':'image'}):
#    print("HREF")
#    print(div.find('a')['href'])
#    print("CONTENTS")
#    print(div.find('a').contents[0])
#    print("SRC")
#    print(div.find('img')['src'])

for x in soup.findAll('script'):
    print("SRC")
    print(x['src'])
