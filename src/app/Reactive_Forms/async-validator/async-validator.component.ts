import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernameValidator } from './async.validator';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.scss']
})
export class AsyncValidatorComponent implements OnInit {

  ngOnInit(): void {
  }

  myForm: FormGroup;
  username: FormControl;
  lazyUsername: FormControl;
  constructor() {
    this.initFormControls();
    this.createForm();
  }

  initFormControls() {
    this.lazyUsername = new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [usernameValidator()],
      updateOn: 'blur'
    });
    this.username = new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [usernameValidator()]
    });
  }

  createForm() {
    this.myForm = new FormGroup({
      username: this.username,
      lazyUsername: this.lazyUsername
    });
  }
}
