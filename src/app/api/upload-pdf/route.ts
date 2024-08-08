import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma_client';
import { uploadFileOnDigitalOcean } from '@/utils/-services/helpper';
import { getAccessToken } from "@/actions/getAccessToken";
export async function GET(request: NextRequest) {

    try {
        const pdfRecords = await prisma.pDF.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

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
    try {
        const formData = await request.formData();
        const formObj = await createFormObj(formData);
        const pdfile = formObj.pdfFile as File;
        const userName = formObj.userName;
        const ipAddress=formObj.ipAddress

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
                ipAddress,
            },
        });
    //  const pdfurl=  await createContact(fileUrl)
    //  console.log("pdfurl",pdfurl)
       
        return NextResponse.json({ data: pdfRecord }, { status: 200 });
    } catch (error) {
        console.log(error)
        console.error('Error handling file upload:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


// async function createContact(pdfUrl:any) {
//     console.log("pdf url",pdfUrl)
//     const token = await getAccessToken();
//     console.log("token",token.data)
//     try {
//       const res = await axios.post(
//         "https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/sobjects/Contact",
//         pdfUrl,
//         {
//           headers: {
//             Authorization: `Bearer ${token.data.access_token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("response",res.data)
//       return res.data;
//     } catch (error) {
//       console.error("Error creating contact:", error);
//       throw error;
//     }
//   }
  



