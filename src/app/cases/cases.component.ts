import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CaseService } from '../case.service';
import { Observable } from 'rxjs';
import { UserService} from '../user.service';
import { Router, NavigationExtras } from '@angular/router';
// import '../../assets/js/impress';

// declare var impress: any;

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  providers: [CaseService],
})
export class CasesComponent implements OnInit, AfterViewInit {

  // SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  program: Observable<any>;
  cases: Object[];
  sections: string[];
  // currentCaseIndex: number = 0;
  encryptedUid: any;
  programName = "Cold and Flu";

  constructor(private case_service: CaseService, private us: UserService, private router: Router) {
    this.program = this.case_service.getProgram(this.programName);
    this.program.subscribe(function(obj){
      this.cases = obj.cases;
      // console.log(obj.cases)
      this.sections = obj.sections.categories;
    }.bind(this));

    this.us.getUser().subscribe( user => {
      if (user != null) {
        us.getEncryptedUid(user.uid).subscribe(value => this.encryptedUid = value);
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // impress().init();
  }

  launchCase(programName, caseId, uId) {
    let extras: NavigationExtras = {
      queryParams:{p: programName, c: caseId, q: uId},
      // fragment: "anchor",
    };

    // console.log(extras);

    this.router.navigate(['/content'], extras);
  }

  // action triggered when user swipes
  // swipe(action = this.SWIPE_ACTION.RIGHT) {
  //     // out of range
  //     if (this.sections == undefined) return;
  //     if (this.currentCaseIndex >= this.sections.length || this.currentCaseIndex < 0) return;

  //     let nextIndex = 0;

  //     // swipe right, next avatar
  //     if (action === this.SWIPE_ACTION.LEFT) {
  //         const isLast = this.currentCaseIndex === this.sections.length - 1;
  //         nextIndex = isLast ? 0 : this.currentCaseIndex + 1;
  //     }

  //     // swipe left, previous avatar
  //     if (action === this.SWIPE_ACTION.RIGHT) {
  //         const isFirst = this.currentCaseIndex === 0;
  //         nextIndex = isFirst ? this.sections.length - 1 : this.currentCaseIndex - 1;
  //     }

  //     this.currentCaseIndex = nextIndex;
  // }
}
