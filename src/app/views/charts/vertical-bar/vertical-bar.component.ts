import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.scss']
})
export class VerticalBarComponent {
  @Input() single: any[] = [];
  @Input() multi: any[] = [];

  @Input() view: [number , number] = [700, 400];

  // options
  @Input() showXAxis = true;
  @Input() showYAxis = true;
  @Input() gradient = false;
  @Input() showLegend = true;
  @Input() showXAxisLabel = true;
  @Input() xAxisLabel = 'Country';
  @Input() showYAxisLabel = true;
  @Input() yAxisLabel = 'Population';

  @Input() colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };

}
