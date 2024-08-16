import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma_client";
import { uploadFileOnDigitalOcean } from "@/utils/-services/helpper";
export async function GET(request: NextRequest) {
  try {
    const pdfRecords = await prisma.pDF.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ data: pdfRecords }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving PDF records:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
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
    const ipAddress = formObj.ipAddress;
    const email = formObj.email;

    if (!pdfile) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    const fileUrl = await uploadFileOnDigitalOcean(pdfile);
    if (!fileUrl) {
      return NextResponse.json(
        { error: "File upload failed" },
        { status: 500 }
      );
    }

    const saveContractUrl = await fetch(
      `${process.env.HOST_URL}/api/save-contract-url?email=${email}&contractUrl=${fileUrl}`,
      {
        method: "PATCH",
      }
    );
    if (!saveContractUrl) {
      return NextResponse.json(
        { error: "Failed to save contract URL" },
        { status: 500 }
      );
    }
    const pdfRecord = await prisma.pDF.create({
      data: {
        pdfFile: fileUrl,
        userName,
        ipAddress,
      },
    });

    return NextResponse.json({ data: pdfRecord }, { status: 200 });
  } catch (error) {
    console.log("Error handling file upload:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
