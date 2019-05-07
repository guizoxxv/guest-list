import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListNavbarComponent } from './guest-list-navbar.component';

describe('NavbarComponent', () => {
  let component: GuestListNavbarComponent;
  let fixture: ComponentFixture<GuestListNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuestListNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestListNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
