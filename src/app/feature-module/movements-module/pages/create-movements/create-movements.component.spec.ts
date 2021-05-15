import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovementsComponent } from './create-movements.component';

describe('CreateMovementsComponent', () => {
  let component: CreateMovementsComponent;
  let fixture: ComponentFixture<CreateMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
