import { Component, Input, OnInit } from '@angular/core';
import { bgType, brdrType, mrgnType, textColrType } from '../types/baseType';
type cardType = brdrType | bgType | mrgnType | textColrType
@Component({
  selector: 'ngb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input("clss") clase:cardType[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
