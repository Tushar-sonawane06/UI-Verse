import re
with open('e:/nsoc26/UI-Verse/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_footer = r'''\.footer \{
  margin-top: auto;
  margin-left: var\(--sidebar-width\);
  background: #fff;
  border-top: 1px solid #eee;
  padding: 40px 60px;
  text-align: center;   
  width: calc\(100% - var\(--sidebar-width\)\);  
  display: block;              
  flex-basis: 100%;            
  clear: both; 
  
 \}

 
\.footer-container \{
  display: grid;
  grid-template-columns: repeat\(3, 1fr\);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto; 
\}

\.footer-col\{
  padding: 22px;
\}

\.footer-col h2\{
  margin-bottom: 20px;
  font-size: 22px;
\}

\.footer-col h3\{
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0\.08em;
  color: #888;
  margin-bottom: 14px;
\}

\.footer-col p \{
  margin: 0;
  font-size: 14px;
  color: #160606;
  line-height: 2;
\}

\.footer-col a \{
  text-decoration: none;
  color: #000000;
\}

\.footer-col a:hover \{
  color: #007bff;
\}'''

new_footer = '''.footer {
  margin-top: auto;
  margin-left: var(--sidebar-width);
  background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 60px 80px 40px;
  text-align: left;
  width: calc(100% - var(--sidebar-width));
  display: block;
  flex-basis: 100%;
  clear: both;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #eb6835, #7b61ff, #00f7ff);
}

.footer-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto; 
}

.footer-col {
  padding: 0;
}

.footer-col.brand p {
  color: #94a3b8;
  margin-top: 16px;
}

.footer-logo {
  font-family: var(--font-heading, \"Syne\", sans-serif);
  font-weight: 800;
  font-size: 24px;
  background: linear-gradient(135deg, #eb6835, #7b61ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
}

.footer-col h3 {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #e2e8f0;
  margin-bottom: 24px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col p {
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
}

.footer-col a {
  text-decoration: none;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-col a:hover {
  color: #a78bfa;
  transform: translateX(4px);
}

.footer-col .socials {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.footer-col .socials a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-col .socials a:hover {
  background: #a78bfa;
  color: white;
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 10px 20px rgba(167, 139, 250, 0.2);
}

.newsletter-form {
  display: flex;
  margin-top: 16px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.newsletter-form:focus-within {
  border-color: #7b61ff;
  box-shadow: 0 0 0 3px rgba(123, 97, 255, 0.15);
}

.newsletter-form input {
  flex: 1;
  border: none;
  padding: 10px 12px;
  background: transparent;
  outline: none;
  font-size: 14px;
  min-width: 0;
  color: white;
}

.newsletter-form button {
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.newsletter-form button:hover {
  background: #7b61ff;
}

.footer-bottom {
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  color: #94a3b8;
  font-size: 14px;
}'''

css = re.sub(old_footer, new_footer, css)

# Make the old dark mode footer do nothing so it doesn't break anything.
old_dark_footer = r'''\.dark-mode \.footer \{
  background: #dcdcdc;
  border-top: 1px solid #1e293b;
\}

\.dark-mode \.footer-col p,
\.dark-mode \.footer-col h2,
\.dark-mode \.footer-col h3 \{
  color: #000000;
\}

\.dark-mode \.footer-col p:hover \{
  color: #706ce9;
\}'''
css = re.sub(old_dark_footer, '/* dark mode footer removed */', css)

with open('e:/nsoc26/UI-Verse/style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Updated footer")
