import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { category } from '../../interfaces/category.interface';
@Component({
  selector: 'app-carrousel-items',
  templateUrl: './carrousel-items.component.html',
  styleUrls: ['./carrousel-items.component.css']
})
export class CarrouselItemsComponent implements OnChanges{
    
  @Input() categories?: category[];
  groups:any = [];
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['categories'].currentValue !== undefined)
    this.makeGrops();
  }


  makeGrops(){
    let group:any = [];
    let categories = this.categories?.slice()
    for( let i = 0; i < categories!.length; i++ ){
        group.push(categories![i])
        if (group.length === 6 || i === categories!.length - 1) {
          this.groups.push(group)
          group = [];
        }      
    }
  }

}
