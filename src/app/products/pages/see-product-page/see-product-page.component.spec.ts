import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProductPageComponent } from './see-product-page.component';

describe('SeeProductPageComponent', () => {
  let component: SeeProductPageComponent;
  let fixture: ComponentFixture<SeeProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
