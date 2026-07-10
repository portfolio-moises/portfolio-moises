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

const rawPortfolio = portfolioItems as PortfolioItem[];

const sortKey = (item: PortfolioItem) => {
  let hash = 0;
  const value = `${item.category}-${item.title}-${item.src}`;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) % 1000003;
  }

  return hash;
};

export const portfolio = [...rawPortfolio].sort((left, right) => sortKey(left) - sortKey(right));

export const portfolioCategories = ["Todos", ...Array.from(new Set(rawPortfolio.map((item) => item.category)))];
