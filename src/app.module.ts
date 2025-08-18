import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
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
import { ApiKeysModule } from './api-keys/api-keys.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserIdInterceptor } from './interceptors/UserIdInterceptor';
import { SecurityLoggerMiddleware } from './middleware/security-logger.middleware';

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
    ApiKeysModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: UserIdInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SecurityLoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
