import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
type drtnType = 'hrzn' | 'vrtl'
@Component({
  selector: 'ngb-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  @Input("hrzn") hrzn:boolean=false
  @ViewChild("panel")panel!:ElementRef
  show:boolean = false
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }
 
 tgle(){
   this.show = !this.show
   if(this.show)
   {
     if(!this.hrzn)
      this.render.setStyle(this.panel.nativeElement, "maxHeight", this.panel.nativeElement.scrollHeight + "px")
     else
      this.render.setStyle(this.panel.nativeElement, "maxWidth", this.panel.nativeElement.scrollWidth + "px")     
   }
   else
   {
    if(!this.hrzn)
    this.render.setStyle(this.panel.nativeElement, "maxHeight", null)
    else
    this.render.setStyle(this.panel.nativeElement, "maxWidth", null)
   }
 }
}
