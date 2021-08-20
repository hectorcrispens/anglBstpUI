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
  @Input("class") clase!: string[];
  constructor() { }

  /**
   * Cuando se hace click en el boton, se ejecuta el evento Emitt
   */
  @Output() clickEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  clickButton(value:string)
  {
    this.clickEvent.emit(value);
  }

}
