import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
    @Input()
    set experience(newExperience) {
        this.nameCtrl.setValue(newExperience.name || null);
        this.startDateCtrl.setValue(newExperience.startDate || null);
        this.endDateCtrl.setValue(newExperience.endDate || null);
    }

    @Output() formSubmitted = new EventEmitter<any>();

    nameCtrl: FormControl;
    startDateCtrl: FormControl;
    endDateCtrl: FormControl;

    experienceForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.nameCtrl = fb.control('', Validators.required);
        this.startDateCtrl = fb.control('');
        this.endDateCtrl = fb.control('');

        this.experienceForm = fb.group({
            name: this.nameCtrl,
            startDate: this.startDateCtrl,
            endDate: this.endDateCtrl
        });
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.experienceForm.value);
        this.formSubmitted.emit(this.experienceForm.value);
    }
}
