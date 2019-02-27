import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation,
  Input
} from '@angular/core';
import * as jQuery from 'jquery';
import 'owl.carousel.es6';
import { OwlCarouselOptions } from './models';

@Component({
  selector: 'owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OwlCarouselComponent implements OnInit, AfterViewInit {
  @Input() options: OwlCarouselOptions;

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
