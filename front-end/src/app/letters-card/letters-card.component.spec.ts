import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCardComponent } from './letters-card.component';

describe('LettersCardComponent', () => {
  let component: LettersCardComponent;
  let fixture: ComponentFixture<LettersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
