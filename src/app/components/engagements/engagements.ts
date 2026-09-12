import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

/**
 * Logo keys. Each one has a matching `@case` in engagements.html where the SVG
 * is inlined so it inherits `currentColor` (muted by default, ink on hover).
 */
export type OrgLogo = 'hal-osaka';

interface Org {
  /** Accessible name announced for the logo. */
  name: string;
  logo: OrgLogo;
}

@Component({
  selector: 'app-engagements',
  imports: [Reveal],
  templateUrl: './engagements.html',
})
export class Engagements {
  readonly orgs: Org[] = [{ name: 'HAL Osaka', logo: 'hal-osaka' }];
}
