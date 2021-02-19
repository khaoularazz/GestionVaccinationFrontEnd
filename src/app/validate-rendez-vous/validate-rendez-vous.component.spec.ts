import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRendezVousComponent } from './validate-rendez-vous.component';

describe('ValidateRendezVousComponent', () => {
  let component: ValidateRendezVousComponent;
  let fixture: ComponentFixture<ValidateRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
