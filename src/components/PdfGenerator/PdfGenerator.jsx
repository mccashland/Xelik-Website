import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
"use client"
const PDFGenerator = () => {
  const contentRef = useRef(null);

  const handleDownloadPDF = async () => {
    try {
      const content = contentRef.current;

      // Use html2canvas to capture the HTML content and convert it to a canvas
      const canvas = await html2canvas(content);

      // Use jsPDF to create a PDF from the canvas
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

      // Download the PDF
      pdf.save('generated-pdf.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <div ref={contentRef}>
        {/* Your HTML content goes here */}
        <h1>Hello, this is a sample content for PDF!</h1>
        <p>This is a paragraph in the PDF.</p>
      </div>

      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default PDFGenerator;
