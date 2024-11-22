import { Component, Input } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss'],
})
export class HeatMapComponent {
  @Input() multi: any;
  @Input() view: [number, number] = [700, 300];

  // options
  @Input() legend: boolean = true;
  @Input() showLabels: boolean = true;
  @Input() animations: boolean = true;
  @Input() xAxis: boolean = true;
  @Input() yAxis: boolean = true;
  @Input() showYAxisLabel: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() xAxisLabel: string = 'Country';
  @Input() yAxisLabel: string = 'Year';

  @Input() colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
}
