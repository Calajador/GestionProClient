import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token;
  public identity;

  constructor(private _web: WebReqService, private router: Router) { }

  signUpUser(user) {
    return this._web.post('registrar', user);
  };

  loginUser(user) {
    return this._web.post('login',user);
  };

  isLogged() {
    return !!localStorage.getItem('token');
  };

  getToken(): Observable<any> {
    let token = localStorage.getItem('token');
    if(token) {
      this.token = token;
    }
    else {
      this.token = null;
    }

    return this.token;
  };

  getIdentity(): Observable<any> {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity) {
      this.identity = identity;
    }
    else {
      this.identity = null;
    }

    return this.identity;
  };

  logOutUser() {
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    localStorage.removeItem('identity');
  };

  getUsers() {
    return this._web.get('users');
  };

  getuser(id):Observable<any>{
    return this._web.get('users/' + id);
  };

  upUser(id, user) {
    return this._web.patch('users/editar/'+ id , user);
  }

  eliminarUser(id) {
    return this._web.delete('users/eliminar/' + id)
  }
}
