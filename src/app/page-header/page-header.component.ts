import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationStart } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  /** Stores the current header text to be displayed */
  currentHeader: string;
  /** Holds all the possible header texts */
  headers: any[];
  /** Boolean to determine whether the header should be displayed */
  showHeader: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.showHeader = true;
    this.headers = [
      {
        title: 'My Portfolio',
        url: '/portfolio'
      },
      {
        title: 'Contact',
        url: '/contact'
      },
      {
        title: 'About',
        url: '/about'
      },
      {
        title: 'Services',
        url: '/services'
      }
    ]
  }

  ngOnInit() {
    this.currentHeader = 'Test Header Title';
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.showHeader = event.url === '/' ? false : true;
      if (this.showHeader) this.currentHeader = this.headers.find(({url}) => url === event.url)['title'] || null;
    })
  }

}
