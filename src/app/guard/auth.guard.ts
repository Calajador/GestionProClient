import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private router: Router,) {
  }

  canActivate(): boolean {
    if (this._auth.isLogged()) {
      return true;
    }
    else {
      this.router.navigate([''])
      return false;
    }
  }
  
}
