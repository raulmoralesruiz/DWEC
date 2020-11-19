import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  /* obtenemos el listado de héroes */
  @Input() heroes;
  /* variable que usamos para enviar el nombre del héroe */
  @Output() sendQuery = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  /* Método que envía el nombre que pasamos por parámetro */
  sendHero(name: string): void {
    this.sendQuery.emit(name);
  }
}
