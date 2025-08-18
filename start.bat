@echo off
REM Script de inicialização para produção

echo 🚀 Iniciando aplicação Planner Backend...

REM Verifica se DATABASE_URL está definida
if "%DATABASE_URL%"=="" (
    echo ❌ Erro: DATABASE_URL não está definida
    exit /b 1
)

echo ✅ DATABASE_URL configurada

REM Executa migrações se estiver em produção
if "%NODE_ENV%"=="production" (
    echo 🔄 Executando migrações do banco...
    npx prisma migrate deploy
    if errorlevel 1 (
        echo ⚠️  Falha nas migrações - continuando sem elas
    )
) else (
    echo 🔧 Ambiente de desenvolvimento - pulando migrações
)

REM Inicia a aplicação
echo 🎯 Iniciando servidor...
node dist/main.js
