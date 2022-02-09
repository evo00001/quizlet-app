import { Component, Input } from "@angular/core";

@Component({
    selector: 'quiz-category-card',
    templateUrl: 'category.card.html',
    styleUrls: ['category.card.css']
})
export class CategoryCardComponent{
    @Input() img:string;
    @Input() title:string;
    @Input() edition:string;
    @Input() author:string;
    @Input() explanation:string;

    constructor(){
        this.img = "";
        this.title = "Missing Title";
        this.edition = "";
        this.author = "Missing Author";
        this.explanation = "Missing explanations";

    }
}