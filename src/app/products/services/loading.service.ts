import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class loadingService {
    constructor() { }
    private showProgressBarSubject = new BehaviorSubject<boolean>(false);
    showProgressBar$ = this.showProgressBarSubject.asObservable();
    private showSpinnerSubject = new BehaviorSubject<boolean>(false);
    showSpinner$ = this.showSpinnerSubject.asObservable();


    showProgressBar(){
        this.showProgressBarSubject.next(true);
    }
    hideProgressBar(){
        this.showProgressBarSubject.next(false);
    }

    showSpinner(){
        this.showSpinnerSubject.next(true);
    }
    hideSpinner(){
        this.showSpinnerSubject.next(false);
    }

}