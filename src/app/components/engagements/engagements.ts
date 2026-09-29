import { Component } from '@angular/core';
import { OrgLogo } from '../../shared/org-logo/org-logo';
import { ORGS } from '../../shared/orgs';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-engagements',
  imports: [OrgLogo, Reveal],
  templateUrl: './engagements.html',
})
export class Engagements {
  readonly orgs = ORGS;
}
