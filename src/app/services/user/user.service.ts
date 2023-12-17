import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
  SignupHTTPRequestBody,
  SignupHTTPResponse,
} from 'src/app/types/SignupDTO';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  signup(body: SignupHTTPRequestBody): Observable<SignupHTTPResponse> {
    return from(
      new Promise<SignupHTTPResponse>((resolve, reject) =>
        resolve({ status: 200, data: { id: 'uuid', ...body } })
      )
    );
  }
}
