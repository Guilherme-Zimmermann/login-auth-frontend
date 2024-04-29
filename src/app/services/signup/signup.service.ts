import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl: string = "https://login-auth-api-uflk.onrender.com/api/v1/auth";

  constructor(
    private httpClient: HttpClient
    ) { }

  signup(name: string, email: string, password: string) {
    return this.httpClient.post<null>(this.apiUrl+"/register", { name, email, password })
  }
}
