import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-modal-page',
  templateUrl: './modal.page.html',
  styles: [`
  .example-button{
    margin-left:1rem;
  }
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
export class ModalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
