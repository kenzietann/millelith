/** Logo keys — each has a matching `@case` in OrgLogo (shared/org-logo). */
export type OrgLogoName = 'hal-osaka';

export interface Org {
  /** Accessible name announced for the logo. */
  name: string;
  logo: OrgLogoName;
}

/** Organizations we have helped. Shown under the stats and in the Track record section. */
export const ORGS: readonly Org[] = [{ name: 'HAL Osaka', logo: 'hal-osaka' }];
