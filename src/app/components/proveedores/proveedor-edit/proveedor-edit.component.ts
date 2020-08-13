import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  public proveedor = {
    nombre: null,
    persona_contacto:null,
    descripcion: null,
    email: null,
    satisfaccion: 1,
    problemas: 1,
    ventas: 1,
  };
  public id;

  constructor(private _prov: ProveedorService, private _aroute: ActivatedRoute,
    private _route: Router) { }

  ngOnInit() {
    this._aroute.params.subscribe(
      (params: Params) => {
        this.id = params.id
        this._prov.getProveedor(this.id)
          .subscribe(res => {
            this.proveedor = res.proveedor
            
          })
      }
    )

  }

  upProveedor() {
    this._prov.upProveedor(this.id, this.proveedor)
      .subscribe(res => {
        this._route.navigate(['/proveedores']);
        
      })
  }

}
