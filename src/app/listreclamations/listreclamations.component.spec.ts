import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreclamationsComponent } from './listreclamations.component';

describe('ListreclamationsComponent', () => {
  let component: ListreclamationsComponent;
  let fixture: ComponentFixture<ListreclamationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListreclamationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
