import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  /**
   * El imput class permite ingresar un array de string con las classes de bootstrap para el boton
   */
  @Input("clss") clase!: string[];

  /**
   * Cuando se hace click en el boton, se ejecuta el evento Emitt
   */
  @Output() clck = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  clckBttn()
  {
    this.clck.emit();
  }

}
