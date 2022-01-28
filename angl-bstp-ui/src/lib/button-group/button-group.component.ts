import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { mrgnType, pddgType } from '../types/baseType';

type btngrpclss = mrgnType | pddgType | 'btn-group-sm' | 'btn-group-lg'
type btngrptype = 'btn-group' | 'input-group' | 'btn-group-vertical'
type btngrpttl = btngrptype | btngrpclss

@Component({
  selector: 'ngb-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonGroupComponent implements OnInit {
@Input("clss") clss!: btngrpclss[]
@Input("type") tipo : btngrptype = 'btn-group'

clase : btngrpttl[] = [this.tipo]

constructor() { }

ngOnInit(): void {
  this.clase = [this.tipo]
}

}
