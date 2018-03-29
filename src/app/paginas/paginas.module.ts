import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CarritoComponent, TiendaComponent]
})
export class PaginasModule {}
