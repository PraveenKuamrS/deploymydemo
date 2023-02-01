import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
username="Shiva"
password="143"
errorMessage='Invalid Crediantials';
inValidLogic=false;
name='';
ngOnInit(): void {
    // console.log(this.username)
    // console.log(this.password)

  }

 handlelogin(){
    if(this.hardcodeAuthenticationService.authenticate(this.username,this.password)){
      this.inValidLogic=false;
      // console.log(this.password)
      // console.log(this.username)
      this.name=this.username;

      this.route.navigate(['welcome',this.name]); //navigates to welcome page
    }else{
      this.inValidLogic=true;
  }
 }

 handlecreate(){
  console.log('cretae aacount');
 }
  //dependency injection
//Angular give me Router object
  constructor(private route:Router,public hardcodeAuthenticationService:HardcodeAuthenticationService){}
}

export class createAccount{
  

constructor(){}
}
