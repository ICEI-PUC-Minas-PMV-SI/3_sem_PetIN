import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
  LoginHTTPRequestBody,
  LoginHTTPResponse,
} from 'src/app/types/LoginDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(body: LoginHTTPRequestBody): Observable<LoginHTTPResponse> {
    const users = JSON.parse(localStorage.getItem('users') ?? '') as {
      email: string;
      password: string;
    }[];
    const user = (users ?? []).find((user) => {
      return user.email === body.email && user.password === body.password;
    });
    if (user) {
      localStorage.setItem('user', JSON.stringify(body));
      return from(
        new Promise<LoginHTTPResponse>((resolve, reject) =>
          resolve({ status: 200, data: { id: 'uuid', email: body.email } })
        )
      );
    }
    return from(
      new Promise<LoginHTTPResponse>((resolve, reject) =>
        reject({ status: 401, error: 'Credenciais inválidas' })
      )
    );
  }
}
