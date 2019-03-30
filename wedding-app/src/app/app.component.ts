import { Component, OnInit, Input } from '@angular/core';
import { WeddingOverviewService } from './data-access/wedding-overview/wedding-overview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentRoute:string;
  constructor(private router: Router) {}
  ngOnInit(): void {


  }

  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Album view',
      eventLabel: 'Rose Album View ',
      eventAction: 'Opening',
      eventValue: 7
    });
  }
  sendPhotoClickEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Photo view',
      eventLabel: 'Rose Photo',
      eventAction: 'Fliped book',
      eventValue: 8
    });
  }


}
