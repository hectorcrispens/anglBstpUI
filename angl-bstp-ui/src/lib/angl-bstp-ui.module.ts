import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnglBstpUIComponent } from './angl-bstp-ui.component';

//region Components
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
//endregion Components

//region Pages
import { CardPageComponent } from './pages/card-page/card.page';
import { ButtonPageComponent } from './pages/button-page/button.page';
import { ModalPageComponent } from './pages/modal-page/modal.page';
//endregion Pages


@NgModule({
  declarations: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
    CardPageComponent,
    ButtonPageComponent,
    ModalPageComponent
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
