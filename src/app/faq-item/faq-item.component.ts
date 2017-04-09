import { Component, OnInit, Input } from '@angular/core';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  @Input() q: string;
  @Input() a: string;


  expanded = false;
  id = '';

  constructor() {
    this.id= guid();
  }

  ngOnInit() {
  }

  qClick() {
    this.expanded = !this.expanded;
  }

}
