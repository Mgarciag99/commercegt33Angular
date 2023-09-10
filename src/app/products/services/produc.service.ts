import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments.prod';
import { dataProduct, product } from '../interfaces/product.interface';
@Injectable({providedIn: 'root'})
export class productService {
    
    private baseUrl: string = environments.baseUrl;

    constructor(
        private httpClient: HttpClient
    ) { }
    
    getProducts():Observable<dataProduct>{
        return this.httpClient.get<dataProduct>(`${this.baseUrl}/API_product.php?request=get_products`)
    }
    
}