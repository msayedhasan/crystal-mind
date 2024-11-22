import { Component } from '@angular/core';
import { CustomerData } from './data/data';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  // customers
  line_multi: any[] = CustomerData.customers;
  line_view: [number, number] = [600, 300];

  // options
  line_legend: boolean = false;
  line_showLabels: boolean = true;
  line_animations: boolean = true;
  line_xAxis: boolean = true;
  line_yAxis: boolean = true;
  line_showYAxisLabel: boolean = true;
  line_showXAxisLabel: boolean = true;
  line_xAxisLabel: string = 'Days';
  line_yAxisLabel: string = 'Customers';
  line_timeline: boolean = true;

  line_colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  ///////////////////////////////////////
  avg_check_single = [
    {
      name: 'Average Check (L.E.)',
      value: 250,
    },
    {
      name: 'Average Checks/Day',
      value: 100,
    },
  ];
  avg_check_view: any = [450, 160];
  avg_check_colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  avg_check_cardColor: string = '#232837';
  ///////////////////////////////////////
  // periods during day
  period_single: any[] = CustomerData.periods;
  period_view: any = [400, 300];
  // options
  period_showXAxis = true;
  period_showYAxis = true;
  period_gradient = false;
  period_showLegend = false;
  period_showXAxisLabel = true;
  period_xAxisLabel = 'Periods';
  period_showYAxisLabel = true;
  period_yAxisLabel = 'Spending';

  period_colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  //**----------------------------------- */
  // spends during day
  spend_single: any[] = CustomerData.spends;
  spend_view: any = [350, 300];
  // options
  spend_showXAxis = true;
  spend_showYAxis = true;
  spend_gradient = false;
  spend_showLegend = false;
  spend_showXAxisLabel = true;
  spend_xAxisLabel = 'Spends (L.E.)';
  spend_showYAxisLabel = true;
  spend_yAxisLabel = 'Count';

  spend_colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  //**----------------------------------- */
  // male , female
  gender_multi = CustomerData.gender;
  gender_view: any = [520, 250];

  // options
  gender_showXAxis: boolean = true;
  gender_showYAxis: boolean = true;
  gender_gradient: boolean = false;
  gender_showLegend: boolean = true;
  gender_showXAxisLabel: boolean = true;
  gender_xAxisLabel: string = 'Age';
  gender_showYAxisLabel: boolean = true;
  gender_yAxisLabel: string = 'Spending';
  gender_legendTitle: string = 'Gender';

  gender_colorScheme = {
    domain: ['#0c425d', '#ff005f', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  /////////////////////////////////////////
  // retention
  pie_retention_single: any[] = CustomerData.retention;
  pie_retention_view: [number, number] = [320, 250];

  // options
  pie_retention_gradient: boolean = true;
  pie_retention_showLegend: boolean = false;
  pie_retention_showLabels: boolean = true;
  pie_retention_isDoughnut: boolean = false;
  pie_retention_legendPosition = LegendPosition.Below;

  pie_retention_colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  /////////////////////////////////////////
  // payment
  pie_payment_single: any[] = CustomerData.payment;
  pie_payment_view: [number, number] = [320, 250];

  // options
  pie_payment_gradient: boolean = false;
  pie_payment_showLegend: boolean = false;
  pie_payment_showLabels: boolean = true;
  pie_payment_isDoughnut: boolean = false;
  pie_payment_legendPosition = LegendPosition.Below;

  pie_payment_colorScheme: Color = {
    domain: ['#0c425d', '#ff005f'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  ///////////////////////////////////////
  perTable_single = CustomerData.perTable;
  perTable_view: [number, number] = [350, 300];

  // options
  perTable_showXAxis: boolean = true;
  perTable_showYAxis: boolean = true;
  perTable_gradient: boolean = false;
  perTable_showLegend: boolean = false;
  perTable_showXAxisLabel: boolean = true;
  perTable_yAxisLabel: string = 'Guest per Table';
  perTable_showYAxisLabel: boolean = true;
  perTable_xAxisLabel: string = 'Count';

  perTable_colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
}
