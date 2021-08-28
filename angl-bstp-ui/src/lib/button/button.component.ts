import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type btnclss = 'btn'|'btn-close'|'btn-lg'|'btn-sm'|'btn-outline-light'|'btn-outline-dark'
                    |'btn-primary'|'btn-secondary'|'btn-success'|'btn-danger'|'btn-warning'|'btn-info'|'btn-light'|'btn-dark'|'btn-link'
                    |'btn-outline-primary'|'btn-outline-secondary'|'btn-outline-success'|'btn-outline-danger'|'btn-outline-warning'|'btn-outline-info';
                    

@Component({
  selector: 'ngb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  /**
   * El imput class permite ingresar un array de string con las classes de bootstrap para el boton
   */
  @Input("clss") clase!: btnclss[];

  @Input("dsbl") disabled: boolean = false

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
