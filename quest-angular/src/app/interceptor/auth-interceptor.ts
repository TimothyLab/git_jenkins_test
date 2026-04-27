import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  const token = "le jeton"

  const headerRequest = req.clone({
    setHeaders: {'Authorization': 'Bearer ${token}'}
  })




  return next(headerRequest);
};
