import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const result = await generateText({
      model: google("gemini-3.5-flash-lite"),
      prompt: message,
    });

    return Response.json({
      message: result.text,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      { error: "Something went wrong while processing your request." },
      { status: 500 }
    );
  }
}