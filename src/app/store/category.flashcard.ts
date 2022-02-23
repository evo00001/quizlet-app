import { Component, Input } from "@angular/core";

@Component({
    selector: 'quiz-category-flashcard',
    templateUrl: 'category.flashcard.html',
    styleUrls: ['category.flashcard.css']
})
export class CategoryFlashCards{
    @Input() img:string;
    @Input() title:string;
    @Input() terms: string;
    @Input() author: string;
    @Input() profilepic: string;

    constructor(){
        this.img = "";
        this.title = "Missing Title";
        this.terms = "Missing Terms"
        this.author = "Missing Author";
        this.profilepic = "";
    }
}