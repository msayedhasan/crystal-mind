import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GroupVerticalComponent } from './group-vertical/group-vertical.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';
import { NumberChartComponent } from './number-chart/number-chart.component';
import { StackedVerticalComponent } from './stacked-vertical/stacked-vertical.component';
import { PieGridComponent } from './pie-grid/pie-grid.component';
import { HeatMapComponent } from './heat-map/heat-map.component';

@NgModule({
  declarations: [
    LineChartComponent,
    HorizontalBarComponent,
    PieChartComponent,
    GroupVerticalComponent,
    VerticalBarComponent,
    NumberChartComponent,
    StackedVerticalComponent,
    PieGridComponent,
    HeatMapComponent,
  ],
  imports: [CommonModule, NgxChartsModule],
  exports: [
    LineChartComponent,
    HorizontalBarComponent,
    PieChartComponent,
    GroupVerticalComponent,
    VerticalBarComponent,
    NumberChartComponent,
    StackedVerticalComponent,
    PieGridComponent,
    HeatMapComponent,
  ],
})
export class ChartsModule {}
