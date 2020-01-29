import {Component, Input, OnInit} from '@angular/core';
import {pist} from "../app.component";



@Component({
  selector: 'app-pist',
  templateUrl: './pist.component.html',
  styleUrls: ['./pist.component.css']
})


export class PistComponent {
  @Input() post: pist
}