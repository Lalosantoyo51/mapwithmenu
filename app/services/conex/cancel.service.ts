import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService2 } from "./conex.service";
import { Observable } from "rxjs/Observable";
import {Cancel_Orden} from "../../models/cancel_orden.model"
import { Frame } from "tns-core-modules/ui/frame/frame";

@Injectable()
export class CancelOrdenService {
    constructor(private http: HttpClient, private authService: AuthService2) {}
  
    cancel_orden(form: Cancel_Orden){
        console.log(JSON.stringify(form))
        return this.http.post<any>(this.URL, form, this.authService.HTTP_AUTH_OPTIONS).map(res => res);;
    }

    get URL() {
        return this.authService.API_URL + 'comment';
    }
}