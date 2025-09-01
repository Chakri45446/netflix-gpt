import { GoogleGenAI } from "@google/genai";
import { OPENAI_KEY } from "./Contants";
const ai = new GoogleGenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default ai;
