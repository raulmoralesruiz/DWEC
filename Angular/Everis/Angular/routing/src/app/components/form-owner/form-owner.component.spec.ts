import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOwnerComponent } from './form-owner.component';

describe('FormOwnerComponent', () => {
  let component: FormOwnerComponent;
  let fixture: ComponentFixture<FormOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
