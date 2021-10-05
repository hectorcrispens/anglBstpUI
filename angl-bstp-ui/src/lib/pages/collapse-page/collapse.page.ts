import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-collapse-page',
  templateUrl: './collapse.page.html',
  styles:[]
})
export class CollapsePageComponent implements OnInit {
  cl1:string=""
  cl2:string=""
  cl3:string=""
  cl4:string=""
  constructor() { }

  ngOnInit(): void {
  }

  fresh1(dt:string){
    this.cl1=dt
  }

  fresh2(dt:string){
    this.cl2=dt
  }
  fresh3(dt:string){
    this.cl3=dt
  }
  fresh4(dt:string){
    this.cl4=dt
  }
}
