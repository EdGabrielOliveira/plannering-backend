# Dockerfile para produção no Dokploy
FROM node:22-alpine AS dependencies

WORKDIR /app

RUN apk add --no-cache openssl

# Copiar arquivos de configuração
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependências de produção
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false
ENV NPM_CONFIG_AUDIT=false

RUN npm ci --omit=dev --no-audit --no-fund && \
    npx prisma generate && \
    npm cache clean --force

# ================================
# Build Stage
# ================================
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache openssl

# Copiar configuração do projeto
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY prisma ./prisma/

# Instalar TODAS as dependências para build
RUN npm ci --no-audit --no-fund

# Copiar código fonte
COPY src ./src/

# Build da aplicação
RUN npm run build

# Debug: Verificar estrutura de build
RUN echo "=== BUILD DEBUG ===" && \
    ls -la dist/ && \
    find dist -name "*.js" | head -10 && \
    echo "main.js location:" && \
    find . -name "main.js" -type f

# ================================
# Production Stage
# ================================
FROM node:22-alpine AS production

WORKDIR /app

RUN apk add --no-cache openssl

# Copiar dependências de produção
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package.json ./package.json

# Copiar build da aplicação
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Copiar script de start
COPY start.sh ./start.sh
RUN chmod +x start.sh

# Criar usuário não-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Dar permissão para o usuário
RUN chown -R nestjs:nodejs /app
USER nestjs

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => process.exit(res.statusCode === 200 ? 0 : 1))" || exit 1

CMD ["./start.sh"]