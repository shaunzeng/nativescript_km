import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor() { }

    canActivate(): boolean {
        return true;
    }
}