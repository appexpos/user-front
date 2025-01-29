"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { Input } from "../ui/input";
import { SearchTabView } from "./search-tab-view";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* 使用 Portal 把 Search 组件渲染到页面的其他位置 */}
      {createPortal(
        <SearchCommand open={open} onClose={() => setOpen(false)} />,
        document.body,
      )}
      <Search
        onClick={() => setOpen(!open)}
        className="cursor-pointer hover:opacity-70"
      />
    </div>
  );
};

interface SearchCommandProps {
  className?: string;
  open: boolean;
  onClose: () => void;
  placeholder?: string;
}
const SearchCommand = (props: SearchCommandProps) => {
  const { open, onClose } = props;
  const [searchInput, setSearchInput] = useState<string>("");

  const handleClose = () => {
    setSearchInput("");
    onClose();
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth; // 获取滚动条宽度

    if (open) {
      document.body.style.overflow = "hidden"; // 禁用滚动
      document.body.style.paddingRight = `${scrollbarWidth}px`; // 添加右侧内边距以补偿滚动条
    } else {
      document.body.style.overflow = ""; // 恢复滚动
      document.body.style.paddingRight = ""; // 移除内边距
    }

    // 清理副作用
    return () => {
      document.body.style.overflow = ""; // 确保组件卸载时恢复滚动
      document.body.style.paddingRight = ""; // 确保恢复内边距
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 top-[4rem] z-50 h-[calc(100vh-4rem)] w-full",
      )}
    >
      <div
        className="absolute bg-background/80 backdrop-blur-xl w-full h-full"
        onClick={handleClose}
      />
      <div
        style={{
          transform: `translateX(calc(-50% - ${(window.innerWidth - document.documentElement.clientWidth) / 2}px))`,
        }}
        className="absolute top-10 px-[1rem] sm:w-[640px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] left-1/2"
      >
        <div>
          <div>
            <Input
              type="text"
              placeholder="搜搜 Apps,UI组件..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
          <SearchTabView className="mt-10" />
        </div>
      </div>
    </div>
  );
};

// const tabsData = [
//   {
//     value: "data-trending",
//     label: "数据趋势",
//   },
//   {
//     value: "app-categories",
//     label: "App 分类",
//   },
//   {
//     value: "app-screens",
//     label: "App 页面",
//   },
//   {
//     value: "ui-elements",
//     label: "UI 元素",
//   },
//   {
//     value: "app-flows",
//     label: "功能流",
//   },
// ];

