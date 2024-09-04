import { ChatHistoryItem } from "./ChatHistoryItem";
import { useCallback, useEffect, useState } from "react";
import { ChatHistoryTabItem } from "./ChatHistoryTabItem";
import { NewChatDialog } from "../Chat/NewChatDialog";
import { Button } from "../ui/button";
import { Add } from "@carbon/icons-react";
import { motion } from "framer-motion";
import { ApiService } from "@/lib/axios";
import { useToast } from "@/hooks/use-toast";

interface Props {
  selectedChat: string;
  setSelectedChat: (chat: string) => void;
}

export const ChatHistory = ({ selectedChat, setSelectedChat }: Props) => {
  const [usageTab, setUsageTab] = useState(false);
  const [openNewChatDialog, setOpenNewChatDialog] = useState(false);
  const [collections, setCollections] = useState<
    { id: string; name: string }[]
  >([]);
  const { toast } = useToast();

  const request = useCallback(async () => {
    try {
      const result = await ApiService.request({
        url: "/documents/get-collections",
        method: "GET",
      });

      console.log(result.data);

      setCollections(result.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch collections",
        variant: "destructive",
      });
    }
  }, []);

  useEffect(() => {
    request();
  }, [request]);

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
      <div className="grid h-[calc(100%-37px)] grid-cols-1 grid-rows-[1fr,98px]">
        <div className="flex w-full flex-col gap-2 overflow-auto px-2 py-4 lg:max-w-[540px]">
          {collections.map((item) => (
            <ChatHistoryItem
              key={item.id}
              fileName={item.name}
              onClick={() => setSelectedChat(item.name)}
              selected={selectedChat === item.name}
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
