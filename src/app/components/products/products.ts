import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';

interface Product {
  name: string;
  description: string;
  badges: string[];
  url: string;
}

@Component({
  selector: 'app-products',
  imports: [Icon, Reveal],
  templateUrl: './products.html',
})
export class Products {
  readonly items: Product[] = [
    {
      name: 'Matchingg',
      description:
        'AI-assisted CV and job matching for hiring teams that are tired of keyword search.',
      badges: ['Angular', 'Fastify', 'TypeScript', 'PostgreSQL', 'Claude API', 'DigitalOcean'],
      url: 'https://matchingg.com',
    },
    {
      name: 'Pentrate',
      description:
        'Automates the repetitive parts of penetration testing so security teams can focus on the findings that matter.',
      badges: ['React', 'Python', 'Go'],
      url: 'https://pentrate.net',
    },
  ];
}
