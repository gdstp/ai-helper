import { ChatHistoryItem } from "./ChatHistoryItem";
import { useState } from "react";
import { ChatHistoryTabItem } from "./ChatHistoryTabItem";
import { NewChatDialog } from "../Chat/NewChatDialog";
import { Button } from "../ui/button";
import { Add } from "@carbon/icons-react";
import { motion } from "framer-motion";

export const ChatHistory = () => {
  const [usageTab, setUsageTab] = useState(false);
  const [openNewChatDialog, setOpenNewChatDialog] = useState(false);

  return (
    <div className="h-80 w-full lg:h-full lg:w-[540px]">
      <div className="px-4">
        <div className="relative flex cursor-pointer gap-1 rounded-full bg-neutral-08 px-1 py-1">
          <motion.div
            initial={{ x: usageTab ? "95%" : 0 }}
            animate={{
              x: usageTab ? "95%" : 0,
              transition: { duration: 0.01 },
            }}
            className="custom-shadow absolute flex h-[32px] w-1/2 items-center justify-center gap-2 rounded-full bg-neutral-06 py-1 text-neutral-01 transition-all"
          />
          <ChatHistoryTabItem
            onChange={() => setUsageTab(false)}
            selected={!usageTab}
            text="Interactions"
          />
          <ChatHistoryTabItem
            onChange={() => setUsageTab(true)}
            selected={usageTab}
            text="Usage"
          />
        </div>
      </div>
      <div className="flex h-full flex-col gap-4">
        <div className="flex max-h-[calc(100%-124px)] w-full flex-col gap-2 overflow-auto px-2 py-4">
          {new Array(20).fill(0).map((_, index) => (
            <ChatHistoryItem
              fileName="Placeholder.pdf"
              firstInteraction="24 July"
              key={index}
              selected={index === 0}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-center">
          <Button
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-lg"
            onClick={() => setOpenNewChatDialog(true)}
          >
            <Add className="h-7 w-7" />
            New chat
          </Button>
          {openNewChatDialog && (
            <NewChatDialog
              open={openNewChatDialog}
              onOpenChange={() => setOpenNewChatDialog((state) => !state)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
