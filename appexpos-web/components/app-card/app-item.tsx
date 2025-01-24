import clsx from "clsx";
import Image from "next/image";

interface AppItemProps {
  className?: string;
  title?: string;
  desc?: string;
  developer?: string;
}

export const AppItem = (props: AppItemProps) => {
  const { className } = props;
  return (
    <div className={clsx("flex justify-start items-center gap-4", className)}>
      <Image
        alt={`xxx logo`}
        height={40}
        width={40}
        src="https://fakeimg.pl/50x50/?text=Fakelogo"
      />
      <div className="flex flex-col">
        <p className="text-md font-medium">soda马特</p>
        <p className="text-sm text-gray-500">APP 简介 xxxxxx</p>
      </div>
    </div>
  );
};
