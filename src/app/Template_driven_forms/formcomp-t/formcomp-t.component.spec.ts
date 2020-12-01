import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompTComponent } from './formcomp-t.component';

describe('FormcompTComponent', () => {
  let component: FormcompTComponent;
  let fixture: ComponentFixture<FormcompTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcompTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
