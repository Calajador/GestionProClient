import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorEditComponent } from './components/proveedores/proveedor-edit/proveedor-edit.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { VentaIndexComponent } from './components/ventas/venta-index/venta-index.component';
import { VentaCreateComponent } from './components/ventas/venta-create/venta-create.component';
import { VentaDetalleComponent } from './components/ventas/venta-detalle/venta-detalle.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductoIndexComponent,
    SidebarComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    ProveedorIndexComponent,
    ProveedorCreateComponent,
    ProveedorEditComponent,
    ClienteIndexComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserEditComponent,
    VentaIndexComponent,
    VentaCreateComponent,
    VentaDetalleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ChartsModule 
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
