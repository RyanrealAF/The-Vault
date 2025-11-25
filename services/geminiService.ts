import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const initializeAI = () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing. Chat functionality will be limited.");
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const getChatSession = (): Chat => {
  const aiInstance = initializeAI();
  if (!aiInstance) {
     throw new Error("API Key not found");
  }

  if (!chatSession) {
    chatSession = aiInstance.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  }
  return chatSession;
};

export const sendMessageStream = async function* (message: string) {
  try {
    const session = getChatSession();
    const result = await session.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "The doctrine is currently silent. Please check your connection or API key.";
  }
};
