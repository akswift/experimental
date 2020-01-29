import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {pist} from "../app.component";

@Component({
  selector: 'app-pist-form',
  templateUrl: './pist-form.component.html',
  styleUrls: ['./pist-form.component.css']
})
export class PistFormComponent {

  title = ''
  text = ''

  @Output() onAdd: EventEmitter<pist> = new EventEmitter<pist>()

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef

  addPost() {
    if (this.text.trim() && this.text.trim()) {
      const post: pist = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)
      console.log('New Post', post)

      this.title = this.text = ''
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus()
  }

}
