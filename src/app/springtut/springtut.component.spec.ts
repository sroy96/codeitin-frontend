import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringtutComponent } from './springtut.component';

describe('SpringtutComponent', () => {
  let component: SpringtutComponent;
  let fixture: ComponentFixture<SpringtutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringtutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringtutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
