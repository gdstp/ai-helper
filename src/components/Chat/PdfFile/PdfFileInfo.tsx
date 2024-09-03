import { formatFileSize } from "@/lib/utils";
import { DocumentPdf, TrashCan } from "@carbon/icons-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  file: File | null;
  loadedFile: string;
  setFile: (file: File | null) => void;
  setLoadedFile: (file: string) => void;
}

export function PdfFileInfo({
  file,
  loadedFile,
  setFile,
  setLoadedFile,
}: Props) {
  function resetFile() {
    setFile(null);
    setLoadedFile("");
  }

  return (
    <AnimatePresence>
      {loadedFile && (
        <motion.div
          className="absolute top-0 w-full"
          initial={{ opacity: 0, rotateX: 180 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: 180 }}
        >
          <div className="flex w-full items-center justify-center gap-2 pl-2 pr-4 py-4 border rounded-lg border-neutral-06">
            <DocumentPdf className="w-12 h-12 text-neutral-03/90" />
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm truncate max-w-[250px] text-neutral-03/90">
                {file?.name}
              </p>
              <p className="text-xs text-neutral-03/50">
                {formatFileSize(loadedFile)}
              </p>
            </div>
            <TrashCan
              className="w-6 h-6 text-primary-03/80 cursor-pointer"
              onClick={resetFile}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
