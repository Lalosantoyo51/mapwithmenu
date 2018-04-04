import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Color } from "color";
import { View } from "ui/core/view";
import { Page } from "ui/page";
import {AuthService} from "../../../services/auth.service"
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";

@Component({
    selector: "ns-log",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss'],
   
})
export class LoginComponent {
    private indicator: LoadingIndicator;
    private feedback: Feedback;

    private username: string;
    private password: string;

    constructor( private page: Page, private router : RouterExtensions, private authService:AuthService ) { 
        this.page.actionBarHidden = true;
        this.indicator = new LoadingIndicator();
        this.feedback = new Feedback();
    }

    ngOnInit(): void {

    }

    goToSignUp(){
        this.router.navigate(['singup'],{ clearHistory:true});
    }

    async goTohome(){
        if (this.username == '' || this.password == '') {
            this.feedback.warning({
                message: "Llena todos los campos"
            });
        } else {

            this.indicator.show({
                message: "Cargando..."
            });

            await this.authService.logIn(this.username, this.password).catch(()=>{
                this.indicator.hide();
                this.feedback.warning({
                    message: "Las credenciales no coinciden"
                });
            }).then(()=>{
                this.indicator.hide();
            });


            if(this.authService.isLogIn())
                this.router.navigate(['/'],{ clearHistory:true});

        }
    }
}