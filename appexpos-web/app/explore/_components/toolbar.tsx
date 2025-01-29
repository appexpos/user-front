"use client";

import { LayoutGrid, LayoutList, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export const Toolbar = () => {
  const [isGridLayout, setIsGridLayout] = useState(true); // 默认网格布局

  const toggleLayout = () => {
    setIsGridLayout(!isGridLayout);
  };
  return (
    <div className="flex-1 flex justify-end items-center gap-2">
      <button className="p-2 hover:bg-gray-200 rounded-full transition flex items-center justify-center gap-2">
        <SlidersHorizontal className="cursor-pointer" />
        <span className="whitespace-nowrap">筛选</span>
      </button>
      <button
        onClick={toggleLayout}
        className="p-2 hover:bg-gray-200 rounded-full transition"
        aria-label={
          isGridLayout ? "Switch to list layout" : "Switch to grid layout"
        }
      >
        {isGridLayout ? (
          <LayoutGrid className="h-6 w-6 text-gray-600" />
        ) : (
          <LayoutList className="h-6 w-6 text-gray-600" />
        )}
      </button>
    </div>
  );
};
