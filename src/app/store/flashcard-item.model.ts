export class FlashCardItemModel {
    img: string;
    title: string;
    terms: string;
    author: string;
    profilepic: string;


    constructor (img:string, title:string, terms:string, author:string, profilepic:string){
        this.img = img;
        this.title = title;
        this.terms = terms;
        this.author = author;
        this.profilepic = profilepic;
    }
}