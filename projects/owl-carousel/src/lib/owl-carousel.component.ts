import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import * as jQuery from 'jquery';
import 'owl.carousel.es6';
import { OwlCarouselOptions, DefaultOwlCarouselOptions } from './models';

@Component({
  selector: 'owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OwlCarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() options: OwlCarouselOptions;
  @Input() items: any[];
  @Input() template: TemplateRef<any>;

  private $ele: any;
  private $carousel: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const itemsAreStrings =
      this.items && this.items.every(i => typeof i === 'string');
    if (!itemsAreStrings && !this.template) {
      throw new Error('Carousel template not defined');
    }
  }

  ngAfterViewInit() {
    this.$ele = jQuery(this.el.nativeElement).find('.owl-carousel') as any;
    this.reinit();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes', changes);
    if (
      (changes.options && !changes.options.firstChange) ||
      (changes.items && !changes.items.firstChange)
    ) {
      this.reinit();
    }
  }

  private reinit() {
    if (!this.$ele) {
      return;
    }

    if (this.$carousel) {
      this.$carousel.trigger('destroy.owl.carousel');
    }

    setTimeout(() => {
      const options = Object.assign(
        {},
        DefaultOwlCarouselOptions,
        this.options
      );
      this.$carousel = this.$ele.owlCarousel(options);
    });
  }
}