// const tabsContentMap: Record<
//   string,
//   {
//     groups: {
//       heading: {
//         value: string;
//         label: string;
//       };
//       items: {
//         value: string;
//         label: string;
//       }[];
//     }[];
//   }
// > = {
//   "data-trending": {
//     groups: [
//       {
//         heading: {
//           value: "hot-apps",
//           label: "热门 App",
//         },
//         items: [
//           {
//             value: "douyin1",
//             label: "抖音",
//           },
//           {
//             value: "douyin2",
//             label: "抖音",
//           },
//           {
//             value: "douyin3",
//             label: "抖音",
//           },
//         ],
//       },
//       {
//         heading: {
//           value: "app-screens",
//           label: "App 页面",
//         },
//         items: [
//           {
//             value: "signup",
//             label: "注册",
//           },
//           {
//             value: "login",
//             label: "登录",
//           },
//           {
//             value: "home",
//             label: "首页",
//           },
//           {
//             value: "checkout",
//             label: "结算",
//           },
//           {
//             value: "dashboard",
//             label: "数据",
//           },
//           {
//             value: "search",
//             label: "搜索",
//           },
//           {
//             value: "filter-sort",
//             label: "过滤和排序",
//           },
//         ],
//       },
//       {
//         heading: {
//           value: "ui-elements",
//           label: "UI 元素",
//         },
//         items: [
//           {
//             value: "card",
//             label: "卡片",
//           },
//           {
//             value: "toast",
//             label: "Toast",
//           },
//           {
//             value: "stacked-list",
//             label: "堆叠列表",
//           },
//           {
//             value: "banner",
//             label: "横幅",
//           },
//           {
//             value: "dialog",
//             label: "对话框",
//           },
//           {
//             value: "table",
//             label: "表格",
//           },
//           {
//             value: "button",
//             label: "按钮",
//           },
//           {
//             value: "progress indicator",
//             label: "进度条",
//           },
//           {
//             value: "tab-bar",
//             label: "标签栏",
//           },
//         ],
//       },
//       {
//         heading: {
//           value: "flows",
//           label: "功能流",
//         },
//         items: [
//           {
//             value: "onboarding",
//             label: "引导页",
//           },
//           {
//             value: "filtering-sorting",
//             label: "过滤&排序",
//           },
//           {
//             value: "editing-profile",
//             label: "编辑资料",
//           },
//           {
//             value: "logging-in",
//             label: "登录",
//           },
//         ],
//       },
//       {
//         heading: {
//           value: "text-in-screenshot",
//           label: "文搜图(OCR)",
//         },
//         items: [
//           {
//             value: "forgot-password",
//             label: "“忘记密码”",
//           },
//           {
//             value: "upgrade",
//             label: "“会员”",
//           },
//           {
//             value: "bluetooth",
//             label: "“蓝牙”",
//           },
//           {
//             value: "payment",
//             label: "“支付”",
//           },
//           {
//             value: "confirmed",
//             label: "“确认订单”",
//           },
//         ],
//       },
//     ],
//   },
//   "app-categories": {
//     groups: [
//       {
//         heading: {
//           value: "categories",
//           label: "分类",
//         },
//         items: [
//           {
//             value: "c1",
//             label: "分类1",
//           },
//           {
//             value: "c2",
//             label: "分类2",
//           },
//           {
//             value: "c3",
//             label: "分类3",
//           },
//           {
//             value: "c4",
//             label: "分类4",
//           },
//         ],
//       },
//     ],
//   },
//   "app-screens": {
//     groups: [
//       {
//         heading: {
//           value: "new-user-experience",
//           label: "新用户体验",
//         },
//         items: [
//           {
//             value: "nue1",
//             label: "账号创建",
//           },
//           {
//             value: "nue2",
//             label: "认证",
//           },
//           {
//             value: "nue3",
//             label: "欢迎",
//           },
//         ],
//       },
//     ],
//   },
//   "ui-elements": {
//     groups: [
//       {
//         heading: {
//           value: "control",
//           label: "控制",
//         },
//         items: [
//           {
//             value: "con1",
//             label: "按钮",
//           },
//           {
//             value: "con2",
//             label: "日期选择",
//           },
//           {
//             value: "con3",
//             label: "标题",
//           },
//         ],
//       },
//     ],
//   },
//   "app-flows": {
//     groups: [
//       {
//         heading: {
//           value: "account-management",
//           label: "账号管理",
//         },
//         items: [
//           {
//             value: "am1",
//             label: "编辑个人信息",
//           },
//           {
//             value: "am2",
//             label: "登录",
//           },
//           {
//             value: "am3",
//             label: "退出登录",
//           },
//         ],
//       },
//     ],
//   },
// };

{
  /* <div className="relative md:min-w-[600px]">
        <Command
          className={clsx(
            "rounded-lg border shadow-md md:min-w-[450px]",
            className,
          )}
        >
          <CommandInput placeholder={placeholder} />
          <Tabs
            defaultValue="data-trending"
            orientation="vertical"
            className="flex"
          >
            <TabsList className="flex flex-col h-full w-[100px]">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="w-full hover:bg-white"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="flex-1">
                <CommandList className="min-h-[400px]">
                  <CommandEmpty>No results found.</CommandEmpty>
                  {tabsContentMap?.[tab.value]?.groups.map((g) => (
                    <CommandGroup
                      heading={g.heading.label}
                      key={g.heading.value}
                    >
                      {g.items.map((item) => (
                        <CommandItem key={item.value}>
                          <Calendar />
                          <span>{item.label}</span>
                          <CommandShortcut>
                            {Math.floor(Math.random() * 10) * 10}
                          </CommandShortcut>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))}
                </CommandList>
              </TabsContent>
            ))}
          </Tabs>
        </Command>
      </div> */
}
