import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Formcomp2Component } from './Reactive_Forms/formcomp2/formcomp2.component';
import { FormcompComponent } from './Reactive_Forms/formcomp/formcomp.component';
import { AsyncValidatorComponent } from './Reactive_Forms/async-validator/async-validator.component';
import { Formcomp1Component } from './Dynamic_Forms/formcomp1/formcomp1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcompComponent,
    Formcomp2Component,
    AsyncValidatorComponent,
    Formcomp1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
