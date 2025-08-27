import { GoogleGenAI } from "@google/genai";
import { geminikey } from "../common/helper";

const api = new GoogleGenAI({apiKey:geminikey});

export default api;