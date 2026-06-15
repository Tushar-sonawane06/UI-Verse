with open('e:/nsoc26/UI-Verse/verify-produce.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken link rel style
if '<link rel="sty\n<aside class=" sidebar" id="sidebar">' in content:
    content = content.replace('<link rel="sty\n<aside class=" sidebar" id="sidebar">', '<aside class="sidebar" id="sidebar">')
elif '<link rel="sty\r\n<aside class=" sidebar" id="sidebar">' in content:
    content = content.replace('<link rel="sty\r\n<aside class=" sidebar" id="sidebar">', '<aside class="sidebar" id="sidebar">')

# Also fix the class name if it was written as class=" sidebar"
content = content.replace('class=" sidebar"', 'class="sidebar"')

# Ensure </head> and <body> are correct
if 'shared-sidebar.css' not in content:
    # Try replacing </head>
    if '</head>' in content:
        content = content.replace('</head>', '  <link rel="stylesheet" href="shared-sidebar.css">\n</head>')

if '<body>' not in content:
    # We know `<aside class="sidebar" id="sidebar">` is the first element
    if '<aside class="sidebar" id="sidebar">' in content:
        content = content.replace('<aside class="sidebar" id="sidebar">', '<body>\n<aside class="sidebar" id="sidebar">')

with open('e:/nsoc26/UI-Verse/verify-produce.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed HTML')
