import { NgModule } from '@angular/core';
import { OwlCarouselComponent } from './owl-carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OwlCarouselComponent],
  imports: [CommonModule],
  exports: [OwlCarouselComponent]
})
export class OwlCarouselModule {}
