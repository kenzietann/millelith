/** Logo keys — each has a matching `@case` in OrgLogo (shared/org-logo). */
export type OrgLogoName = 'binus';

export interface Org {
  /** Accessible name announced for the logo. */
  name: string;
  logo: OrgLogoName;
  testimonial: string;
}

/** Testimonials shown in the Track record section. */
export const ORGS: readonly Org[] = [
  {
    name: 'BINUS',
    logo: 'binus',
    testimonial:
      "A partner who has greatly helped us stay vigilant in today's cyber threat landscape. Their service was highly professional and informative.",
  },
];
