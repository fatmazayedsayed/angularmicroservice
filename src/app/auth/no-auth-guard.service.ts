import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { map ,  take } from 'rxjs/operators';
import { UserService } from '../modules/core/services/user.service';

@Injectable()
export class NoAuthGuard  implements CanActivate {
  constructor( private router: Router, private authService:UserService) {}

  canActivate(): boolean {
   
    if (this.authService.isAuth()) {
      this.router.navigate(['/pages']);
      return false;
    } else 
    {
      return true;
    }
  }
}
