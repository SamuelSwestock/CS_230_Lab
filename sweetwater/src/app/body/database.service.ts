import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { SmallBlogProcedure } from "./small_blog_procedure.model";

@Injectable({
    providedIn: "root"
})
export class DatabaseService {
    items: Observable<SmallBlogProcedure []>
    constructor(private db: AngularFireDatabase) {
        console.log("Setting up Firebase Connection.");
        this.items = this.db.list<SmallBlogProcedure>("my-info").valueChanges();
    }

    public showData() {
        this.items.subscribe((data: SmallBlogProcedure []) => {
            console.log("Data Recieved.");
            for(let item of data) {
                console.log(item);
            }
        })
    }
}