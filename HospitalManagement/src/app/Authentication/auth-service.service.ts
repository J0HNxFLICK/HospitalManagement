import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  gettoken(){  
    return !!localStorage.getItem("loginId");  
    }
  constructor() { }
}
