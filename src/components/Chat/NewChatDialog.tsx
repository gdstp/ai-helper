import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Add } from "@carbon/icons-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import { PdfFile } from "./PdfFile";
import { AnimateChangeInHeight } from "../AnimateChangeInHeight";
import { useToast } from "@/hooks/use-toast";

enum ChatType {
  PDF = "pdf",
  URL = "url",
  GENERAL = "general",
}

interface Props {
  open: boolean;
  onOpenChange: () => void;
}

export function NewChatDialog({ onOpenChange, open }: Props) {
  const [chatType, setChatType] = useState<ChatType | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const buttonDisabled = useMemo(() => {
    if (chatType === ChatType.PDF) {
      return !chatType || !file;
    } else if (chatType === ChatType.URL) {
      return !chatType || !url;
    } else {
      return !chatType;
    }
  }, [chatType, url, file]);

  function onSubmit() {
    toast({
      title: "Chat created",
      description: "Your new chat was created successfully",
    });
    onOpenChange();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border border-neutral-05 bg-neutral-07 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Chat</DialogTitle>
          <DialogDescription>
            Select a type of chat and fill out the required information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select
            onValueChange={(e) => setChatType(e as ChatType)}
            defaultValue={chatType ?? ""}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a chat type" />
            </SelectTrigger>
            <SelectContent className="border-neutral-06 bg-neutral-08">
              <SelectGroup className="text-neutral-01">
                <SelectItem value={ChatType.PDF}>PDF File</SelectItem>
                <SelectItem value={ChatType.URL}>Web Site URL</SelectItem>
                <SelectItem value={ChatType.GENERAL}>General Chat</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <AnimateChangeInHeight className="flex w-full flex-col gap-1">
            {chatType === ChatType.PDF && (
              <PdfFile file={file} setFile={setFile} />
            )}
            {chatType === ChatType.URL && (
              <Input
                type="url"
                placeholder="https://example.com"
                className="rounded-lg"
                value={url ?? ""}
                onChange={(e) => setUrl(e.target.value)}
              />
            )}
          </AnimateChangeInHeight>
        </div>
        <DialogFooter>
          <Button
            className="flex w-full items-center justify-center gap-2 rounded-lg py-5"
            disabled={buttonDisabled}
            onClick={onSubmit}
          >
            <Add className="h-7 w-7" />
            Create Chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
