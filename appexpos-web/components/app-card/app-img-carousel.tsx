import Carousel from "./custom-carousel";

export const AppImgCarousel = () => {
  // 示例截图的URL，可以替换为实际的应用截图
  const appScreenshots = [
    "https://fakeimg.pl/400x700?text=Screenshot1",
    "https://fakeimg.pl/400x700?text=Screenshot2",
    "https://fakeimg.pl/400x700?text=Screenshot3",
    "https://fakeimg.pl/400x700?text=Screenshot4",
    "https://fakeimg.pl/400x700?text=Screenshot5",
  ];

  return <Carousel images={appScreenshots} />;
};
