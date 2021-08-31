import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



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
  

  constructor() { }
  
  ngOnInit(): void {
  }



}
interface code{
  sltr:string;
  clss: string;
  vlue:string
}