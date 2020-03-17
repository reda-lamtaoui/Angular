import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteToolbarComponent } from './universite-toolbar.component';

describe('UniversiteToolbarComponent', () => {
  let component: UniversiteToolbarComponent;
  let fixture: ComponentFixture<UniversiteToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversiteToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversiteToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
