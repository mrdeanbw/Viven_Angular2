import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-badge-item',
  templateUrl: './badge-item.component.html',
  styleUrls: ['./badge-item.component.css']
})
export class BadgeItemComponent implements OnInit, AfterViewInit {
  @Input('badge') badge;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('div[data-html]').popup();
  }

}
