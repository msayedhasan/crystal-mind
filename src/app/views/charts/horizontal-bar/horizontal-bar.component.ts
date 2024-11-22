import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss'],
})
export class HorizontalBarComponent {
  @Input() single: any[] = [];
  @Input() view: [number, number] = [700, 400];

  // options
  @Input() showXAxis: boolean = false;
  @Input() showYAxis: boolean = false;
  @Input() gradient: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() showXAxisLabel: boolean = false;
  @Input() yAxisLabel: string = '';
  @Input() showYAxisLabel: boolean = false;
  @Input() xAxisLabel: string = '';

  @Input() colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
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
