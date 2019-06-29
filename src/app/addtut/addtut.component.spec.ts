import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtutComponent } from './addtut.component';

describe('AddtutComponent', () => {
  let component: AddtutComponent;
  let fixture: ComponentFixture<AddtutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
