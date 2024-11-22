import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
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
export class InventoryComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'name',
    'Qty',
    'Weekly Usage',
    'Status',
    'Expiration',
  ];
  dataSource = new MatTableDataSource(rows);

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
}

const rows = [
  { name: 'Burger', Qty: 30, 'Weekly Usage': 5, Status: 'Low', Expiration: 3 },
  {
    name: 'Product',
    Qty: 25,
    'Weekly Usage': 3,
    Status: 'Sufficient',
    Expiration: 2,
  },
  {
    name: 'Ketchup',
    Qty: 8,
    'Weekly Usage': 5,
    Status: 'Critical',
    Expiration: 5,
  },
  { name: 'Burger', Qty: 33, 'Weekly Usage': 8, Status: 'Low', Expiration: 2 },
  {
    name: 'Product',
    Qty: 35,
    'Weekly Usage': 6,
    Status: 'Sufficient',
    Expiration: 5,
  },
  { name: 'Burger', Qty: 40, 'Weekly Usage': 10, Status: 'Low', Expiration: 2 },
  {
    name: 'Ketchup',
    Qty: 20,
    'Weekly Usage': 10,
    Status: 'Critical',
    Expiration: 3,
  },
  { name: 'Burger', Qty: 25, 'Weekly Usage': 5, Status: 'Low', Expiration: 1 },
  {
    name: 'Ketchup',
    Qty: 30,
    'Weekly Usage': 20,
    Status: 'Critical',
    Expiration: 5,
  },
  { name: 'Burger', Qty: 28, 'Weekly Usage': 7, Status: 'Low', Expiration: 2 },
  {
    name: 'Ketchup',
    Qty: 18,
    'Weekly Usage': 10,
    Status: 'Critical',
    Expiration: 3,
  },
  {
    name: 'Product',
    Qty: 32,
    'Weekly Usage': 4,
    Status: 'Sufficient',
    Expiration: 2,
  },
  {
    name: 'Ketchup',
    Qty: 30,
    'Weekly Usage': 20,
    Status: 'Critical',
    Expiration: 3,
  },
  {
    name: 'Product',
    Qty: 40,
    'Weekly Usage': 5,
    Status: 'Sufficient',
    Expiration: 1,
  },
  {
    name: 'Ketchup',
    Qty: 15,
    'Weekly Usage': 8,
    Status: 'Critical',
    Expiration: 4,
  },
  {
    name: 'Product',
    Qty: 20,
    'Weekly Usage': 3,
    Status: 'Sufficient',
    Expiration: 6,
  },
  { name: 'Burger', Qty: 20, 'Weekly Usage': 4, Status: 'Low', Expiration: 2 },
  {
    name: 'Product',
    Qty: 28,
    'Weekly Usage': 2,
    Status: 'Sufficient',
    Expiration: 1,
  },
];
