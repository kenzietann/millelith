import { Directive, ElementRef, inject, input, afterNextRender } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appReveal]',
})
export class Reveal {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly appRevealDelay = input(0);

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      gsap.from(this.el.nativeElement, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        delay: this.appRevealDelay(),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }
}
