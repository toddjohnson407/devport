import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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

  @Input() home: ElementRef;
  @Input() portfolio: ElementRef;
  @Input() contact: ElementRef;
  @Input() services: ElementRef;

  /** Array of navbar options with a title and path route */
  navOpts: Array<{ title: string, isActive: boolean, element: any, path: string, isHov: Observable<boolean> }>;

  constructor() { }

  ngOnInit() {
    this.navOpts = [
      { title: 'Home', isActive: true, element: this.home, path: '/', isHov: of(false) },
      { title: 'Services', isActive: false, element: this.services, path: '/services', isHov: of(false) },
      { title: 'Portfolio', isActive: false, element: this.portfolio, path: '/portfolio', isHov: of(false) },
      // { title: 'About Me', isActive: false, element: null, path: '/about', isHov: of(false) },
      { title: 'Contact', isActive: false, element: this.contact, path: '/contact', isHov: of(false) }
    ]
  }

    
  /** Scrolls to the given section of the website */
  navScroll(navOpt: any) {

    let { element } = navOpt;

    let prevActive = this.navOpts.findIndex(({isActive}) => isActive);
    if (prevActive !== -1) this.navOpts[prevActive].isActive = false;

    navOpt.isActive = true;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
