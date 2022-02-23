import { Component, Input } from "@angular/core";

@Component({
    selector: 'quiz-category-presscard',
    templateUrl: 'category.presscard.html',
    styleUrls: ['category.presscard.css']
})
export class CategoryPressCardComponent{
    @Input() img:string;
    @Input() date:string;
    @Input() title:string;
    @Input() logo:string;
   

    constructor(){
        this.img = "";
        this.date = "missing date"
        this.title = "Missing Title";
        this.logo = "";
    }

}