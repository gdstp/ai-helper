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
        "z-10 flex w-1/2 items-center justify-center gap-2 rounded-full py-1 text-neutral-04 transition-all",
        selected && "text-neutral-01",
      )}
    >
      <Chat />
      {text}
    </div>
  );
};
