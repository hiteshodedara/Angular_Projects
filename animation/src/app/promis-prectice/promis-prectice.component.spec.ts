import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisPrecticeComponent } from './promis-prectice.component';

describe('PromisPrecticeComponent', () => {
  let component: PromisPrecticeComponent;
  let fixture: ComponentFixture<PromisPrecticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromisPrecticeComponent]
    });
    fixture = TestBed.createComponent(PromisPrecticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
