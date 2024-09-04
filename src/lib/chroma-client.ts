import { ChromaClient, Document, OpenAIEmbeddingFunction } from "chromadb";

const client = new ChromaClient({
  path: process.env.CHROMA_HOST,
});

const embeddingFunction = new OpenAIEmbeddingFunction({
  openai_api_key: process.env.OPENAI_API_KEY,
});

async function addDocuments(documents: Document[], fileName: string) {
  try {
    const collection = await client.getOrCreateCollection({
      name: fileName,
      embeddingFunction,
    });

    const baseId = new Date().getTime();

    const ids = documents.map((_doc, idx) => (baseId + idx).toString());

    const result = await collection.add({
      ids,
      documents,
    });

    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add documents");
  }
}

async function getAllCollections() {
  try {
    const collections = await client.listCollections();

    console.log(collections);

    return collections;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get documents");
  }
}

async function getDocument(id: string) {
  try {
    const collection = await client.getCollection({
      name: id,
      embeddingFunction,
    });

    const result = await collection.get();

    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get document");
  }
}

export const ChromaClientService = {
  addDocuments,
  getDocument,
  getAllCollections,
};
