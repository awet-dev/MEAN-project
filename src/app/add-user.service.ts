import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private http: HttpClient;
  private url = 'http://localhost:9000/';

  constructor(http: HttpClient) {
    this.http = http;
  }

  public addUser(user: User): Observable<any> {
    this.url = 'http://localhost:9000/add-user'
    return  this.http.post(this.url, user);
  }
}
