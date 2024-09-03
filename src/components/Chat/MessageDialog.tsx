import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface Props {
  origin: string;
}

export const MessageDialog = ({ origin }: Props) => {
  const originUser = useMemo(() => origin === "user", [origin]);
  return (
    <div
      className={cn(
        "flex gap-4",
        originUser &&
          "max-w-[90%] lg:max-w-[70%] bg-neutral-06 p-4 rounded-lg flex-row-reverse self-end"
      )}
    >
      <div
        className={cn(
          "gap-1 flex flex-col items-start",
          originUser && "items-end"
        )}
      >
        <div className="flex flex-col w-full gap-4 text-neutral-01 text-[15px] leading-[24px]">
          <p>
            Eu acho nao, eh tudo totalmente diferente das coisas de hoje do
            mundo. E logicas de empresa. E muita coisa maravilhosa. Eu nao sou
            partido, eu sou favoravel aqueles que realmente larga tudo pra
            seguir a carreira.
          </p>
        </div>
      </div>
    </div>
  );
};
