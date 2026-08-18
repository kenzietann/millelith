import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
})
export class Hero {
  readonly phrases = ['We secure.', 'We build.', 'We ship.'];
  readonly activeIndex = signal(0);
  readonly jsEnabled = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      this.jsEnabled.set(true);
      const id = window.setInterval(() => {
        this.activeIndex.update((i) => (i + 1) % this.phrases.length);
      }, 2200);
      this.destroyRef.onDestroy(() => window.clearInterval(id));
    });
  }
}
