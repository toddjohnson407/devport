import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})

export class AppComponent {

  title = 'devport';

  // constructor (
  //   private route: ActivatedRoute
  // ) { }

  // ngOnInit() {
  //   this.route.params.subscribe((param: ParamMap) => console.log('App route param:', param))
  //   this.route.paramMap.subscribe((param: ParamMap) => console.log('App route param:', param))
  // }
}
