import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  global: any;
  spain: any;
  countries: any;
  active: string;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    // Listado global
    this.covidService.listGeneral().subscribe(
      (response) => {
        this.global = response;
      },
      (error) => {
        console.log(error);
      }
    );

    // Listado spain
    this.covidService.listSpain().subscribe(
      (response) => {
        this.spain = response;
      },
      (error) => {
        console.log(error);
      }
    );

    // Listado countries
    this.covidService.listCountries().subscribe(
      (response) => {
        this.countries = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /* Método que activa el componente de países o el componente global/spain */
  setActive(valor: string): void {
    if (valor == 'countries') {
      this.active = 'countries';
    }

    if (valor == 'global') {
      this.active = 'global';
    }
  }
}
