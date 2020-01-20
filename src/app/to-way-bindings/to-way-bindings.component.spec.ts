import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWayBindingsComponent } from './to-way-bindings.component';

describe('ToWayBindingsComponent', () => {
  let component: ToWayBindingsComponent;
  let fixture: ComponentFixture<ToWayBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToWayBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToWayBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
