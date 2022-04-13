import { Injectable } from '@angular/core';
import { User } from './model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 users:Array<User>= [{
   id : 1,
   name : "Gustavo",
   email : "teste@teste.com",
   password : "123456",
 },

 {
 id : 2,
 name : "Rodrigo",
 email : "teste@teste.com",
 password : "123456",
}
]

constructor() { }

getDefaultUser(){
  return {
    name: 'nome',
    email: 'email',
    password: 'senha'
    }
  }

  getByEmail(email:String,password:String){
      return this.users.find((user) => user.email === email && user.password === password);
  }

  createStudent(user: User) {
    this.users.push(user);
    console.log(this.users);
    return this.users;
  }
  updateRegister(email:string,password:String){

  }
}
