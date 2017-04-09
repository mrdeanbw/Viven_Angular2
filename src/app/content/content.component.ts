import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  baseUrl = 'https://simulator-58888.firebaseapp.com/index.html';
  query: any;
  token: any;
  caseUrl: SafeResourceUrl;

  constructor(private ar : ActivatedRoute, private sanitizer: DomSanitizer, private location: Location) { }

  ngOnInit() {
    this.ar
      .queryParams
      .forEach(params => {
        let dangerousUrl = `${this.baseUrl}?p=${params['p']}&c=${params['c']}&q=${params['q']}`;
        this.caseUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
      });

    // Capture the fragment if available
    this.token = this.ar
      .fragment
      .map(fragment => fragment || 'None');
  }
}
