import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { SalesData } from './data/data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent {
  // Sales
  line_multi: any[] = SalesData.multi;
  line_view: [number, number] = [600, 320];

  // options
  line_legend: boolean = false;
  line_showLabels: boolean = true;
  line_animations: boolean = true;
  line_xAxis: boolean = true;
  line_yAxis: boolean = true;
  line_showYAxisLabel: boolean = true;
  line_showXAxisLabel: boolean = true;
  line_xAxisLabel: string = 'Days';
  line_yAxisLabel: string = 'Sales';
  line_timeline: boolean = true;

  line_colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  ///////////////////////////////////////
  horizontal_single = SalesData.products;
  horizontal_view: [number, number] = [380, 300];

  // options
  horizontal_showXAxis: boolean = true;
  horizontal_showYAxis: boolean = true;
  horizontal_gradient: boolean = false;
  horizontal_showLegend: boolean = false;
  horizontal_showXAxisLabel: boolean = true;
  horizontal_yAxisLabel: string = 'Products';
  horizontal_showYAxisLabel: boolean = true;
  horizontal_xAxisLabel: string = 'Sales';

  horizontal_colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  /////////////////////////////////////////
  pie_orderingType_single: any[] = SalesData.ordering_type;
  pie_orderingType_view: [number, number] = [380, 250];

  // options
  pie_orderingType_gradient: boolean = true;
  pie_orderingType_showLegend: boolean = false;
  pie_orderingType_showLabels: boolean = true;
  pie_orderingType_isDoughnut: boolean = false;
  pie_orderingType_legendPosition = LegendPosition.Below;

  pie_orderingType_colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  ///////////////////////////////////////////
  pie_categories_single: any[] = SalesData.categories;
  pie_categories_view: [number, number] = [380, 250];

  // options
  pie_categories_gradient: boolean = true;
  pie_categories_showLegend: boolean = false;
  pie_categories_showLabels: boolean = true;
  pie_categories_isDoughnut: boolean = false;
  pie_categories_legendPosition = LegendPosition.Below;

  pie_categories_colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
}
