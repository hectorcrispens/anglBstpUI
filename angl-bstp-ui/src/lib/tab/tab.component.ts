import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { flexDrtnType, jstfCntnType } from '../types/baseType';

import { TabService } from './tab.service';
type tabType = 'nav-tabs' | 'nav-pills' | 'nav-fill' | flexDrtnType | jstfCntnType
@Component({
  selector: 'ngb-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input('lnks') links!: tablink[]
  @Input('clss') clss!: tabType[]
  @Output() evnt= new EventEmitter();
  constructor(private tabsrvc: TabService) {

   }

  ngOnInit() {

  }

  ngAfterContentInit(){
    this.links.forEach((item:tablink)=>{
      if(item.actv){
        this.tabsrvc.actv(item);
      }
    })
  }

  chng(id:number) {
    this.links.forEach((value:tablink) =>{
      if(id == value.id){ 
        value.actv = true;
        this.tabsrvc.actv(value);
        this.evnt.emit(value);
      }
      else{value.actv =false;}

    })
  }


}

export interface tablink{
  id:number;
  nmbr:string;
  actv:boolean;
  dsbl:boolean;
  chnl:number;
  href: string
}
