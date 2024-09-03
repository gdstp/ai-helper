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
          "max-w-[90%] flex-row-reverse self-end rounded-lg bg-neutral-06 p-4 lg:max-w-[70%]",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start gap-1",
          originUser && "items-end",
        )}
      >
        <div className="flex w-full flex-col gap-4 text-[15px] leading-[24px] text-neutral-01">
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
