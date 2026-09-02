import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { hexDump } from '../../shared/hexdump';

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
  readonly hex = hexDump(10, 0x0);

  readonly links: NavLink[] = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];
}
