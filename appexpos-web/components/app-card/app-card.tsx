import clsx from "clsx";
import { AppImgCarousel } from "./app-img-carousel";
import { AppItem } from "./app-item";
import Link from "next/link";

interface AppCardProps {
  className?: string;
}
export const AppCard = (props: AppCardProps) => {
  const { className } = props;
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <AppImgCarousel />
      <Link href="/app-detail/appId_xxxx/scene-flows">
        <AppItem />
      </Link>
    </div>
  );
};
