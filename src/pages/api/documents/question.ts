import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChromaClientService } from "@/lib/chroma-client";
import { NextApiRequest, NextApiResponse } from "next";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  maxTokens: 800,
  verbose: false,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = req.body as { question: string; document: string };

    const collection = await ChromaClientService.getCollection(body.document);

    const queryResult = await collection.query({
      nResults: 2,
      queryTexts: [body.question],
    });

    const documents = queryResult.documents;

    const template = ChatPromptTemplate.fromMessages([
      [
        "system",
        "Answer the user question based on the following context: ${context}",
      ],
      ["user", "{input}"],
    ]);

    const chain = template.pipe(model);

    const response = await chain.invoke({
      input: body.question,
      context: documents.map((doc) => doc),
    });

    return res.status(200).json({ response: response.content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
