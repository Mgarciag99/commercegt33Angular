import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, finalize, of, throwError } from 'rxjs';
import { loadingService } from 'src/app/products/services/loading.service';
@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(
    private httpClient: HttpClient,
    private loadingService: loadingService
  ) { }
  
  getLoader( loadingType: string | undefined ){
    switch(loadingType){
      case 'progress-bar':
        this.loadingService.showProgressBar();
      break;
      case 'spinner':
        this.loadingService.showSpinner();
      break;
    }
  }

  finallyLoader( loadingType: string | undefined ){
    switch(loadingType){
      case 'progress-bar':
        this.loadingService.hideProgressBar();
      break;
      case 'spinner':
        this.loadingService.hideSpinner();
      break;
    }
  }

  getMethodLoader( endpoint: string, loadingType?: string ):Observable<any>{
    if(!endpoint) return of(null)

    this.getLoader( loadingType )
    return this.httpClient.get<any>( endpoint )
    .pipe(
      delay(2000),
      catchError(error => {
        console.error('Ocurrió un error en la solicitud:', error);
        return throwError(error);
      }),
      finalize(()=>{
        this.finallyLoader( loadingType );
      })
    )
  }

  getMethod( endpoint: string ):Observable<any>{
    if(!endpoint) return of(null)

    return this.httpClient.get<any>( endpoint )
    .pipe(
      catchError(error => {
        console.error('Ocurrió un error en la solicitud:', error);
        return throwError(error);
      }),
      finalize(()=>{
      })
    )
  }

}
