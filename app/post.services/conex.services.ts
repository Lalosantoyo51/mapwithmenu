import { Injectable } from "@angular/core";
import { getString, setString, remove } from "application-settings";
import { HttpClient, HttpHeaders } from '@angular/common/http';
​
@Injectable()
export class AuthService {
    HTTP_OPTIONS: any;
  private SERVER_URL : string = 'http://192.168.0.107:8000/';
  public API_URL : string = this.SERVER_URL + 'api/v1/';
  public HTTP_AUTH_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}
}
​