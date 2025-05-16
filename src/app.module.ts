import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MateriasModule } from './materias/materias.module';
import { EventosModule } from './eventos/eventos.module';
import { ProvasModule } from './provas/provas.module';
import { AtividadesModule } from './atividades/atividades.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TarefasModule,
    UsuarioModule,
    MateriasModule,
    EventosModule,
    ProvasModule,
    AtividadesModule,
    NotificacoesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
