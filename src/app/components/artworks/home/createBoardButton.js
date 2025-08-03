import { Textarea } from "@/shadcomponents/ui/textarea";
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
        <DialogContent className="font-IBM rounded-sm">
          <DialogTitle className="text-xl">Edit Board Detail</DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[10rem] h-[10rem]"></div>
              <div>
                <div className="flex flex-col gap-2">
                  <input
                    placeholder="Board Title"
                    className="p-2 rounded-lg border-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Textarea placeholder="Board Description" />
                </div>
              </div>
            </div>
            <button>Create New Board</button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
