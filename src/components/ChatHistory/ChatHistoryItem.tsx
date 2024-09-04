import { cn } from "@/lib/utils";
import { DocumentPdf } from "@carbon/icons-react";

interface Props {
  selected?: boolean;
  fileName?: string;
  firstInteraction?: string;
  onClick: () => void;
}

export const ChatHistoryItem = ({
  selected,
  fileName,
  firstInteraction,
  onClick,
}: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-2 py-2",
        selected && "bg-neutral-06",
      )}
      onClick={onClick}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-06">
        <DocumentPdf className="h-7 w-7" />
      </div>
      <div>
        <div className="flex max-w-[250px] flex-col justify-center gap-1">
          <p className="truncate text-sm font-medium">
            {fileName ?? "General Chat"}
          </p>
          <p className="text-xs text-neutral-04">
            First interaction:{" "}
            <span className="font-bold text-neutral-01">
              {firstInteraction ?? "Never"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
