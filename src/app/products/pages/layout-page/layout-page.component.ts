import { Component } from '@angular/core';
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
  ){}
    
  private destroy$: Subject<void> = new Subject<void>();
  categories?: category[];
  
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
