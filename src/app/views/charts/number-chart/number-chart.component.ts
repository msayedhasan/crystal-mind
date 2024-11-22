import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-number-chart',
  templateUrl: './number-chart.component.html',
  styleUrls: ['./number-chart.component.scss']
})
export class NumberChartComponent {
  @Input() single: any[] = [];
  @Input() view: any = [700, 400];
  @Input() colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  @Input() cardColor: string = '#232837';
}
