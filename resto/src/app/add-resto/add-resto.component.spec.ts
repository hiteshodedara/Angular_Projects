import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestoComponent } from './add-resto.component';

describe('AddRestoComponent', () => {
  let component: AddRestoComponent;
  let fixture: ComponentFixture<AddRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestoComponent]
    });
    fixture = TestBed.createComponent(AddRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
