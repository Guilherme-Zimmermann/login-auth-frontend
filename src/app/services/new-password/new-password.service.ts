import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPasswordService {
  apiUrl: string = "http://localhost:8080/api/v1/auth";

  constructor(
    private httpClient: HttpClient
  ) { }

  newPassword(newPassword: string) {
    const token = sessionStorage.getItem("password-token")
    return this.httpClient.post<void>(this.apiUrl+"/new-password", { token, newPassword }).pipe(
      tap(() => {
        sessionStorage.removeItem("password-token")
      })
    )
  }
}
