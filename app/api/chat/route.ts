import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST() {
  const result = await generateText({
    model: google("gemini-3.6-flash"),
    prompt: "Say hello to the Sahyog AI development team in one short sentence.",
  });

  return Response.json({
    message: result.text,
  });
}