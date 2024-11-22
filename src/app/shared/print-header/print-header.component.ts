import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-print-header',
  templateUrl: './print-header.component.html',
  styleUrls: ['./print-header.component.scss']
})
export class PrintHeaderComponent {
@Input() name!: string;
@Input() phone!: string;
@Input() age!: string;
@Input() gender!: string;
}
