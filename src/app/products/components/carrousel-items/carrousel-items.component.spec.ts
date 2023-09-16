import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselItemsComponent } from './carrousel-items.component';

describe('CarrouselItemsComponent', () => {
  let component: CarrouselItemsComponent;
  let fixture: ComponentFixture<CarrouselItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
