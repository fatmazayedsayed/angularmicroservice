import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkToken();
    }
    canLoad(route: Route): boolean {
        return this.checkToken();
    }
    checkToken() {
        if (localStorage.getItem('jwtToken')) {
          
            return true;
        } else {
           console.log("hassan");
           this.router.navigate(['../../../auth/']);
            return false;
        }
       
    }
}