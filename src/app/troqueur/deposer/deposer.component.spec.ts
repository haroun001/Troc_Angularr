import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerComponent } from './deposer.component';

describe('DeposerComponent', () => {
  let component: DeposerComponent;
  let fixture: ComponentFixture<DeposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
