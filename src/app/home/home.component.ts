import { Component, OnInit } from '@angular/core';
import {
  OnsenModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'angular2-onsenui';
import { UserService } from '../user.service';
import { ProfileService } from '../profile.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ProfileService ]
})
export class HomeComponent implements OnInit {
  percent: number = 0;
  uid: any = null;
  encryptedUid: any;
  programName: string = "Cold and Flu";
  nextCase: any = null;

  constructor(private router: Router, private ps: ProfileService, private us: UserService) {

    if(this.us.isLoggedin()){
      this.uid = this.us.getCurrentUser().uid;
      this.us.getEncryptedUid(this.uid).subscribe(value => this.encryptedUid = value);
      this.getProfile();
    }

    this.us.getAuthState().subscribe(function(authState){
      if(authState != null) {
        this.uid = authState.uid;
        this.us.getEncryptedUid(this.uid).subscribe(value => this.encryptedUid = value);
        this.getProfile();
      }
    }.bind(this));

    // this.percent = ps.getProgramProgressPercent(this.uid, "Cold and Flu");
  }

  getProfile(){
    if (this.uid != null) {
      this.ps.getProgramProgressPercent(this.uid, this.programName).subscribe(function(value){
        this.percent = value;
      }.bind(this));

      this.ps.getNextCase(this.uid, this.programName).subscribe(function(value){
        this.nextCase = value;
      }.bind(this));
    }
  }

  launchCase(programName, caseId, uId) {
    let extras: NavigationExtras = {
      queryParams:{p: programName, c: caseId, q: uId},
      // fragment: "anchor",
    };

    console.log(extras);

    this.router.navigate(['/content'], extras);
  }

  ngOnInit() {
  }

}
