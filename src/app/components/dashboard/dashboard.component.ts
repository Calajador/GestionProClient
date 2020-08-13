import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  proveedores: any [] = [];
  marcas = [];
  ventas = [];
  problemas = [];
  satisfaccion = [];

  // Inicio Grafica Barras
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.marcas
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  
  barChartData: ChartDataSets[] = [
    { data: this.ventas, label: 'Ventas' }
  ];
  // Fin Grafica Barras

  // Inicio Grafica Donut
  private donutColors=[
    {
      backgroundColor: [
        'rgba(255,9,80,0.4)',
        'rgba(0,29,194,0.4)',
        'rgba(255,255,59,0.4)',
        'rgba(129, 78, 40, 1)',
        'rgba(0,202,0,0.4)',
        'rgba(255,0,255,0.4)',
        'rgba(138,187,144,0.4)'
    ]
    }
  ];
  doughnutChartLabels: Label[] = this.marcas;
  doughnutChartData: MultiDataSet = [
    this.problemas
  ];
  doughnutChartType: ChartType = 'doughnut';
  // Fin Grafica Donut

  // inicio Grafica Tarta
  private pieColors = [
    {
      backgroundColor: [
        'rgba(255,9,80,0.4)',
        'rgba(0,29,194,0.4)',
        'rgba(255,255,59,0.4)',
        'rgba(129, 78, 40, 1)',
        'rgba(0,202,0,0.4)',
        'rgba(255,0,255,0.4)',
        'rgba(138,187,144,0.4)'
    ]
    }
  ]
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = this.marcas;
  public pieChartData: SingleDataSet = this.satisfaccion;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // Fin Grafica Tarta


  constructor(private _prov: ProveedorService) { 
    this.getDatos();
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    
  }

  getDatos() {
    this._prov.getProveedores()
      .subscribe((res: any) => {
        this.proveedores = res.proveedores
        this.proveedores.forEach(element => {
          this.marcas.push(element.nombre);
          this.ventas.push(element.ventas);
          this.problemas.push(element.problemas);
          this.satisfaccion.push(element.satisfaccion);
        })
      })
  }
}
