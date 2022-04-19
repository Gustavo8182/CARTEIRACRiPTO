import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router){}

  canActivate(): boolean  {
    let ax = sessionStorage.length;
    if (ax >= 1) {
      return true;
    }
    this.router.navigateByUrl('/login')
    return false;

  }

}
