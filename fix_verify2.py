import re
with open('e:/nsoc26/UI-Verse/verify-produce.html', 'r', encoding='utf-8') as f:
    content = f.read()

# First, remove any stray </head> or <body>
content = content.replace('</head>', '').replace('<body>', '')

# Ensure the script tag hasn't placed <aside> before we inject our tags
# Find the start of the document's real body, which is BACKGROUND EFFECTS or NAVBAR or <aside
body_start_match = re.search(r'(<!-- ==================================\s*BACKGROUND EFFECTS|<aside class="sidebar")', content)
if body_start_match:
    idx = body_start_match.start()
    head = content[:idx]
    body = content[idx:]
    
    # Check if shared-sidebar.css is in head
    if 'shared-sidebar.css' not in head:
        head = head.strip() + '\n  <link rel="stylesheet" href="shared-sidebar.css">\n'
        
    new_content = head + '</head>\n<body>\n' + body
    
    with open('e:/nsoc26/UI-Verse/verify-produce.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Fixed HEAD and BODY')
else:
    print('Could not find split point')
