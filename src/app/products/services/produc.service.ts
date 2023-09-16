import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments.prod';
import { MethodsService } from '../../shared/services/methods.service';
@Injectable({providedIn: 'root'})
export class productService {
    
    private baseUrl: string = environments.baseUrl;

    constructor(
        private MethodsService: MethodsService
    ) { }
    
    getProducts(page?:number, loadingType?: string ):Observable<any>{

        let pageSize = page?? 1;
        return this.MethodsService.getMethodLoader(`${this.baseUrl}/API_product.php?request=get_products&page=${pageSize}`, loadingType)
    }
    
}