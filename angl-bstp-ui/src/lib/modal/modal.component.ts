import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  state:string[]=["modal"];
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.state.pop();
    this.state.push("modal.show");
 }
 
 hide(){
   this.state.pop();
    this.state.push("modal");
 }
}
