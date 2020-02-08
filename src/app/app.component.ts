import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

}
