import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorEditComponent } from './components/proveedores/proveedor-edit/proveedor-edit.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { AuthGuard } from './guard/auth.guard';
import { VentaIndexComponent } from './components/ventas/venta-index/venta-index.component';
import { VentaCreateComponent } from './components/ventas/venta-create/venta-create.component';
import { VentaDetalleComponent } from './components/ventas/venta-detalle/venta-detalle.component';


const routes: Routes = [

  {path: '', component:LoginComponent, pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'productos', component:ProductoIndexComponent, canActivate:[AuthGuard]},
  {path: 'producto/registrar', component:ProductoCreateComponent, canActivate:[AuthGuard]},
  {path: 'producto/editar/:id', component:ProductoEditComponent, canActivate:[AuthGuard]},
  {path: 'proveedores', component:ProveedorIndexComponent, canActivate:[AuthGuard]},
  {path: 'proveedores/registrar', component:ProveedorCreateComponent, canActivate:[AuthGuard]},
  {path: 'proveedor/editar/:id', component:ProveedorEditComponent, canActivate:[AuthGuard]},
  {path: 'clientes', component:ClienteIndexComponent, canActivate:[AuthGuard]},
  {path: 'clientes/registrar', component:ClienteCreateComponent, canActivate:[AuthGuard]},
  {path: 'clientes/editar/:id', component:ClienteEditComponent, canActivate:[AuthGuard]},
  {path: 'users', component:UserIndexComponent, canActivate:[AuthGuard]},
  {path: 'users/registrar', component:UserCreateComponent, canActivate:[AuthGuard]},
  {path: 'users/editar/:id', component:UserEditComponent, canActivate:[AuthGuard]},
  {path: 'ventas', component:VentaIndexComponent, canActivate:[AuthGuard]},
  {path: 'ventas/registrar', component:VentaCreateComponent, canActivate:[AuthGuard]},
  {path: 'venta/:id', component:VentaDetalleComponent, canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
