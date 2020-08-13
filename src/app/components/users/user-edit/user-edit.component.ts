import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public usuario = {
    nombre: null,
    apellidos:null,
    email: null,
    role: null
  };
  public id;

  constructor(private _user: AuthService, private _aroute: ActivatedRoute,
    private _route: Router) { }

    ngOnInit() {
      this._aroute.params.subscribe(
        (params: Params) => {
          this.id = params.id
          this._user.getuser(this.id)
            .subscribe(res => {
              this.usuario = res.user
              
            })
        }
      )
  
    }

    upUser() {
      this._user.upUser(this.id, this.usuario)
        .subscribe(res => {
          this._route.navigate(['/users']);
          
        })
    }

}
