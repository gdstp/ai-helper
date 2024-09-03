import { cn } from "@/lib/utils";
import { DocumentPdf } from "@carbon/icons-react";

interface Props {
  selected?: boolean;
}

export const ChatHistoryItem = ({ selected }: Props) => {
  return (
    <div
      className={cn(
        "flex gap-2 items-center px-2 py-2 rounded-lg",
        selected && " bg-neutral-06"
      )}
    >
      <div className="w-14 h-14 rounded-full bg-neutral-06 flex justify-center items-center">
        <DocumentPdf className="w-7 h-7" />
      </div>
      <div>
        <div className="flex flex-col justify-center gap-1">
          <p className="text-sm font-medium">Placeholder.pdf</p>
          <p className="text-xs text-neutral-04">
            First interaction:{" "}
            <span className="text-neutral-01 font-bold">Sep 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};
