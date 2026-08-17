import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';

interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  capabilities: string[];
}

@Component({
  selector: 'app-services',
  imports: [Icon, Reveal],
  templateUrl: './services.html',
})
export class Services {
  readonly items: ServiceItem[] = [
    {
      icon: 'code',
      title: 'Software Development',
      description:
        'Full-stack web and mobile applications built on modern, boring-on-purpose technology — engineered to be maintained, not just demoed.',
      capabilities: [
        'Web & mobile product engineering',
        'API design and systems architecture',
        'Legacy modernization & migrations',
      ],
    },
    {
      icon: 'shield-check',
      title: 'Security & Penetration Testing',
      description:
        'Offensive security testing that mirrors real-world attackers — web apps, APIs, infrastructure, and cloud environments.',
      capabilities: [
        'Web & API penetration testing',
        'Cloud & infrastructure audits',
        'Remediation support, not just a PDF',
      ],
    },
    {
      icon: 'layers',
      title: 'SaaS Products',
      description:
        'We build and operate our own software products, which means we understand the full lifecycle — not just the handoff.',
      capabilities: [
        'In-house product design & ownership',
        'Production infrastructure & on-call',
        'Applied AI where it earns its place',
      ],
    },
  ];
}
