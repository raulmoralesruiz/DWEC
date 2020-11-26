import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './features/media/components/search/search.component';
import { InicioComponent } from './features/media/components/inicio/inicio.component';
import { NotFoundComponent } from './features/media/components/not-found/not-found.component';
import { MenubarModule } from 'primeng/menubar';
import { MediaDetailsComponent } from './features/media/components/media-details/media-details.component';


@NgModule({
  declarations: [AppComponent, SearchComponent, InicioComponent, NotFoundComponent, MediaDetailsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
