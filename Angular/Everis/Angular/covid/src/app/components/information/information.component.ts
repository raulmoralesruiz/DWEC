import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  @Input() listCountries;

  constructor() {}

  ngOnInit(): void {}
}
