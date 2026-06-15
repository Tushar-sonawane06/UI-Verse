with open('e:/nsoc26/UI-Verse/navbar.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

idx_start = -1
for i in range(330, 380):
    if '<div class="sidebar-footer">' in lines[i]:
        idx_start = i
        break

idx_end = -1
if idx_start != -1:
    for i in range(idx_start, min(idx_start + 200, len(lines))):
        if '</aside>' in lines[i]:
            idx_end = i
            break

if idx_start != -1 and idx_end != -1:
    replacement = [
        '  <div class="sidebar-footer">\n',
        '    <a href="#"><i class="fab fa-github"></i></a>\n',
        '    <a href="#"><i class="fab fa-linkedin"></i></a>\n',
        '    <a href="#"><i class="fab fa-x-twitter"></i></a>\n',
        '  </div>\n',
        '</aside>\n'
    ]
    lines = lines[:idx_start] + replacement + lines[idx_end+1:]
    with open('e:/nsoc26/UI-Verse/navbar.html', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Fixed!')
else:
    print('Could not find indices', idx_start, idx_end)
