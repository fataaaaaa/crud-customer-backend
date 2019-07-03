import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    private userData = [{
        username: 'Fahmi',
        password: 'FahmiJuga'
    },
    {
        username: 'Hmmm',
        password: 'HmmmHmmm'
    }];

    getUser(data){
        for(let user of this.userData){
            if(user.username === data.username && user.password === data.password){
                return {
                    token: "loremipsum"
                }
            }else{
                return {
                    error: "Something Wrong"
                }
            }
        }
    }

}
