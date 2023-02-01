import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string){
    if((username.trim()==='Shiva') && (password.trim()==='143')){
    sessionStorage.setItem('authenticateUser',username );
      return true;
  }
  else{
    return false;
  }
 }

 //login
 public isUserLoggedIn(){
  let user=sessionStorage.getItem('authenticateUser')
  return !(user==null)
}

//logout
logout(){
  sessionStorage.removeItem('authenticateUser');
}


}