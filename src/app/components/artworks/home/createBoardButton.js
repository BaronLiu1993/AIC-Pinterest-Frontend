import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/shadcomponents/ui/dialog";
import { Plus } from "lucide-react";

export default function CreateBoardButton({ userId }) {
  const handleCreateBoard = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/board/create-board?userId=${userId}`
      );
    } catch {}
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="h-[15rem] hover:scale-105 transition-transform duration-500 w-[15rem] bg-blue-300 rounded-xl font-playfair italic font-bold">
            <div className="p-4 flex text-blue-900">
              <span className="text-2xl">Create New Board</span>
              <Plus />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Create New Board</DialogTitle>
          <DialogDescription>Test</DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
