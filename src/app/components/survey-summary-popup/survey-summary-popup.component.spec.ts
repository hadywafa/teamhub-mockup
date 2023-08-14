import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySummaryPopupComponent } from './survey-summary-popup.component';

describe('SurveySummaryPopupComponent', () => {
  let component: SurveySummaryPopupComponent;
  let fixture: ComponentFixture<SurveySummaryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySummaryPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveySummaryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
