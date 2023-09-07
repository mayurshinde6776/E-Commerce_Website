import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from "@angular/router";
import { login, signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router){}

  showLogin=false;
  authError: string='';
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  // To stored signup data into Json file
  signUp(data:signUp): void{
this.seller.userSignup(data)

  }
  // To stored login data into Json file
  Login(data:login): void{
    this.authError=''
    this.seller.userLogin(data);
    this.seller.isLogginError.subscribe((error)=>{
      if(error){
        this.authError='Email or password is not correct'
      }
    })

      }
  openLogin(){
this.showLogin=true;
  }

  openSignUp(){
    this.showLogin= false;
  }
}
