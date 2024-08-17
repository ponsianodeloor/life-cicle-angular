import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  isProductVisible = true;
  currentPrice:number = 10;
  tick = 0;

  constructor() {}

  ngOnInit() {
    console.log('OnInit');
    interval(1000).subscribe(() => {
      console.log('interval page ' + this.tick);
      this.tick++;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');

  }

  changePrice() {
    this.currentPrice = this.makeRandomPriceBetween(10, 100);
  }

  makeRandomPriceBetween(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
