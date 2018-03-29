import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, InicioComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
