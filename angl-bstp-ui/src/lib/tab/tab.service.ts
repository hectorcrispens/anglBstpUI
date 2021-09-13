import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tablink } from './tab.component';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  tabSources: Subject<tablink> = new Subject();

  _getActv():Observable<tablink>{
    return this.tabSources.asObservable();
  }

  
  actv(value:tablink){
    this.tabSources.next(value);
  }
}
