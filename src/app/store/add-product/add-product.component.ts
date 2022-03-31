import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../product-item.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'quizlet-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product:ProductItemModel) {
    console.log("You pressed add product")
    console.log(product);
    this.ps.addProduct(product);
  }

}
