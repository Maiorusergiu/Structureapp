import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFramesComponent } from './create-frames.component';

describe('CreateFramesComponent', () => {
  let component: CreateFramesComponent;
  let fixture: ComponentFixture<CreateFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
