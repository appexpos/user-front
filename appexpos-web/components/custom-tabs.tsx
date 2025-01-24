"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";

interface CustomTabsProps {
  className?: string;
  appId: string;
  tabValue: string;
}

type Tab = {
  label: string;
  value: string;
};

const tabs: Tab[] = [
  { label: "页面", value: "pages" },
  { label: "UI 元素", value: "ui-components" },
  { label: "场景流", value: "scene-flows" },
  { label: "数据", value: "data" },
];
export const CustomTabs = (props: CustomTabsProps) => {
  const { className, tabValue, appId } = props;
  const [activeTabValue, setActiveTabValue] = useState(tabValue);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleTabClick = (value: string) => {
    // TODO: 切换路由
    // setActiveTabValue(value);
    router.push(`/app-detail/${appId}/${value}`);
  };

  // 动态更新下划线样式
  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = Array.from(tabsRef.current.children).find(
        (child) => (child as HTMLElement).dataset.value === activeTabValue,
      ) as HTMLElement;

      if (activeTabElement) {
        setUnderlineStyle({
          width: activeTabElement.offsetWidth,
          left: activeTabElement.offsetLeft,
        });
      }
    }
  }, [activeTabValue]); // 确保更新时使用正确的activeTabValue

  return (
    <div className={clsx("flex items-center justify-start gap-10", className)}>
      <div className="relative flex flex-col items-start">
        <div className="w-full flex justify-between items-center">
          <div ref={tabsRef} className="flex items-center space-x-6 text-md">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                data-value={tab.value}
                className={clsx(
                  "relative text-black transition whitespace-nowrap font-bold",
                  // 如果是激活的 tab，文本颜色为黑色且完全不透明
                  activeTabValue === tab.value
                    ? "text-opacity-100"
                    : "text-opacity-50 hover:text-opacity-100", // 非激活时半透明，悬停时不透明
                )}
                onClick={() => handleTabClick(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* 动态下划线 */}
        <div className="relative w-full mt-2">
          <div
            className="absolute h-[2px] bg-black"
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
            }}
          ></div>
        </div>
      </div>
      <Separator orientation="vertical" className="h-[24px] w-[2px]" />
      <div className="flex-1 flex items-center justify-start gap-4">
        <Select defaultValue="2025-01">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>资源更新日期</SelectLabel>
              <SelectItem value="2025-01">2025-01</SelectItem>
              <SelectItem value="2024-01">2024-01</SelectItem>
              <SelectItem value="2023-01">2023-01</SelectItem>
              <SelectItem value="2022-01">2022-01</SelectItem>
              <SelectItem value="2021-01">2021-01</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select defaultValue="2025-01">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>资源更新日期</SelectLabel>
              <SelectItem value="2025-01">2025-01</SelectItem>
              <SelectItem value="2024-01">2024-01</SelectItem>
              <SelectItem value="2023-01">2023-01</SelectItem>
              <SelectItem value="2022-01">2022-01</SelectItem>
              <SelectItem value="2021-01">2021-01</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select defaultValue="2025-01">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>资源更新日期</SelectLabel>
              <SelectItem value="2025-01">2025-01</SelectItem>
              <SelectItem value="2024-01">2024-01</SelectItem>
              <SelectItem value="2023-01">2023-01</SelectItem>
              <SelectItem value="2022-01">2022-01</SelectItem>
              <SelectItem value="2021-01">2021-01</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
