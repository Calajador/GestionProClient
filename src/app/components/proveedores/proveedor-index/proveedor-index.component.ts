import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor-index',
  templateUrl: './proveedor-index.component.html',
  styleUrls: ['./proveedor-index.component.css']
})
export class ProveedorIndexComponent implements OnInit {

  proveedores:Proveedor[] = []

  constructor(private _prov: ProveedorService) { }

  ngOnInit() {
    this.getProveedores()
  }

  getProveedores() {
    this._prov.getProveedores()
      .subscribe((res: any) => {
        this.proveedores = res.proveedores
      })
  }

  eliminarProovedor(id) {
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
          'El Proveedor ha sido eliminado',
          'success'
        )

        this._prov.eliminarProveedor(id)
          .subscribe(res => {
            this.getProveedores();
            
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
