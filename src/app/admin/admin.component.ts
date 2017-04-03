import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    experiences: FirebaseListObservable<any>;

    experience: any = null;
    key: string = null;

    constructor(
        public af: AngularFire
    ) {
    }

    ngOnInit() {
        this.experiences = this.af.database.list('/experiences')
    }

    new() {
        this.experience = {};
    }

    save() {
        if (this.key) {
            this.experiences.update(this.key, this.experience);
        }
        else {
            this.experiences.push(this.experience);
        }
        this.experience = null;
        this.key = null;
    }

    delete(experience: any) {
        this.experiences.remove(experience.$key);
    }

    edit(experience: any) {
        this.key = experience.$key;
        this.experience =  { ...experience };
    }
}
