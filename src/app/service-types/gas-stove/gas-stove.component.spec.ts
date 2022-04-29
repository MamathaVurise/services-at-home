import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStoveComponent } from './gas-stove.component';

describe('GasStoveComponent', () => {
  let component: GasStoveComponent;
  let fixture: ComponentFixture<GasStoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasStoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasStoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
