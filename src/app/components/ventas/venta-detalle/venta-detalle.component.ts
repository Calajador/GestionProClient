import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-venta-detalle',
  templateUrl: './venta-detalle.component.html',
  styleUrls: ['./venta-detalle.component.css']
})
export class VentaDetalleComponent implements OnInit {

  @ViewChild('htmlData',{ static: true }) htmlData:ElementRef;

  public id;
  public venta = {
    idcliente: ''
  };
  public detalles = [];
  public totalDef = 0;

  constructor(private _aroute: ActivatedRoute, private _venta: VentasService) { }

  ngOnInit() {
    this._aroute.params.subscribe(
      (params: Params) => {
        this.id = params.id
        this._venta.data_venta(this.id)
          .subscribe((res: any) => {
           this.venta = res.data.venta;
           this.detalles = res.data.detalles;
           this.subTotal();
          })
      }
    )}

  subTotal() {
    let total = 0;
    this.detalles.forEach(element => {
      total = total + parseInt(element.idproducto.precio_venta) * parseInt(element.cantidad)
    });
    this.totalDef = total;
  }

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }
}
