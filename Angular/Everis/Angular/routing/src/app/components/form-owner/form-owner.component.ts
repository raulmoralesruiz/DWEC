import { Component, OnInit } from '@angular/core';
import { Owner } from '../../interfaces/owner';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  owner: Owner;


  constructor() {
    this.owner = {
      firstName: 'pepe',
      lastName: 'de los palotes',
      address: 'calle falsa, 1',
      telephone: '666 444 222',
      city: 'sevilla'
    };
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.owner);
    console.table(this.owner);
  }

}
