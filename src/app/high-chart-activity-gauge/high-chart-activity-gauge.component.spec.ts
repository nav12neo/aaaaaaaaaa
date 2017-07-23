import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartActivityGaugeComponent } from './high-chart-activity-gauge.component';

describe('HighChartActivityGaugeComponent', () => {
  let component: HighChartActivityGaugeComponent;
  let fixture: ComponentFixture<HighChartActivityGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighChartActivityGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartActivityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
