with open('e:/nsoc26/UI-Verse/verify-produce.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('class="main-content" id="main-content"', 'class="main-home" id="main-home"')

with open('e:/nsoc26/UI-Verse/verify-produce.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed main class')
