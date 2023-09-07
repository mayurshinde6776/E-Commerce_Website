import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SellerService } from "./services/seller.service";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate {
  constructor(private sellerServce: SellerService){};
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
      if(localStorage.getItem('seller')){
        return true
      }
      return this.sellerServce.isSellerLoggedIn;
  }


}