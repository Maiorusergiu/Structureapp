import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDotsComponent } from './list-dots.component';

describe('ListDotsComponent', () => {
  let component: ListDotsComponent;
  let fixture: ComponentFixture<ListDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
