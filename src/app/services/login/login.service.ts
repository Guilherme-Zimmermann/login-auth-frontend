import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "https://login-auth-api-uflk.onrender.com/api/v1/auth";

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl+"/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
      })
    )
  }
}
