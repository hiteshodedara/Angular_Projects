import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrConvertComponent } from './curr-convert.component';

describe('CurrConvertComponent', () => {
  let component: CurrConvertComponent;
  let fixture: ComponentFixture<CurrConvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrConvertComponent]
    });
    fixture = TestBed.createComponent(CurrConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
