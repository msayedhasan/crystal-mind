import { Component, Input, TemplateRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  constructor(
    private modalService: BsModalService,
  ){}
  modalRef: any;
  @Input() name!: string;
  @Input() phone!: string;
  @Input() age!: string;
  @Input() gender!: string;

  exportToPDF() {
    const data = document.getElementById('print-container'); // The HTML element to capture

    if (data) {
      html2canvas(data, { scale: 2 }).then((canvas) => {
        const imgWidth = 190; // Width in mm (A4 standard)
        const pageHeight = 277; // Height in mm (A4 standard)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        let position = 0;

        // If content overflows, add pages
        if (imgHeight > pageHeight) {
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, pageHeight);
          position = -pageHeight;
        } else {
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        }

        pdf.save(`${this.name}.pdf`);
      });
    }
  }

  hideModal() {
    this.modalService.hide();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
