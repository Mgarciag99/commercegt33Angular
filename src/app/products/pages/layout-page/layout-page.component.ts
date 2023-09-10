import { OnChanges, Component } from '@angular/core';
import { loadingService } from '../../services/loading.service';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  constructor(
    private loadingService: loadingService,
  ){
  }
  isLoading: boolean = false;


}
