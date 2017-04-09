import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class CaseService {

  program: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) { }

  getProgram(programName: String) {
    this.program = this.af.database.object('/sim/' + programName);

    return this.program.map(function(obj){
      let caseList = [];

      Object.keys(obj).forEach(function(value, index){
        if (value !== 'program') {
          caseList.push({id: value, obj: obj[value]});
        }
      });
      return {cases: caseList, sections: obj['program']};
    });
  }

}
