import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
    @Input()
    set skill(newSkill) {
        this.nameCtrl.setValue(newSkill.name || null);
        this.valueCtrl.setValue(newSkill.value || 0);
    }

    @Output() formSubmitted = new EventEmitter<any>();

    nameCtrl: FormControl;
    valueCtrl: FormControl;

    skillForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.nameCtrl = fb.control('', Validators.required);
        this.valueCtrl = fb.control('', Validators.required);

        this.skillForm = fb.group({
            name: this.nameCtrl,
            value: this.valueCtrl,
        });
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.skillForm.value);
        this.formSubmitted.emit(this.skillForm.value);
    }
    }
