import re

with open('e:/nsoc26/UI-Verse/switchess.html', 'r', encoding='utf-8') as f:
    source_html = f.read()
    
with open('e:/nsoc26/UI-Verse/verify-produce.html', 'r', encoding='utf-8') as f:
    target_html = f.read()

# Extract sidebar and backdrop from switchess.html
sidebar_match = re.search(r'(<aside class="sidebar" id="sidebar">.*?</aside>)', source_html, re.DOTALL)
backdrop_match = re.search(r'(<div class="sidebar-backdrop".*?</div>)', source_html, re.DOTALL)

sidebar = sidebar_match.group(1) if sidebar_match else ''
backdrop = backdrop_match.group(1) if backdrop_match else ''

# Clean up active class in sidebar
sidebar = sidebar.replace('class="active"', '')
sidebar = sidebar.replace('<li ><a href="verify-produce.html">', '<li class="active"><a href="verify-produce.html">')
# Wait, verify-produce.html is it in the list?
if 'verify-produce.html' not in sidebar:
    # Add it to the end of the list before </ul>
    sidebar = sidebar.replace('</ul>', '  <li class="active"><a href="verify-produce.html"><i class="fa-solid fa-check-circle"></i><span>Verify Produce</span></a></li>\n    </ul>')

# Now insert into verify-produce.html
body_start = target_html.find('<body>') + len('<body>\n')
body_end = target_html.rfind('</body>')

content_inside_body = target_html[body_start:body_end]

if '<main class="main-content"' not in content_inside_body and '<main class="main-home"' not in content_inside_body:
    # Separate scripts if any
    script_start = content_inside_body.rfind('<script')
    if script_start != -1 and script_start > len(content_inside_body) - 2000:
        main_content = content_inside_body[:script_start]
        scripts = content_inside_body[script_start:]
    else:
        main_content = content_inside_body
        scripts = ''
        
    new_body = '\n' + sidebar + '\n' + backdrop + '\n<main class="main-content" id="main-content">\n' + main_content + '\n</main>\n' + scripts
    
    # Add CSS link
    if 'shared-sidebar.css' not in target_html:
        head_end = target_html.find('</head>')
        fa_link = '  <link rel="stylesheet" href="shared-sidebar.css">\n'
        target_html = target_html[:head_end] + fa_link + target_html[head_end:]
        
    target_html = target_html[:body_start] + new_body + target_html[body_end:]
    
    with open('e:/nsoc26/UI-Verse/verify-produce.html', 'w', encoding='utf-8') as f:
        f.write(target_html)
    print('Added sidebar to verify-produce.html')
else:
    print('Already has main-content')
