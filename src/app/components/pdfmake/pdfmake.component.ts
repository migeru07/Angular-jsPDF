import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
//import jsPDF from 'jspdf';
//import * as jspdf from 'jspdf';
//import 'jspdf-autotable';
//import autoTable from 'jspdf-autotable'
import * as FileSaver from 'file-saver';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}


@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.scss']
})
export class PdfmakeComponent implements OnInit  {

  constructor(

  ) {
    
   }

  //@ViewChild('downloadButton') downloadButtton?: ElementRef;

  ngOnInit(): void {
  }

  downloadBtn() {
    // const doc = new jspdf();
    //   doc.text('Mi título', 10, 10);
    //   doc.text('Mi contenido', 10, 20);
    //   doc.save('mi_archivo.pdf');
    //   FileSaver.saveAs(doc.output('blob'), 'mi_archivo.pdf');
  }

  generatePDF() {
  // Crea una instancia de jsPDF
  let doc = new jsPDF() as jsPDFWithPlugin;

  const textHeight = doc.getTextDimensions('Título del aviso').h + doc.getTextDimensions('Número de reporte: 2023').h + 2;

  // Establece el tamaño y orientación de la hoja
  doc.addPage();
  doc.setPage(1);
  doc.setLineWidth(0.1);

  // Agrega el título del aviso
  doc.setFontSize(20);
  let title = 'Confirmación de Registro';
  let pageWidth = doc.internal.pageSize.getWidth();
  let textWidth = doc.getTextWidth(title);
  let x = (pageWidth - textWidth) / 2;
  doc.text(title, x, 10);

  // Agrega el número de reporte
  doc.setFontSize(10);
  doc.text('Número de reporte: 2023', 15, 20);

  // Genera los datos generales con valores aleatorios
  doc.setFontSize(12);
  const date = new Date();
  const amount = Math.floor(Math.random() * 1000) + 1;
  const contractType = 'Tipo de contrato';
  doc.text(`Fecha: ${date.toDateString()}`, 15, 30);
  doc.text(`Monto: ${amount}`, 15, 37);
  doc.text(`Tipo de contrato: ${contractType}`, 15, 44);

  // Agrega una línea en blanco
  doc.setLineWidth(0.2);
  doc.line(10, 55, 200, 55);

   // Crea la tabla de Deudor
   doc.autoTable({
    head: [['Deudor','', '', '']],
    body: [
      ['Cédula:', '001-0018888-3', 'Nombre:', 'Pedro Gómez'],
      ['Correo Electónico:', 'pedro@gomez.me', 'Telefono:', '8099082222'],
      ['Municipio', 'Arenoso', '', ''],
      ['Domicilio', 'Calle la 42', '', ''],
    ],
    startY: 60
  });

    // Crea la tabla de Acreedor
    doc.autoTable({
    head: [['Acreedor','', '', '']],
    body: [
      ['Cédula:', '001-0018888-3', 'Nombre:', 'Pedro Gómez'],
      ['Correo Electónico:', 'pedro@gomez.me', 'Telefono:', '8099082222'],
      ['Municipio', 'Arenoso', '', ''],
      ['Domicilio', 'Calle la 42', '', ''],
    ],
    startY: 110
  });

    // Crea la tabla de Bienes
   doc.autoTable({
    head: [['Bien','', '', '']],
    body: [
      ['Cédula:', '001-0018888-3', 'Nombre:', 'Pedro Gómez'],
      ['Correo Electónico:', 'pedro@gomez.me', 'Telefono:', '8099082222'],
      ['Municipio', 'Arenoso', '', ''],
      ['Domicilio', 'Calle la 42', '', ''],
    ],
    startY: 160
  });

  // Agrega el descargo de responsabilidad
  doc.setFontSize(8);
  let descargoResponsabilidad = 'El usuario que lleva a cabo la inscripción es el único responsable de su contenido, delante de terceros, delante de la persona que aparece en la inscripción como deudor garante o deudor principal y delante del Ministerio de Industria, Comercio y Mipymes (MICM), ente administrador del Sistema Electrónico de Garantías Mobiliarias (SEGM). El Sistema Electrónico de Garantías Mobiliarias (SEGM), por ser un sistema meramente informativo, la inscripción electrónica no convalida los actos y contratos nulos según las leyes. El hecho que se genere una inscripción en el SEGM, esta no convalida ni prejuzga sobre la existencia o la validez del acto o contrato respecto del cual se inscribe dicho aviso. Si hubiera diferencia entre lo que aparece en este reporte y lo que aparece en la base de datos a la fecha que el reporte se emitió, prevalecerá lo que establezca la base de datos del Sistema Electrónico de Garantías Mobiliarias, sin perjuicio de las responsabilidades penales en que pueda incurrir la persona que ha presentado tal documento. '
  ;
  const textFragments = doc.splitTextToSize(descargoResponsabilidad, 170)
  doc.text('Descargo de responsabilidad', 20, 206);
  doc.text(textFragments, 20, 210);

  // Guarda el PDF y lo descarga
  doc.save('inscripcion1.pdf');
  //FileSaver.saveAs(doc.output('blob'), 'inscripcion2.pdf');

  }

  ngAfterViewInit() {
    // this.downloadBtn?.nativeElement.addEventListener('click', () => {
    //   // Genera el PDF y lo descarga al presionar el botón
    //   console.log('It is working!');
      
    //   const doc = new jsPDF();
    //   doc.text('Mi título', 10, 10);
    //   doc.text('Mi contenido', 10, 20);
    //   doc.save('mi_archivo.pdf');
    //   FileSaver.saveAs(doc.output('blob'), 'mi_archivo.pdf');
    // });
  }


}


//Para centralizar el titulo 

// const title = 'Título del documento';
// const pageWidth = doc.internal.pageSize.getWidth();
// const textWidth = doc.getTextWidth(title);
// const x = (pageWidth - textWidth) / 2;
// doc.text(title, x, 10);
