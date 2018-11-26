import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

class User {
    username:string;
    password:string;
    confirmPassword:string;
}

@Component({
    selector: "app-signup",
    moduleId: module.id,
    templateUrl: "./signup.html",
    styleUrls: ['./signup-common.scss']
})
export class SignupComponent {
    constructor(){}
}