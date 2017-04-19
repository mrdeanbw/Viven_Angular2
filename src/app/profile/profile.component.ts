import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserService } from '../user.service';
// import { MdDialog, MdDialogRef } from '@angular/material';
// import { BadgeComponent } from '../badge/badge.component';
// import $ from 'jquery'; only for this component

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {
  uid: any = null;
  photoURL: any;
  userName: any;
  percent: any;
  badges: any;
  updateBadges: any = null;
  allBadges: any[];
  user: any;
  // dialogRef: MdDialogRef<BadgeComponent>;

  constructor(private ps: ProfileService, private us: UserService/*, public dialog: MdDialog*/) {
    
    let _this = this;

    us.getUser().subscribe(function(user){
      if(user != null) {
        _this.uid = user.uid;
        _this.userName = user.name;
        _this.photoURL = user.picture;
        _this.getProfile();
      }
    });

    // if(this.us.isSigned()){
    //   this.uid = this.us.getCurrentUser().uid;
    //   this.userName = this.us.getCurrentUser().auth.displayName;
    //   this.photoURL = this.us.getCurrentUser().auth.photoURL;
    //   this.getProfile();
    // }

    // this.us.getAuthState().subscribe(function(authState){
    //   if(authState != null) {
    //     this.uid = authState.uid;
    //     this.userName = authState.auth.displayName;
    //     this.photoURL = authState.auth.photoURL;
    //     this.getProfile();
    //   }
    // }.bind(this));

    ps.getAllBadges(this.uid).subscribe(function(badgeList){
        // _this.allBadges = list.map((value, index) => {value.enabled = false; return value;});
        _this.allBadges = badgeList;
        _this.getProfile();
        // console.log(_this.allBadges);
    });
  }

  ngOnInit() {
    // $('.ui.card').popup();
  }

  // openDialog() {
  //   return this.dialog.open(BadgeComponent);
  // }

  // enableBadge(list) {
  //   list.forEach(function(badge) {
  //     this.allBadges.forEach(function(obj){
  //       if (obj.name == badge.name) {
  //         obj.enabled = true;
  //       }
  //     });
  //   }.bind(this));
  // }

  getProfile() {
    // console.log(this.allBadges);
    if (this.uid != null && this.allBadges != undefined ) {
      this.percent = this.ps.getProgramProgressPercent(this.uid, 'Cold and Flu');

      // this.badges = this.ps.getAwardedBadges(this.uid);
      // this.badges.subscribe(function(list){
      //   this.enableBadge(list);
      // }.bind(this));

      // this.ps.getUpdateBadgeList(this.uid).subscribe(function(obj){
      //   obj.subscribe(function(obj1){
      //     if (this.updateBadges == null) {
      //       this.updateBadges = obj1;
      //       this.updateBadges.forEach(function(badge){
      //         this.dialogRef = this.openDialog();

      //         // let dialBadge;
      //         // this.allBadges.forEach((obj) => { if(obj.name == badge.name) dialBadge = obj; });
      //         // this.dialogRef.componentInstance.badge = dialBadge;
      //         this.dialogRef.componentInstance.badge = badge;

      //         this.dialogRef.afterClosed().subscribe(result => {
      //           this.ps.awardBadgeToUser(this.uid, { name: badge.name });
      //         });
      //       }.bind(this));
      //     }
      //   }.bind(this));
      // }.bind(this));
    }
  }

  launchModal() {
    // $('.ui.basic.modal').modal('show');
  }
}

// function contains(a, obj) {
//   // console.log(obj);
//     for (var i = 0; i < a.length; i++) {
//       // console.log(a[i]);
//         if (a[i].name === obj.name) {
//             return true;
//         }
//     }
//     return false;
// }
