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
    <div className="w-full h-80 lg:h-full lg:w-[540px]">
      <div className="px-4">
        <div className="rounded-full px-1 bg-neutral-08 py-1 flex gap-1 cursor-pointer relative">
          <motion.div
            initial={{ x: usageTab ? "95%" : 0 }}
            animate={{
              x: usageTab ? "95%" : 0,
              transition: { duration: 0.01 },
            }}
            className="w-1/2 py-1 justify-center rounded-full flex items-center gap-2 transition-all bg-neutral-06 custom-shadow text-neutral-01 absolute h-[32px]"
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
      <div className="flex flex-col gap-4 h-full">
        <div className="w-full flex flex-col px-2 py-4 gap-2 max-h-[calc(100%-124px)] overflow-auto">
          {new Array(20).fill(0).map((_, index) => (
            <ChatHistoryItem key={index} selected={index === 0} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            className="h-[52px] w-full rounded-lg flex items-center justify-center gap-2"
            onClick={() => setOpenNewChatDialog(true)}
          >
            <Add className="w-7 h-7" />
            New chat
          </Button>
          {openNewChatDialog && (
            <NewChatDialog
              open={openNewChatDialog}
              onOpenChange={setOpenNewChatDialog}
            />
          )}
        </div>
      </div>
    </div>
  );
};
