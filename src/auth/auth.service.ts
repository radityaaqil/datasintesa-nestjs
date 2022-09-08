import { Injectable } from '@nestjs/common';
import { AuthDTO } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
  id = 1;
  result = [];

  getHello(): string {
    return 'Hello World';
  }

  signUp(dto: AuthDTO) {
    //Add userid
    dto['userid'] = this.id;

    //Check username availability
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i]['username'] === dto.username) {
        return 'Username has been taken';
      }
    }

    //Push to result array
    this.result.push(dto);
    this.id++;

    //Return latest entry
    return this.result[this.result.length - 1];
  }

  getID(user_id: number) {
    //Loop through array to find matching id
    for (let i = 0; i < this.result.length; i++) {
      if (user_id == this.result[i]['userid']) {
        //Return user
        return this.result[i];
      }
    }
    return 'No user found';
  }

  getAllUser() {
    if (this.result.length == 0) {
      return 'No users to be displayed';
    }
    //Return array of users
    return this.result;
  }
}
