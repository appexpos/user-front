"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { SlidersHorizontal, LayoutList, LayoutGrid } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tabs = ["App", "页面", "UI 元素", "功能流"];

interface AnimatedTabsProps {
  className?: string;
}

export const AnimatedTabs = (props: AnimatedTabsProps) => {
  const { className } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const [isGridLayout, setIsGridLayout] = useState(true); // 默认网格布局

  const toggleLayout = () => {
    setIsGridLayout(!isGridLayout);
  };

  // 动态更新下划线样式
  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.children[
        activeTab
      ] as HTMLElement;
      if (activeTabElement) {
        setUnderlineStyle({
          width: activeTabElement.offsetWidth,
          left: activeTabElement.offsetLeft,
        });
      }
    }
  }, [activeTab]);

  return (
    <div
      className={clsx("relative w-full flex flex-col items-start", className)}
    >
      {/* Tabs */}
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <div className="platform-select">
            <Select defaultValue="iOS">
              <SelectTrigger className="w-[80px] border-none outline-none shadow-none focus:outline-none focus:ring-0 focus:border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="iOS">iOS</SelectItem>
                  <SelectItem value="android">安卓</SelectItem>
                  <SelectItem value="web">web</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div ref={tabsRef} className="flex items-center space-x-6 text-md">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={clsx(
                  "relative hover:opacity-70 transition whitespace-nowrap",
                  activeTab === index && "text-black",
                )}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
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
      </div>

      {/* 动态下划线 */}
      <div className="relative w-full mt-2">
        <div
          className="absolute h-[2px] bg-black transition-all duration-300"
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`,
          }}
        ></div>
      </div>
    </div>
  );
};
