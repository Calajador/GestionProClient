import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  public cliente = {
    nombre: null,
    dni: null,
    correo: null,
    puntos: null
  };

  public id;

  constructor(private _cli: ClientesService, private _aroute: ActivatedRoute,
    private _route: Router) { }

  ngOnInit() {
    this._aroute.params.subscribe(
      (params: Params) => {
        this.id = params.id
        this._cli.getCliente(this.id)
          .subscribe(res => {
            this.cliente = res.cliente
            
          })
      }
    )
  }

  upCliente() {
    this._cli.upCliente(this.id, this.cliente)
      .subscribe(res => {
        this._route.navigate(['/clientes'])
        
      })
  }

}
