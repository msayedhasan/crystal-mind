import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// import { multi } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() multi: any[] = [];
  @Input() view: [number, number] = [700, 300];

  // options
  @Input() legend: boolean = false;
  @Input() showLabels: boolean = false;
  @Input() animations: boolean = false;
  @Input() xAxis: boolean = false;
  @Input() yAxis: boolean = false;
  @Input() showYAxisLabel: boolean = false;
  @Input() showXAxisLabel: boolean = false;
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() timeline: boolean = false;

  @Input() colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
