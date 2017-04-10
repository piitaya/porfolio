import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    skills: FirebaseListObservable<any>;
    skill: any;

    constructor(
        public af: AngularFire
    ) { }

    ngOnInit() {
        this.skills = this.af.database.list('/skills')
    }

    delete(skill: any) {
        this.skills.remove(skill.$key);
    }

    new() {
        this.skill = {};
    }

    edit(skill: any) {
        this.skill = skill;
    }

    save(skill) {
        if (this.skill.$key) {
            this.skills.update(this.skill.$key, skill);
        }
        else {
            this.skills.push(skill);
        }
        this.skill = null;
    }

    isSelected(skill) {
        return this.skill && skill.$key == this.skill.$key;
    }
}
