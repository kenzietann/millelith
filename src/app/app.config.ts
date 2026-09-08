import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // The app is fully signal-driven, so it needs no Zone.js — this keeps it out
    // of the bundle and off the main thread.
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ]
};
