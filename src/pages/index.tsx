import { ChatHistory } from "@/components/ChatHistory";
import { Chat } from "@/components/Chat";
import { useState } from "react";

export default function Home() {
  const [selectedChat, setSelectedChat] = useState("");

  return (
    <div className="relative flex h-auto w-full flex-col bg-neutral-08 lg:h-screen">
      <div className="m-auto flex h-full w-full flex-col gap-3 rounded-lg bg-neutral-07 p-3 text-white lg:h-[calc(100vh-80px)] lg:w-[calc(100vw-80px)] lg:flex-row">
        <ChatHistory
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        <Chat
          fileName={selectedChat}
          aiUsage={10}
          firstInteraction="24 July"
          numberOfQuestions={10}
        />
      </div>
    </div>
  );
}
