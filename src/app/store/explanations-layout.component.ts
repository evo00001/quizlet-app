import { Component, OnInit } from "@angular/core";
import { mock_product_list } from './mock-product-list';
import { ProductItemModel } from './product-item.model';
import { ProductService } from "./products.service";

@Component({
    selector: 'quiz-explanations-layout',
    templateUrl: 'explanations-layout.component.html',
    styleUrls: ['explanations-layout.component.css']
})
export class ExplanationsLayoutComponent implements OnInit{
    products: ProductItemModel [] = [];

  constructor(private service: ProductService) {
    
  }
  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getProducts().subscribe(data => {
      console.log(data);
      for(var product of data){
        this.products.push(product);
      }
    });
  }
}

