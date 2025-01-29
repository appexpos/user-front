import { AppItemCard } from "../../_components/app-item-card";
import { FollowTree } from "../../_components/flow-tree";
import { ParamsTab } from "@/components/params-tab";
import { APP_DETAIL_TABS } from "@/constants/params-tab";
import { ParamsTabCascade } from "../../_components/params-tab-cascade";

export default async function AppDetailPage() {
  return (
    <div>
      <AppItemCard className="mt-10" />
      <ParamsTab
        className="mt-10"
        tabsData={APP_DETAIL_TABS}
        page="app-detail"
        underlineInit={{
          width: 32,
          left: 0,
        }}
        cascade={<ParamsTabCascade />}
      />
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
