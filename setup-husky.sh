#!/bin/bash
npm install --save-dev husky
npx husky init
cat << 'EOF' > .husky/pre-commit
#!/usr/bin/env sh
echo "Cleaning up .bak files before commit..."
find . -name "*.bak" -type f -delete
EOF
chmod +x .husky/pre-commit
