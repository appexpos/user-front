import clsx from "clsx";

interface SearchTabViewProps {
  className?: string;
}
export const SearchTabView = (props: SearchTabViewProps) => {
  const { className } = props;

  return (
    <div
      className={clsx(
        "w-full h-full flex justify-start items-start gap-4",
        className,
      )}
    >
      <div className="w-[300px] h-[600px] flex flex-col text-black">
        <div>推荐</div>
        <div>App</div>
        <div>页面</div>
        <div>UI元素</div>
        <div>功能流</div>
        <div>应用商店数据</div>
      </div>
      <div className="flex-1 bg-black h-[600px]"></div>
    </div>
  );
};
