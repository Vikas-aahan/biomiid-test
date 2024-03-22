import axios from "axios";
import { ClientJS } from "clientjs";
import en from "../lang/en";
import fr from "../lang/rf";

const serverUrl = "http://biomiid.com:9090/services";
const client = new ClientJS();
export const postApihandler = async (endPoint, value) => {
  const authToken =
    "Ik1XWTNOR0ZoWW1NdFkyUXlNaTAwTlRJNUxXSXdNak10TjJFME9EVmlOamhrTlRreCI.Ze4ZmQ.owkS4ZNJXvXEp3C5WrQfJk7r-4M";
  try {
    console.log("User-Agent", client.getUserAgent());
    const response = await axios.post(serverUrl + endPoint, value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": client.getUserAgent(),
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log("responseeeeeeeeeeeeeee==>", response);
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
    return { error };
  }
};
export const languageToggler = (language) => {
  console.log("language",language);
  const locale = language === "English" ? "en" : "fr";
  localStorage.setItem("locale", locale);
};
export const LocalProvider = () => {
  try {
    if (process.browser) {
      let locale =
        localStorage.getItem("locale") !== null
          ? localStorage.getItem("locale")
          : "fr";

      return locale;
    }
  } catch (err) {
    return err;
  }
};
export const Translation = () => {
  let locale = LocalProvider();
  const t = locale === "en" ? en : fr;
  return t;
};
