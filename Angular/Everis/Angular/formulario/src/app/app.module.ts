import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core'; // insertado locale, para mostrar fecha en formato español
import { registerLocaleData } from '@angular/common'; // insertado para mostrar fecha en formato español

import localeEs from '@angular/common/locales/es'; // insertado para mostrar fecha en formato español

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], // insertado para mostrar fecha en formato español
  bootstrap: [AppComponent],
})
export class AppModule {}
