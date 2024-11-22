import { Component, Input } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-group-vertical',
  templateUrl: './group-vertical.component.html',
  styleUrls: ['./group-vertical.component.scss']
})
export class GroupVerticalComponent {
  @Input() multi: any[] = [];
  @Input() view: any = [700, 400];

  // options
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() gradient: boolean = true;
  @Input() showLegend: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() xAxisLabel: string = 'Country';
  @Input() showYAxisLabel: boolean = true;
  @Input() yAxisLabel: string = 'Population';
  @Input() legendTitle: string = 'Years';

  @Input() colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
}
