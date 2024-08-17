import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPricePageComponent } from './product-price-page.component';

describe('ProductPricePageComponent', () => {
  let component: ProductPricePageComponent;
  let fixture: ComponentFixture<ProductPricePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPricePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
