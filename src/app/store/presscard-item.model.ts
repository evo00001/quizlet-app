export class PressCardItemModel {
    img: string;
    date: string;
    title: string;
    logo: string;


    constructor (img:string, date:string, title:string, logo:string){
        this.img = img;
        this.date =  date;
        this.title = title;
        this.logo = logo;
       
    }
}