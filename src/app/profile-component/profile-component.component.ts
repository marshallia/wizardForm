import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
    profileForm = this.form.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    country: ['Indonesia', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    skills: this.form.array([
        this.form.control('')
      ])
    });

    skill = this.form.group({
      skillname: ['', Validators.required],
      score: ['', Validators.required]
    });

    get skills() {
      return this.profileForm.get('skills') as FormArray;
    }

   constructor(private form: FormBuilder) { }

    ngOnInit(): void {}

    add() {
      this.skills.push(this.skill);
    }
    remove(i: number) {
      this.skills.removeAt(i);
    }
    onSubmit() {

    }
}
