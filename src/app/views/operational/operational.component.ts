import { Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { OperationalData } from './data/data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class OperationalComponent {
  //** ----------------------------------- */
  // spends during day
  waiters_single: any[] = OperationalData.waiters;
  waiters_view: any = [300, 200];
  // options
  waiters_showXAxis = true;
  waiters_showYAxis = true;
  waiters_gradient = false;
  waiters_showLegend = false;
  waiters_showXAxisLabel = true;
  waiters_xAxisLabel = 'Waiters';
  waiters_showYAxisLabel = true;
  waiters_yAxisLabel = 'Orders';

  waiters_colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  //**----------------------------------- */
  //** ----------------------------------- */
  // spends during day
  cashiers_single: any[] = OperationalData.cashiers;
  cashiers_view: any = [300, 200];
  // options
  cashiers_showXAxis = true;
  cashiers_showYAxis = true;
  cashiers_gradient = false;
  cashiers_showLegend = false;
  cashiers_showXAxisLabel = true;
  cashiers_xAxisLabel = 'Cashiers';
  cashiers_showYAxisLabel = true;
  cashiers_yAxisLabel = 'Orders';

  cashiers_colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  //**----------------------------------- */

  //**----------------------------------- */
  // customers
  cost_multi: any[] = OperationalData.costs;
  cost_view: [number, number] = [700, 300];

  // options
  cost_legend: boolean = false;
  cost_showLabels: boolean = true;
  cost_animations: boolean = true;
  cost_xAxis: boolean = true;
  cost_yAxis: boolean = true;
  cost_showYAxisLabel: boolean = true;
  cost_showXAxisLabel: boolean = true;
  cost_xAxisLabel: string = 'Month';
  cost_yAxisLabel: string = 'Costs';
  cost_timeline: boolean = true;

  cost_colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  //**----------------------------------- */
  //**----------------------------------- */

  displayedColumns: string[] = [
    'Order',
    'User',
    'Cashier',
    'Waiter',
    'Cost',
    'time "min"',
    'Date',
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  isotopeColumnsToDisplay: string[] = ['Order', 'Cost'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  expandedElement: null | undefined;
  toggleRow(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
    console.log(this.expandedElement);
  }

  isExpanded(element: any): boolean {
    return this.expandedElement === element;
  }
}

const ELEMENT_DATA = [
  {
    id: 1,
    Order: '4 Items',
    User: 'User 1',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 100,
    Date: '1-11-2024',
    'time "min"': 30,
    details: [
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
    ],
  },
  {
    id: 2,
    Order: '3 Items',
    User: 'User 2',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 46,
    Date: '1-11-2024',
    'time "min"': 120,
    details: [
      {
        Order: 'Burger',
        cost: 22,
      },
      {
        Order: 'Salad',
        cost: 12,
      },
      {
        Order: 'Salad',
        cost: 12,
      },
    ],
  },
  {
    id: 3,
    Order: '2 Items',
    User: 'User 3',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 45,
    Date: '1-11-2024',
    'time "min"': 60,
    details: [
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 15,
      },
    ],
  },
  {
    id: 4,
    Order: '4 Items',
    User: 'User 4',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 60,
    Date: '1-11-2024',
    'time "min"': 45,
    details: [
      {
        Order: 'Burger',
        cost: 10,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
      {
        Order: 'Burger',
        cost: 10,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
    ],
  },
  {
    id: 5,
    Order: '4 Items',
    User: 'User 5',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 100,
    Date: '1-11-2024',
    'time "min"': 20,
    details: [
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
    ],
  },
  {
    id: 6,
    Order: '4 Items',
    User: 'User 6',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 80,
    Date: '1-11-2024',
    'time "min"': 15,
    details: [
      {
        Order: 'Burger',
        cost: 20,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
      {
        Order: 'Burger',
        cost: 20,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
    ],
  },
  {
    id: 7,
    Order: '4 Items',
    User: 'User 7',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 50,
    Date: '1-11-2024',
    'time "min"': 60,
    details: [
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
    ],
  },
  {
    id: 8,
    Order: '4 Items',
    User: 'User 8',
    Cashier: 'Ahmed',
    Waiter: 'Eslam',
    Cost: 50,
    Date: '1-11-2024',
    'time "min"': 35,
    details: [
      {
        Order: 'Burger',
        cost: 30,
      },
      {
        Order: 'Salad',
        cost: 20,
      },
    ],
  },
];
