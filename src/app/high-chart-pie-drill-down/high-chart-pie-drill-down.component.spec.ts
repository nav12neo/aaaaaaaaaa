import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartPieDrillDownComponent } from './high-chart-pie-drill-down.component';

describe('HighChartPieDrillDownComponent', () => {
  let component: HighChartPieDrillDownComponent;
  let fixture: ComponentFixture<HighChartPieDrillDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighChartPieDrillDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartPieDrillDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
