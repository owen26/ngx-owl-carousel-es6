import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwlCarouselModule } from 'owl-carousel-es6';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, SafePipe],
  imports: [BrowserModule, OwlCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
