import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  arr = [1,1,2,3,5,8,12]

  objs = [
    {title: 'Post1', author: 'max', comments : [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post2', author: 'max 2', comments : [
        {name: 'Max2', text: 'lorem 1'},
        {name: 'Max2', text: 'lorem 2'},
        {name: 'Max2', text: 'lorem 3'},
      ]},
  ]
}
