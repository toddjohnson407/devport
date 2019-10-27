import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /** Array of quick link options with a title and path route */
  quickOpts: Array<{ title: string, path: string }> = [
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Services', path: '/services' },
    { title: 'Learn More', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ]

  /** Array of characters for my name */
  nameChars: Array<any> = 'Todd'.split('');

  nameCharRefs: Array<Object>;

  constructor() {
    // this.nameChars = 'Todd'.split('');
  }

  ngOnInit() {
    // this.nameCharRefs = this.nameChars.map((char, ind) => ({ letter: char, class: 'letter' + ind,  }))
  }

}
