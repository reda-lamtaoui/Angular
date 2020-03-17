import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCreateComponent } from './pop-up-create.component';

describe('PopUpCreateComponent', () => {
  let component: PopUpCreateComponent;
  let fixture: ComponentFixture<PopUpCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
