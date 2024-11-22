import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {
  constructor(private modalService: BsModalService){}
  modalRef: any;
  
  @Input() name!: string;
  @Input() phone!: string;
  @Input() age!: string;
  @Input() gender!: string;

  
  hideModal() {
    this.modalService.hide();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
