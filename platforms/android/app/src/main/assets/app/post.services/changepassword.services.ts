import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from "./conex.services";
import { Observable } from "rxjs/Observable";
import {userClient} from "../modelUser/user.model";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient, private authService: AuthService) {}
  
    create(form: userClient){
        console.log(JSON.stringify(form))
        return this.http.post<userClient>(this.URL, form, this.authService.HTTP_AUTH_OPTIONS);
    }
    get URL() {
        return this.authService.API_URL + 'passUser';
    }
}