import { Component, Input, OnInit } from '@angular/core';
import { baseType } from '../types/baseType';

@Component({
  selector: 'ngb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input("clss") clase:baseType[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
