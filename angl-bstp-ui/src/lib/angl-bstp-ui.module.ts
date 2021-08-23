import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
  ]
})
export class AnglBstpUIModule { }
