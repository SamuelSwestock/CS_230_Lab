import { Component } from "@angular/core";
import { MockBlogService } from "./mock-blog.service";
import { SmallBlogProcedure } from "./small_blog_procedure.model";

@Component ({
    selector: 'sweetwater-edit-blogs',
    templateUrl: 'edit_blogs.component.html'
})
export class EditBlogsComponent {
    constructor(private blogService: MockBlogService) {
        
    }
    onUpdateBlog1(data:SmallBlogProcedure) {
        this.blogService.modifyBlog1(data).subscribe(data => {
            console.log("Updated information sent to backend.");
        });
    }
    onUpdateBlog2(data:SmallBlogProcedure) {
        this.blogService.modifyBlog2(data).subscribe(data => {
            console.log("Updated information sent to backend.");
        });
    }
    onUpdateBlog3(data:SmallBlogProcedure) {
        this.blogService.modifyBlog3(data).subscribe(data => {
            console.log("Updated information sent to backend.");
        });
    }
    onUpdateBlog4(data:SmallBlogProcedure) {
        this.blogService.modifyBlog4(data).subscribe(data => {
            console.log("Updated information sent to backend.");
        });
    }
}