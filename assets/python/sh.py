import subprocess
subprocess.run(
    ['/usr/local/bin/node', 
     '/Users/mathtutor/node_modules/.bin/javascript-obfuscator', 
     '/Users/mathtutor/Blogdown/railey.io/content/bca-linear-graphs/2021-03-24-bca-graphics-linearq2-2-thru-9/../../../static/cache/0993e713912d6463db640d9b643d70fd.js.unencoded', 
     '--output', 
     '/Users/mathtutor/Blogdown/railey.io/content/bca-linear-graphs/2021-03-24-bca-graphics-linearq2-2-thru-9/../../../static/cache/0993e713912d6463db640d9b643d70fd.js', 
     '-options-preset', 
     'high-obfuscation']
)
