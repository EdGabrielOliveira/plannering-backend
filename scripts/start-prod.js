const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Iniciando aplicação Planner Backend...');

// Verifica se DATABASE_URL está definida
if (!process.env.DATABASE_URL) {
  console.error('❌ Erro: DATABASE_URL não está definida');
  process.exit(1);
}

console.log('✅ DATABASE_URL configurada');

// Verifica se o arquivo dist/main.js existe
const mainJsPath = path.join(__dirname, '..', 'dist', 'main.js');
console.log('🔍 Verificando arquivo:', mainJsPath);

if (!fs.existsSync(mainJsPath)) {
  console.error('❌ Erro: Arquivo dist/main.js não encontrado!');
  console.log('📁 Conteúdo do diretório dist:');
  const distPath = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(distPath)) {
    console.log(fs.readdirSync(distPath));
  } else {
    console.log('❌ Diretório dist não existe!');
  }
  process.exit(1);
}

console.log('✅ Arquivo dist/main.js encontrado');

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
    await runCommand('node', [mainJsPath]);
  } catch (error) {
    console.error('❌ Erro ao iniciar aplicação:', error.message);
    process.exit(1);
  }
}

start();
