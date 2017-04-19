import { Directive } from '@angular/core';
import { UserService } from './user.service';
import { ProfileService } from './profile.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { BadgeComponent } from './badge/badge.component';

@Directive({
  selector: '[appBadgeAward]',
})
export class BadgeAwardDirective {
  uid: any = null;
  badges: any;
  updateBadges: any = null;
  allBadges: any[];
  dialogRef: MdDialogRef<BadgeComponent>;

  constructor(private ps: ProfileService, private us: UserService, public dialog: MdDialog) { 
    us.getUser().subscribe(function(user){
      if(user != null) {
        this.uid = user.uid;
        this.getProfile();
      }
    }.bind(this));

    ps.getAllBadges(this.uid).subscribe(function(badgeList){
        // this.allBadges = list.map((value, index) => {value.enabled = false; return value;});
        this.allBadges = badgeList;
        this.getProfile();
        // console.log(this.allBadges);
    }.bind(this));
  }

  openDialog() {
    return this.dialog.open(BadgeComponent);
  }

  // enableBadge(list) {
  //   list.forEach(function(badge) {
  //     this.allBadges.forEach(function(obj){
  //       if (obj.name == badge.name) {
  //         obj.enabled = true;
  //       }
  //     });
  //   }.bind(this));
  // }

  getProfile(){
    // console.log(this.allBadges);
    if (this.uid != null && this.allBadges != undefined ) {
      // this.percent = this.ps.getProgramProgressPercent(this.uid, 'Cold and Flu');

      // this.badges = this.ps.getAwardedBadges(this.uid);
      // this.badges.subscribe(function(list){
      //   this.enableBadge(list);
      // }.bind(this));

      this.ps.getUpdateBadgeList(this.uid).subscribe(function(obj1){
          if (this.updateBadges == null) {
            this.updateBadges = obj1;
            this.updateBadges.forEach(function(badge){
              this.dialogRef = this.openDialog();

              // let dialBadge;
              // this.allBadges.forEach((obj) => { if(obj.name == badge.name) dialBadge = obj; });
              // this.dialogRef.componentInstance.badge = dialBadge;
              this.dialogRef.componentInstance.badge = badge;

              this.dialogRef.afterClosed().subscribe(result => {
                this.ps.awardBadgeToUser(this.uid, { name: badge.name });
              });
            }.bind(this));
          }
      }.bind(this));
    }
  }

}
