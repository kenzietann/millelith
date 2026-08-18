import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly links: NavLink[] = [
    { label: 'Services', href: '#services' },
    { label: 'Findings', href: '#findings' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];
}
