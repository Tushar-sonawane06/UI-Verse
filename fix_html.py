with open('e:/nsoc26/UI-Verse/leaderboard-components.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
# The broken block looks something like:
#   <link rel="stylesheet" href="style.css" />
#   <link rel="stylesheet" href="leaderboard-components.css" />
# </head>
# <body>
#
#   <main class="page-shell">
# Let's just remove the </head><body> from the middle entirely using regex.
html = re.sub(r'  <link rel="stylesheet" href="style.css" />\s*<link rel="stylesheet" href="leaderboard-components.css" />\s*</head>\s*<body>', '', html)

# Also ensure style.css is linked in the REAL head
if 'href="style.css"' not in html[:1000]:
    html = html.replace('<link rel="stylesheet" href="leaderboard-components.css" />', '<link rel="stylesheet" href="style.css" />\n  <link rel="stylesheet" href="leaderboard-components.css" />')

with open('e:/nsoc26/UI-Verse/leaderboard-components.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Fixed HTML formatting")
