import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceCookerComponent } from './rice-cooker.component';

describe('RiceCookerComponent', () => {
  let component: RiceCookerComponent;
  let fixture: ComponentFixture<RiceCookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceCookerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceCookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
