import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passion1Component } from './passion1.component';

describe('Passion1Component', () => {
  let component: Passion1Component;
  let fixture: ComponentFixture<Passion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Passion1Component]
    });
    fixture = TestBed.createComponent(Passion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
