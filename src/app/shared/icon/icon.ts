import { Component, input } from '@angular/core';

export type IconName =
  | 'menu'
  | 'close'
  | 'sun'
  | 'moon'
  | 'arrow-right'
  | 'external-link'
  | 'check'
  | 'code'
  | 'shield'
  | 'shield-check'
  | 'layers'
  | 'search'
  | 'lock'
  | 'send'
  | 'mail'
  | 'x'
  | 'file-text';

@Component({
  selector: 'app-icon',
  host: { class: 'inline-block leading-none', 'aria-hidden': 'true' },
  template: `
    <svg
      class="h-full w-full"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @switch (name()) {
        @case ('menu') {
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        }
        @case ('close') {
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
        }
        @case ('moon') {
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
        }
        @case ('arrow-right') {
          <line x1="4" y1="12" x2="20" y2="12" />
          <polyline points="13 5 20 12 13 19" />
        }
        @case ('external-link') {
          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        }
        @case ('check') {
          <polyline points="5 13 9.5 17.5 19 7" />
        }
        @case ('code') {
          <polyline points="9 8 4 12 9 16" />
          <polyline points="15 8 20 12 15 16" />
        }
        @case ('shield') {
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        }
        @case ('shield-check') {
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <polyline points="9 12 11 14 15 10" />
        }
        @case ('layers') {
          <polygon points="12 3 21 8 12 13 3 8" />
          <polyline points="3 12 12 17 21 12" />
          <polyline points="3 16 12 21 21 16" />
        }
        @case ('search') {
          <circle cx="10.5" cy="10.5" r="6.5" />
          <line x1="20" y1="20" x2="15.3" y2="15.3" />
        }
        @case ('lock') {
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        }
        @case ('send') {
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22 11 13 2 9 22 2Z" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        }
        @case ('file-text') {
          <path d="M6 3h8l6 6v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <polyline points="14 3 14 9 20 9" />
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="13" y2="18" />
        }
        @case ('x') {
          <path
            fill="currentColor"
            stroke="none"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
