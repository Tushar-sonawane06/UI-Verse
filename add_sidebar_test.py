import re

# Read source and target
with open('e:/nsoc26/UI-Verse/tabs-components.html', 'r', encoding='utf-8') as f:
    source_html = f.read()
    
with open('e:/nsoc26/UI-Verse/test-url-state.html', 'r', encoding='utf-8') as f:
    target_html = f.read()

# Extract sidebar and footer
sidebar_match = re.search(r'(<aside class="sidebar">.*?</aside>)', source_html, re.DOTALL)
footer_match = re.search(r'(<footer class="site-footer">.*?</footer>)', source_html, re.DOTALL)

sidebar = sidebar_match.group(1) if sidebar_match else ''
footer = footer_match.group(1) if footer_match else ''

# Update active class in sidebar
sidebar = sidebar.replace('class="nav-link active"', 'class="nav-link"')

# The test-url-state.html should also include the CSS for sidebar, which is usually in style.css or similar.
# Wait, let's just include the shared-sidebar.css if it exists, or tabs-components.css? 
# Actually, the user has global sidebar in index.html too. Let's just link shared-sidebar.css, or whatever tabs-components uses.
# tabs-components.css has the sidebar styles built-in, but let's check what test-url-state has.
# It only has test-url-state.css. We can append sidebar CSS from tabs-components.css if needed, or link it.
# Let's link tabs-components.css or simply inject the HTML first.

body_start = target_html.find('<body>') + len('<body>\n')
body_end = target_html.rfind('</body>')

content_inside_body = target_html[body_start:body_end]

if '<main class="main-content"' not in content_inside_body:
    script_start = content_inside_body.find('<script>')
    if script_start != -1:
        main_content = content_inside_body[:script_start]
        scripts = content_inside_body[script_start:]
    else:
        main_content = content_inside_body
        scripts = ''
        
    new_body = '\n' + sidebar + '\n<main class="main-content" id="main-content">\n' + main_content + '\n' + footer + '\n</main>\n' + scripts
    
    if 'font-awesome' not in target_html:
        head_end = target_html.find('</head>')
        fa_link = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">\n'
        target_html = target_html[:head_end] + fa_link + target_html[head_end:]
        
    target_html = target_html[:body_start] + new_body + target_html[body_end:]
    
    with open('e:/nsoc26/UI-Verse/test-url-state.html', 'w', encoding='utf-8') as f:
        f.write(target_html)
    print('Added sidebar and footer successfully')
else:
    print('Already has main-content')
