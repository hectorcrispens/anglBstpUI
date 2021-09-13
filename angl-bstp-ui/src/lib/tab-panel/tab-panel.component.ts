import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tablink } from '../tab/tab.component';
import { TabService } from '../tab/tab.service';

@Component({
  selector: 'ngb-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  @Input('init') links!: tablink
  dspl: boolean = false
  tabRcbe!: tablink
  sbtn!: Subscription;
  constructor(private tabsrvc: TabService) {

   }

  ngOnInit(): void {
    this.sbtn = this.tabsrvc._getActv().subscribe(
      (tab:tablink) =>{
        this.tabRcbe = tab;
        if(tab.chnl== this.links.chnl)
            this.dspl = tab.id==this.links.id;
      }
    );
  }
  ngOnDestroy(){
    if(this.sbtn){
      this.sbtn.unsubscribe();
    }
  }


}
