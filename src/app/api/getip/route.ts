import { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
  if (request.socket) {
    return Response.json({ ip: request.socket.remoteAddress });
  }
  return Response.json({ ip: false });
}
