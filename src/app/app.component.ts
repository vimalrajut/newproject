import { Component } from '@angular/core';

import { DataService } from './_util/dataServices'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: Boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.isLoggedIn = status);
  }
}
