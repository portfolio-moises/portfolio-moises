import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <section id="projetos" className="featured-projects section section--dark" aria-labelledby="featured-title">
      <div className="container">
        <SectionTitle
          eyebrow="Projetos em destaque"
          title="Projetos que transformam informação em comunicação."
          description="Uma grade editorial com trabalhos para segmentos diferentes, mantendo estratégia, clareza e acabamento profissional."
        />
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
