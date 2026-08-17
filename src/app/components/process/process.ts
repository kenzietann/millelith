import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';

interface Step {
  icon: IconName;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  imports: [Icon, Reveal],
  templateUrl: './process.html',
})
export class Process {
  readonly steps: Step[] = [
    {
      icon: 'search',
      title: 'Discover',
      description:
        'We start with your systems and constraints, not a generic template — scoping what actually matters before writing a line of code.',
    },
    {
      icon: 'code',
      title: 'Build',
      description:
        'Full-stack development in tight, shippable increments, with you in the loop the entire time.',
    },
    {
      icon: 'lock',
      title: 'Secure',
      description:
        'Every product gets adversarial testing before it ships — the same techniques we use on client engagements.',
    },
    {
      icon: 'send',
      title: 'Ship',
      description:
        'Deployed, monitored, and handed off with documentation your team can actually use.',
    },
  ];
}
