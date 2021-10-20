import { flatten } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
type offcanvasType = 'offcanvas-start' | 'offcanvas-end' | 'offcanvas-top' |  'offcanvas-bottom'
@Component({
  selector: 'ngb-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class OffcanvasComponent implements OnInit {
@ViewChild('offcanvas') canvas!:ElementRef
@Input("clss") place!: offcanvasType
@Input("scrl") scroll: boolean = false
@Input("bkdp") backdrop: boolean = true
show:boolean=false

offstart:boolean= true
offend:boolean=false
offtop:boolean=false
offbottom:boolean=false

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    if(this.place!=undefined)
    {
      this.offstart = false
      switch(this.place)
      {
        case 'offcanvas-end':
          this.offend = true;
          break;
        case 'offcanvas-top':
          this.offtop = true;
          break;
        case 'offcanvas-bottom':
          this.offbottom = true
          break;
        default:
          this.offstart = true;          
      }
    }
  }
  
  tgle(){
    // Aca esta visualizado, cambia a oculto
    if(this.show){
      this.render.removeStyle(document.body, "overflow");
      this.render.removeStyle(document.body, "padding-right");
      this.render.setStyle(this.canvas.nativeElement, "transform", this._transf())
      setTimeout(()=>{ this.show = !this.show},300)
    }
    // Aca esta oculto pasa a visualizarse
    else{
      if(!this.scroll){
        this.render.setStyle(document.body, "overflow","hidden");
        this.render.setStyle(document.body, "padding-right","12px");
      }
      this.render.removeStyle(this.canvas.nativeElement, "transform")
      this.show = !this.show
    }
  }

  clse(){
  if(this.show)
    this.tgle()
}

private _transf():String {
  if(this.offstart) return "translateX(-100%)";
  if(this.offend) return "translateX(100%)";
  if(this.offtop) return "translateY(-100%)";
  if(this.offbottom) return "translateY(100%)";
  return "translateX(-100%)"
 }

}