import { Component, OnInit } from '@angular/core';
import { loadingService } from 'src/app/products/services/loading.service';
@Component({
  selector: 'app-progres-barr',
  templateUrl: './progres-barr.component.html',
  styleUrls: ['./progres-barr.component.css'],

})
export class ProgresBarrComponent implements OnInit{
  constructor( public loadingService: loadingService){
  }
  isLoading: boolean = false;
  
  ngOnInit(): void {
  
  }

}
