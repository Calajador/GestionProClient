import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:3000/api';

  constructor(private _web: WebReqService, private _http: HttpClient) { }

  getProductos(filtro) {
    return this._web.get('productos/' + filtro);
  };

  getCategorias() {
    return this._web.get('categorias');
  }

  crearProducto(data) {
    const fd = new FormData();
    fd.append('titulo', data.titulo)
    fd.append('descripcion', data.descripcion)
    fd.append('imagen', data.imagen)
    fd.append('precio_venta', data.precio_venta)
    fd.append('precio_compra', data.precio_compra)
    fd.append('stock', data.stock)
    fd.append('idcatedoria', data.idcatedoria)
    fd.append('puntos', data.puntos)
   return this._web.post('producto/registrar', fd);
  }

  getProducto(id):Observable<any> {
    return this._web.get('producto/' + id);
  };

  update_producto(data){
    const fd = new FormData();
    fd.append('titulo',data.titulo);
    fd.append('descripcion',data.descripcion);
    fd.append('imagen',data.imagen);
    fd.append('precio_compra',data.precio_compra);
    fd.append('precio_venta',data.precio_venta);
    fd.append('idcatedoria',data.idcatedoria);
    fd.append('puntos',data.puntos);

    return this._web.patch('producto/editar/'+data._id+'/'+data.img_name,fd);
  }

  crearCategoria(data) {
    return this._web.post('categoria/registrar', data);
  }

  eliminarProducto(id) {
    return this._web.delete('producto/eliminar/' + id)
  }

  stock_producto(data):Observable<any>{
    return this._http.put(this.url+'/producto/stock/'+data._id,data);
  }
}
