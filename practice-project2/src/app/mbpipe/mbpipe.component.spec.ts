import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbpipeComponent } from './mbpipe.component';

describe('MbpipeComponent', () => {
  let component: MbpipeComponent;
  let fixture: ComponentFixture<MbpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MbpipeComponent]
    });
    fixture = TestBed.createComponent(MbpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
