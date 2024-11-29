import { ApplicationConfig } from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import {provideHighlightOptions} from "ngx-highlightjs";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    })
  ]
};
