import { Component, OnDestroy, OnInit } from '@angular/core';
import { productService } from '../../services/produc.service';
import { Subject, of, takeUntil, fromEvent, Observable, takeLast } from 'rxjs';
import { loadingService } from '../../services/loading.service';
import { product } from '../../interfaces/product.interface';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  products!: product[];
  isLoading: boolean = true;
  page: number = 1;
  constructor(
    private productService: productService,
    private loadingService: loadingService
  ){}

  ngOnInit(): void {
    this.productService.getProducts(1,  'loader')
    .pipe(
      takeUntil(this.destroy$) 
    )
    .subscribe(
      {
        next: (products)=>{
          this.products = products.data;
        },
        error: (error)=>{
          console.log(error)
        },
      }
    )

  }

  onScroll() {
    this.page++;
    this.productService.getProducts(this.page)
    .pipe(
      takeUntil(this.destroy$) 
    )
    .subscribe(
      {
        next: (products)=>{
          console.log(products)
          this.products.push(...products.data)
        },
        error: (error)=>{
          console.log(error)
        },
        complete: ()=>{
          setTimeout(()=>{
            this.loadingService.hide();
          }, 500)
        }
      }
    )
    
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
 }
}
