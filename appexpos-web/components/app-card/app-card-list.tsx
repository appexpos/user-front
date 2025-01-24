import clsx from "clsx";
import { AppCard } from "./app-card";

interface AppCardListProps {
  className?: string;
}

export const AppCardList = (props: AppCardListProps) => {
  const { className } = props;

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
        className,
      )}
    >
      {[...new Array(10)].fill(0).map((app, index) => (
        <AppCard key={index} />
      ))}
    </div>
  );
};
