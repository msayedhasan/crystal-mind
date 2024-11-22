import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FinancialData } from './data/data';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements AfterViewInit {
  //**----------------------------------- */
  // male , female
  revenue_multi = FinancialData.revenue;
  revenue_view: any = [950, 300];

  // options
  revenue_showXAxis: boolean = true;
  revenue_showYAxis: boolean = true;
  revenue_gradient: boolean = false;
  revenue_showLegend: boolean = true;
  revenue_showXAxisLabel: boolean = true;
  revenue_xAxisLabel: string = 'Months';
  revenue_showYAxisLabel: boolean = true;
  revenue_yAxisLabel: string = 'Money';
  revenue_legendTitle: string = ' ';

  revenue_colorScheme = {
    domain: ['#5Ac454', '#ff005f', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  revenue_animations: boolean = true;
  /////////////////////////////////////////
  // retention
  expenses_single: any[] = FinancialData.expenses;
  expenses_view: [number, number] = [420, 300];

  // options
  expenses_gradient: boolean = true;
  expenses_showLegend: boolean = false;
  expenses_showLabels: boolean = true;
  expenses_isDoughnut: boolean = false;
  expenses_legendPosition = LegendPosition.Below;

  expenses_colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '0c425d'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  /////////////////////////////////////////
  profit_single = FinancialData.profit;
  profit_view: [number, number] = [400, 300];

  // options
  profit_showLegend: boolean = true;
  profit_showLabels: boolean = true;

  profit_colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  //** ----------------- */
  displayedColumns: string[] = [
    'name',
    'Date',
    'Cost',
  ];
  dataSource = new MatTableDataSource(rows);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
const rows = [
  { name: 'Rent',  Date: '1-12-2024', Cost: -1000 },
  { name: 'Utilities',  Date: '1-12-2024', Cost: -1000 },
  { name: 'Salaries',  Date: '1-12-2024', Cost: -1000 },
  { name: 'Loan',  Date: '1-12-2024', Cost: 3000 },
  { name: 'Investor',  Date: '1-12-2024', Cost: 1000 },
];