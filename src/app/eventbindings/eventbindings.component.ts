import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindings',
  templateUrl: './eventbindings.component.html',
  styleUrls: ['./eventbindings.component.css']
})
export class EventbindingsComponent {

  inputValue = '';

  onInput(event: KeyboardEvent) {
    console.log("Event", event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log("Click!");
  }
}
