import portfolioItems from "./portfolio.generated.json";

export type PortfolioItem = {
  title: string;
  category: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: "portrait" | "landscape" | "square";
  original: string;
};

export const portfolio = portfolioItems as PortfolioItem[];

export const portfolioCategories = ["Todos", ...Array.from(new Set(portfolio.map((item) => item.category)))];
