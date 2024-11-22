import { Component, ViewChild } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { EmployeeData } from './data/data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  displayedColumns: string[] = [
    'Name',
    'Attendance',
    'Late',
    'Absent',
    'Rating',
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
  {
    Attendance: 63,
    Late: 10,
    Absent: 5,
    Name: 'Mohamed',
    'Rating': 4,
  },
  {
    Attendance: 63,
    Late: 8,
    Absent: 3,
    Name: 'Ahmed',
    'Rating': 2.5,
  },
  {
    Attendance: 63,
    Late: 35,
    Absent: 4,
    Name: 'Eslam',
    'Rating': 3,
  },
  {
    Attendance: 63,
    Late: 20,
    Absent: 8,
    Name: 'Ahmed',
    'Rating': 4,
  },
  {
    Attendance: 63,
    Late: 30,
    Absent: 2,
    Name: 'Ahmed',
    'Rating': 2,
  },
  {
    Attendance: 63,
    Late: 18,
    Absent: 2,
    Name: 'Mostafa',
    'Rating': 3,
  },
  {
    Attendance: 63,
    Late: 32,
    Absent: 1,
    Name: 'Mahmoud',
    'Rating': 1.5,
  },
  {
    Attendance: 63,
    Late: 30,
    Absent: 5,
    Name: 'Abdel rahman',
    'Rating': 2.5,
  },
  {
    Attendance: 63,
    Late: 40,
    Absent: 4,
    Name: 'Sayed',
    'Rating': 4.5,
  },
  {
    Attendance: 63,
    Late: 15,
    Absent: 3,
    Name: 'Alaa',
    'Rating': 3.5,
  },
];
