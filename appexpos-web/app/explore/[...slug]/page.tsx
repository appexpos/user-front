// slug[0] -> platform: ios/android/web
// slug[1] -> resource: apps/screens/ui-elements/flows

import { AppCardList } from "@/components/app-card/app-card-list";
import { ScrollableTabs } from "@/components/scroll-tabs";
import { AnimatedTabs } from "@/components/tab-bar/animated-tabs";

const ListPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <div className="h-screen container">
      <h1 className="mt-10 text-4xl font-bold">探索</h1>
      <AnimatedTabs className="mt-10" />
      <ScrollableTabs className="mt-10" />
      <AppCardList className="mt-10" />
      {/* <FollowTree /> */}
    </div>
  );
};

export default ListPage;
