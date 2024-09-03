import { Settings } from "@carbon/icons-react";
import { MessageDialog } from "./MessageDialog";
import { useState } from "react";

interface Props {
  fileName: string;
  firstInteraction: string;
  numberOfQuestions: number;
  aiUsage: number;
}

export const Chat = ({
  aiUsage,
  fileName,
  firstInteraction,
  numberOfQuestions,
}: Props) => {
  const [text, setText] = useState("");

  return (
    <div className="h-[calc(100vh-140px)] w-full rounded-lg border border-neutral-06 lg:h-auto">
      <div className="h-28 w-full rounded-tl-lg rounded-tr-lg bg-neutral-06 p-6">
        <div className="relative flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="max-w-[200px] truncate text-3xl text-neutral-01 lg:max-w-[450px]">
              {fileName}
            </p>
            <div className="flex gap-4 text-xs text-neutral-04">
              <p>
                First interaction:{" "}
                <span className="font-bold text-neutral-01">
                  {firstInteraction}
                </span>
              </p>
              <p>
                Number of questions:{" "}
                <span className="font-bold text-neutral-01">
                  {numberOfQuestions} items
                </span>
              </p>
              <p>
                AI Usage:{" "}
                <span className="font-bold text-neutral-01">{aiUsage}</span>
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-shade-03">
            <Settings />
          </div>
        </div>
      </div>
      <div className="grid h-[calc(100%-112px)] grid-cols-1 grid-rows-[1fr,98px]">
        <div className="mt-6 flex h-[100%-48px] flex-col gap-8 overflow-y-auto p-6 pt-0">
          {new Array(2).fill(0).map((_, index) => (
            <MessageDialog
              key={index}
              origin={index % 2 === 0 ? "user" : "root"}
            />
          ))}
        </div>
        <div className="w-full px-4 py-6">
          <div className="flex-rol relative flex w-full gap-1 rounded-lg border-2 border-neutral-06 bg-neutral-08 p-1">
            <input
              className="h-12 w-full max-w-[calc(100%-72px)] rounded-lg bg-transparent px-4 py-2 focus:bg-transparent focus:outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              disabled={!text}
              className="absolute right-1 rounded-md bg-primary-01 px-4 py-3 font-medium disabled:bg-neutral-04"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
