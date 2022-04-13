import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {



  register?:boolean;
  constructor() { }

  ngOnInit() {
  }

}
