export class SmallBlogProcedure {
    imagePath: string;
    title: string;
    date: string;

    constructor({imagePath, title, date} : {imagePath: string, title: string, date: string}) {
            this.imagePath = imagePath;
            this.title = title;
            this.date = date;
    }
}