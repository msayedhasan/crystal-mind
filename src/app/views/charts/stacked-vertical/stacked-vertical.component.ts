import { Component, Input } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-stacked-vertical',
  templateUrl: './stacked-vertical.component.html',
  styleUrls: ['./stacked-vertical.component.scss'],
})
export class StackedVerticalComponent {
  @Input() multi: any;
  @Input() view: [number, number] = [700, 400];

  // options
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() gradient: boolean = false;
  @Input() showLegend: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() xAxisLabel: string = 'Country';
  @Input() showYAxisLabel: boolean = true;
  @Input() yAxisLabel: string = 'Population';
  @Input() animations: boolean = true;

  @Input() colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
}
