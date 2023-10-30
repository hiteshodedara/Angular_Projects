import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdtailsComponent } from './userdtails.component';

describe('UserdtailsComponent', () => {
  let component: UserdtailsComponent;
  let fixture: ComponentFixture<UserdtailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdtailsComponent]
    });
    fixture = TestBed.createComponent(UserdtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
