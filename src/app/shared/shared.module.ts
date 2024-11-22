import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrintHeaderComponent } from './print-header/print-header.component';
import { PrintComponent } from './print/print.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    PrintHeaderComponent,
    PrintComponent,
    InstructionsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  exports: [
    PrintHeaderComponent,
    PrintComponent,
    InstructionsComponent,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
