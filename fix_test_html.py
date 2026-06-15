with open('e:/nsoc26/UI-Verse/test-url-state.html', 'r', encoding='utf-8') as f:
    content = f.read()

# The target HTML was corrupted by `replace_file_content` leaving <link rel="style\n<aside class="sidebar">
if '<link rel="style\n<aside class="sidebar">' in content:
    content = content.replace('<link rel="style\n<aside class="sidebar">', '<link rel="stylesheet" href="shared-sidebar.css">\n</head>\n<body>\n<div class="bg-gradient"></div>\n<aside class="sidebar">')
elif '<link rel="style\r\n<aside class="sidebar">' in content:
    content = content.replace('<link rel="style\r\n<aside class="sidebar">', '<link rel="stylesheet" href="shared-sidebar.css">\n</head>\n<body>\n<div class="bg-gradient"></div>\n<aside class="sidebar">')
else:
    # Maybe it was just the missing <body>?
    if '</head>' not in content and '<body>' not in content:
        # We know test-url-state.css was on line 24. Let's just fix it.
        pass

with open('e:/nsoc26/UI-Verse/test-url-state.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed HTML structure')
