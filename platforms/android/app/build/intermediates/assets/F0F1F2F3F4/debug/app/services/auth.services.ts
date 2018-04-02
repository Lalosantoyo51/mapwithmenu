import { Injectable } from "@angular/core";
import { getString, setString, remove } from "application-settings";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from "../models/token.model";
import { User } from "../models/user.model";

@Injectable()
export class AuthService {
    private GRANT_TYPE : string = 'password';
    private CLIENT_ID : number = 2;
    private CLIENT_SECRET : string = '6DpcZr8bd6BeDQHcrf1DHylWzKwZksH92WKSsKOz';
    private SCOPE: string = '*';
    private SERVER_URL : string = 'http://familiaburrera.tk/';
    public API_URL : string = this.SERVER_URL + 'api/v1/';
    private HTTP_AUTH_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    }
    constructor(private http: HttpClient) {}
    /**
     * Register to a user.
     * @param form Form with all fields.
     * @returns Promise<any>
     */
    /**
     * Login to a user.
     * @param username User's email.
     * @param password Password.
     * @returns Promise<any>
     */
    public async logIn(username: string, password: string): Promise<any>{
        var form = {
            grant_type: this.GRANT_TYPE,
            client_id: this.CLIENT_ID,
            client_secret: this.CLIENT_SECRET,
            username: username,
            password: password,
            scope: this.SCOPE,
        }
        let response$ = this.http.post<any>(this.SERVER_URL+ "oauth/token", form, this.HTTP_AUTH_OPTIONS);
        response$.subscribe((token: Token)=>{
            this.access_token = token.access_token
            this.refresh_token = token.refresh_token
        });
        return response$.toPromise();
    }
    /**
     * Close session and delete the tokens.
     */
    public logOut(): void {
        remove('access_token');
        remove('refresh_token');
    }
    /**
     * Determine if the user is login.
     */
    public isLogIn(): boolean {
        return this.access_token != null;
    }
    set access_token(token : string) {
        setString('access_token', token);
    }
    get access_token() : string {
        return getString('access_token');
    }
    set refresh_token(token: string) {
        setString('refresh_token', token);
    }
    get refresh_token() {
        return getString('refresh_token');
    }
    get HTTP_OPTIONS() {
        return {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + this.access_token
            })
        }
    }
    get user() {
        return this.http.get<User>(this.API_URL+ "auth/user", this.HTTP_OPTIONS);
    }
    reset(email: string) {
        return this.http.post<any>(this.API_URL + "auth/reset", { email: email }, this.HTTP_AUTH_OPTIONS).toPromise();
    }
}