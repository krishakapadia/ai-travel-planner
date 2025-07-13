// src/service/AIModel.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY; // Keep your key in .env
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // You can also use "gemini-pro"
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json", // Ensure JSON response
};

export async function generateGeminiResponse(prompt) {
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    const text = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || null;
  } catch (error) {
    console.error("Gemini SDK Error:", error);
    return null;
  }
}
