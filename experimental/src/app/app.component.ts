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
  obj = {a:1,b:2,c:3}
  // tslint:disable-next-line:max-line-length
  imag = 'https://shwanoff.ru/wp-content/uploads/2018/03/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff-e1521450807573.png';

  inputValue = '';
  // Тут обычняа функция не работает....
  constructor() {
    setTimeout(
      () => {
        console.log("Timeout is over");
        this.imag = 'https://cdn.tproger.ru/wp-content/uploads/2018/07/angularMaterial-770x270.jpg';
      }, 5000)
  }

  onInput(event: KeyboardEvent) {
    console.log("Event", event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log("Click!");
  }


}
