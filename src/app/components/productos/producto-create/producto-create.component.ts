import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
} 

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  public producto: Producto = {
    _id: '',
    titulo:'',
    descripcion:'',
    imagen:'',
    precio_venta:1,
    precio_compra:1,
    stock:1,
    idCategoria:'',
    puntos:1
  };

  public file: File;
  public imgSelect: String | ArrayBuffer;
  public categorias;
  public succes_message;

  constructor(private _producto: ProductoService, private _router: Router) {
    
   }

  ngOnInit() {
    this.obtenerCategorias();
  }

  onSubmit(productoForm) {
    if(productoForm.valid) {
      this._producto.crearProducto({
        titulo: productoForm.value.titulo,
        descripcion: productoForm.value.descripcion,
        imagen: this.file,
        precio_venta: productoForm.value.precio_venta,
        precio_compra: productoForm.value.precio_compra,
        stock: productoForm.value.stock,
        idcatedoria: productoForm.value.idCategoria,
        puntos: productoForm.value.puntos
      }).subscribe(res => {
        this.succes_message = 'Producto registrado';
        this.producto = {
          _id: '',
          titulo:'',
          descripcion:'',
          imagen:'',
          precio_venta:1,
          precio_compra:1,
          stock:1,
          idCategoria:'',
          puntos:1
        };
        this.imgSelect = '../../../../assets/img/default.jpg';
        this._router.navigate(['/productos']);
      })
    }
    else {
      console.log("Error en el formulario");
    }

    
  }

  imgSelected(event: HtmlInputEvent) {
    if(event.target.files && event.target.files[0])
    {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imgSelect = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  obtenerCategorias() {
    this._producto.getCategorias()
      .subscribe((res: any) => {
        this.categorias = res;
        console.log(this.categorias);
        
      })
  }

}
