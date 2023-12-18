import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import {
  LoginHTTPRequestBody,
  LoginHTTPResponse,
} from 'src/app/types/LoginDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = false;
  constructor() {
    const storage = localStorage.getItem('user');
    const userLogged = storage ? JSON.parse(storage) : undefined;
    if (userLogged?.email && userLogged.password) {
      this.isLogged = true;
    }
    console.log(this.isLogged);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise((resolve) => this.isLogged);
  }

  login(body: LoginHTTPRequestBody): Observable<LoginHTTPResponse> {
    const users = JSON.parse(localStorage.getItem('users') ?? '[]') as {
      email: string;
      password: string;
    }[];
    const user = users.find((user) => {
      return user.email === body.email && user.password === body.password;
    });
    if (user) {
      localStorage.setItem('user', JSON.stringify(body));
      this.isLogged = true;
      return from(
        new Promise<LoginHTTPResponse>((resolve, reject) =>
          resolve({ status: 200, data: { id: 'uuid', email: body.email } })
        )
      );
    }
    this.isLogged = false;
    return from(
      new Promise<LoginHTTPResponse>((resolve, reject) =>
        reject({ status: 401, error: 'Credenciais inválidas' })
      )
    );
  }
  logout() {
    localStorage.setItem('user', '');
    this.isLogged = false;
  }
}
