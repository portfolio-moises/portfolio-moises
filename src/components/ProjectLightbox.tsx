import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProjectImage } from "../data/projects";
import { publicAsset } from "../utils/assets";

type LightboxItem = ProjectImage & {
  title?: string;
};

type ProjectLightboxProps = {
  images: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

const ProjectLightbox = ({ images, currentIndex, onClose, onNext, onPrevious }: ProjectLightboxProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const current = images[currentIndex];

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrevious]);

  if (!current) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Imagem ampliada: ${current.caption}`} onMouseDown={onClose}>
      <div className="lightbox__panel" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeButtonRef} className="lightbox__close" type="button" aria-label="Fechar lightbox" onClick={onClose}>
          <X size={22} aria-hidden="true" />
        </button>
        <button className="lightbox__nav lightbox__nav--previous" type="button" aria-label="Imagem anterior" onClick={onPrevious}>
          <ChevronLeft size={26} aria-hidden="true" />
        </button>
        <figure>
          <img src={publicAsset(current.src)} alt={current.alt} />
          <figcaption>
            <strong>{current.title || current.caption}</strong>
            <span>{current.description}</span>
          </figcaption>
        </figure>
        <button className="lightbox__nav lightbox__nav--next" type="button" aria-label="Próxima imagem" onClick={onNext}>
          <ChevronRight size={26} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ProjectLightbox;
