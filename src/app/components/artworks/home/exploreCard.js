import { Search } from "lucide-react";

export default function ExploreCard({ title, bgColor, fontClass }) {
  return (
    <div
      className={`h-[15rem] w-[15rem] ${bgColor} ${fontClass} italic font-bold rounded-xl transition-transform duration-500 hover:scale-105 z-50`}
    >
      <div className="p-4 flex items-center justify-between text-red-900">
        <span className="text-2xl">{title}</span>
        <Search className="h-5 w-5" />
      </div>
    </div>
  );
}