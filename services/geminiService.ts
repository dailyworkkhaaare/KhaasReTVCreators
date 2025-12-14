import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const generateBotResponse = async (userMessage: string): Promise<string> => {
  // Check for API Key existence before initialization to prevent errors
  if (!process.env.API_KEY) {
    return "I'm currently offline (API Key missing). Please check back later!";
  }

  try {
    // Initialize inside the function to ensure the app loads even if the key is missing initially
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong while connecting to Khaas HQ. Please try again.";
  }
};