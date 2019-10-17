import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /** Array of navbar options with a title and path route */
  navOpts: Array<any> = [
    { title: 'Services', path: 'services' },
    { title: 'Portfolio', path: 'portfolio' },
    { title: 'About Me', path: 'about' },
    { title: 'Contact', path: 'contact' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
