import { Directive, ElementRef, inject, input, afterNextRender, DestroyRef } from '@angular/core';

/**
 * Scroll-reveal: fade + slight rise as the element enters the viewport, with an
 * optional stagger delay. Uses IntersectionObserver + a CSS transition — no
 * animation library, no per-frame ticker, and no layout reads (avoids forced
 * reflow). Reverses when scrolled back out of view, matching the previous feel.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[style.transition-delay.s]': 'appRevealDelay()',
  },
})
export class Reveal {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  readonly appRevealDelay = input(0);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      node.classList.add('reveal-init');

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            entry.target.classList.toggle('reveal-in', entry.isIntersecting);
          }
        },
        // Fire once the element is ~12% into view from the bottom (was ScrollTrigger's `top 88%`).
        { rootMargin: '0px 0px -12% 0px' },
      );

      io.observe(node);
      this.destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
