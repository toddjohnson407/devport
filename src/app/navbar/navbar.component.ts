import { Component, OnInit } from '@angular/core';
import { optHov } from '../animations';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [ optHov ]
})
export class NavbarComponent implements OnInit {

  menuClicked: boolean = false;

  /** Array of navbar options with a title and path route */
  navOpts: Array<{ title: string, path: string, isHov: Observable<boolean> }> = [
    { title: 'Portfolio', path: '/portfolio', isHov: of(false) },
    { title: 'Services', path: '/services', isHov: of(false) },
    { title: 'About Me', path: '/about', isHov: of(false) },
    { title: 'Contact', path: '/contact', isHov: of(false) }
  ]

  constructor() { }

  ngOnInit() {
  }

  /** Nav opt on hover event listener */
  triggerHover(opt: any): void {
    // console.log(opt);
    // if (!this.navOpts.find(({ isHov }) => isHov === true)) {
      // this.navOpts.find(o => o.title === opt.title).isHov = true;
    // }
  }

  /** Nav opt off hover event listener */
  offHover(): void {
    // opt.isHov = false;
    // console.log(this.navOpts);
  }

  toggleMenu = (): any => this.menuClicked = !this.menuClicked;

}
