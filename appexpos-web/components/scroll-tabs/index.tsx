"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import "./style.css";

interface ScrollableTabsProps {
  className?: string;
}

export const ScrollableTabs = (props: ScrollableTabsProps) => {
  const { className } = props;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtLeft, setIsAtLeft] = useState(true); // 用于判断是否在最左侧
  const [isAtRight, setIsAtRight] = useState(false); // 用于判断是否在最右侧
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // 用于存储选中的标签索引

  // 检查当前滚动状态
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } =
        scrollContainerRef.current;
      setIsAtLeft(scrollLeft === 0); // 如果 scrollLeft 为 0，表示在最左侧
      setIsAtRight(scrollLeft + offsetWidth === scrollWidth); // 如果 scrollLeft + offsetWidth 等于 scrollWidth，表示在最右侧
    }
  };

  // 左右滚动功能
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      // 获取滚动容器的宽度
      const scrollAmount = scrollContainerRef.current.offsetWidth;

      // 根据滚动方向滚动
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // 滚动后检查滚动状态
      checkScrollPosition();
    }
  };

  // 处理标签点击事件，设置选中的标签
  const handleTabClick = (index: number) => {
    setSelectedIndex(index);
  };

  // 在组件加载后检查初始滚动状态
  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <div className={clsx("relative flex items-center space-x-4", className)}>
      {/* 左侧按钮 */}
      <ChevronLeft
        className={clsx(
          "hover:opacity-70 cursor-pointer",
          // isAtLeft && "opacity-0 pointer-events-none", // 如果在最左侧，隐藏左侧按钮
        )}
        onClick={() => scroll("left")}
      />

      {/* 滚动区域 */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 w-full items-center"
        style={{
          scrollBehavior: "smooth", // 平滑滚动
        }}
        onScroll={checkScrollPosition} // 监听滚动事件以更新滚动状态
      >
        {[
          "1Health & Fitness",
          "2Food & Drink",
          "3Education",
          "4Shopping",
          "5Artificial Intelligence",
          "6Travel & Transportation",
          "7Lifestyle",
          "8Entertainment",
          "9Communication",
          "10Health & Fitness",
          "11Food & Drink",
          "12Education",
          "13Shopping",
          "14Artificial Intelligence",
          "15Travel & Transportation",
          "16Lifestyle",
          "17Entertainment",
          "18Communication",
        ].map((item, index) => (
          <div
            key={index}
            className={clsx(
              "px-4 py-2 rounded-lg border shadow-sm whitespace-nowrap cursor-pointer hover:bg-gray-100",
              selectedIndex === index && "bg-black text-white hover:bg-black",
            )}
            onClick={() => handleTabClick(index)} // 点击标签时更新选中状态
          >
            {item}
          </div>
        ))}
      </div>

      {/* 右侧按钮 */}
      <ChevronRight
        className={clsx(
          "hover:opacity-70 cursor-pointer",
          // isAtRight && "opacity-0 pointer-events-none", // 如果在最右侧，隐藏右侧按钮
        )}
        onClick={() => scroll("right")}
      />
    </div>
  );
};
