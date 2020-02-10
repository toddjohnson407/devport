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

    this.pageListen();
  }


  /** Listens to each page element to determine when it's active */
  pageListen(): void {
    let fromTop = window.scrollY;
    console.log('scrollY:', fromTop)
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {

      let prevActive = this.navOpts.findIndex(({isActive}, index) => isActive && index !== 3);
      if (prevActive !== -1) this.navOpts[prevActive].isActive = false;

      this.navOpts[3].isActive = true;

    } else if (fromTop > this.navOpts[0].element.offsetTop) {
      this.navOpts.forEach(({element: sect, title}, index) => {
        if (
          sect.offsetTop <= fromTop + 30 &&
          sect.offsetTop + sect.offsetHeight > fromTop + 30
          ) {
          console.log(title, sect.offsetHeight, sect.offsetTop);
          this.navOpts[index]['isActive'] = true;
        }
        else this.navOpts[index]['isActive'] = false;
      })
    }
  }

  toggleMenu = (): any => this.menuClicked = !this.menuClicked;

}
