import { Component, signal } from '@angular/core';
import { OrgLogo } from '../../shared/org-logo/org-logo';
import { ORGS, OrgLogoName } from '../../shared/orgs';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-engagements',
  imports: [OrgLogo, Reveal],
  templateUrl: './engagements.html',
})
export class Engagements {
  readonly orgs = ORGS;
  readonly activeTestimonial = signal<OrgLogoName | null>(null);
  private readonly pinnedTestimonial = signal<OrgLogoName | null>(null);

  showTestimonial(logo: OrgLogoName): void {
    this.activeTestimonial.set(logo);
  }

  hideTestimonial(logo: OrgLogoName): void {
    if (this.pinnedTestimonial() !== logo) this.activeTestimonial.set(null);
  }

  toggleTestimonial(logo: OrgLogoName): void {
    const next = this.pinnedTestimonial() === logo ? null : logo;
    this.pinnedTestimonial.set(next);
    this.activeTestimonial.set(next);
  }

  closeTestimonial(): void {
    this.pinnedTestimonial.set(null);
    this.activeTestimonial.set(null);
  }
}
