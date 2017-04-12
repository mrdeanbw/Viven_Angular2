import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
// import { Subject } from 'rxjs';
import { Observable} from 'rxjs';
// import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private isSignupProcess: boolean = false;
  private model: any;
  // private authState: Subject<any> = new Subject();
  private getUserURL = '/api/getVar';
  private headers = new Headers({'Content-Type': 'application/json'});
  private signed: boolean = false;
  // private currentAuth: any = null;

  // getAuthState(){
  //   return this.authState;
  // }

  getAuth(){
    return this.af.auth;
  }

  constructor(private af: AngularFire, private http: Http, private router: Router) {
    this.af.auth.subscribe(auth => {
      console.log(auth);

      if (this.isSignupProcess) {
        this.model.firstname == undefined && (this.model.firstname = '');
        this.model.lastname == undefined && (this.model.lastname = '');

        auth.auth.updateProfile(
          {
            displayName: ((this.model.firstname as String).trim() + ' ' + (<String>this.model.lastname).trim()).trim(),
            photoURL: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
          }
        ).then(function(){
          this.isSignupProcess = false;
          // this.authState.next(auth);
          // this.currentAuth = auth;
        }.bind(this));
      } else {
        // this.authState.next(auth);
        // this.currentAuth = auth;
      }

    });

     this.af.auth.subscribe(auth => {
      // console.log(auth);
      if (auth != null) {
        this.getUser(auth.auth.email).subscribe(function(user){
          if(user == null) {
            this.createUser({
              id: auth.uid,
              email: auth.auth.email,
              name: auth.auth.displayName,
              picture: auth.auth.photoURL,
            }).then(function(){
              this.router.navigateByUrl('/home');
            }.bind(this));
          } else {
            if (router.url=="/login" || router.url=="/" || router.url=="/signup") {
              this.router.navigateByUrl('/home');
            }
          }
        }.bind(this));
        this.signed = true;
      } else {
        this.router.navigateByUrl('/');
        this.signed = false;
      }
    });
  
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

  getUser(email: String) {
    let users: any;
    users = this.af.database.list('/users');

    return users.map(function(userList){
      let foundUser = null;

      userList.forEach(function(value, index){
        if (value.email == email) {
          foundUser = value;
        }
      });

      return foundUser;
    });
  }

  handleError(){
    console.log('http error!');
  }

  createUser(user: any)
  {
        let initialProgress:any = {};
        initialProgress.next_action = {
            case: "-JkEYXe6hIrueGO5F25Y",
            program: "Cold and Flu"
        };
        initialProgress.programs = {};
        initialProgress.programs["Cold and Flu"] = {};
        initialProgress.programs["Cold and Flu"].casesCompleted = ["null"];
        initialProgress.programs["Cold and Flu"].isComplete = false;

        user.progress = initialProgress
        user.company = "default";

        return this.af.database.object('/users/' + user.id).set(user);
  }

  signout() {
    this.router.navigateByUrl('/');
		return this.af.auth.logout();
	}

  isSigned() {
    // return this.currentAuth != null;
    return this.signed;
  }

  getEncryptedUid(uid) {
  //: Promise<any> {
    console.log('http requesting...');

    let user = {id: uid};

    return this.http
      .post(this.getUserURL, JSON.stringify(user), {headers: this.headers})
      .map(function(res){
        return res.json().id;
      });
      // .toPromise()
      // .then(res => res.json())
      // .catch(this.handleError);
  }

  // getCurrentUser(){
  //   return this.currentAuth;
  // }
}
