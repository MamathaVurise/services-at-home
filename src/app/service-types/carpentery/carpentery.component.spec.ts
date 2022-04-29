import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpenteryComponent } from './carpentery.component';

describe('CarpenteryComponent', () => {
  let component: CarpenteryComponent;
  let fixture: ComponentFixture<CarpenteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpenteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpenteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
