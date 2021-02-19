import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetsSecondairesComponent } from './effets-secondaires.component';

describe('EffetsSecondairesComponent', () => {
  let component: EffetsSecondairesComponent;
  let fixture: ComponentFixture<EffetsSecondairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffetsSecondairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffetsSecondairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
