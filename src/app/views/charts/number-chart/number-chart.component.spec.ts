import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberChartComponent } from './number-chart.component';

describe('NumberChartComponent', () => {
  let component: NumberChartComponent;
  let fixture: ComponentFixture<NumberChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberChartComponent]
    });
    fixture = TestBed.createComponent(NumberChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
