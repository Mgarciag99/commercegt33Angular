import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataProduct } from 'src/app/products/interfaces/product.interface';
import { Observable, catchError, finalize, of, throwError } from 'rxjs';
import { loadingService } from 'src/app/products/services/loading.service';
@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(
    private httpClient: HttpClient,
    private loadingService: loadingService
  ) { }

  getMethod( endpoint: string, loadingType?: string ):Observable<any>{
    if(!endpoint) return of(null)

    switch(loadingType){
      case 'loader':
        this.loadingService.show();
      break;
    }
    
    return this.httpClient.get<dataProduct>( endpoint )
    .pipe(
      catchError(error => {
        console.error('Ocurrió un error en la solicitud:', error);
        return throwError(error);
      }),
      finalize(()=>{
        setTimeout(()=>{
          this.loadingService.hide();
        }, 2000)
      })
    )
    
  }

}
