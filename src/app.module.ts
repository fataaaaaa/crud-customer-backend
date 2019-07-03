import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { LoginModule } from './login/login.module';
import { LoginMiddleware } from "./login/middleware/login.middleware";
import { AuthGuard } from './login/guard/auth.guard';
import { SkillController } from './skill/skill.controller';
import { SkillService } from './skill/skill.service';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0-vpf6w.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }),
    CustomerModule,
    LoginModule,
    SkillModule
  ],
  controllers: [AppController, SkillController],
  providers: [AppService,AuthGuard, LoginMiddleware, SkillService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(LoginMiddleware)
      .forRoutes('/login');
  }
}
