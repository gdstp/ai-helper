import { useState } from "react";
import { PdfFileInfo } from "./PdfFileInfo";
import { FileInput } from "./FileInput";

interface Props {
  file: File | null;
  setFile: (file: File | null) => void;
}

export function PdfFile({ file, setFile }: Props) {
  const [loadedFile, setLoadedFile] = useState<string>("");

  return (
    <div className="relative h-[84px]">
      <FileInput
        loadedFile={loadedFile}
        setFile={setFile}
        setLoadedFile={setLoadedFile}
      />
      <PdfFileInfo
        file={file}
        loadedFile={loadedFile}
        setFile={setFile}
        setLoadedFile={setLoadedFile}
      />
    </div>
  );
}
