import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Slide } from './carousel.interface';

type carouselstyle = 'light' | 'dark'
type carouseltype = 'fade' | 'slide' | 'thumb' | 'scale'
@Component({
  selector: 'ngb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CarouselComponent implements OnInit {
  @Input("style") style:carouselstyle = 'light'
  @Input("type") tipo: carouseltype = 'fade'
  @Input("title") title!: string
  slides: Slide[] = [
    {_id: "P", src: "https://unsplash.it/700?random", chk: false, cpt:{ ttl: "P", sbt: "subtitle"}},
    {_id: "Q", src: "https://unsplash.it/800?random", chk: true, cpt:{ ttl: "Q", sbt: "subtitle"}},
    {_id: "R", src: "https://unsplash.it/900?random", chk: false, cpt:{ ttl: "R", sbt: "subtitle"}},
    {_id: "S", src: "https://unsplash.it/100?random", chk: false, cpt:{ ttl: "S", sbt: "subtitle"}},
    {_id: "T", src: "https://unsplash.it/200?random", chk: false, cpt:{ ttl: "T", sbt: "subtitle"}},
    {_id: "U", src: "https://unsplash.it/300?random", chk: false, cpt:{ ttl: "U", sbt: "subtitle"}},
    {_id: "V", src: "https://unsplash.it/400?random", chk: false, cpt:{ ttl: "V", sbt: "subtitle"}},
    {_id: "W", src: "https://unsplash.it/500?random", chk: false, cpt:{ ttl: "W", sbt: "subtitle"}}
  ]
  constructor() { 
  }

  ngOnInit(): void {
  }



}
