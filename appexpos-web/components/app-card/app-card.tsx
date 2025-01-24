import clsx from "clsx";
import { AppImgCarousel } from "./app-img-carousel";
import { AppItem } from "./app-item";

interface AppCardProps {
  className?: string;
}
export const AppCard = (props: AppCardProps) => {
  const { className } = props;
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <AppImgCarousel />
      <AppItem />
    </div>
  );
};
