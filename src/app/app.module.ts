import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2'; 
// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { OnsenModule, CUSTOM_ELEMENTS_SCHEMA } from 'angular2-onsenui';
import { TourNgBootstrapModule, TourService } from 'ng2-tour';
import { HotkeyModule } from 'angular2-hotkeys';
import 'scroll-into-view-if-needed';

import 'hammerjs';
// import '../assets/js/impress.js';
import { firebaseConfig } from './../environments/firebase.config';

import { UserService } from './user.service';
import { ProfileService } from './profile.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramsComponent } from './programs/programs.component';
import { SupportComponent } from './support/support.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { CasesComponent } from './cases/cases.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BadgeComponent } from './badge/badge.component';
import { BadgeAwardDirective } from './badge-award.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LandingComponent,
    HomeComponent,
    FooterComponent,
    ProgramsComponent,
    SupportComponent,
    FaqItemComponent,
    CasesComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    BadgeComponent,
    BadgeAwardDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([]),
    // ScrollViewModule,
    RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent,
    },{
      path: 'support',
      component: SupportComponent,
    },
    {
      path: 'cases',
      component: CasesComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: '',
      component: LandingComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'content',
      component: ContentComponent,
    },
    {
      path: 'signup',
      component: SignupComponent,
    }
    ]),
    ModalModule.forRoot(),
    OnsenModule,
    TourNgBootstrapModule,
    HotkeyModule.forRoot(),
  ],
  providers: [UserService, ProfileService, TourService],
  bootstrap: [AppComponent],
  entryComponents: [BadgeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
