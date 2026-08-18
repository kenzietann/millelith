import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

interface Finding {
  category: string;
  target: string;
  stat: string;
  statLabel: string;
  description: string;
  channel: string;
  status: string;
}

@Component({
  selector: 'app-findings',
  imports: [Reveal],
  templateUrl: './findings.html',
})
export class Findings {
  readonly findings: Finding[] = [
    {
      category: 'Web application — high',
      target: 'Polygon Technology',
      stat: 'CVSS 7.5',
      statLabel: 'Severity score',
      description:
        "An authorized assessment conducted through a private bug bounty program. A single high-severity issue was identified, validated, and disclosed to the vendor through their coordinated channel. Details remain confidential under the program's disclosure terms.",
      channel: 'HackerOne — private program',
      status: 'Reported & acknowledged',
    },
    {
      category: 'WordPress platform — multiple',
      target: 'harfit.co.id',
      stat: '6',
      statLabel: 'Reported findings',
      description:
        'A permissioned review of a production WordPress deployment covering configuration, exposed surface, and platform hygiene. Six issues were documented with severity ratings and remediation guidance, then handed to the site owner privately. No technical specifics are published.',
      channel: 'Direct engagement — written authorization',
      status: 'Reported to owner',
    },
  ];
}
