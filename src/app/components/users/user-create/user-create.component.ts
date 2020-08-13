import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  usuario = {
    nombre: null,
    apellidos:null,
    email: null,
    password: null,
    role: null
  }

  constructor(private _user: AuthService, private _route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._user.signUpUser(this.usuario)
      .subscribe(res => {
        this._route.navigate(['/users']);
      });
  };

}
