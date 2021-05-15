import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExperimentsComponent } from './create-experiments.component';

describe('CreateExperimentsComponent', () => {
  let component: CreateExperimentsComponent;
  let fixture: ComponentFixture<CreateExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
