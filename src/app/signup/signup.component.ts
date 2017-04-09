import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [],
})
export class SignupComponent implements OnInit {
  private model: any = {};
  private error: any;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  signup() {
    this.service.emailSignup(this.model)
    .then(function(){this.error = null;}.bind(this))
    .catch(function(err){
      this.error = err;
    }.bind(this));
  }
}
