# Owl Carousel for Angular

I have been using Owl Carousel for several years since jQuery was still the "go to" option for frontend development. Even though it's not the case anymore but I still can't find any "modern" carousel library doing the job better than Owl Carousel.

The motivation for creating this Angular wrapper is to let the good old Owl Carousel shine again in Angular world.

There are already a few excellent Angular wrappers exists on npm but this one is going to focus on the following goals:

- Simplicity - get started in no time
- Flexibility - customisable options and templates, in Angular way
- Cleanness - no extra js/css configuration needed, no modification to _angular.json_

## Install it

```
npm install jquery @xinan/ngx-owl-carousel
```

## Import it

```javascript
import { OwlCarouselModule } from '@xinan/ngx-owl-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OwlCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Use it

```html
<owl-carousel [items]="items" [options]="options"></owl-carousel>
```

TODO: add more usage examples
