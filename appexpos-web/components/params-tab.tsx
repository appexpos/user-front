"use client";

import { useParams, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

export type Tab = {
  label: string;
  value: string;
};

interface ParamsTabProps {
  className?: string;
  tabsData: Tab[];
  pre?: ReactNode;
  cascade?: ReactNode;
  toolbar?: ReactNode;
  page: "explore" | "app-detail";
  underlineInit: {
    width: number;
    left: number;
  };
}

export const ParamsTab = (props: ParamsTabProps) => {
  const { page, className, cascade, toolbar, tabsData, pre, underlineInit } =
    props;
  const params = useParams();
  const router = useRouter();
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const platform = params?.platform;
  const resource = params?.resource;

  // 本地存储 key
  const storageKey = `underlineStyle-${page}`;

  // 读取本地存储的值
  const getStoredUnderlineStyle = () => {
    if (typeof window === "undefined") return underlineInit;
    const storedValue = localStorage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : underlineInit;
  };
  const [underlineStyle, setUnderlineStyle] = useState(getStoredUnderlineStyle);

  const handleTabClick = (v: string) => {
    router.push(`/${page}/${platform}/${v}`);
  };

  // 动态更新下划线样式
  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = Array.from(tabsRef.current.children).find(
        (child) => (child as HTMLElement).dataset.value === resource,
      ) as HTMLElement;

      if (activeTabElement) {
        const newStyle = {
          width: activeTabElement.offsetWidth,
          left: activeTabElement.offsetLeft,
        };
        setUnderlineStyle(newStyle);
        localStorage.setItem(storageKey, JSON.stringify(newStyle));
      }
    }
  }, [resource, storageKey]); // 确保更新时使用正确的activeTabValue

  return (
    <div className={clsx("flex items-center justify-start gap-10", className)}>
      <div className="relative flex flex-col items-start">
        <div className="w-full flex justify-between items-center">
          {pre}
          <div ref={tabsRef} className="flex items-center space-x-6 text-md">
            {tabsData.map((tab, index) => (
              <button
                key={`${tab.value}-${index}`}
                data-value={tab.value}
                className={clsx(
                  "relative text-black transition whitespace-nowrap font-bold",
                  // 如果是激活的 tab，文本颜色为黑色且完全不透明
                  resource === tab.value
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
            className="absolute h-[2px] bg-black transition-all duration-300"
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
            }}
          ></div>
        </div>
      </div>
      {cascade}
      {toolbar}
    </div>
  );
};
