import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

    experiences: FirebaseListObservable<any>;
    experience: any;

    constructor(
        public af: AngularFire
    ) { }

    ngOnInit() {
        this.experiences = this.af.database.list('/experiences')
    }

    delete(experience: any) {
        this.experiences.remove(experience.$key);
    }

    new() {
        this.experience = {};
    }

    edit(experience: any) {
        this.experience = experience;
    }

    save(experience) {
        if (this.experience.$key) {
            this.experiences.update(this.experience.$key, experience);
        }
        else {
            this.experiences.push(experience);
        }
        this.experience = null;
    }

    isSelected(experience) {
        return this.experience && experience.$key == this.experience.$key;
    }
}
