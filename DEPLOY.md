# Planner Backend

## Deploy no Railway

### Variáveis de Ambiente Necessárias:

```
DATABASE_URL=postgresql://...
JWT_SECRET=your_jwt_secret_here
API_KEY_WEB=your_web_api_key_512_bits
API_KEY_MOBILE=your_mobile_api_key_512_bits
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://yourdomain.com,https://anotherdomain.com
```

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
