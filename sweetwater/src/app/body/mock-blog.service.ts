import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SmallBlogProcedure } from "./small_blog_procedure.model";

@Injectable({providedIn: 'root'})
export class MockBlogService{
    private baseURL: string = 'https://sweetwater-app-42701-default-rtdb.firebaseio.com/mock_blogs/';
    private Endpoint1: string = 'blog1.json';
    private Endpoint2: string = 'blog2.json';
    private Endpoint3: string = 'blog3.json';
    private Endpoint4: string = 'blog4.json';
    constructor(private http: HttpClient){

    }

    getBlog1() {
        console.log(this.baseURL + this.Endpoint1);
        return this.http.get<SmallBlogProcedure>(this.baseURL + this.Endpoint1); 
    }
    getBlog2() {
        console.log(this.baseURL + this.Endpoint2);
        return this.http.get<SmallBlogProcedure>(this.baseURL + this.Endpoint2);
    }
    getBlog3() {
        console.log(this.baseURL + this.Endpoint3);
        return this.http.get<SmallBlogProcedure>(this.baseURL + this.Endpoint3);
    }
    getBlog4() {
        console.log(this.baseURL + this.Endpoint4);
        return this.http.get<SmallBlogProcedure>(this.baseURL + this.Endpoint4);
    }

}