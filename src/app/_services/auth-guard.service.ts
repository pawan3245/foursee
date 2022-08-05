
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private tokenStorage: TokenStorageService ) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        if (!this.tokenStorage.getToken()) {
            alert('You are not allowed to view this page. You are redirected to login Page');
            
            this.router.navigate(["login"]);
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        } 
 
        return true;
    }
 
}