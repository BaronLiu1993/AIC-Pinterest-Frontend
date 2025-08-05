"use client"

import React from "react";
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
  /**
   * 
   * const cookieStore = await cookies();
   * const userId = cookieStore.get("userId").value
   * 
   */

  const [boardTitle, setBoardTitle] = React.useState("")
  const [boardDescription, setBoardDescription] = React.useState("")

  const handleCreateBoard = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/board/create-board?userId=0d066e63-05f0-41ea-bdbf-27c98b49e1ec`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            boardTitle,
            boardDescription
          })
        }
      );
      if (response.ok) {
        console.log("Created Successfully")
      }
    } catch {
      console.log("Failed To Create")
    }
  };

  console.log(boardDescription)
  console.log(boardTitle)

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
        <DialogContent className="font-IBM rounded-sm min-w-2xl">
          <DialogTitle className="text-xl">Edit Board Detail</DialogTitle>
          <DialogDescription className="flex flex-col gap-4 ">
            <div className="w-full px-4 md:px-6 py-4">
              <div className="flex flex-col md:flex-row gap-5 w-full items-start">
                <div className="bg-gray-100 w-full h-[13rem] md:w-[13rem] rounded-xl flex-shrink-0"></div>

                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col gap-2">
                    <input
                      onChange = {(e) => setBoardTitle(e.target.value)}
                      placeholder="Board Title"
                      className="p-3 border border-gray-300 text-gray-800 placeholder:text-gray-400 placeholder:text-base text-base font-medium rounded-md w-full"
                    />
                  </div>

                  <Textarea
                    className="p-3 border border-gray-300 text-gray-800 placeholder:text-gray-400 placeholder:text-base text-base font-medium rounded-md h-32 w-full"
                    placeholder="Board Description"
                    onChange = {(e) => setBoardDescription(e.target.value)}
                  />
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
