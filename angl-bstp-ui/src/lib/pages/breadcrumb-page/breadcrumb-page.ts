import { Component, OnInit } from '@angular/core';
import { brdcitem } from '../../breadcrumb/breadcrumb.component';
import { tablink } from '../../tab/tab.component';
import { DvdrEnum } from '../../types/DividerEnum';

@Component({
  selector: 'ngb-breadcrumb-page',
  templateUrl: './breadcrumb-page.html'
})
export class BreadcrumbPageComponent implements OnInit {
  bar:DvdrEnum = DvdrEnum.BAR
  quote: DvdrEnum = DvdrEnum.QUOTE
  none: DvdrEnum = DvdrEnum.NONE

frst: brdcitem[] = [
  {text: "Home", active: true, link: "#"}

]
scnd: brdcitem[] = [
  {text: "Home", active: false, link: "#"},
  {text: "Library", active: true, link: "#"}

]
tree: brdcitem[] = [
  {text: "Home", active: false, link: "#"},
  {text: "Library", active: false, link: "#"},
  {text: "Data", active: true, link: "#"}
]

xmpl:tablink[] = [
  {id:1, nmbr:"Html", actv:true, dsbl: false, chnl: 6, href:"#"},
  {id:2, nmbr:"Javascript", actv:false, dsbl:false, chnl: 6, href:"#"}
]
dvdr:tablink[] = [
  {id:1, nmbr:"Html", actv:true, dsbl: false, chnl: 7, href:"#"},
  {id:2, nmbr:"Javascript", actv:false, dsbl:false, chnl: 7, href:"#"}
]
  constructor() { }

  ngOnInit(): void {
  }
 
}
