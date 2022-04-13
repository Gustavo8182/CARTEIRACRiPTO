import { Router } from '@angular/router';
import { UserServiceService } from './../userService.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.scss']
})
export class LoginFormComponent implements OnInit {

  user:User = this.userServiceService.getDefaultUser();

  constructor(
    private userServiceService:UserServiceService,
    private router: Router) { }



  userForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  onSubmit() {
    const formValue = this.userForm.value;
    this.user.name = formValue.name;
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.userServiceService.createStudent(this.user);
    alert('Aluno adicionado com sucesso!');
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }




}
