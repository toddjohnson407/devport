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
      { title: 'Web Development' },
      { title: 'Mobile Development' },
      { title: 'Database Design' },
    ]
  }

  ngOnInit() {
  }

}
