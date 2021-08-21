import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnglBstpUIComponent } from './angl-bstp-ui.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
  ]
})
export class AnglBstpUIModule { }
