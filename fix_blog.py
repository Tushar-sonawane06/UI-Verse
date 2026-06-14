import re

with open('e:/nsoc26/UI-Verse/blog.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Lines 535 to 1068 are identical to lines 1 to 534
duplicate_start = content.find('/* ==========================================\nROOT VARIABLES\n========================================== */', 100)
if duplicate_start != -1:
    duplicate_end = content.find('/* ==========================================\nTRENDING SECTION\n========================================== */', duplicate_start)
    if duplicate_end != -1:
        # We can replace the duplicate block with our new CSS
        new_css = """/* ==========================================
SECTION HEADERS
========================================== */
.section-header { margin-bottom: 40px; }
.section-header span { color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
.section-header h2 { font-size: 2.5rem; font-family: 'Syne', sans-serif; margin-top: 10px; }

/* ==========================================
FEATURED SECTION
========================================== */
.featured-section { max-width: 1400px; margin: auto; padding: 60px 40px; }
.featured-article { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; background: var(--card); border-radius: var(--radius); border: 1px solid var(--border); overflow: hidden; align-items: center; }
.featured-image { height: 100%; }
.featured-image img { width: 100%; height: 100%; object-fit: cover; min-height: 400px; }
.featured-content { padding: 40px; }
.article-category { display: inline-block; padding: 8px 16px; background: rgba(124,92,255,.15); color: #d5ccff; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px; border: 1px solid rgba(124,92,255,.25); }
.featured-content h2 { font-size: 2.2rem; font-family: 'Syne', sans-serif; margin-bottom: 20px; line-height: 1.2; }
.featured-content p { color: var(--muted); line-height: 1.8; font-size: 1.1rem; margin-bottom: 30px; }
.featured-meta { display: flex; justify-content: space-between; align-items: center; }
.author { display: flex; align-items: center; gap: 15px; }
.avatar { width: 45px; height: 45px; background: linear-gradient(135deg, var(--accent), var(--accent2)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.author h4 { font-size: 16px; margin-bottom: 4px; }
.author span { color: var(--muted); font-size: 14px; }
.read-btn { display: flex; align-items: center; gap: 10px; color: white; text-decoration: none; font-weight: 600; transition: .3s; }
.read-btn:hover { color: var(--accent); }

/* ==========================================
CATEGORIES
========================================== */
.categories { max-width: 1400px; margin: auto; padding: 60px 40px; }
.category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
.category-card { background: var(--card); border: 1px solid var(--border); padding: 30px; border-radius: 24px; text-align: center; transition: .3s; cursor: pointer; }
.category-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,.2); background: var(--card-light); }
.category-card i { font-size: 2.5rem; color: var(--accent2); margin-bottom: 20px; }
.category-card h3 { font-size: 1.5rem; font-family: 'Syne', sans-serif; margin-bottom: 10px; }
.category-card p { color: var(--muted); }

/* ==========================================
BLOG POSTS
========================================== */
.blog-posts { max-width: 1400px; margin: auto; padding: 60px 40px; }
.posts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.blog-card { background: var(--card); border: 1px solid var(--border); border-radius: 24px; overflow: hidden; transition: .3s; }
.blog-card:hover { transform: translateY(-8px); border-color: rgba(255,255,255,.2); }
.blog-card-image { position: relative; height: 220px; }
.blog-card-image img { width: 100%; height: 100%; object-fit: cover; }
.card-tag { position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,.6); backdrop-filter: blur(10px); padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; }
.blog-card-content { padding: 25px; }
.blog-meta { display: flex; gap: 20px; color: var(--muted); font-size: 14px; margin-bottom: 15px; }
.blog-meta i { margin-right: 6px; }
.blog-card-content h3 { font-size: 1.4rem; font-family: 'Syne', sans-serif; margin-bottom: 15px; line-height: 1.4; }
.blog-card-content p { color: var(--muted); line-height: 1.7; margin-bottom: 20px; }
.read-link { color: var(--accent2); text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: .3s; }
.read-link:hover { color: var(--accent); }
"""
        content = content[:duplicate_start] + new_css + content[duplicate_end:]

with open('e:/nsoc26/UI-Verse/blog.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied missing CSS successfully!")
