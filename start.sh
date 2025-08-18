#!/bin/bash

# Script de inicialização para produção
echo "🚀 Iniciando aplicação Planner Backend..."

# Verifica se DATABASE_URL está definida
if [ -z "$DATABASE_URL" ]; then
    echo "❌ Erro: DATABASE_URL não está definida"
    exit 1
fi

echo "✅ DATABASE_URL configurada"

# Executa migrações se estiver em produção e banco estiver disponível
if [ "$NODE_ENV" = "production" ]; then
    echo "🔄 Executando migrações do banco..."
    npx prisma migrate deploy || {
        echo "⚠️  Falha nas migrações - continuando sem elas"
    }
else
    echo "🔧 Ambiente de desenvolvimento - pulando migrações"
fi

# Inicia a aplicação
echo "🎯 Iniciando servidor..."
exec node dist/main.js
