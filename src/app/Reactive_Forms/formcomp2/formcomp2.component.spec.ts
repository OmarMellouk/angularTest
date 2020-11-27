import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcomp2Component } from './formcomp2.component';

describe('Formcomp2Component', () => {
  let component: Formcomp2Component;
  let fixture: ComponentFixture<Formcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
