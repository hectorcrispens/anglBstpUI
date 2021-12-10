import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { bgType, brdrType, mrgnType, mvmnType, pddgType, pstnType, rnddType, textColrType, trltType } from '../types/baseType';

type bdgeType = brdrType | bgType | textColrType | pstnType | mvmnType | rnddType | trltType | pddgType | mrgnType

@Component({
  selector: 'ngb-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent implements OnInit {
@Input('clss') clase: bdgeType[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
