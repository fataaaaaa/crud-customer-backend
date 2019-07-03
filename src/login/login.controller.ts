import { Controller, Get, Post, HttpStatus, Res, Body, Headers, UseGuards, Global } from '@nestjs/common';
import { LoginService } from "./login.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { LoginMiddleware } from "./middleware/login.middleware";

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService){}

    @Post('/login')
    async getUser(@Res() res, @Headers() headers: any ,@Body() createUserDTO: CreateUserDTO){
        const userData = await this.loginService.getUser(createUserDTO);
        if(typeof userData.token !== 'undefined'){
            res.setHeader('x-token', userData.token);
        }
        Global['token'] = userData.token;
        return res.status(HttpStatus.OK).json(userData);
        // const url = new URL(`http://localhost:3000/customer/customer`);
        // res.redirect(url);
    }
}
