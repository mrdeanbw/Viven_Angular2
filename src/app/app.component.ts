import { Component } from '@angular/core';
import { TourService } from 'ng2-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  constructor(private tourService: TourService){
    this.tourService.initialize([{
      anchorId: 'welcome',
      route: '/home',
      content: 'Welcome to Viven Health’s Cold and Flu program.  This short walkthrough will help you navigate your program.',
      title: 'First',
    },{
      anchorId: 'login',
      content: 'Some content1',
      title: 'Second',
    }]);

    this.tourService.start()   
  }
}