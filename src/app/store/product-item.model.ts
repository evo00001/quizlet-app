export class ProductItemModel {
    img: string;
    title: string;
    author: string;
    edition: string;
    explanation: string;


    constructor (img:string, title:string, author:string, edition:string, explanation:string){
        this.img = img;
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.explanation = explanation;

    }
}