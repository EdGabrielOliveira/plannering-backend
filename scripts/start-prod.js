const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Iniciando aplicação Planner Backend...');

// Verifica se DATABASE_URL está definida
if (!process.env.DATABASE_URL) {
  console.error('❌ Erro: DATABASE_URL não está definida');
  process.exit(1);
}

console.log('✅ DATABASE_URL configurada');

// Função para executar comando
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      ...options,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    child.on('error', reject);
  });
}

async function start() {
  try {
    // Executa migrações se estiver em produção
    if (process.env.NODE_ENV === 'production') {
      console.log('🔄 Executando migrações do banco...');
      try {
        await runCommand('npx', ['prisma', 'migrate', 'deploy']);
        console.log('✅ Migrações executadas com sucesso');
      } catch (error) {
        console.warn('⚠️  Falha nas migrações - continuando sem elas');
        console.warn('Erro:', error.message);
      }
    } else {
      console.log('🔧 Ambiente de desenvolvimento - pulando migrações');
    }

    // Inicia a aplicação
    console.log('🎯 Iniciando servidor...');
    await runCommand('node', [path.join(__dirname, '..', 'dist', 'main.js')]);
  } catch (error) {
    console.error('❌ Erro ao iniciar aplicação:', error.message);
    process.exit(1);
  }
}

start();
