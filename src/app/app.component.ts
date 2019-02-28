import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-owl-carousel-es6';
  items = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];
  itemsB = [
    { url: 'https://via.placeholder.com/150', title: 'Slide 1' },
    { url: 'https://via.placeholder.com/150', title: 'Slide 2' },
    { url: 'https://via.placeholder.com/150', title: 'Slide 3' },
    { url: 'https://via.placeholder.com/150', title: 'Slide 4' },
    { url: 'https://via.placeholder.com/150', title: 'Slide 5' }
  ];
}
