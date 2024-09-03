import { cn } from "@/lib/utils";
import { DocumentPdf } from "@carbon/icons-react";

interface Props {
  selected?: boolean;
}

export const ChatHistoryItem = ({ selected }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-2 py-2",
        selected && "bg-neutral-06",
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-06">
        <DocumentPdf className="h-7 w-7" />
      </div>
      <div>
        <div className="flex flex-col justify-center gap-1">
          <p className="text-sm font-medium">Placeholder.pdf</p>
          <p className="text-xs text-neutral-04">
            First interaction:{" "}
            <span className="font-bold text-neutral-01">Sep 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};
