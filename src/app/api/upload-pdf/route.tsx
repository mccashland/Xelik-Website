import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma_client';
import { uploadFileOnDigitalOcean } from '@/utils/-services/helpper';

export async function GET(request: NextRequest) {
    console.log("Received GET request");

    try {
        const pdfRecords = await prisma.pDF.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        console.log("PDF records:", pdfRecords);

        return NextResponse.json({ data: pdfRecords }, { status: 200 });
    } catch (error) {
        console.error('Error retrieving PDF records:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


async function createFormObj(formData: FormData) {
    const formObj: { [key: string]: any } = {};
    formData.forEach((value, key) => {
        formObj[key.trim()] = value;
    });
    return formObj;
}

export async function POST(request: NextRequest) {
    console.log("Received POST request");
    try {
        const formData = await request.formData();
        console.log("FormData received:", formData);
        const formObj = await createFormObj(formData);
        console.log("FormObject:", formObj);

        const pdfile = formObj.pdfFile as File;
        const userName = formObj.userName;
        console.log("UserName:", userName);
        console.log("PDF File:", pdfile);

        if (!pdfile) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const fileUrl = await uploadFileOnDigitalOcean(pdfile);

        if (!fileUrl) {
            return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
        }

        const pdfRecord = await prisma.pDF.create({
            data: {
                pdfFile :  fileUrl,
                userName,
            },
        });
              console.log("pdf record",pdfRecord)
        return NextResponse.json({ data: pdfRecord }, { status: 200 });
    } catch (error) {
        console.log(error)
        console.error('Error handling file upload:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
