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
import { TabComponent } from './tab/tab.component';
import { TabPageComponent } from './pages/tab-page/tab.page';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
//endregion Pages


@NgModule({
  declarations: [
    AnglBstpUIComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
    CardPageComponent,
    ButtonPageComponent,
    ModalPageComponent,
    TabComponent,
    TabPageComponent,
    TabPanelComponent
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
    TabComponent
  ]
})
export class AnglBstpUIModule { }
