import os
import glob
import re

html_files = glob.glob('*.html')
pattern = re.compile(r'(\s*/\*\s*Dark Mode\s*\*/\s*|\s*//\s*Dark mode toggle\s*)?const toggle = document\.getElementById\(\'darkModeToggle\'\);[\s\S]*?localStorage\.setItem\(\'theme\', isDark \? \'dark\' : \'light\'\);\s*\}\);?', re.IGNORECASE)

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content, count = pattern.subn('', content)
    if count > 0:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {file}")
