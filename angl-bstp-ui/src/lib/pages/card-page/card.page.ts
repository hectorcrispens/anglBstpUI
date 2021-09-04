import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-card-page',
  templateUrl: './card.page.html',
  styles: [`
  .code-blue{
    color: var(--bs-primary);
  }
  .code-gray{
    color: var(--bs-gray);
  }
  .code-black{
    color: var(--bs-dark);
  }
  `]
})
export class CardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
