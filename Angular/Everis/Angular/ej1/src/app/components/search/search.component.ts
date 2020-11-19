import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() textBtn: string;
  @Output() sendQuery = new EventEmitter<string>();

  textoQuery: string;
  texto: string;

  constructor() { }

  ngOnInit(): void {
    this.textoQuery = '';
    this.texto = 'Texto original';
  }

  search(): void {
    this.texto = 'Texto cambiado';
    this.sendQuery.emit( this.textoQuery);
  }
}
