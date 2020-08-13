import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = {

  }

  public data_error;
  public identity

  constructor(private _auth: AuthService, private router: Router) {
    this.identity = this._auth.getIdentity();
   }

  ngOnInit() {
    if(this.identity) {
      this.router.navigate(['dashboard']);
    }
  }

  closeAlert() {
    this.data_error = '';
  }

  login(loginForm) {

    if(loginForm.valid) {
      this._auth.loginUser(this.loginUser)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.user));
        this.router.navigate(['dashboard']);
      },
      
      error => {
        this.data_error = error.error;
      });
    }
    
  }

}
