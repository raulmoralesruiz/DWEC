import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countries: any[];
  spain: any[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    // Listado de países
    this.countryService.listCountries().subscribe(
      (response) => {
        this.countries = response;
        console.log('COUNTRY response');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    // Listado de España
    this.countryService.listSpainOnly().subscribe(
      (response) => {
        this.spain = response;
        console.log('SPAIN response');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
