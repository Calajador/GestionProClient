import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service'

import Swal from 'sweetalert2';
;

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  users: User[] = [];

  constructor(private _user: AuthService) { }

  ngOnInit() {

    this.getUsers();
  }

  getUsers() {
    this._user.getUsers()
      .subscribe((res:any) => {
        this.users = res.users;
      })
  };

  eliminarUsuario(id) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras volver atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'El Usuario ha sido eliminado',
          'success'
        )

        this._user.eliminarUser(id)
          .subscribe(res => {
            this.getUsers();
            
          })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Eliminacion Canccelada :)',
          'error'
        )
      }
    })
  }
}
