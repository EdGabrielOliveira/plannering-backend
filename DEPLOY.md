# Planner Backend

## Deploy no Railway/Dokploy

### ⚠️ IMPORTANTE: Variáveis de Ambiente Obrigatórias

```bash
# 🔐 Banco de Dados (OBRIGATÓRIO)
DATABASE_URL=postgresql://user:password@host:5432/database_name

# 🔑 Autenticação (OBRIGATÓRIO)
JWT_SECRET=your_jwt_secret_512_bits

# 🛡️ API Keys (OBRIGATÓRIO)
API_KEY_WEB=your_web_api_key_512_bits
API_KEY_MOBILE=your_mobile_api_key_512_bits

# 🌍 Ambiente (OBRIGATÓRIO)
NODE_ENV=production

# 🚪 Porta (Opcional - padrão: 3003)
PORT=3000

# 🌐 CORS (Opcional)
CORS_ORIGIN=https://yourdomain.com,https://anotherdomain.com
```

### 🚨 Solução de Problemas

**Erro: Can't reach database server**
- ✅ Verifique se `DATABASE_URL` está configurada no painel
- ✅ Certifique-se que o banco PostgreSQL está funcionando
- ✅ Verifique se as credenciais estão corretas

**Erro: Prisma migrations**
- ✅ O app tentará executar migrações automaticamente
- ✅ Se falhar, continuará sem elas (para desenvolvimento)
- ✅ Configure `DATABASE_URL` corretamente

### Comandos de Deploy:

1. O Railway executará automaticamente:
   - `npm install` 
   - `bunx prisma generate` (prebuild)
   - `npm run build`
   - `npm run start:prod`

2. O start:prod inclui:
   - Geração do Prisma Client
   - Execução das migrações
   - Início da aplicação

### Endpoints Importantes:

- Health Check: `GET /api/health`
- Documentação: `GET /docs` (apenas em desenvolvimento)
- API Base: `/api`

### Segurança Configurada:

- Helmet CSP
- Rate Limiting (50 req/15min geral, 5 req/15min para auth)
- CORS restrito
- JWT Authentication
- API Keys de 512 bits
- Logs de segurança

### Monitoramento:

- Health check endpoint configurado
- Logs de aplicação disponíveis
- Restart automático em caso de falha
