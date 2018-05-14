import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Seller } from "../interface/seller.model";
import { AuthService } from "../services/auth.service";



@Injectable()
export class MyHttpGetService {
    private serverUrl = "http://192.168.0.113:8000/api/v1/";

    constructor(private http: HttpClient,private authservice:AuthService) { }

    getData(uri) {
        let headers = this.authservice.HTTP_OPTIONS;
        return this.http.get<Seller[]>(this.serverUrl + uri, headers )
            .map(res => res);
    }
    deletedata(uri){
        let headers = this.createRequestHeader();
        return this.http.delete(this.serverUrl + uri, { headers: headers })
        .map(res => res);
    }

    getResponseInfo() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .do(res =>  res);
    }


    private createRequestHeader() {
        let headers = new HttpHeaders();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    }
}