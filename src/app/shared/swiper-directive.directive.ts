import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { SwiperOptions } from "swiper";

@Directive({
  selector: "[appFmSwiper]",
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement;

  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);
    (this.el.nativeElement as any).initialize();
  }
}
