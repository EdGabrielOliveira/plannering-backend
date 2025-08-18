FROM oven/bun:latest

WORKDIR /home/app

# Instalar OpenSSL para resolver warnings do Prisma
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Primeiro, copie apenas os arquivos de dependências para cache otimizado
COPY package.json bun.lock ./

# Instale as dependências
RUN bun install

# Copie especificamente o diretório prisma primeiro
COPY prisma ./prisma

# Agora copie o resto dos arquivos
COPY src ./src
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Verifique se o schema existe antes de gerar
RUN ls -la prisma/

# Gere o cliente Prisma com caminho explícito
RUN bunx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3003

CMD ["sh", "-c", "bunx prisma migrate deploy --schema=./prisma/schema.prisma && bun run start"]