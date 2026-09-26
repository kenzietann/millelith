/** Logo keys — each has a matching `@case` in OrgLogo (shared/org-logo). */
export type OrgLogoName = 'hal-osaka' | 'binus';

export interface Org {
  /** Accessible name announced for the logo. */
  name: string;
  logo: OrgLogoName;
  testimonial?: string;
}

/** Organizations we have helped. Shown in the Track record section (first section after the stats band). */
export const ORGS: readonly Org[] = [
  { name: 'HAL Osaka', logo: 'hal-osaka' },
  {
    name: 'BINUS University',
    logo: 'binus',
    testimonial:
      "A partner who has greatly helped us stay vigilant in today's cyber threat landscape. Their service was highly professional and informative.",
  },
];
