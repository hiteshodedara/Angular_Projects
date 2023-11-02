import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtableComponent } from './mbtable.component';

describe('MbtableComponent', () => {
  let component: MbtableComponent;
  let fixture: ComponentFixture<MbtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MbtableComponent]
    });
    fixture = TestBed.createComponent(MbtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
