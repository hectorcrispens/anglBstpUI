import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
type drtnType = 'hrzn' | 'vrtl'
@Component({
  selector: 'ngb-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
  animations: [
    trigger('triggerCollapse',
      [
        state('vhide', style({
          maxHeight: '0px'
        })),
        state('hhide', style({
          maxWidth: '0px',
          height: 'auto'
   
        })),
        state('vshow', style({
          maxHeight: '{{ maxvh }}vh'
        }), {params: {maxvh: 100}}),
        state('hshow', style({
          maxWidth: '{{ maxvw }}vw'
        }), {params:{maxvw: 100}}),
        transition('vhide => vshow',animate('{{ timer }}s cubic-bezier(.71,.05,.34,.96)'), {params:{timer: 2}}),
        transition('vshow => vhide',animate('{{ timer }}s cubic-bezier(.71,.05,.34,.96)'), {params:{timer: 2}}),
        transition('hhide => hshow',animate('{{ timer }}s cubic-bezier(.71,.05,.34,.96)'), {params:{timer: 2}}),
        transition('hshow => hhide',animate('{{ timer }}s cubic-bezier(.71,.05,.34,.96)'), {params:{timer: 2}})
               
      ])
  ]
})
export class CollapseComponent implements OnInit {
  @Input('drtn') drtn:drtnType = 'hrzn'
  @Input('time') time: number = 1
  @Input('max-vh') maxvh: number = 100
  @Input('max-vw') maxvw: number = 100
  @Output() stte = new EventEmitter();

  stateClps:string = 'vhide'
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(){
    this.stateClps = this.drtn=='hrzn'? 'hhide' : 'vhide'
  }
  ngAfterViewInit(){

  }
 tgle(){
   if(this.drtn=='hrzn')
   {
     this.stateClps = this.stateClps=='hhide' ? 'hshow' : 'hhide'
   }
   else
   {
    this.stateClps = this.stateClps=='vhide' ? 'vshow' : 'vhide'
   }
   this.stte.emit(this.stateClps.slice(1));
  }
}
