import subprocess
subprocess.run(
    ['/usr/local/bin/node',
     '/Users/mathtutor/node_modules/.bin/javascript-obfuscator', 
     '../../../static/cache/0993e713912d6463db640d9b643d70fd.js.unencoded', 
     '--output', 
     '../../../static/cache/0993e713912d6463db640d9b643d70fd.js', 
     '-options-preset', 
     'high-obfuscation'] 
#     '--compact true']
)
