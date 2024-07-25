import React from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const GeneratePDFButton = ({ targetRef }: { targetRef: React.RefObject<HTMLDivElement> }) => {
  const handleGeneratePDF = async () => {
    if (targetRef.current) {
      const pdfDoc = await PDFDocument.create();
      let page = pdfDoc.addPage();
      let { height, width } = page.getSize();

      const margin = 50;
      let yPosition = height - margin;

      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const fontSize = 12;
      const lineHeight = fontSize * 1.5;

      // Function to add text with specific font
      const drawText = (text:string, isBold = false) => {
        const textWidth = isBold
          ? boldFont.widthOfTextAtSize(text, fontSize)
          : font.widthOfTextAtSize(text, fontSize);
        const words = text.split(' ');
        let line = '';

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const testWidth = isBold
            ? boldFont.widthOfTextAtSize(testLine, fontSize)
            : font.widthOfTextAtSize(testLine, fontSize);

          if (testWidth > width - margin * 2 && n > 0) {
            if (yPosition - lineHeight < margin) {
              page = pdfDoc.addPage();
              height = page.getSize().height;
              yPosition = height - margin;
            }

            page.drawText(line, {
              x: margin,
              y: yPosition,
              size: fontSize,
              font: isBold ? boldFont : font,
              color: rgb(0, 0, 0),
            });
            line = words[n] + ' ';
            yPosition -= lineHeight;
          } else {
            line = testLine;
          }
        }

        if (yPosition - lineHeight < margin) {
          page = pdfDoc.addPage();
          height = page.getSize().height;
          yPosition = height - margin;
        }

        page.drawText(line, {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: isBold ? boldFont : font,
          color: rgb(0, 0, 0),
        });
        yPosition -= lineHeight;
      };

      // Parse content and style it
      const content = targetRef.current.innerHTML;
      const lines = content.split(/<div.*?>|<\/div>/).filter(Boolean);
      
      lines.forEach(line => {
        if (line.includes('<span class="underline">')) {
          const text = line.replace(/<[^>]*>/g, ''); // Remove HTML tags
          drawText(text, true);
        } else if (line.includes('<span class="font-bold">')) {
          const text = line.replace(/<[^>]*>/g, ''); // Remove HTML tags
          drawText(text, true);
        } else if (line.trim() !== '') {
          const text = line.replace(/<[^>]*>/g, ''); // Remove HTML tags
          drawText(text, false);
        }
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return <button onClick={handleGeneratePDF}>Generate PDF</button>;
};

export default GeneratePDFButton;
