import clsx from "clsx";
import Image from "next/image";
import { Star, Ellipsis, MessageCircle } from "lucide-react";

interface AppItemCardProps {
  className?: string;
}

export const AppItemCard = (props: AppItemCardProps) => {
  const { className } = props;
  return (
    <div className={clsx("bg-white rounded-xl space-y-4", className)}>
      <div className="flex items-center gap-4">
        <div className="rounded-xl overflow-hidden h-full">
          <Image
            alt="xxx logo"
            height={120}
            width={120}
            src="https://fakeimg.pl/120x120"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-start w-full">
            <h1 className="text-4xl font-semibold whitespace-nowrap">
              Soul-年轻人的社交元宇宙
            </h1>
            <div className="flex items-center gap-4">
              <MessageCircle />
              <Star />
              <Ellipsis />
            </div>
          </div>
          <div className="gap-1 flex flex-col items-start">
            <div className="text-md text-gray-500">灵魂有趣 自在相遇</div>
            <div className="text-md text-gray-400 mt-1">
              开发者: Shanghai Soul Gate Technology Limited Corporation
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">分类</span>
          <span className="font-semibold text-gray-700">社交</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">价格</span>
          <span className="font-semibold text-gray-700">免费</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">内购</span>
          <span className="font-semibold text-gray-700">10项</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">评分</span>
          <span className="font-semibold text-gray-700">4.8</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">社交排名</span>
          <span className="font-semibold text-gray-700">第6名</span>
        </div>
      </div> */}
    </div>
  );
};
