import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';

interface ServiceItem {
  icon: IconName;
  file: string;
  title: string;
  description: string;
  capabilities: string[];
  /** The one card whose CTA gets the red treatment. */
  primary?: boolean;
}

@Component({
  selector: 'app-services',
  imports: [Icon, Reveal],
  templateUrl: './services.html',
})
export class Services {
  readonly items: ServiceItem[] = [
    {
      icon: 'shield-check',
      file: 'pentest.sh',
      title: 'Penetration Testing',
      description:
        'Offensive security testing that mirrors real-world attackers — web apps, APIs, networks, and cloud environments.',
      capabilities: [
        'Web & API penetration testing',
        'Network & cloud infrastructure audits',
        'Remediation support, not just a PDF',
      ],
      primary: true,
    },
    {
      icon: 'lock',
      file: 'physical.sh',
      title: 'Physical Penetration Testing',
      description:
        'On-site assessments that test whether your physical security controls hold up against a real intrusion attempt.',
      capabilities: [
        'Facility & access control testing',
        'Social engineering & tailgating assessments',
        'Badge, lock & surveillance system review',
      ],
    },
    {
      icon: 'code',
      file: 'it-services.sh',
      title: 'IT Services',
      description:
        'Whatever your team needs on the IT side, we cover it end to end — from custom software to the devices on your network.',
      capabilities: [
        'Software, web & mobile development',
        'Infrastructure, cloud & IT support',
        'IoT & connected device deployment',
      ],
    },
  ];
}
