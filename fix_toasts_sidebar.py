import re

with open('e:/nsoc26/UI-Verse/toasts.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add shared-sidebar.css
if 'shared-sidebar.css' not in content:
    content = content.replace('href="toasts.css">', 'href="toasts.css">\n<link rel="stylesheet" href="shared-sidebar.css">')

sidebar_html = """
<aside class="sidebar">
  <h2>UIverse</h2>
  <ul>
    <li><a href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
    <li><a href="button.html"><i class="fa-solid fa-hand-pointer"></i> Buttons</a></li>
    <li><a href="inputs.html"><i class="fa-solid fa-keyboard"></i> Inputs</a></li>
    <li><a href="cards.html"><i class="fa-solid fa-table-cells-large"></i> Cards</a></li>
    <li><a href="badges.html"><i class="fa-solid fa-award"></i> Badges</a></li>
    <li><a href="alerts.html"><i class="fa-solid fa-triangle-exclamation"></i> Alerts</a></li>
    <li><a href="toasts.html" class="active"><i class="fa-solid fa-bell"></i> Toasts</a></li>
    <li><a href="terms.html"><i class="fa-solid fa-file-contract"></i> Terms</a></li>
  </ul>
</aside>
<div class="main-home" style="padding: 0;">
"""

if '<aside class="sidebar">' not in content:
    # Wrap body content
    content = content.replace('<body>', f'<body>\n{sidebar_html}')
    content = content.replace('</body>', '</div>\n</body>')

with open('e:/nsoc26/UI-Verse/toasts.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added sidebar properly")
