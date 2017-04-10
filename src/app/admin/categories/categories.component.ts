import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    categories: FirebaseListObservable<any>;
    category: any;

    constructor(
        public af: AngularFire
    ) { }

    ngOnInit() {
        this.categories = this.af.database.list('/categories')
    }

    delete(category: any) {
        this.categories.remove(category.$key);
    }

    new() {
        this.category = {};
    }

    edit(category: any) {
        this.category = category;
    }

    save(category) {
        if (this.category.$key) {
            this.categories.update(this.category.$key, category);
        }
        else {
            this.categories.push(category);
        }
        this.category = null;
    }

    isSelected(category) {
        return this.category && category.$key == this.category.$key;
    }
}
