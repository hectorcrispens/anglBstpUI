import { Component, OnInit } from '@angular/core';
import { Slide } from '../../carousel/carousel.interface';

@Component({
  selector: 'ngb-carousel-page',
  templateUrl: './carousel-page.html',
})
export class CarouselPageComponent implements OnInit {
  slides: Slide[] = [
    {_id: "P", src: "https://unsplash.it/700?random", chk: false },
    {_id: "Q", src: "https://unsplash.it/700?random", chk: true },
    {_id: "R", src: "https://unsplash.it/700?random", chk: false }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
