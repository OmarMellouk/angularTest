import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formcomp2Component } from './Reactive_Forms/formcomp2/formcomp2.component';
import { FormcompComponent } from './Reactive_Forms/formcomp/formcomp.component';
import { AsyncValidatorComponent } from './Reactive_Forms/async-validator/async-validator.component';
import { Formcomp1Component } from './Dynamic_Forms/formcomp1/formcomp1.component';
import { FormcompTComponent } from './Template_driven_forms/formcomp-t/formcomp-t.component';
import { ParentComponent } from './Test1/parent/parent.component';
import { ChildComponent } from './Test1/child/child.component';
import { Modl1Module } from './Test1/modl1/modl1.module';

@NgModule({
  declarations: [
    AppComponent,
    FormcompComponent,
    Formcomp2Component,
    AsyncValidatorComponent,
    Formcomp1Component,
    FormcompTComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Modl1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
