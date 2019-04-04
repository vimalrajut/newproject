import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScratchOrderComponent } from './create-scratch-order.component';

describe('CreateScratchOrderComponent', () => {
  let component: CreateScratchOrderComponent;
  let fixture: ComponentFixture<CreateScratchOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateScratchOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScratchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
