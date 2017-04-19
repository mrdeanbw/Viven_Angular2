import { Component, OnInit } from '@angular/core';
import { SupportService} from '../support.service';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  providers:[SupportService]
})
export class SupportComponent implements CanActivate, OnInit {
  items: Object;

  constructor(private service: SupportService) {
    this.items = service.getFAQItems();
  }

  ngOnInit() {
  }

  canActivate(){
    return false;
  }

}
