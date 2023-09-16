import { Injectable } from '@angular/core';
import { MethodsService } from 'src/app/shared/services/methods.service';
import { environments } from 'src/environments/environments.prod';
import { Observable } from 'rxjs';
import { dataCategory } from '../interfaces/category.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  
  private baseUrl: string = environments.baseUrl;
  
  constructor(
    private MethodsService: MethodsService
  ) { }

  getCategories():Observable<dataCategory>{
    return this.MethodsService.getMethod( `${this.baseUrl}/API_category.php?request=get_categories` );
  }
  

}
