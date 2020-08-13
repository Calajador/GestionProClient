import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
} 

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  public categorias;
  public producto;
  public id;
  public url;
  public file :File;
  public imgSelect : String | ArrayBuffer;
  public success_message;


  constructor(private _route: ActivatedRoute, private _prod: ProductoService,
    private _router: Router) {
    this.url = 'http://localhost:3000/api';
   }

  ngOnInit() {

    this._route.params.subscribe(params=> {
      this.id = params['id'];
      this._prod.getProducto(this.id)
        .subscribe(res => {
          this.producto = res.producto;
          console.log(this.producto)
          this.obtenerCategorias();
        })
    })
  }

  obtenerCategorias() {
    this._prod.getCategorias()
      .subscribe((res: any) => {
        this.categorias = res;
        
      })
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

  onSubmit(productoForm) {
    if(productoForm.valid){

      this._prod.update_producto({
        _id: this.id,
        titulo: productoForm.value.titulo,
        descripcion: productoForm.value.descripcion,
        imagen: this.file,
        precio_compra: productoForm.value.precio_compra,
        precio_venta: productoForm.value.precio_venta,
        idcatedoria: productoForm.value.idCategoria,
        puntos: productoForm.value.puntos,
        img_name : this.producto.imagen,
      }).subscribe(
        res=>{
          console.log(res);
          this.success_message = 'Se actualizó el producto correctamente';
          
        });
    }

    this._router.navigate(['/productos']);

  }

  

}
