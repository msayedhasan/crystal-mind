import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { AuthGuard } from './views/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./views/customers/customers.module').then(
            (m) => m.CustomersModule
          ),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./views/inventory/inventory.module').then(
            (m) => m.InventoryModule
          ),
      },
      {
        path: 'operational',
        loadChildren: () =>
          import('./views/operational/operational.module').then(
            (m) => m.OperationalModule
          ),
      },
      {
        path: 'financial',
        loadChildren: () =>
          import('./views/financial/financial.module').then(
            (m) => m.FinancialModule
          ),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./views/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: '',
        redirectTo: '', // Adjust this according to your main route
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
