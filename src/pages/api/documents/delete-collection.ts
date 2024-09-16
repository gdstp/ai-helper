import { ChromaClientService } from "@/lib/chroma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const name = req.query.name as string;

    const result = await ChromaClientService.deleteCollection(name);

    if (result) {
      return res.status(200).json({ message: "deleted" });
    }

    return res.status(500).json({ error: "Failed to delete" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
