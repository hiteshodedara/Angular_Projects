import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcomsComponent } from './ngcoms.component';

describe('NgcomsComponent', () => {
  let component: NgcomsComponent;
  let fixture: ComponentFixture<NgcomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcomsComponent]
    });
    fixture = TestBed.createComponent(NgcomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
