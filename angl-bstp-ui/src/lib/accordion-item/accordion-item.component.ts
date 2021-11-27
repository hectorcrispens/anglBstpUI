import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ngb-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
@Input("title") title!:string
@Input("show") show:boolean = false
@ViewChild('panel') panel!:ElementRef
  constructor(private render:Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    if(this.show)
    {
      this.show = !this.show
      this.chng()
    }
  }
chng(){
  this.show =!this.show
  if(this.show){
    this.render.setStyle(this.panel.nativeElement, "maxHeight", this.panel.nativeElement.scrollHeight + "px")
  }else{
    this.render.setStyle(this.panel.nativeElement, "maxHeight", null)
  }
}
}
