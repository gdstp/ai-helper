import { cn } from "@/lib/utils";
import { Chat } from "@carbon/icons-react";

interface Props {
  selected: boolean;
  onChange: () => void;
  text: string;
}
export const ChatHistoryTabItem = ({ onChange, selected, text }: Props) => {
  return (
    <div
      onClick={onChange}
      className={cn(
        "w-1/2 py-1 justify-center rounded-full flex items-center gap-2 transition-all text-neutral-04 z-10",
        selected && "text-neutral-01"
      )}
    >
      <Chat />
      {text}
    </div>
  );
};
