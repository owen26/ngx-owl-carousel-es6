/**
 * Owl Carousel configuration options
 * For details please check: https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
 */
export interface OwlCarouselOptions {
  items: number;
  margin: number;
  loop: boolean;
  center: boolean;
  mouseDrag: boolean;
  touchDrag: boolean;
  pullDrag: boolean;
  freeDrag: boolean;
  stagePadding: number;
  merge: boolean;
  mergeFit: boolean;
  autoWidth: boolean;
  startPosition: number | string;
  URLhashListener: boolean;
  nav: boolean;
  rewind: boolean;
  navText: string[];
  navElement: string;
  slideBy: number | string;
  slideTransition: string;
  dots: boolean;
  dotsEach: number | boolean;
  dotsData: boolean;
  lazyLoad: boolean;
  lazyLoadEager: number;
  autoplay: boolean;
  autoplayTimeout: number;
  autoplayHoverPause: boolean;
  smartSpeed: number;
  fluidSpeed: number;
  autoplaySpeed: number | boolean;
  navSpeed: number | boolean;
  dotsSpeed: number | boolean;
  dotsEndSpeed: number | boolean;
  callbacks: boolean;
  responsive: any;
  responsiveRefreshRate: number;
  responsiveBaseElement: HTMLElement;
  video: boolean;
  videoHeight: number | boolean;
  videoWidth: number | boolean;
  animateOut: string | boolean;
  animateIn: string | boolean;
  fallbackEasing: string;
  info: any;
  nestedItemSelector: any;
  itemElement: string;
  stageElement: string;
  navContainer: any;
  checkVisible: boolean;
}
