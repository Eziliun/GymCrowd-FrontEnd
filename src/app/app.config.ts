import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { authInterceptor } from './Shared/Service/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom([BrowserAnimationsModule])
  ]
};
