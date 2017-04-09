import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserService } from '../user.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  badges: any;
  updateBadges: any = null;
  uid: any = null;
  dialogRef: MdDialogRef<BadgeComponent>;
  photoURL: any;
  userName: any;
  allBadges: any[];
  percent: any;

  constructor(private service: ProfileService, private user_service: UserService, public dialog: MdDialog) {

    if(this.user_service.isLoggedin()){
      this.uid = this.user_service.getCurrentUser().uid;
      this.userName = this.user_service.getCurrentUser().auth.displayName;
      this.photoURL = this.user_service.getCurrentUser().auth.photoURL;
      this.getProfile();
    }

    this.user_service.getAuthState().subscribe(function(authState){
      if(authState != null) {
        this.uid = authState.uid;
        this.userName = authState.auth.displayName;
        this.photoURL = authState.auth.photoURL;
        this.getProfile();
      }
    }.bind(this));

    this.service.getAllBadges().subscribe(function(list){
        this.allBadges = list.map((value, index) => {value.enabled = false; return value;});
        this.getProfile();
        // console.log(this.allBadges);
    }.bind(this));
  }

  ngOnInit() {
  }

  openDialog() {
    return this.dialog.open(BadgeComponent);
  }

  enableBadge(list) {
    list.forEach(function(badge) {
      this.allBadges.forEach(function(obj){
        if (obj.name == badge.name) {
          obj.enabled = true;
        }
      });
    }.bind(this));
  }

  getProfile(){
    // console.log(this.allBadges);
    if (this.uid != null && this.allBadges != undefined ) {
      this.percent = this.service.getProgramProgressPercent(this.uid, 'Cold and Flu');

      this.badges = this.service.getBadgeList(this.uid);
      this.badges.subscribe(function(list){
        this.enableBadge(list);
      }.bind(this));

      this.service.getUpdateBadgeList(this.uid).subscribe(function(obj){
        obj.subscribe(function(obj1){
          if (this.updateBadges == null) {
            this.updateBadges = obj1;
            this.updateBadges.forEach(function(badge){
              this.dialogRef = this.openDialog();

              // let dialBadge;
              // this.allBadges.forEach((obj) => { if(obj.name == badge.name) dialBadge = obj; });
              // this.dialogRef.componentInstance.badge = dialBadge;
              this.dialogRef.componentInstance.badge = badge;

              this.dialogRef.afterClosed().subscribe(result => {
                this.service.awardBadgeToUser(this.uid, { name: badge.name });
              });
            }.bind(this));
          }
        }.bind(this));
      }.bind(this));
    }
  }
}

function contains(a, obj) {
  // console.log(obj);
    for (var i = 0; i < a.length; i++) {
      // console.log(a[i]);
        if (a[i].name === obj.name) {
            return true;
        }
    }
    return false;
}
