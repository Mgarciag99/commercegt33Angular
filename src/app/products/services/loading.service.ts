import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class loadingService {
    constructor() { }
    private showProgressBarSubject = new BehaviorSubject<boolean>(false);
    showProgressBar$ = this.showProgressBarSubject.asObservable();

    show(){
        this.showProgressBarSubject.next(true);
    }
    hide(){
        this.showProgressBarSubject.next(false);
    }

}