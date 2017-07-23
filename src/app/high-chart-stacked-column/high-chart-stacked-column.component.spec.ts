import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartStackedColumnComponent } from './high-chart-stacked-column.component';

describe('HighChartStackedColumnComponent', () => {
  let component: HighChartStackedColumnComponent;
  let fixture: ComponentFixture<HighChartStackedColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighChartStackedColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartStackedColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
