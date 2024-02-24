"use server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

async function create_user({
  userName,
  email,
  signature,
  ip,
  date,
}: {
  userName: string;
  email: string;
  signature: string;
  ip: string;
  date: string;
}) {
  await prisma.user.create({
    data: {
      userName: userName,
      email: email,
      signature: signature,
      ip: ip,
      date: date,
    },
  });
}

export async function get_users() {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
}

export async function add_sign(formData: FormData) {
  // const userName = formData.get("userName");
  // const email = formData.get("email");
  // const signature = formData.get("signature");
  // const get_ip = await axios.get("http://localhost:3000/api/getip");
  // console.log(get_ip.data.socket);
  // const ip = get_ip.data.ip || "null";
  // const date = formData.get("date");
  console.log(formData);
  //   create_user({
  //     userName: "Tariq",
  //     email: "tariqbrohi@codebotx@gmail.com",
  //     signature: "T",
  //     ip: "192.14.15.2.100",
  //     date: "3/2/2024",
  //   });
  //   }
}
