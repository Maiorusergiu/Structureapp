import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStimuliComponent } from './create-stimuli.component';

describe('CreateStimuliComponent', () => {
  let component: CreateStimuliComponent;
  let fixture: ComponentFixture<CreateStimuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStimuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStimuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
