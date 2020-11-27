import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateName } from './name.validator';
import { validatePassword } from './password.validator';

@Component({
  selector: 'app-formcomp2',
  templateUrl: './formcomp2.component.html',
  styleUrls: ['./formcomp2.component.css']
})
export class Formcomp2Component implements OnInit {

  myform: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  password: FormControl;
  cpassword: FormControl;

  constructor() { 
    this.initFormControls();
    this.createForm();
  }

  ngOnInit(): void {
  }

  initFormControls(){
    this.firstname = new FormControl('', [Validators.required, validateName(/[0-9]/g)]);
    this.lastname = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.cpassword = new FormControl('', Validators.required);
  }

  createForm(){
    this.myform = new FormGroup({
      fname: this.firstname,
      lname: this.lastname,
      pwd: this.password,
      cpwd: this.cpassword
    },
    validatePassword('pwd','cpwd')
    );
  }

}
