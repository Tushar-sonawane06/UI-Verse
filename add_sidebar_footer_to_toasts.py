with open('e:/nsoc26/UI-Verse/terms.html', 'r', encoding='utf-8') as f:
    nav_lines = f.readlines()

# Extract sidebar
sidebar_start = -1
sidebar_end = -1
for i, line in enumerate(nav_lines):
    if '<aside class="sidebar"' in line:
        sidebar_start = i
    if '</aside>' in line and sidebar_start != -1:
        sidebar_end = i
        break

# Adding the sidebar mobility interceptor layer as well
interceptor_end = -1
for i, line in enumerate(nav_lines[sidebar_end+1:], start=sidebar_end+1):
    if 'sidebar-backdrop' in line:
        interceptor_end = i
        break

if interceptor_end != -1:
    sidebar_end = interceptor_end

sidebar_html = nav_lines[sidebar_start:sidebar_end+1]

# Extract footer and scripts
footer_start = -1
for i, line in enumerate(nav_lines):
    if '<footer class="footer">' in line:
        footer_start = i
        break

footer_html = nav_lines[footer_start:]

# Now read toasts.html
with open('e:/nsoc26/UI-Verse/toasts.html', 'r', encoding='utf-8') as f:
    target_lines = f.readlines()

body_idx = -1
for i, line in enumerate(target_lines):
    if '<body' in line:
        body_idx = i
        break

body_close_idx = -1
for i, line in enumerate(target_lines):
    if '</body>' in line:
        body_close_idx = i
        break

new_target_lines = target_lines[:body_idx+1] + sidebar_html + target_lines[body_idx+1:body_close_idx] + footer_html

with open('e:/nsoc26/UI-Verse/toasts.html', 'w', encoding='utf-8') as f:
    f.writelines(new_target_lines)

print("Done copying sidebar and footer to toasts.html")
