import { Component } from "@angular/core";
import { mock_blogs } from "./mock_blogs";
import { SmallBlogProcedure } from "./small_blog_procedure.model";

@Component({
    selector: 'app_home_layout',
    templateUrl: 'home_layout.component.html'
})
export class HomeLayoutComponent {
    smallBlogTeaser:SmallBlogProcedure[] = [];

    constructor() {
        for (var blog of mock_blogs) {
            this.smallBlogTeaser.push(new SmallBlogProcedure(blog));
        }
    }
}