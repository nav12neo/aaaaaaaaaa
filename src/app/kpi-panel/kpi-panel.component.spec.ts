import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiPanelComponent } from './kpi-panel.component';

describe('KpiPanelComponent', () => {
  let component: KpiPanelComponent;
  let fixture: ComponentFixture<KpiPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
