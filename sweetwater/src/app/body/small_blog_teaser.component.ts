import { Component, Input } from "@angular/core";

@Component({
    selector: "app_small_blog_teaser",
    templateUrl: "small_blog_teaser.component.html",
    styleUrls: ['small_blog_teaser.component.css']
})
export class SmallBlogTeaser {
    @Input()
    imagePath!: string;
    @Input()
    title!: string;
    @Input()
    date!: string;
}