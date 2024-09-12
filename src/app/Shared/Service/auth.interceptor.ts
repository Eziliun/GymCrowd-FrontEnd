import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from './Login.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  const authToken = loginService.getToken();


  const authReq = authToken ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  }) : req;

  return next(authReq);
};
