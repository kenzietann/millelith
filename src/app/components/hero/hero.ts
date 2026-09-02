import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { hexDump } from '../../shared/hexdump';

type LineKind = 'cmd' | 'sys' | 'ok' | 'info' | 'warn' | 'crit' | 'done';

interface BootLine {
  kind: LineKind;
  text: string;
}

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
})
export class Hero {
  readonly phrases = ['We secure.', 'We build.', 'We ship.'];
  readonly activeIndex = signal(0);
  readonly jsEnabled = signal(false);

  readonly hex = hexDump(28, 0x1f40);

  readonly boot: BootLine[] = [
    { kind: 'cmd', text: 'millelith engage --target ./your-infrastructure' },
    { kind: 'sys', text: 'loading modules .......... recon web net cloud physical' },
    { kind: 'ok', text: 'rules of engagement signed' },
    { kind: 'ok', text: 'written authorization on file' },
    { kind: 'sys', text: 'enumerating attack surface' },
    { kind: 'info', text: '1,204 endpoints · 37 hosts · 3 entry doors' },
    { kind: 'warn', text: 'weak session handling on /admin' },
    { kind: 'crit', text: 'auth bypass — severity 9.1' },
    { kind: 'crit', text: 'badge cloning viable at east entrance' },
    { kind: 'done', text: '6 findings · report ready · retest scheduled' },
  ];

  /** Number of boot lines currently revealed. */
  readonly visible = signal(this.boot.length);
  /** Characters of the command line typed so far. */
  readonly typed = signal(this.boot[0].text.length);
  readonly finished = signal(true);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      this.jsEnabled.set(true);

      const phraseId = window.setInterval(() => {
        this.activeIndex.update((i) => (i + 1) % this.phrases.length);
      }, 2200);
      this.destroyRef.onDestroy(() => window.clearInterval(phraseId));

      this.runBoot();
    });
  }

  tag(kind: LineKind): string {
    switch (kind) {
      case 'ok':
        return '[  ok  ]';
      case 'info':
        return '[ info ]';
      case 'warn':
        return '[ warn ]';
      case 'crit':
        return '[ crit ]';
      case 'done':
        return '[ done ]';
      default:
        return '[ .... ]';
    }
  }

  private runBoot(): void {
    const cmd = this.boot[0].text;
    let timer = 0;
    const schedule = (fn: () => void, ms: number) => {
      timer = window.setTimeout(fn, ms);
    };
    this.destroyRef.onDestroy(() => window.clearTimeout(timer));

    const start = () => {
      this.finished.set(false);
      this.visible.set(1);
      this.typed.set(0);
      typeNext();
    };

    const typeNext = () => {
      if (this.typed() < cmd.length) {
        this.typed.update((n) => n + 1);
        schedule(typeNext, 28 + Math.random() * 40);
      } else {
        schedule(revealNext, 400);
      }
    };

    const revealNext = () => {
      if (this.visible() < this.boot.length) {
        this.visible.update((n) => n + 1);
        const kind = this.boot[this.visible() - 1].kind;
        schedule(revealNext, kind === 'sys' ? 700 : 320);
      } else {
        this.finished.set(true);
        schedule(start, 9000);
      }
    };

    start();
  }
}
