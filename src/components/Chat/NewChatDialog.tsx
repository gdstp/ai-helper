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

enum ChatType {
  PDF = "pdf",
  URL = "url",
  GENERAL = "general",
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewChatDialog({ onOpenChange, open }: Props) {
  const [chatType, setChatType] = useState<ChatType | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const buttonDisabled = useMemo(() => {
    if (chatType === ChatType.PDF) {
      return !chatType || !file;
    } else if (chatType === ChatType.URL) {
      return !chatType || !url;
    } else {
      return !chatType;
    }
  }, [chatType, url, file]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-neutral-07 border border-neutral-05">
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
            <SelectContent className="bg-neutral-08 border-neutral-06">
              <SelectGroup className="text-neutral-01">
                <SelectItem value={ChatType.PDF}>PDF File</SelectItem>
                <SelectItem value={ChatType.URL}>Web Site URL</SelectItem>
                <SelectItem value={ChatType.GENERAL}>General Chat</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <AnimateChangeInHeight className="flex flex-col w-full gap-1">
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
            className="py-5 w-full rounded-lg flex items-center justify-center gap-2"
            disabled={buttonDisabled}
          >
            <Add className="w-7 h-7" />
            Create Chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
