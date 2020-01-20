import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  imag = 'https://shwanoff.ru/wp-content/uploads/2018/03/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff-e1521450807573.png';
  // Тут обычняа функция не работает....
  constructor() {
    setTimeout(
        () => {
          console.log("Timeout is over");
          this.imag = 'https://cdn.tproger.ru/wp-content/uploads/2018/07/angularMaterial-770x270.jpg';
        }, 5000)
  }
}
