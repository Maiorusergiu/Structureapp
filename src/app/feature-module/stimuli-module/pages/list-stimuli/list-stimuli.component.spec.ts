import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStimuliComponent } from './list-stimuli.component';

describe('ListStimuliComponent', () => {
  let component: ListStimuliComponent;
  let fixture: ComponentFixture<ListStimuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStimuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStimuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
