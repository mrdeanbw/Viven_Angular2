import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [],
})
export class HeaderComponent implements OnInit {
  @Input() tabIndex: number;
  isLoggedin: boolean;
  userName: string;
  photoURL: string;
  auth: any;

  constructor(private service: UserService) {
    // console.log('constructor');
    this.isLoggedin = this.service.isLoggedin();

    if (service.getCurrentUser() != null) {
      this.userName = service.getCurrentUser().auth.displayName;
      this.photoURL = service.getCurrentUser().auth.photoURL;
    }

    this.auth = this.service.getAuthState();
    this.auth.subscribe(function(authState){
      if(authState != null) {
        this.userName = authState.auth.displayName;
        this.photoURL = authState.auth.photoURL;
      }

      if(authState == null){
        this.isLoggedin = false;
      } else {
        this.isLoggedin = true;
      }
      // console.log(this.isLoggedin);
    }.bind(this));
  }

  ngOnInit() {
  }

  signout(){
    this.service.signout();
  }
}
