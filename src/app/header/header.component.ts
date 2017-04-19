import { Component, OnInit, Input } from '@angular/core';
import { UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() tabIndex: number;
  user: any;

  constructor(private us: UserService) {
    this.user = this.us.getUser();
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  signout(){
    this.us.signout();
  }
}
