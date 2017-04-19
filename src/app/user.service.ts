import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private isSignupProcess: boolean = false;
  private model: any;
  private getUserURL = '/api/getVar';
  private headers = new Headers({'Content-Type': 'application/json'});
  private signed: boolean = false;
  private firstSigned: boolean = false;
  private user: any = null;

  isFirstSigned(){
    return this.firstSigned;
  }

  getUser(){
    return this.user;
  }

  constructor(private af: AngularFire, private http: Http, private router: Router) {

    this.user = this.af.auth.switchMap(auth => {

      if(auth != null) {
        this.signed = true;
        if (this.isSignupProcess) {
          this.model.firstname == undefined && (this.model.firstname = '');
          this.model.lastname == undefined && (this.model.lastname = '');

          return Observable.fromPromise(<Promise<any>>auth.auth.updateProfile(
            {
              displayName: ((this.model.firstname as String).trim() + ' ' + (<String>this.model.lastname).trim()).trim(),
              photoURL: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
            }
          )).switchMap(() => {
            this.isSignupProcess = false;
            this.firstSigned = true;
            return this.getUserInDB(auth);
          });

        } else {
          this.firstSigned = false;
          return this.getUserInDB(auth);
        }
      } else {
        this.signed = false;
        return Observable.create((observer : Observer<any>) => { observer.next(null); observer.complete()});
      }
    });

    this.user.subscribe((user) => console.log(user));
  }

  getUserInDB(auth: any) {
    return this.findUserInDB(auth.auth.email).switchMap((user) => {
      if (user == null) {
        this.router.navigateByUrl('/home');

        return this.createUserInDB({
          id: auth.uid,
          email: auth.auth.email,
          name: auth.auth.displayName,
          picture: auth.auth.photoURL,
        });
        
      } else {
        if (this.router.url=="/login" || this.router.url=="/" || this.router.url=="/signup") {
          this.router.navigateByUrl('/home');
        }

        return Observable.create((observer) => { observer.next(user); observer.complete()});
      }
    });
  }

  findUserInDB(email: String) {
    let users: any;
    users = this.af.database.list('/users');

    return users.map(function(userList){
      let foundUser = null;

      userList.forEach(function(value, index){
        if (value.email == email) {
          foundUser = value;
        }
      });

      if (foundUser == null) return null;

      return {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              picture: foundUser.picture,
            };
    });
  }

  createUserInDB(user : any) {
    let initialProgress : any = {};
    let _user = user;

    initialProgress.next_action = {
        case: "-JkEYXe6hIrueGO5F25Y",
        program: "Cold and Flu"
    };
    initialProgress.programs = {};
    initialProgress.programs["Cold and Flu"] = {};
    initialProgress.programs["Cold and Flu"].casesCompleted = ["null"];
    initialProgress.programs["Cold and Flu"].isComplete = false;

    user.progress = initialProgress;
    user.company = "default";

    return Observable.fromPromise(<Promise<any>>(this.af.database.object('/users/' + user.id).set(user))).map(() => _user);
  }

  emailLogin(model: any) {
    this.isSignupProcess = false;
    this.model = model;

    return this.af.auth.login(
      {
        email: model.email, 
        password: model.password,
      },{
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
    );
  }

  gplusLogin() {
    this.isSignupProcess = false;

    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }

  facebookLogin() {
    this.isSignupProcess = false;

    return this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }

  emailSignup(model: any) {
    this.isSignupProcess = true;
    this.model = model;

    return this.af.auth.createUser(
    {
      email: model.email, 
      password: model.password,
    });
  }

  signout() {
    this.router.navigateByUrl('/');
		return this.af.auth.logout();
	}

  isSigned() {
    return this.signed;
  }

  getEncryptedUid(uid) {

    let user = {id: uid};

    return this.http
      .post(this.getUserURL, JSON.stringify(user), {headers: this.headers})
      .map(function(res){
        return res.json().id;
      });
  }
}
