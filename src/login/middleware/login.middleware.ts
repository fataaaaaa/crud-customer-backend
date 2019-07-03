import { Injectable, NestMiddleware, Global, Body, Res, Headers } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginService } from "../login.service";

@Injectable()
export class LoginMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: Function){
        Global['token'] = req.headers['x-token'];
        //console.log(Global['token']);
        next();
    }

}