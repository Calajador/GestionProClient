import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {

  constructor(private _cli: ClientesService) { }

  clientes: any [] = [];

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this._cli.getClientes()
      .subscribe((res: any) => {
        this.clientes = res.clientes
      });
  };


  eliminarCliente(id) {
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
          'El Cliente ha sido eliminado',
          'success'
        )

        this._cli.eliminarCliente(id)
          .subscribe(res => {
            this.getClientes();
            
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
