import re

with open('e:/nsoc26/UI-Verse/source.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract top-controls section
top_controls_match = re.search(r'<!-- =========================================================\s*SEARCH \+ FILTER\s*========================================================= -->\s*<section class="top-controls">.*?</section>', content, re.DOTALL)

if top_controls_match:
    # If it has a closing tag, extract it. Wait, top-controls doesn't close properly, it closes at the end of the file!
    pass

# Let's just do it manually with string splitting
parts = content.split('</section>')

# parts[0] is hero-section (since it's the first </section> in the file)
# But let's be safe.
hero_end = content.find('</section>', content.find('class="hero-section"')) + 10

# Find top-controls start
top_controls_start = content.find('<!-- =========================================================\n   SEARCH + FILTER')
if top_controls_start == -1:
    top_controls_start = content.find('<section class="top-controls">')

# Extract top-controls up to the end of search-box
search_box_end = content.find('</div>', content.find('<div class="search-box">', top_controls_start)) + 6

top_controls_html = content[top_controls_start:search_box_end] + '\n\n</section>\n\n<section class="components-grid">\n'

# The components before top-controls
components_before = content[hero_end:top_controls_start].strip()

# The components after search_box
# We need to find where they end. They end at `</section>` which was the unclosed top-controls
end_of_components = content.rfind('</section>')
components_after = content[search_box_end:end_of_components].strip()

# Rest of the document
rest = content[end_of_components + 10:]

new_content = content[:hero_end] + '\n\n' + top_controls_html + components_before + '\n\n' + components_after + '\n\n</section>\n' + rest

with open('e:/nsoc26/UI-Verse/source.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("source.html layout fixed successfully!")
