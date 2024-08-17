import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-product-price-page',
  templateUrl: './product-price-page.component.html',
  styleUrl: './product-price-page.component.css'
})
export class ProductPricePageComponent implements OnInit, OnChanges, OnDestroy {

  @Input() price: number = 0;
  tick = 0;
  private intervalSubscription? : Subscription;

  constructor() { }

  ngOnInit() {
    console.log('ProductPricePageComponent - ngOnInit');
    this.intervalSubscription = interval(1000).subscribe(() => {
      console.log('ProductPricePageComponent - interval ' + this.tick);
      this.tick++;
    });
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log('ProductPricePageComponent - ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy() {
    console.log('ProductPricePageComponent - ngOnDestroy');
    if(this.intervalSubscription){
      this.intervalSubscription.unsubscribe();
    }
  }

}
