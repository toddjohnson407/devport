import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  /** Array of services */
  services: any[];

  constructor() {
    this.services = [
      { title: 'Web Development', image: 'assets/images/webdesign.png' },
      { title: 'Mobile Development', image: 'assets/images/mobiledesign.png' },
      { title: 'Database Design', image: 'assets/images/databasedesign.png' },
    ]
  }

  ngOnInit() {
  }

}
