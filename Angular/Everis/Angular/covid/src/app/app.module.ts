import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InformationComponent } from './components/information/information.component';
import { GlobalComponent } from './components/global/global.component';

@NgModule({
  declarations: [AppComponent, InformationComponent, GlobalComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
