import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService} from '../user.service';
// import { TourService }  from 'ng2-tour';
import { BadgeAwardService } from '../badge-award.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ BadgeAwardService ],
})
export class HeaderComponent implements OnInit {
  @Input() tabIndex: number;
  // isSigned: boolean;
  // userName: string;
  // photoURL: string;
  auth: any;

  // constructor(private service: UserService, private tourService: TourService) {
  constructor(private us: UserService, private bs: BadgeAwardService) {
    // console.log('constructor');
  
    // this.isSigned = this.service.isSigned();

    // if (service.getCurrentUser() != null) {
    //   this.userName = service.getCurrentUser().auth.displayName;
    //   this.photoURL = service.getCurrentUser().auth.photoURL;
    // }

    // this.auth = this.service.getAuthState();
    this.auth = this.us.getAuth();
    // this.auth.subscribe(function(auth){
    //   if(authState != null) {
    //     this.userName = authState.auth.displayName;
    //     this.photoURL = authState.auth.photoURL;
    //   }

    //   this.isSigned = (auth != null);
    //   // console.log(this.isSigned);
    // }.bind(this));
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  signout(){
    this.us.signout();
  }
}
