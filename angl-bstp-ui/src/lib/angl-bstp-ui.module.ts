import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnglBstpUIComponent } from './angl-bstp-ui.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@NgModule({
  declarations: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent
  ]
})
export class AnglBstpUIModule { }
