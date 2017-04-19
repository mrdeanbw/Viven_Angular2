import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
export class LoginComponent implements OnInit {
  private model: any = {};
  error: any;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  login() {
    this.service.emailLogin(this.model)
    .then(function(){this.error = null}.bind(this))
    .catch(function(err){this.error = err}.bind(this));
  }

  gplusLogin() {
    this.service.gplusLogin()
    .then(function(){this.error = null}.bind(this))
    .catch(function(err){this.error = err}.bind(this));
  }

  facebookLogin() {
    this.service.facebookLogin()
    .then(function(){this.error = null}.bind(this))
    .catch(function(err){this.error = err}.bind(this));
  }
}
