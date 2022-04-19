import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  use: boolean = false;
  constructor(private router : Router) { }


  ngOnInit(): void {
    this.sessionUser()
  }

  exit(){
    sessionStorage.clear();
    return this.router.navigateByUrl('home');
    window.location.reload()
  }

  sessionUser(){
      let ax = sessionStorage.length;
      if (ax >= 1) {
        this.use = true;
      }
      console.log("AQUI O USE "+ax+"aqui o bolean"+this.use);
  }

}
