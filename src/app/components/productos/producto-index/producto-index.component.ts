import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

import Swal from 'sweetalert2';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {

  public productos;
  public filtro = '';
  public categorias;
  public createCat = {
    titulo: null,
    descripcion: null
  }
  public producto_stock;
  public producto_id;

  constructor(private _prod: ProductoService) { }

  ngOnInit() {
    this.listarProductos();
    this.obtenerCategorias();
  }

  listarProductos() {
    this._prod.getProductos(this.filtro)
      .subscribe((res: any) => {
        this.productos = res.productos;
        console.log(this.productos);
      });
  }

  search(searchForm) {
    this.filtro = searchForm.value.filtro;
    this.listarProductos();
  }

  obtenerCategorias() {
    this._prod.getCategorias()
      .subscribe((res: any) => {
        this.categorias = res;
      })
  }

  saveCat(categoriaForm) {

    if(categoriaForm.valid) {
      this._prod.crearCategoria(this.createCat)
      .subscribe(res=> {
        this.obtenerCategorias();
        $('#modal-save-categoria').modal('hide');
      })

    }
    
  }

  eliminarProducto(id) {
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
          'El Prodcuto ha sido eliminado',
          'success'
        )

        this._prod.eliminarProducto(id)
          .subscribe(res => {
            this.listarProductos();
            
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

  get_id(id){
    this.producto_id = id;
    console.log(this.producto_id);
    
  }

  aumentar_stock(stockForm){
    if(stockForm.valid){
      if(this.producto_id){
        this._prod.stock_producto({
          _id: this.producto_id,
          stock: stockForm.value.producto_stock,
        }).subscribe(res => {
          this.listarProductos();
          $('.modal').modal('hide');
        });
    }
  }
}

}
