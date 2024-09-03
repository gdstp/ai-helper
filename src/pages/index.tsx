import { ChatHistory } from "@/components/ChatHistory";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <div className="w-full h-auto lg:h-screen bg-neutral-08 flex flex-col relative">
      <div className="w-full lg:w-[calc(100vw-80px)] h-full lg:h-[calc(100vh-80px)] m-auto bg-neutral-07 rounded-lg text-white p-3 flex lg:flex-row flex-col gap-3">
        <ChatHistory />
        <Chat
          fileName="Tails_of_the_Sea.pdf"
          aiUsage={10}
          firstInteraction="24 July"
          numberOfQuestions={10}
        />
      </div>
    </div>
  );
}
