import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export const GET = async () => {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontSize = 12;
    const lineHeight = fontSize * 1.2;
    const margin = 50;

    const text = `
      4 Month Bi-Weekly 1 on 1 coaching (Monthly)

      This Sales Agreement (“Agreement”) for the sale of consulting
      services is between Elevate Wellness and Personal Training, and
      fgg (the “Buyer”).

      The parties agree as follows:

      1. Sale of Services.
      The Sellers shall sell to the Buyer and the Buyer shall purchase
      from the Sellers the services set forth on Exhibit A (the
      “Services”) in the quantities and at the prices stated in clause
      3. The Buyer shall pay all taxes and third-party expenses
      imposed on, in connection with, or measured by the transaction
      contemplated by this agreement.

      3. Invoices; Payment.
      The Buyer agrees to pay $250 biweekly, a payment that will occur
      for 4 months over the duration of the Services. Cash payment for
      the Services is due within 30 days of the date of any given
      Sellers’s invoice. The Services will begin immediately upon the
      effective date and will end exactly 4 months after the beginning
      of the Services. Missed payments may result in suspension or
      termination of Services with no refund of previous payments.

      4. Confidentiality.
      The Sellers will keep the Buyer’s information confidential and
      will only share the information with parties when strictly
      required to fulfill the Services, or when the Buyer gives the
      Sellers consent in writing to share specific information. The
      Buyer agrees not to copy, share, reproduce, reverse engineer, or
      create derivatives of the Services provided by the Sellers.

      5. No Cancellation.
      The Buyer acknowledges that there is a no cancellation policy.
      The Buyer is committing to full payment for the 4-month Services
      by the end of the 4-month period.

      6. Delivery; Title; and Risk of Loss.
      The Sellers shall deliver the Services online. Any goods
      purchased through the Sellers will be provided via drop shipping
      and title to and risk of loss of the goods will pass to the
      Buyer upon such delivery by the Sellers. Any stated delivery
      dates are approximate. The Sellers will not be liable for any
      losses, damages, penalties, or expenses for failure to meet any
      delivery date.
    `;

    const lines = text.split('\n');
    let y = height - margin;

    lines.forEach((line) => {
      page.drawText(line.trim(), {
        x: margin,
        y: y,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      });
      y -= lineHeight;
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=example.pdf',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
