import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import * as jQuery from 'jquery';
import 'owl.carousel.es6';

@Component({
  selector: 'owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OwlCarouselComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const $ele = jQuery(this.el.nativeElement).find('.owl-carousel') as any;

    $ele.owlCarousel({
      loop: true,
      items: 1,
      autoplay: true
    });
  }
}
