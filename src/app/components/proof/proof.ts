import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

interface Stat {
  value: string;
  label: string;
  key: string;
  /** Rendered in red — severity-style emphasis. Use sparingly. */
  critical?: boolean;
}

@Component({
  selector: 'app-proof',
  imports: [Reveal],
  templateUrl: './proof.html',
})
export class Proof {
  readonly stats: Stat[] = [
    { key: 'exp_years', value: '12+ yrs', label: 'Combined engineering experience' },
    { key: 'engagements', value: '34+', label: 'Engagements shipped' },
    { key: 'vulns_found', value: '109+', label: 'Vulnerabilities found', critical: true },
    { key: 'saas_prod', value: '3', label: 'SaaS products in production' },
    { key: 'base', value: 'Osaka', label: 'Based, remote-friendly' },
  ];

  readonly ticker = [
    'web & api pentest',
    'network & cloud audit',
    'physical intrusion',
    'social engineering',
    'badge · lock · cctv review',
    'remediation support',
    'retest included',
    'software · infra · iot',
    'osaka → remote',
  ];
}
