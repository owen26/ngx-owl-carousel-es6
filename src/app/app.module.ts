import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwlCarouselModule } from 'owl-carousel-es6';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OwlCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
