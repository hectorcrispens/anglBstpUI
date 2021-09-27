import { Component, ContentChild, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { bgType, fxedType, mrgnType } from '../types/baseType';

type navbarType = 'navbar-expand-sm' |'navbar-expand-md' |'navbar-expand-lg' |'navbar-expand-xl' |'navbar-expand-xxl' | 'navbar-light' | 'navbar-dark' |'sticky-top'|bgType | fxedType | mrgnType
type sideType = 'left' | 'right'
type brandType = mrgnType |'h1'| 'h2'|'h3'|'h4'|'h5'|'h6'
@Component({
  selector: 'ngb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input('side') side: sideType = 'right'
  @Input('clss') clss!: navbarType[]
  @Input('brnd') brnd: brand = {text: "brand", clss:[], imag: ""}
  @Input('prpt') styl: object = {}
  @ViewChild('brndCntr') brandCntr!: ElementRef

  clps: boolean = true

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const brndText = this.renderer.createText(this.brnd.text);
    if(this.brnd.imag!="")
    {
      /** width="30" height="24" */
      const brndImag = this.renderer.createElement('img')
      this.renderer.setAttribute(brndImag, 'src', this.brnd.imag)
      this.renderer.setAttribute(brndImag, 'width', '30')
      this.renderer.setAttribute(brndImag, 'height', '24')
      this.renderer.appendChild(this.brandCntr.nativeElement, brndImag)
    }
    this.renderer.appendChild(this.brandCntr.nativeElement, brndText)

  }
  tgle() {
    this.clps = !this.clps
  }
}
export interface brand{
  text: string,
  clss: brandType[],
  imag: string
}
