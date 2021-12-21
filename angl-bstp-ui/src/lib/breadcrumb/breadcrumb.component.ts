import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DvdrEnum } from '../types/DividerEnum';


@Component({
  selector: 'ngb-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  @Input('dvdr') dvdr: DvdrEnum = DvdrEnum.BAR
  @Input("itms") items: brdcitem[] = []
  bar: DvdrEnum = DvdrEnum.BAR
  quote: DvdrEnum = DvdrEnum.QUOTE
  none: DvdrEnum = DvdrEnum.NONE

  constructor() {

  }

  ngOnInit(): void {

  }
  AfterViewInit() {

  }
}
export interface brdcitem {
  active: boolean,
  link: string,
  text: string
}


