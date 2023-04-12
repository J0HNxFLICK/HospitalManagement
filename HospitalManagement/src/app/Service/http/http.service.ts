import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = "http://localhost:3000/";

  constructor(private httpClient:HttpClient) { }

  PostService(url:string, reqData:any)
  {
    console.log(reqData);
    
    return this.httpClient.post(this.baseURL+url,reqData)
  }

  GetService(url:string)
  {
    return this.httpClient.get(this.baseURL+url)
  }

  PutService()
  {

  }

  DeleteService()
  {

  }
}
