import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebReqService } from './web-req.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _web: WebReqService) { }

  getClientes() {
    return this._web.get('clientes');
  }

  getCliente(id):Observable<any>{
    return this._web.get('cliente/' + id);
  };

  postCliente(prov) {
    return this._web.post('cliente/registrar', prov);
  }

  upCliente(id, prov) {
    return this._web.patch('cliente/editar/'+ id , prov);
  }

  eliminarCliente(id) {
    return this._web.delete('cliente/eliminar/' + id)
  }
}
