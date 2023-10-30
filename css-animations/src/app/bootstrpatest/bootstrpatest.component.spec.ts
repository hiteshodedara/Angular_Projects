import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrpatestComponent } from './bootstrpatest.component';

describe('BootstrpatestComponent', () => {
  let component: BootstrpatestComponent;
  let fixture: ComponentFixture<BootstrpatestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrpatestComponent]
    });
    fixture = TestBed.createComponent(BootstrpatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
