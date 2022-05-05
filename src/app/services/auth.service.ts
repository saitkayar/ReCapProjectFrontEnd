import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingeResponseModel } from '../models/singleResponseData';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44396/api/Auth';
  constructor(private httpCLient:HttpClient) { }

  login(loginModel:LoginModel) {

    return this.httpCLient.post<SingeResponseModel<TokenModel>>(this.apiUrl + '/login',loginModel)
  }
  isAuthenticated() {
    if(localStorage.getItem("token")){
      return true;
    }
   
    else
    {return false;}
  }

}
