import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { AuthGuard } from "./guard/auth.guard";
import { LoginMiddleware } from "./middleware/login.middleware";

@Module({
  controllers: [LoginController],
  providers: [LoginService,AuthGuard, LoginMiddleware ]
})
export class LoginModule {}
