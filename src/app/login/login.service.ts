import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login() {

    const headers = {
      'Content-type': 'application/x-www-form-urlencoded'
    };

    const body = new HttpParams()
      .set('username', 'employee1')
      .set('password', '123')
      .set('grant_type', 'password')
      .set('client_id', 'springboot-microservice')
      .set('client_secret', 'a1a41d09-61b9-4e94-8f93-7e531872140b');
    return this.httpClient.post('http://localhost:8080/auth/realms/Demo-Realm/protocol/openid-connect/token', body, {headers});
  }

}
