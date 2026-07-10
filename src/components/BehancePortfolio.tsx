import { ArrowUpRight, Grid3X3 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { portfolio, portfolioCategories } from "../data/portfolio";
import { publicAsset } from "../utils/assets";
import ProjectLightbox from "./ProjectLightbox";
import SectionTitle from "./SectionTitle";

const INITIAL_VISIBLE_ITEMS = 20;

const BehancePortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);

  const filteredItems = useMemo(
    () => (activeCategory === "Todos" ? portfolio : portfolio.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  const visibleItems = useMemo(() => filteredItems.slice(0, visibleCount), [filteredItems, visibleCount]);

  const hasMoreItems = visibleCount < filteredItems.length;

  const lightboxImages = useMemo(
    () =>
      visibleItems.map((item) => ({
        src: item.src,
        alt: item.alt,
        caption: item.title,
        title: item.title,
        description: `${item.category} • ${item.width}x${item.height}`,
      })),
    [visibleItems],
  );

  const showNext = useCallback(() => {
    setCurrentIndex((current) => (current === null ? 0 : (current + 1) % visibleItems.length));
  }, [visibleItems.length]);

  const showPrevious = useCallback(() => {
    setCurrentIndex((current) => (current === null ? 0 : (current - 1 + visibleItems.length) % visibleItems.length));
  }, [visibleItems.length]);

  return (
    <section className="behance-portfolio section" aria-labelledby="portfolio-wall-title">
      <div className="container">
        <div className="behance-portfolio__top">
          <SectionTitle
            eyebrow="Portfólio visual"
            title="Uma seleção de peças reais, organizada como uma galeria de Behance."
            description="Clique em qualquer projeto para expandir, navegar pelas imagens e ver a peça em destaque."
          />
          <div className="portfolio-counter" aria-label={`${visibleItems.length} de ${filteredItems.length} peças exibidas`}>
            <Grid3X3 size={20} aria-hidden="true" />
            <strong>{visibleItems.length}</strong>
            <span>de {filteredItems.length}</span>
          </div>
        </div>

        <div className="portfolio-filters" aria-label="Filtrar portfólio por categoria">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "portfolio-filter portfolio-filter--active" : "portfolio-filter"}
              aria-pressed={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(null);
                setVisibleCount(INITIAL_VISIBLE_ITEMS);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-wall">
          {visibleItems.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              className={`portfolio-piece portfolio-piece--${item.orientation}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Expandir projeto ${item.title}`}
            >
              <img src={publicAsset(item.src)} alt={item.alt} loading="lazy" />
              <span className="portfolio-piece__overlay">
                <span>
                  <small>{item.category}</small>
                  <strong>{item.title}</strong>
                </span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        {hasMoreItems ? (
          <div className="portfolio-more">
            <button
              className="button button--dark"
              type="button"
              onClick={() => setVisibleCount((current) => Math.min(current + INITIAL_VISIBLE_ITEMS, filteredItems.length))}
            >
              Ver mais projetos
            </button>
          </div>
        ) : null}
      </div>

      {currentIndex !== null ? (
        <ProjectLightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      ) : null}
    </section>
  );
};

export default BehancePortfolio;
