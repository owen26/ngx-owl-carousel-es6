import { Component } from '@angular/core';
import { random } from 'lodash';

const placeholder = 'https://via.placeholder.com/150';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-owl-carousel-es6';
  items = [placeholder, placeholder, placeholder, placeholder, placeholder];
  itemsB = [
    { url: placeholder, title: 'Slide 1' },
    { url: placeholder, title: 'Slide 2' },
    { url: placeholder, title: 'Slide 3' },
    { url: placeholder, title: 'Slide 4' },
    { url: placeholder, title: 'Slide 5' }
  ];
  options: any;

  randomizeItems() {
    const count = random(3, 10);
    this.items = new Array(count).fill(placeholder);
  }

  randomizeItemsSize() {
    this.options = {
      loop: true,
      items: random(1, 3),
      autoplay: true
    };
  }
}
