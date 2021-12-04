import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngb-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit{
@Input('type') type!:string
@Input('diss') diss:boolean = false
@Input('icon') icon:boolean = false
@Output('closed') closeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  
  }

  close(){
    this.closeEvent.emit();
  }
}
export interface Alert{
  type: string,
  diss: boolean,
  icon: boolean,
  mssg: string
}
