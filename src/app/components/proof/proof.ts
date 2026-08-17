import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-proof',
  imports: [Reveal],
  templateUrl: './proof.html',
})
export class Proof {
  readonly stats: Stat[] = [
    { value: '12+ yrs', label: 'Combined engineering experience' },
    { value: '30+', label: 'Engagements shipped' },
    { value: '3', label: 'SaaS products in production' },
    { value: 'Osaka', label: 'Based, remote-friendly' },
  ];
}
