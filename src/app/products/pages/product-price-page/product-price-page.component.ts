import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product-price-page',
  templateUrl: './product-price-page.component.html',
  styleUrl: './product-price-page.component.css'
})
export class ProductPricePageComponent implements OnInit, OnChanges, OnDestroy {

  @Input() price: number = 0;

  constructor() { }

  ngOnInit() {
    console.log('ProductPricePageComponent - ngOnInit');
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log('ProductPricePageComponent - ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy() {
    console.log('ProductPricePageComponent - ngOnDestroy');
  }

}
