def showlist(match):
    [f for f in os.listdir('.') if re.match(r'[0-9]+.*\.jpg', f)]

