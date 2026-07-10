import { useCallback, useState } from "react";
import type { ProjectImage } from "../data/projects";
import ProjectLightbox from "./ProjectLightbox";

type ProjectGalleryProps = {
  images: ProjectImage[];
  title: string;
};

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const showNext = useCallback(() => {
    setCurrentIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  }, [images.length]);

  const showPrevious = useCallback(() => {
    setCurrentIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
  }, [images.length]);

  return (
    <>
      <div className="masonry-grid">
        {images.map((image, index) => (
          <button key={`${image.src}-${image.caption}`} className="gallery-item" type="button" onClick={() => setCurrentIndex(index)}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>{image.caption}</span>
          </button>
        ))}
      </div>
      {currentIndex !== null ? (
        <ProjectLightbox
          images={images.map((image) => ({ ...image, title }))}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      ) : null}
    </>
  );
};

export default ProjectGallery;
