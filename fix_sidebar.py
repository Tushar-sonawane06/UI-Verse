import re

with open('e:/nsoc26/UI-Verse/step-indicators.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all existing aside
content = re.sub(r'<aside class="sidebar" id="sidebar">.*?</aside>', '', content, flags=re.DOTALL)

sidebar_html = """
<aside class="sidebar" id="sidebar">
  <div class="sidebar-brand">
    <i class="fa-solid fa-layer-group brand-icon"></i>
    <span class="brand-text">UIverse</span>
  </div>
  <nav class="sidebar-nav">
    <ul>
      <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
      <li><a href="button.html"><i class="fa-solid fa-hand-pointer"></i><span>Buttons</span></a></li>
      <li><a href="inputs.html"><i class="fa-solid fa-keyboard"></i><span>Inputs</span></a></li>
      <li><a href="cards.html"><i class="fa-solid fa-table-cells-large"></i><span>Cards</span></a></li>
      <li><a href="badges.html"><i class="fa-solid fa-award"></i><span>Badges</span></a></li>
      <li><a href="alerts.html"><i class="fa-solid fa-triangle-exclamation"></i><span>Alerts</span></a></li>
      <li><a href="toasts.html"><i class="fa-solid fa-bell"></i><span>Toasts</span></a></li>
      <li class="active"><a href="step-indicators.html"><i class="fa-solid fa-list-ol"></i><span>Steppers</span></a></li>
      <li><a href="terms.html"><i class="fa-solid fa-file-contract"></i><span>Terms</span></a></li>
    </ul>
  </nav>
</aside>
"""

# Now replace the first occurrence of <div class="main-content">
content = content.replace('<div class="main-content">', sidebar_html + '\n<div class="main-content">', 1)

with open('e:/nsoc26/UI-Verse/step-indicators.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Sidebar fixed successfully!")
