import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpModificationComponent } from './pop-up-modification.component';

describe('PopUpModificationComponent', () => {
  let component: PopUpModificationComponent;
  let fixture: ComponentFixture<PopUpModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
