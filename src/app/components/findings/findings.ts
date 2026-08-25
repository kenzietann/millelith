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
        "Security research conducted under an authorized private bug bounty program. A high-severity issue was identified, validated, and responsibly disclosed through the program’s designated channel. Technical details remain confidential under the program’s disclosure terms.",
      channel: 'HackerOne — private program',
      status: 'Submitted to HackerOne',
    }
  ];
}
