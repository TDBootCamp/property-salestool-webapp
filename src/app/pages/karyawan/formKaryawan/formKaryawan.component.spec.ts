import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKaryawanComponent } from './formKaryawan.component';

describe('FormComponent', () => {
  let component: FormKaryawanComponent;
  let fixture: ComponentFixture<FormKaryawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKaryawanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
