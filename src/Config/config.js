import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = "AIzaSyAGEuDBgiqohw7KnhW2H2sU1RhcH7PfUOg";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(response);
    return response ;
  }
  
export default run;