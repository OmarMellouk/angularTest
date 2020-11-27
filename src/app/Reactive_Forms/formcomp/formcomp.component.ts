import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  x:boolean = true;
  profileform: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.profileform = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telephone: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern('.*com$')]]
      })
    });

    this.profileform.valueChanges.subscribe(
      changes=>{
        if(isNaN(changes.telephone)){
          this.profileform.patchValue({
            telephone: changes.telephone.replace(/[a-zA-Z]/g,'')
          });
        }
      }
    );
  }

  ngOnInit(): void {
  }

  get getname(){
    return this.profileform.get('username');
  }
  get getpassword(){
    return this.profileform.get('password');
  }
  get gettelephone(){
    return this.profileform.get('telephone');
  }
  get getcity(){
    return this.profileform.get('address').get('city');
  }
  get getemail(){
    return this.profileform.get('address').get('email');
  }

  onsubmit(){
    console.log(this.profileform.value);
  }
}
