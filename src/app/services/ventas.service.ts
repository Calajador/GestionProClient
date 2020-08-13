import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebReqService } from './web-req.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private _web : WebReqService) { }

  getVentas() {
    return this._web.get('ventas');
  }

  save_data(data):Observable<any>{
    
    return this._web.post('venta/registrar',data);
  }

  data_venta(id):Observable<any>{
    
    return this._web.get('venta/obtener/'+id);
  }
}
