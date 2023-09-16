import { Component } from '@angular/core';
import { CategoryServiceService } from '../../services/category-service.service';
import { Subject, takeUntil } from 'rxjs';
import { category } from '../../interfaces/category.interface';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  isLoading: boolean = false;
    constructor(
    private CategoryServiceService: CategoryServiceService
  ){}
    
  private destroy$: Subject<void> = new Subject<void>();
  categories?: category[];
  
  ngOnInit(): void {
    this.CategoryServiceService.getCategories()
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(
      (categories)=>{
        this.categories = categories.data;
      }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
