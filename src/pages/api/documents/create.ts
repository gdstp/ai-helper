import { ChromaClientService } from "@/lib/chroma-client";
import type { NextApiRequest, NextApiResponse } from "next";
import { File, IncomingForm } from "formidable";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const form = new IncomingForm({
      multiples: false,
      allowEmptyFiles: false,
      maxFileSize: 50 * 1024 * 1024,
    });

    const [fields, file] = (await form.parse(req)) as unknown as [
      fields: { values: Array<string> },
      file: { file: Array<File> },
    ];

    const chatType = fields.values[0];

    if (chatType === "pdf") {
      const loader = new PDFLoader(file.file[0].filepath, {
        splitPages: false,
      });

      if (!file?.file[0].originalFilename) {
        return res.status(500).json({ error: "Failed to load PDF" });
      }

      const docs = await loader.load();

      const splitter = new RecursiveCharacterTextSplitter({
        separators: ["\n"],
      });

      const splittedDocs = await splitter.splitDocuments(docs);

      const documents = splittedDocs.map(({ pageContent }) => pageContent);

      await ChromaClientService.addDocuments(
        documents,
        file.file[0].originalFilename,
      );
    }
    res.status(200).json({ message: "New Chat created" });
  } catch (error) {
    const err = error as any;
    res.status(500).json({ error: err?.message ?? "Internal Server Error" });
  }
  res.status(200).json({ message: "New Chat created" });
}
