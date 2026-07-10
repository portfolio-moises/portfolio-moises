import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects, segments } from "../data/projects";
import ProjectLightbox from "./ProjectLightbox";
import SectionTitle from "./SectionTitle";

const SegmentAccordion = () => {
  const [openId, setOpenId] = useState(segments[0].id);
  const [hoveredPreview, setHoveredPreview] = useState(segments[0].preview);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openSegment = segments.find((segment) => segment.id === openId) || segments[0];
  const gallery = useMemo(
    () =>
      openSegment.projectSlugs.flatMap((slug) => {
        const project = projects.find((item) => item.slug === slug);
        if (!project) return [];
        return project.gallery.map((image) => ({ ...image, title: project.title }));
      }),
    [openSegment],
  );

  const firstProjectSlug = openSegment.projectSlugs[0];

  return (
    <section id="segmentos" className="segments section" aria-labelledby="segments-title">
      <div className="container segments__header">
        <SectionTitle
          eyebrow="Segmentos"
          title="Escolha um segmento. Veja como o design se adapta."
          description="Cada área pede ritmo, linguagem e organização próprios. Os accordions abaixo mostram como o mesmo olhar estratégico muda conforme o contexto."
        />
        <div className="segments__preview" aria-hidden="true">
          <img src={hoveredPreview} alt="" loading="lazy" />
        </div>
      </div>

      <div className="container accordion-list">
        {segments.map((segment) => {
          const isOpen = openId === segment.id;
          const segmentProjects = segment.projectSlugs
            .map((slug) => projects.find((project) => project.slug === slug))
            .filter(Boolean);

          return (
            <article key={segment.id} className={`segment-item ${isOpen ? "segment-item--open" : ""}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`segment-panel-${segment.id}`}
                onClick={() => setOpenId(isOpen ? "" : segment.id)}
                onMouseEnter={() => setHoveredPreview(segment.preview)}
                className="segment-item__button"
              >
                <span className="segment-item__number">{segment.number}</span>
                <span className="segment-item__name">{segment.name}</span>
                <span className="segment-item__count">{segmentProjects.length} projeto{segmentProjects.length === 1 ? "" : "s"}</span>
                <span className="segment-item__icon" aria-hidden="true">
                  <Plus size={24} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`segment-panel-${segment.id}`}
                    className="segment-item__panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div className="segment-item__content">
                      <p>{segment.description}</p>
                      <ul className="segment-services" aria-label={`Serviços para ${segment.name}`}>
                        {segment.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                      <div className="masonry-grid segment-gallery">
                        {gallery.map((image, index) => (
                          <button key={`${image.src}-${index}`} className="gallery-item" type="button" onClick={() => setLightboxIndex(index)}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <span>{image.caption}</span>
                          </button>
                        ))}
                      </div>
                      {firstProjectSlug ? (
                        <Link className="button button--dark" to={`/projetos/${firstProjectSlug}`}>
                          Ver todos os projetos
                        </Link>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>

      {lightboxIndex !== null ? (
        <ProjectLightbox
          images={gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((current) => (current === null ? 0 : (current + 1) % gallery.length))}
          onPrevious={() => setLightboxIndex((current) => (current === null ? 0 : (current - 1 + gallery.length) % gallery.length))}
        />
      ) : null}
    </section>
  );
};

export default SegmentAccordion;
