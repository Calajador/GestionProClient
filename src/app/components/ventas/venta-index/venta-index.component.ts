import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-venta-index',
  templateUrl: './venta-index.component.html',
  styleUrls: ['./venta-index.component.css']
})
export class VentaIndexComponent implements OnInit {

  public ventas = [];

  constructor(private _ventas: VentasService) { }

  ngOnInit() {

    this.getVentas();
  }

  getVentas() {
    this._ventas.getVentas()
      .subscribe((res: any) => {
      this. ventas = res.ventas
        
      })
  }
  
}
