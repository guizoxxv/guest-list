import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsCounterComponent } from './guests-counter.component';

describe('GuestsCounterComponent', () => {
  let component: GuestsCounterComponent;
  let fixture: ComponentFixture<GuestsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
