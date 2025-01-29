import { AppCardList } from "@/components/app-card/app-card-list";
import { ParamsTab } from "@/components/params-tab";
import { ScrollableTabs } from "@/components/scroll-tabs";
import { EXPLORE_TABS } from "@/constants/params-tab";
import { Toolbar } from "../../_components/toolbar";
import { PrePramsTab } from "../../_components/platform-select";

const ExplorePage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <div className="h-screen">
      <h1 className="mt-10 text-4xl font-bold">探索</h1>
      <ParamsTab
        className="mt-10"
        tabsData={EXPLORE_TABS}
        page={"explore"}
        pre={<PrePramsTab />}
        toolbar={<Toolbar />}
        underlineInit={{
          width: 31,
          left: 68,
        }}
      />
      <ScrollableTabs className="mt-10" />
      <AppCardList className="mt-10" />
    </div>
  );
};

export default ExplorePage;
