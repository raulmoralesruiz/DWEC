import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // se guarda la fecha actual, para mostrarlo en formato español
  fecha = Date.now();

  // se guarda un número, para mostrarlo en formato español
  number = 1234567.89;

  constructor() {}

  // se define formulario y se validan sus campos
  formulario = new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userTerms: new FormControl('', Validators.requiredTrue),
  });

  ngOnInit(): void {}
}
