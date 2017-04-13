import { Component } from '@angular/core';
import { TourService } from 'ng2-tour';
// import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  constructor(private ts: TourService/*, private us: UserService*/) {
    // if (us.isFirstSigned()) {
      this.ts.initialize([
        {
          anchorId: 'welcome',
          route: '/home',
          content: 'Welcome to Viven Health’s Cold and Flu program. This short walkthrough will help you navigate your program.',
          title: 'Welcome to Viven Health!',
        },
        {
          anchorId: 'homepage',
          route: '/home',
          content: `Here is your homepage. This is where you will see your progress, and what tasks you still have to complete.`,
          placement: 'below',
          title: 'Home',
        },
        {
          anchorId: 'progress',
          route: '/home',
          content: `You can see how many cases have been completed, and what percentage of the program you have finished.`,
          placement: 'left',
          title: 'Progress',
        },
        {
          anchorId: 'next_case',
          route: '/home',
          content: `Each time you login, the system will show you the next case to be completed.`,
          placement: 'left',
          title: 'Next Case',
        },
        {
          anchorId: 'profile',
          route: '/home',
          content: `Click on “Your Profile”.`,
          placement: 'below',
          title: 'Profile',
        },
        {
          anchorId: 'profile',
          route: '/profile',
          content: `Your Profile is highlighted.
                    On the “Your Profile” page, you will see all of the badges you earned and others you can still earn.
                  `,
          placement: 'below',
          title: 'Profile',
        },
        {
          anchorId: 'programs',
          route: '/profile',
          content: `Click on “Programs”.`,
          placement: 'below',
          title: 'Program',
        },
        {
          anchorId: 'programs',
          route: '/cases',
          content: `Programs link is highlighted.
                    Here is your assigned program.
                    This is where you will experience your cases and learn how to prevent yourself, and others, from getting sick.
                  `,
          placement: 'below',
          title: 'Program',
        },
        {
          anchorId: 'first_case',
          route: '/cases',
          content: `Now let’s try your first case.`,
          placement: 'left',
          title: 'Your first case',
        },
        {
          anchorId: 'first_success',
          route: '/cases',
          content: `Great! You have completed your first case.
                    You can now finish the rest of the program on your schedule.
                    Keep an eye out for emails that bring you new cases, mini games, and fun quests that will help you stay healthy all year!
                    `,
          placement: 'below',
          title: 'Congratulation!',
        }
      ]);

      this.ts.start();
    // }
  }
}