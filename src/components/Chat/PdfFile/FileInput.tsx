import { Input } from "@/components/ui/input";
import { Export } from "@carbon/icons-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  loadedFile: string;
  setFile: (file: File) => void;
  setLoadedFile: (file: string) => void;
}

export function FileInput({ loadedFile, setFile, setLoadedFile }: Props) {
  return (
    <AnimatePresence>
      {!loadedFile && (
        <motion.div
          initial={{ opacity: 0, rotateX: -180 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -180 }}
        >
          <label
            htmlFor="upload"
            className="bg-neutral-08 text-sm flex items-center justify-center h-[84px] text-secondary border border-neutral-06 px-3 py-2 rounded-lg cursor-pointer"
          >
            <div className="bg-neutral-06 px-10 py-3 rounded-lg flex items-center justify-center gap-2">
              <Export className="w-5 h-5" />
              Select or drop PDF
            </div>
          </label>
          <Input
            type="file"
            id="upload"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              if (!e.target.files) return;
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  if (!e.target) return;
                  setFile(file);
                  setLoadedFile(e.target.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
