import { Component, OnInit } from '@angular/core';
import { tablink } from '../../tab/tab.component';

@Component({
  selector: 'ngb-tab-page',
  templateUrl: './tab-page.html'
})
export class TabPageComponent implements OnInit {

  base:tablink[] = [
    {id:1, nmbr:"Active", actv:true, dsbl: false, chnl: 1, href:"route"},
    {id:2, nmbr:"Link", actv:false, dsbl:false, chnl: 1, href:""},
    {id:3, nmbr:"Link", actv: false, dsbl:false, chnl: 1, href:""},
    {id:4, nmbr:"Disabled", actv:false, dsbl:true, chnl: 1, href:""}
  ]

  tabs:tablink[] = [
    {id:1, nmbr:"Active", actv:true, dsbl: false, chnl: 2, href:""},
    {id:2, nmbr:"Tab", actv:false, dsbl:false, chnl: 2, href:""},
    {id:3, nmbr:"Other Tab", actv: false, dsbl:false, chnl: 2, href:""},
    {id:4, nmbr:"Disabled", actv:false, dsbl:true, chnl: 2, href:""}
  ]

  pill:tablink[] = [
    {id:5, nmbr:"Active", actv:true, dsbl: false, chnl: 3, href:""},
    {id:6, nmbr:"Tab", actv:false, dsbl:false, chnl: 3, href:""},
    {id:7, nmbr:"Other Tab", actv: false, dsbl:false, chnl: 3, href:""},
    {id:8, nmbr:"Disabled", actv:false, dsbl:true, chnl: 3, href:""}
  ]

  flex:tablink[] = [
    {id:5, nmbr:"Active", actv:true, dsbl: false, chnl: 4, href:""},
    {id:6, nmbr:"Tab", actv:false, dsbl:false, chnl: 4, href:""},
    {id:7, nmbr:"Other Tab", actv: false, dsbl:false, chnl: 4, href:""},
    {id:8, nmbr:"Disabled", actv:false, dsbl:true, chnl: 4, href:""}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  chngTabs(evnt: tablink)
  {
    alert("indice: " + evnt.id.toString() + ", data: " + evnt.nmbr)
  }
}
