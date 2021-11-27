import { Component, Input, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'ngb-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {
@Input("flush") flush:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
