import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'experimental-title';
  number = 44;
  arr = [1,2,3];
  obj = {
    a:1,b:2,c:3
  }
}
