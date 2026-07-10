import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link className={`project-card project-card--${project.featuredSize}`} to={`/projetos/${project.slug}`} aria-label={`Ver projeto ${project.title}`}>
    <img src={project.cover} alt={`Capa do projeto ${project.title}`} loading="lazy" />
    <div className="project-card__shade" aria-hidden="true" />
    <div className="project-card__content">
      <div>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
      </div>
      <div className="project-card__meta">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
    </div>
    <span className="project-card__circle">Ver projeto</span>
    <ArrowUpRight className="project-card__arrow" size={26} aria-hidden="true" />
  </Link>
);

export default ProjectCard;
