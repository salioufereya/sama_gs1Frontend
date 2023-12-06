import { Injectable } from '@angular/core';
import { RootService } from './root.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends RootService {
  login<T>(data: any): Observable<T> {
    return this.http.post<T>(this.url + `/users/login`, data);
  }
}
