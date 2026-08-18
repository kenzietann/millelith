import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';

interface Step {
  icon: IconName;
  title: string;
  description: string;
}

interface Track {
  label: string;
  steps: Step[];
}

@Component({
  selector: 'app-process',
  imports: [Icon, Reveal],
  templateUrl: './process.html',
})
export class Process {
  readonly tracks: Track[] = [
    {
      label: 'Penetration Testing',
      steps: [
        {
          icon: 'search',
          title: 'Scope',
          description:
            'We define target systems and rules of engagement, and get written authorization before any testing begins.',
        },
        {
          icon: 'shield-check',
          title: 'Test',
          description:
            'Manual, attacker-mindset testing — not an automated scan with your logo on the cover page.',
        },
        {
          icon: 'file-text',
          title: 'Report',
          description:
            'Findings delivered with severity ratings, evidence, and remediation guidance your team can act on.',
        },
        {
          icon: 'check',
          title: 'Retest',
          description:
            'A follow-up pass to confirm every reported issue is actually closed, not just marked resolved.',
        },
      ],
    },
    {
      label: 'Software Development',
      steps: [
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
      ],
    },
  ];
}
