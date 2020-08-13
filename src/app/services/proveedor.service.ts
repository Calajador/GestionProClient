import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebReqService } from './web-req.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private _web: WebReqService) { }

  getProveedores() {
    return this._web.get('proveedores');
  }

  getProveedor(id):Observable<any>{
    return this._web.get('proveedores/' + id);
  };

  postProveedor(prov) {
    return this._web.post('proveedores/registrar', prov);
  }

  upProveedor(id, prov) {
    return this._web.patch('proveedores/actualizar/'+ id , prov);
  }

  eliminarProveedor(id) {
    return this._web.delete('proveedores/eliminar/' + id)
  }

}
