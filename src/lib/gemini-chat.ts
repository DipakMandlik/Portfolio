import { Type, type FunctionDeclaration } from "@google/genai";
import { KNOWLEDGE_BASE } from "@/lib/chatbot-knowledge";

export const GEMINI_MODEL = "gemini-2.5-flash";

export const SECTION_IDS = [
  "top",
  "about",
  "experience",
  "skills",
  "projects",
  "education",
  "certifications",
  "awards",
  "journey",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type ChatRole = "user" | "model";

export type ChatTurn = {
  role: ChatRole;
  text: string;
};

export type ChatReply = {
  text: string;
  navigateTo: SectionId | null;
};

export class ChatConfigError extends Error {
  code = "NO_KEY" as const;
}

const NAVIGATE_FUNCTION_NAME = "navigate_to_section";

function buildSystemInstruction(): string {
  return `You are the friendly AI guide embedded on Dipak Mandlik's personal portfolio website. Visitors ask you questions about Dipak — his work, experience, projects, education, certifications, and awards — and you answer conversationally and concisely (2-4 sentences unless more detail is clearly requested).

Ground every answer strictly in the knowledge base below. If something isn't covered by it, say you don't have that information rather than guessing or making it up — never invent facts, dates, numbers, or links.

When your answer is clearly about the content of one of the page's sections (experience, projects, education, certifications, awards, skills, about, contact), call the ${NAVIGATE_FUNCTION_NAME} function with that section's id so the page can scroll there for the visitor. Always also return a short spoken-style text reply alongside the function call — never call the function silently with no text.

Knowledge base:
${KNOWLEDGE_BASE}`;
}

function buildNavigateFunctionDeclaration(): FunctionDeclaration {
  return {
    name: NAVIGATE_FUNCTION_NAME,
    description: "Scrolls the portfolio page to the section most relevant to the current answer.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        sectionId: {
          type: Type.STRING,
          enum: [...SECTION_IDS],
          description: "The id of the section to scroll to.",
        },
      },
      required: ["sectionId"],
    },
  };
}

function isSectionId(value: unknown): value is SectionId {
  return typeof value === "string" && (SECTION_IDS as readonly string[]).includes(value);
}

export async function sendChatMessage(history: ChatTurn[], userText: string): Promise<ChatReply> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new ChatConfigError("Missing VITE_GEMINI_API_KEY");
  }

  const { GoogleGenAI } = await import("@google/genai");
  const ai = new GoogleGenAI({ apiKey });

  const contents = [
    ...history.map((turn) => ({ role: turn.role, parts: [{ text: turn.text }] })),
    { role: "user" as const, parts: [{ text: userText }] },
  ];

  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents,
    config: {
      systemInstruction: buildSystemInstruction(),
      tools: [{ functionDeclarations: [buildNavigateFunctionDeclaration()] }],
    },
  });

  const parts = response.candidates?.[0]?.content?.parts ?? [];

  let text = "";
  let navigateTo: SectionId | null = null;

  for (const part of parts) {
    if (part.text) {
      text += part.text;
    }
    if (part.functionCall?.name === NAVIGATE_FUNCTION_NAME) {
      const sectionId = (part.functionCall.args as Record<string, unknown> | undefined)?.sectionId;
      if (isSectionId(sectionId)) {
        navigateTo = sectionId;
      }
    }
  }

  if (!text.trim() && navigateTo) {
    text = "Let's take a look →";
  }

  return { text: text.trim(), navigateTo };
}
