import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


type modalclss = 'modal-dialog-scrollable' | 'modal-dialog-centered' | 'modal-xl' | 'modal-lg' | 'modal-sm' | 'modal-fullscreen' 
                        | 'modal-fullscreen-sm-down' | 'modal-fullscreen-md-down' | 'modal-fullscreen-lg-down' | 'modal-fullscreen-xl-down' 
                        | 'modal-fullscreen-xxl-down';

@Component({
  selector: 'ngb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('stateModal',
      [
        state('hide', style({
          opacity: 0,
          transform: 'translate(0, -50px)',
        })),
        state('show', style({
          opacity: 1,
          transform: 'none',
        })),
        transition('hide => show', animate('0.3s ease-in')),
        transition('show => hide', animate('0.3s ease-out'))
      ])
  ]
})
export class ModalComponent implements OnInit {

  @ViewChild('backdrop') backdrop!: ElementRef
  @Input("dlog") dialogType!: modalclss[]
  @Output() stte = new EventEmitter();
  dialogBase: any[] = ["modal-dialog"]
  isOpen: boolean = false





  constructor(private render: Renderer2) {
    
  }

  ngOnInit(): void {
    
  }

  tgle() {
    this.isOpen = !this.isOpen;
  }

  _getStat(){
    this.stte.emit(this.isOpen ? 'open': 'close');
  }

}

