import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tablink } from './tab/tab.component';



@Component({
  selector: 'ngb-anglBstpUI',
  templateUrl: './angl-bstp-ui.component.html',
  styles: [
    `.example-button{
      margin-left:1rem;
    }
    .code-blue{
      color: var(--bs-primary);
    }
    .code-gray{
      color: var(--bs-gray);
    }
    .code-black{
      color: var(--bs-dark);
    }
    .bg-light-gray{
      --bs-bg-opacity: 1;
      background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity))!important
    }
    `
  ]
})
export class AnglBstpUIComponent implements OnInit {
  @ViewChild('modal') div!: ElementRef;
  
tabs: tablink[] = [
  {id:1, nmbr: "Accordion", actv:false, dsbl:false, chnl: 12, href:""},
  {id:2, nmbr: "Alerts", actv:false, dsbl:false, chnl: 12, href:""},
  {id:3, nmbr: "Badge", actv:false, dsbl:false, chnl: 12, href:""},
  {id:4, nmbr: "Breadcrumb", actv:false, dsbl:false, chnl: 12, href:""},
  {id:5, nmbr: "Buttons", actv:false, dsbl:false, chnl: 12, href:""},
  {id:6, nmbr: "Buttons group", actv:false, dsbl:false, chnl: 12, href:""},
  {id:7, nmbr: "Card", actv:false, dsbl:false, chnl: 12, href:""},
  {id:8, nmbr: "Carousel", actv:true, dsbl:false, chnl: 12, href:""},
  {id:9, nmbr: "Close button", actv:false, dsbl:false, chnl: 12, href:""},
  {id:10, nmbr: "Collapse", actv:false, dsbl:false, chnl: 12, href:""},
  {id:11, nmbr: "Dropdown", actv:false, dsbl:false, chnl: 12, href:""},
  {id:12, nmbr: "List group", actv:false, dsbl:false, chnl: 12, href:""},
  {id:13, nmbr: "Modal", actv:false, dsbl:false, chnl: 12, href:""},
  {id:14, nmbr: "Navs & tabs", actv:false, dsbl:false, chnl: 12, href:""},
  {id:15, nmbr: "Navbar", actv:false, dsbl:false, chnl: 12, href:""},
  {id:16, nmbr: "Offcanvas", actv:false, dsbl:false, chnl: 12, href:""},
  {id:17, nmbr: "Pagination", actv:false, dsbl:false, chnl: 12, href:""},
  {id:18, nmbr: "Placeholders", actv:false, dsbl:false, chnl: 12, href:""},
  {id:19, nmbr: "Popovers", actv:false, dsbl:false, chnl: 12, href:""},
  {id:20, nmbr: "Progress", actv:false, dsbl:false, chnl: 12, href:""},
  {id:21, nmbr: "Scrollpy", actv:false, dsbl:false, chnl: 12, href:""},
  {id:22, nmbr: "Toasts", actv:false, dsbl:false, chnl: 12, href:""},
  {id:23, nmbr: "Tooltips", actv:false, dsbl:false, chnl: 12, href:""}
]
  constructor() { }
  
  ngOnInit(): void {
  }



}
interface code{
  sltr:string;
  clss: string;
  vlue:string
}