import { CustomTabs } from "@/components/custom-tabs";
import { AppItemCard } from "../../_components/app-item-card";
import { FollowTree } from "../../_components/flow-tree";

export default async function Page({
  params,
}: {
  params: Promise<{ appId: string; resource: string }>;
}) {
  const { appId, resource } = await params;

  return (
    <div className="container">
      <AppItemCard className="mt-10" />
      <CustomTabs appId={appId} tabValue={resource} className="mt-10" />
      <div className="flex mt-10">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-scroll scrollbar-hide">
          <FollowTree />
        </div>
        <div className="flex-1 p-4">
          <p>这里是主内容，页面可以滚动。</p>
          <div className="h-[20000px] bg-gray-100">滚动以查看效果</div>
        </div>
      </div>
    </div>
  );
}
