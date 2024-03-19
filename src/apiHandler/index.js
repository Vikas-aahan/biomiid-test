import axios from "axios";
import { ClientJS } from "clientjs";
   
const serverUrl = "http://biomiid.com:9090/services";
const client = new ClientJS();
export const postApihandler = async (endPoint, value) => {
  
  const authToken =
    "Ik1XWTNOR0ZoWW1NdFkyUXlNaTAwTlRJNUxXSXdNak10TjJFME9EVmlOamhrTlRreCI.Ze4ZmQ.owkS4ZNJXvXEp3C5WrQfJk7r-4M";
  try {
    console.log("User-Agent",client.getUserAgent());
    const response = await axios.post(serverUrl + endPoint, value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":client.getUserAgent(),
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log("responseeeeeeeeeeeeeee==>", response);
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
    return {error}
  }
};
