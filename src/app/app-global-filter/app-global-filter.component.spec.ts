import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFilterComponent } from './app-global-filter.component';

describe('GlobalFilterComponent', () => {
  let component: GlobalFilterComponent;
  let fixture: ComponentFixture<GlobalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
