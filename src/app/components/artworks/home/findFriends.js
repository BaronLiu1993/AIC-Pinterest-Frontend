import { Search } from "lucide-react";

export default function FindFriends() {
  return (
    <>
      <div className="h-[15rem] hover:scale-105 transition-transform duration-500 w-[15rem] bg-orange-300 rounded-xl font-mono italic font-bold">
        <div className="p-4 flex text-orange-900">
          <span className="text-2xl">Discover New Friends</span>
          <Search />
        </div>
      </div>
    </>
  );
}
