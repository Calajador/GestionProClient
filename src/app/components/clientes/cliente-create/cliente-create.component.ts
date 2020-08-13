import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente = {
    nombre: null,
    dni: null,
    correo: null,
    puntos: null
  }

  constructor(private _cli: ClientesService, private _route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._cli.postCliente(this.cliente)
      .subscribe(res => {
        this._route.navigate(['/clientes'])
      })
  }

}
