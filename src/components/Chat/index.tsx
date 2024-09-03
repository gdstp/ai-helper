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
    <div className="w-full h-[calc(100vh-140px)] lg:h-auto border border-neutral-06 rounded-lg">
      <div className="w-full h-28 bg-neutral-06 rounded-tl-lg rounded-tr-lg p-6">
        <div className="w-full flex items-center justify-between relative">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-01 text-3xl max-w-[200px] truncate lg:max-w-[450px]">
              {fileName}
            </p>
            <div className="flex gap-4 text-neutral-04 text-xs">
              <p>
                First interaction:{" "}
                <span className="text-neutral-01 font-bold">
                  {firstInteraction}
                </span>
              </p>
              <p>
                Number of questions:{" "}
                <span className="text-neutral-01 font-bold">
                  {numberOfQuestions} items
                </span>
              </p>
              <p>
                AI Usage:{" "}
                <span className="text-neutral-01 font-bold">{aiUsage}</span>
              </p>
            </div>
          </div>
          <div className="bg-shade-03 w-10 h-10 flex items-center justify-center rounded-full absolute top-0 right-0">
            <Settings />
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-112px)] grid grid-cols-1 grid-rows-[1fr,98px]">
        <div className="h-[100%-48px] gap-8 overflow-y-auto flex flex-col p-6 pt-0 mt-6">
          {new Array(2).fill(0).map((_, index) => (
            <MessageDialog
              key={index}
              origin={index % 2 === 0 ? "user" : "root"}
            />
          ))}
        </div>
        <div className="px-4 py-6 w-full">
          <div className="relative w-full flex flex-rol gap-1 bg-neutral-08 border-2 border-neutral-06 rounded-lg p-1">
            <input
              className="w-full max-w-[calc(100%-72px)] focus:outline-none rounded-lg px-4 py-2 bg-transparent focus:bg-transparent h-12"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              disabled={!text}
              className="px-4 py-3 absolute right-1 bg-primary-01 font-medium rounded-md disabled:bg-neutral-04"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
