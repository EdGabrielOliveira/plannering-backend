import { randomBytes } from 'crypto';

function generateApiKey(): string {
  return randomBytes(64).toString('hex');
}

function generateApiKeys() {
  const webApiKey = generateApiKey();
  const mobileApiKey = generateApiKey();

  console.log('🔑 Novas API Keys de 512 bits geradas:');
  console.log('');
  console.log('📱 Para o arquivo .env:');
  console.log(`WEB_API_KEY=${webApiKey}`);
  console.log(`MOBILE_API_KEY=${mobileApiKey}`);
  console.log('');
  console.log('🌐 Para o frontend web:');
  console.log(`const API_KEY = "${webApiKey}";`);
  console.log('');
  console.log('📱 Para o app mobile:');
  console.log(`const API_KEY = "${mobileApiKey}";`);
  console.log('');
  console.log('💡 Como usar:');
  console.log('1. Adicione as API Keys ao seu arquivo .env');
  console.log('2. Configure no seu cliente:');
  console.log('   - Header: X-API-Key: <sua-api-key>');
  console.log('   - Ou Query: ?apiKey=<sua-api-key>');
  console.log('');
  console.log('🔒 Lembre-se:');
  console.log('- Mantenha as API Keys em segredo');
  console.log(
    '- Não exponha no código do frontend (use variáveis de ambiente)',
  );
  console.log('- Monitore o uso através dos logs de segurança');
  console.log('- 512 bits = Segurança de nível militar');
}

if (require.main === module) {
  generateApiKeys();
}

export { generateApiKey, generateApiKeys };
