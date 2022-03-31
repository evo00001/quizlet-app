
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { startAt } from "firebase/database";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    

    constructor(private db:AngularFireDatabase){
        
    }

    public getProducts(){
        return this.db.list<ProductItemModel>("products").valueChanges();
    }

    public getProduct(index:number){
        return this.db.list<ProductItemModel>("products", ref => ref.orderByChild("title").startAt(10)).valueChanges();
    }

    public addProduct(product:ProductItemModel) {
        this.db.list<ProductItemModel>("products").push(product);
    }

}