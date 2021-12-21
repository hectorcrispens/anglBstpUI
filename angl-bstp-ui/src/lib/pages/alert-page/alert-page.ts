import { Component, OnInit } from '@angular/core';
import { Alert } from '../../alert/alert.component';
import { tablink } from '../../tab/tab.component';

@Component({
  selector: 'ngb-alert-page',
  templateUrl: './alert-page.html',
  styles: [``]
})
export class AlertPageComponent implements OnInit {
  alertsI: Alert[] = [
    { type: 'primary', diss: false, icon: true, mssg: 'An example primary alert with an icon' },
    { type: 'success', diss: false, icon: true, mssg: 'An example success alert with an icon' },
    { type: 'danger', diss: false, icon: true, mssg: 'An example danger alert with an icon' },
    { type: 'warning', diss: false, icon: true, mssg: 'An example warning alert with an icon' }
  ]

  alertsl: Alert[] = [
    { type: 'primary', diss: false, icon: false, mssg: 'A simple primary alert with' },
    { type: 'secondary', diss: false, icon: false, mssg: 'A simple secondary alert with' },
    { type: 'success', diss: false, icon: false, mssg: 'A simple success alert with' },
    { type: 'danger', diss: false, icon: false, mssg: 'A simple danger alert with' },
    { type: 'warning', diss: false, icon: false, mssg: 'A simple warning alert with' },
    { type: 'info', diss: false, icon: false, mssg: 'A simple info alert with' },
    { type: 'light', diss: false, icon: false, mssg: 'A simple light alert with' },
    { type: 'dark', diss: false, icon: false, mssg: 'A simple dark alert with' }
  ]

  alertsd: Alert[] = [
    { type: 'primary', diss: true, icon: false, mssg: 'A simple primary alert with' },
    { type: 'secondary', diss: true, icon: false, mssg: 'A simple secondary alert with' },
    { type: 'success', diss: true, icon: false, mssg: 'A simple success alert with' },
    { type: 'danger', diss: true, icon: false, mssg: 'A simple danger alert with' },
    { type: 'warning', diss: true, icon: false, mssg: 'A simple warning alert with' },
    { type: 'info', diss: true, icon: false, mssg: 'A simple info alert with' },
    { type: 'light', diss: true, icon: false, mssg: 'A simple light alert with' },
    { type: 'dark', diss: true, icon: false, mssg: 'A simple dark alert with' }
  ]

  dvdr:tablink[] = [
    {id:1, nmbr:"Html", actv:true, dsbl: false, chnl: 8, href:"#"},
    {id:2, nmbr:"Javascript", actv:false, dsbl:false, chnl: 8, href:"#"}
  ]
  
  ngOnInit(): void {
  }

  closeAlert(alert: Alert) {
    this.alertsd.splice(this.alertsd.indexOf(alert), 1);
  }
}
