import { Injectable, CanActivate, ExecutionContext, Global, Request } from "@nestjs/common";
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        return this.validateRequest(Global['token']);
    }

    validateRequest(data){
        console.log(data);
    
        if(data === "loremipsum"){
            return true;            
        }else{
            return false;
        }
    }
}