import { Component, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-nav',
  imports: [Icon],
  templateUrl: './nav.html',
})
export class Nav {
  readonly links: NavLink[] = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly mobileOpen = signal(false);

  closeMenu(): void {
    this.mobileOpen.set(false);
  }

  toggleMenu(): void {
    this.mobileOpen.update((open) => !open);
  }
}
