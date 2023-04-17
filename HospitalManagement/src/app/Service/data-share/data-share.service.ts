import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
BehaviorSubject

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }

    
  private data = new BehaviorSubject([]);

  subPoint = this.data.asObservable();

  dataInToUnrelated(payload:any)
  {
    this.data.next(payload);
    // console.log("from data sharer", payload);
    
  }
}
