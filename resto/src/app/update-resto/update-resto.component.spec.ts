import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestoComponent } from './update-resto.component';

describe('UpdateRestoComponent', () => {
  let component: UpdateRestoComponent;
  let fixture: ComponentFixture<UpdateRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRestoComponent]
    });
    fixture = TestBed.createComponent(UpdateRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
