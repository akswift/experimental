import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent{
  title = 'experimental-title';
  number = 44;
  arr = [1,2,3];
  obj = {
    a:1,b:2,c:3
  }
}
