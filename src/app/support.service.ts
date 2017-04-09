import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SupportService {
  // items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  getFAQItems(){
    return this.af.database.list('/faq');
  }
}
