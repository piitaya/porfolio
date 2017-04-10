import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
    @Input()
    set category(newCategory) {
        this.nameCtrl.setValue(newCategory.name || null);
        this.valueCtrl.setValue(newCategory.value || 0);
    }

    @Output() formSubmitted = new EventEmitter<any>();

    nameCtrl: FormControl;
    valueCtrl: FormControl;

    categoryForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.nameCtrl = fb.control('', Validators.required);
        this.valueCtrl = fb.control('', Validators.required);

        this.categoryForm = fb.group({
            name: this.nameCtrl,
            value: this.valueCtrl,
        });
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.categoryForm.value);
        this.formSubmitted.emit(this.categoryForm.value);
    }
    }
