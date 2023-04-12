import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
HttpService

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlCode:string= "";
  constructor(private httpService:HttpService) { }

  CreateAccount(payload:any)
  {
    this.urlCode = "accounts";
    return this.httpService.PostService(this.urlCode, payload);
  }

  Login()
  {
    this.urlCode = "accounts";
    
    return this.httpService.GetService(this.urlCode);
  }
}
