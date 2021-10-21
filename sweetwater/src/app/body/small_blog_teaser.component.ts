import { Component, Input, OnInit } from "@angular/core";
import { MockBlogService } from "./mock-blog.service";
import { SmallBlogProcedure } from "./small_blog_procedure.model";

@Component({
    selector: "app_small_blog_teaser",
    templateUrl: "small_blog_teaser.component.html",
    styleUrls: ['small_blog_teaser.component.css']
})
export class SmallBlogTeaser implements OnInit{
    @Input()
    imagePath!: string;
    @Input()
    title!: string;
    @Input()
    date!: string;
    
    blogs: SmallBlogProcedure[] = [];
    constructor(private MockBlogService: MockBlogService) {

    }

    ngOnInit(): void {
        console.log("Sending a get request to the server");
        this.MockBlogService.getBlog1();
        this.MockBlogService.getBlog2();
        this.MockBlogService.getBlog3();
        this.MockBlogService.getBlog4();
        this.showBlogs();
    }

    showBlogs() {
        this.MockBlogService.getBlog1().subscribe((data: SmallBlogProcedure) => {
            console.log(data);
            this.blogs.push(data);
        })
        this.MockBlogService.getBlog2().subscribe((data: SmallBlogProcedure) => {
            console.log(data);
            this.blogs.push(data);
        })
        this.MockBlogService.getBlog3().subscribe((data: SmallBlogProcedure) => {
            console.log(data);
            this.blogs.push(data);
        })
        this.MockBlogService.getBlog4().subscribe((data: SmallBlogProcedure) => {
            console.log(data);
            this.blogs.push(data);
        })
    }
}