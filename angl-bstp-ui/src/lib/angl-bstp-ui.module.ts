import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnglBstpUIComponent } from './angl-bstp-ui.component';

//region Components
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { AccordionComponent } from './accordion/accordion.component';
//endregion Components

//region Pages
import { CardPageComponent } from './pages/card-page/card.page';
import { ButtonPageComponent } from './pages/button-page/button.page';
import { ModalPageComponent } from './pages/modal-page/modal.page';
import { TabPageComponent } from './pages/tab-page/tab.page';
import { NavbarPageComponent} from './pages/navbar-page/navbar.page';
import { CollapsePageComponent } from './pages/collapse-page/collapse.page';
import { OffcanvasPageComponent } from './pages/offcanvas-page/offcanvas-page';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
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
    TabPanelComponent,
    NavbarComponent,
    NavbarPageComponent,
    CollapseComponent,
    CollapsePageComponent,
    OffcanvasComponent,
    OffcanvasPageComponent,
    AccordionComponent,
    AccordionPageComponent,
    AccordionItemComponent
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
    TabComponent,
    TabPanelComponent,
    NavbarComponent,
    OffcanvasComponent,
    AccordionComponent
  ]
})
export class AnglBstpUIModule { }
