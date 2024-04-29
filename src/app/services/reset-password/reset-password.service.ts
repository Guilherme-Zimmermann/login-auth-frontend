import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ResetPasswordResponse } from '../../types/reset-password-response.type';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  apiUrl: string = "https://login-auth-api-uflk.onrender.com/api/v1/auth";

  constructor(
    private httpClient: HttpClient
  ) { }

  resetPassword(email: string) {
    return this.httpClient.post<ResetPasswordResponse>(this.apiUrl+"/reset-password", { email }).pipe(
      tap((value) => {
        sessionStorage.setItem("password-token", value.token)
      })
    )
  }
}
