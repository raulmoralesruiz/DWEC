import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ​​​​​ HttpClientModule }​​​​​ from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormOwnerComponent,
    NotFoundComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
