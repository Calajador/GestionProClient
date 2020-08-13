import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  proveedor = {
    nombre: null,
    persona_contacto:null,
    descripcion: null,
    email: null,
    satisfaccion: 1,
    problemas: 1,
    ventas: 1,
  }

  constructor(private _prov: ProveedorService, private _route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._prov.postProveedor(this.proveedor)
      .subscribe(res => {
        this._route.navigate(['/proveedores'])
      })
  }

}
