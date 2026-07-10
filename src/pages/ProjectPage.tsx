import { ArrowLeft, ArrowRight, Calendar, Layers, MessageCircle, UserRound } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import ProjectGallery from "../components/ProjectGallery";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import { getWhatsAppUrl, siteConfig } from "../config/site";
import { getNextProject, getProjectBySlug } from "../data/projects";
import SEO from "../utils/seo";
import NotFound from "./NotFound";

const ProjectPage = () => {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const nextProject = getNextProject(project.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    dateCreated: project.year,
    genre: project.category,
    description: project.description,
    image: project.cover,
  };

  return (
    <PageTransition>
      <SEO
        title={`${project.title} | Portfólio Moisés Henrique`}
        description={project.description}
        path={`/projetos/${project.slug}`}
        image={project.cover}
        structuredData={structuredData}
      />
      <article className="project-page">
        <section className="project-hero section grid-surface">
          <div className="container project-hero__grid">
            <div className="project-hero__copy">
              <Link className="back-link" to="/">
                <ArrowLeft size={18} aria-hidden="true" />
                Voltar ao início
              </Link>
              <p className="eyebrow">{project.category}</p>
              <h1>{project.title}</h1>
              <p className="lead">{project.description}</p>
              <div className="project-facts" aria-label="Informações do projeto">
                <span>
                  <UserRound size={18} aria-hidden="true" />
                  {project.client}
                </span>
                <span>
                  <Layers size={18} aria-hidden="true" />
                  {project.type}
                </span>
                <span>
                  <Calendar size={18} aria-hidden="true" />
                  {project.year}
                </span>
              </div>
            </div>
            <figure className="project-hero__cover">
              <img src={project.cover} alt={`Capa do projeto ${project.title}`} loading="eager" />
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="container project-detail-grid">
            <div className="project-services">
              <span className="detail-label">Serviços</span>
              <ul>
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="project-story">
              <div>
                <span className="detail-label">Contexto</span>
                <p>{project.description}</p>
              </div>
              <div>
                <span className="detail-label">Desafio</span>
                <p>{project.challenge}</p>
              </div>
              <div>
                <span className="detail-label">Solução</span>
                <p>{project.solution}</p>
              </div>
              <div>
                <span className="detail-label">Resultado</span>
                <p>{project.result}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section project-gallery-section">
          <div className="container">
            <SectionTitle
              eyebrow="Galeria e mockups"
              title="Espaços prontos para receber as peças reais do projeto."
              description="As imagens atuais são placeholders identificados. Substitua os arquivos em public/images/placeholders pelos materiais definitivos."
            />
            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        </section>

        <section className="section project-next">
          <div className="container project-next__inner">
            <div>
              <p className="eyebrow">Próximo projeto</p>
              <h2>{nextProject.title}</h2>
              <p>{nextProject.description}</p>
            </div>
            <div className="project-next__actions">
              <Link className="button button--dark" to={`/projetos/${nextProject.slug}`}>
                Ver próximo
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="button button--primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section project-contact">
          <div className="container project-contact__inner">
            <p>Quer uma comunicação visual com esse nível de organização?</p>
            <SocialLinks />
          </div>
        </section>
      </article>
    </PageTransition>
  );
};

export default ProjectPage;
