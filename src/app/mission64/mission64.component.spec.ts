import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission64Component } from './mission64.component';

describe('Mission64Component', () => {
  let component: Mission64Component;
  let fixture: ComponentFixture<Mission64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mission64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mission64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
