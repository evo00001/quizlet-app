import { Component } from "@angular/core";
import { mock_product_list } from './mock-product-list';
import { ProductItemModel } from './product-item.model';

@Component({
    selector: 'quiz-explanations-layout',
    templateUrl: 'explanations-layout.component.html',
    styleUrls: ['explanations-layout.component.css']
})
export class ExplanationsLayoutComponent{
    products: ProductItemModel [] = [];

  constructor() {
    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }
  }
}

