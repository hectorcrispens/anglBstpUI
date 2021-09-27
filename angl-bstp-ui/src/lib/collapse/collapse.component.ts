import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
  animations: [
    trigger('state',
      [
        state('hide', style({
          maxHeight: '0px',
        })),
        state('show', style({
          maxHeight: '150px',
        })),
        transition('show => hide', animate('0.35s 100ms ease-out')),
        transition('hide => show', animate('0.35s 100ms ease-in'))
        
      ])
  ]
})
export class CollapseComponent implements OnInit {
  
  estd = 'hide'
  stt = false

  constructor() { }

  ngOnInit(): void {
  }

  clpsTgle(){
   this.estd = this.estd === 'show' ? 'hide': 'show';
  }
}
