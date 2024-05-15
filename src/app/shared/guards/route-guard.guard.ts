import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuardGuard: CanActivateFn = (route, state) => {
  const authToken = localStorage.getItem('TOKEN');
  const router = inject(Router);

  if (authToken) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
