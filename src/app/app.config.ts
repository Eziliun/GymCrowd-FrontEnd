import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { authInterceptor } from './Shared/Service/auth.interceptor';
=======
import {provideHttpClient} from "@angular/common/http";
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding()),
<<<<<<< HEAD
    provideHttpClient(withInterceptors([authInterceptor])),
=======
    provideHttpClient(),
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05
    importProvidersFrom([BrowserAnimationsModule])
  ]
};
