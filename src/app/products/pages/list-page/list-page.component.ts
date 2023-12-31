import { Component, OnDestroy, OnInit } from '@angular/core';
import { productService } from '../../services/produc.service';
import { Subject, takeUntil } from 'rxjs';
import { product } from '../../interfaces/product.interface';
import { loadingService } from '../../services/loading.service';
import { CategoryServiceService } from '../../services/category-service.service';
import { category } from '../../interfaces/category.interface';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  products!: product[];
  categories?: category[];

  isLoading: boolean = true;
  page: number = 1;
  constructor(
    public loadingService: loadingService,
    private productService: productService,
    private CategoryServiceService: CategoryServiceService
  ) { }

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

    this.productService.getProducts(this.page, 'spinner')
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        {
          next: (products) => {
            this.products = products.data;
          },
          error: (error) => {
            console.log(error)
          },
        }
      )
  }

  onScroll() {
    if(!this.products && this.page < 2)return;
    this.page++;
    this.productService.getProducts(this.page, 'spinner')
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        {
          next: (products) => {
            this.products.push(...products.data)

          },
          error: (error) => {
            console.log(error)
          },
        }
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
