import { Component, OnDestroy, OnInit } from '@angular/core';
import { productService } from '../../services/produc.service';
import { Subject, takeUntil } from 'rxjs';
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
  constructor(
    private productService: productService,
    private loadingService: loadingService
  ){}

  ngOnInit(): void {
    this.loadingService.show();
    this.productService.getProducts()
    .pipe(
      takeUntil(this.destroy$) 
    )
    .subscribe(
      {
        next: (products)=>{
          this.products = products.data;
          console.log(this.products)
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
