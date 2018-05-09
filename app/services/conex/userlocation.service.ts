import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService2 } from "./conex.service";
import { Observable } from "rxjs/Observable";
import {userLocation} from "../../models/userlocation.model";
import { Frame } from "tns-core-modules/ui/frame/frame";

@Injectable()
export class UserLocationService {
    constructor(private http: HttpClient, private authService: AuthService2) {}
  
    Mypostion(form: userLocation){
        console.log(JSON.stringify(form))
        return this.http.post<any>(this.URL, form, this.authService.HTTP_AUTH_OPTIONS).map(res => res);;
    }
    get URL() {
        return this.authService.API_URL + 'zoneout';
    }
}