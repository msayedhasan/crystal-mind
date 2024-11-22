import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationalComponent } from './operational.component';

const routes: Routes = [
  {
    path: '',
    component: OperationalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationalRoutingModule {}
