import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    links: any[] = [];

    constructor(
    ) {
        this.links = [{
            label: "Experiences",
            link: ['experiences']
        }, {
            label: "Skills",
            link: ['skills']
        }, {
            label: "Categories",
            link: ['categories']
        }];
    }

    ngOnInit() {
    }
}
