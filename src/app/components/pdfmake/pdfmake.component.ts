import { Component, OnInit, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
//import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.scss']
})
export class PdfmakeComponent implements OnInit {

  //@ViewChild('downloadButton') downloadButton: ElementRef = new ElementRef(null);

  constructor() { }

  ngOnInit(): void {

  }

  // ngAfterViewInit() {
  //   this.downloadButton.nativeElement.addEventListener('click', () => {
  //     // Genera el PDF y lo descarga al presionar el botón
  //     const doc = new jsPDF();
  //     doc.text('Mi título', 10, 10);
  //     doc.text('Mi contenido', 10, 20);
  //     doc.save('mi_archivo.pdf');
  //     FileSaver.saveAs(doc.output('blob'), 'mi_archivo.pdf');
  //   });
  // }

}
