import { ChromaClient, Document, OpenAIEmbeddingFunction } from "chromadb";

const client = new ChromaClient({
  path: process.env.CHROMA_HOST,
});

const embeddingFunction = new OpenAIEmbeddingFunction({
  openai_api_key: process.env.OPENAI_API_KEY,
});

async function addDocuments(collectionName: string, documents: Document[]) {
  const collection = await client.getOrCreateCollection({
    name: collectionName,
    embeddingFunction,
  });

  const baseId = new Date().getTime();

  const ids = documents.map((_doc, idx) => (baseId + idx).toString());

  const result = await collection.add({
    ids,
    documents,
  });

  return result;
}

export const ChromaClientService = {
  addDocuments,
};
