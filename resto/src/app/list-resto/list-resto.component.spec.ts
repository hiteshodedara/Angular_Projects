import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestoComponent } from './list-resto.component';

describe('ListRestoComponent', () => {
  let component: ListRestoComponent;
  let fixture: ComponentFixture<ListRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRestoComponent]
    });
    fixture = TestBed.createComponent(ListRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
