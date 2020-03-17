import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCreationComponent } from './pop-up-creation.component';

describe('PopUpCreationComponent', () => {
  let component: PopUpCreationComponent;
  let fixture: ComponentFixture<PopUpCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
