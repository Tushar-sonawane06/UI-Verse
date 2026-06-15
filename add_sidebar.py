with open('e:/nsoc26/UI-Verse/navbar.html', 'r', encoding='utf-8') as f:
    nav_lines = f.readlines()

# Extract sidebar
sidebar_start = -1
sidebar_end = -1
for i, line in enumerate(nav_lines):
    if '<aside class="sidebar" id="sidebar">' in line:
        sidebar_start = i
    if '</aside>' in line and sidebar_start != -1:
        sidebar_end = i
        break

sidebar_html = nav_lines[sidebar_start:sidebar_end+1]
backdrop_html = ['\n  <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleSidebar()"></div>\n\n']

# Extract footer and scripts
footer_start = -1
for i, line in enumerate(nav_lines):
    if '<!-- FOOTER -->' in line or '<footer class="footer">' in line:
        footer_start = i
        break

footer_html = nav_lines[footer_start:]

# Now read leaderboard-components.html
with open('e:/nsoc26/UI-Verse/leaderboard-components.html', 'r', encoding='utf-8') as f:
    lb_lines = f.readlines()

# Remove any existing topbar if the layout is supposed to be sidebar-based
# The user asked to "add sidebar and footer".
# Let's just put the sidebar after <body> and footer at the end of <main> or </body>

body_idx = -1
for i, line in enumerate(lb_lines):
    if '<body' in line:
        body_idx = i
        break

# Find where to put the footer (before </body>)
body_close_idx = -1
for i, line in enumerate(lb_lines):
    if '</body>' in line:
        body_close_idx = i
        break

new_lb_lines = lb_lines[:body_idx+1] + sidebar_html + backdrop_html + lb_lines[body_idx+1:body_close_idx] + footer_html

with open('e:/nsoc26/UI-Verse/leaderboard-components.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lb_lines)

print("Done copying sidebar and footer")
