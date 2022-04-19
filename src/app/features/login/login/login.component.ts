import { FormGroup, NgForm } from '@angular/forms';
import { UserServiceService } from './../userService.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register:boolean = false;
  error: boolean = false;
  resetPass: boolean = false;

  constructor(
    private UserServiceService: UserServiceService,
    private router: Router) { }

  regis(event:any){
      if(event){
        this.register = true;
      }
  }
  validateUser(loginForm: NgForm) {
    const data = loginForm.value;
    const student = this.UserServiceService.getByEmail(data.email, data.password);
    if(!student) {
      return this.error = true;
    }
    sessionStorage.setItem('user', JSON.stringify(student));
    return this.router.navigateByUrl('wallet');
    window.location.reload()
  }
  resetPassword(){
    this.resetPass = true;
  }
  updateReigister(resetPassForm : NgForm){
      const data = resetPassForm.value;
  }


  ngOnInit() {
  }

}
