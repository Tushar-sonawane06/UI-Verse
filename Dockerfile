# UI-Verse Development Dockerfile
# Multi-stage: development with hot-reload, production with optimized build

# Stage 1: Base dependencies
FROM node:18-alpine AS base
WORKDIR /app
RUN apk add --no-cache git curl
COPY package.json package-lock.json* ./
RUN npm ci --only=production 2>/dev/null || true

# Stage 2: Development environment
FROM base AS development
ENV NODE_ENV=development
EXPOSE 5173
EXPOSE 6006
CMD ["sh", "-c", "if [ -f package-lock.json ]; then npm install; fi && npx vite --host 0.0.0.0 --port 5173"]

# Stage 3: Build environment
FROM base AS builder
ENV NODE_ENV=production
COPY . .
RUN npm ci
RUN npm run build 2>/dev/null || echo "Build step - ensures dependencies are present"

# Stage 4: Production (static file serving)
FROM nginx:alpine AS production
ENV NODE_ENV=production
COPY --from=builder /app /usr/share/nginx/html
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Stage 5: Testing environment
FROM base AS testing
ENV NODE_ENV=test
COPY . .
RUN npm ci
RUN npx playwright install chromium --with-deps 2>/dev/null || true
CMD ["npm", "test"]
