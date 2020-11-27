import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcomp1Component } from './formcomp1.component';

describe('Formcomp1Component', () => {
  let component: Formcomp1Component;
  let fixture: ComponentFixture<Formcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
