"use server";
import axios from "axios";
export const getAccessToken = async () => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const base_url = process.env.SALSEFORCE_BASE_URL;
  const res = await axios.get(
    `${base_url}/services/oauth2/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
  )
  return res;
};
